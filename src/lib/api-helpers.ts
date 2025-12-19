import { NextRequest, NextResponse } from 'next/server';

export async function parseRequestBody(request: NextRequest): Promise<any> {
  const contentType = request.headers.get('content-type') || '';
  
  if (contentType.includes('application/json')) {
    return await request.json();
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData();
    const body: any = {};
    for (const [key, value] of formData.entries()) {
      // Try to parse as number if it looks like a number
      const numValue = Number(value);
      body[key] = isNaN(numValue) ? value : numValue;
    }
    return body;
  }
  
  // Try JSON as fallback
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export interface ApiError {
  error: string;
  details?: string;
}

export function createErrorResponse(
  error: string,
  status: number,
  details?: string
): NextResponse<ApiError> {
  return NextResponse.json(
    {
      error,
      ...(process.env.NODE_ENV === 'development' && details ? { details } : {}),
    },
    { status }
  );
}

export function handleApiError(err: any): NextResponse<ApiError> {
  console.error('API Error:', err);

  // Handle validation errors
  if (err.name === 'ValidationError') {
    const details = Object.values(err.errors)
      .map((e: any) => e.message)
      .join(', ');
    return createErrorResponse('Validation error', 400, details);
  }

  // Handle duplicate key error (MongoDB)
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return createErrorResponse(
      `${field === 'username' ? 'Username' : field === 'email' ? 'Email' : 'Field'} already exists`,
      409
    );
  }

  // Handle authentication errors
  if (err.status === 401 || err.message?.toLowerCase().includes('unauthorized')) {
    return createErrorResponse('Unauthorized', 401);
  }

  // Handle not found errors
  if (err.status === 404 || err.message?.toLowerCase().includes('not found')) {
    return createErrorResponse('Resource not found', 404);
  }

  // Default to 500 server error
  return createErrorResponse(
    'Internal server error',
    500,
    process.env.NODE_ENV === 'development' ? err.message : undefined
  );
}

