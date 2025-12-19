import { NextRequest, NextResponse } from 'next/server';

export async function parseRequestBody(request: NextRequest): Promise<Record<string, unknown>> {
  const contentType = request.headers.get('content-type') || '';
  
  if (contentType.includes('application/json')) {
    return await request.json() as Record<string, unknown>;
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData();
    const body: Record<string, unknown> = {};
    for (const [key, value] of formData.entries()) {
      // Try to parse as number if it looks like a number
      const numValue = Number(value);
      body[key] = isNaN(numValue) ? value : numValue;
    }
    return body;
  }
  
  // Try JSON as fallback
  try {
    return await request.json() as Record<string, unknown>;
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

export function handleApiError(err: unknown): NextResponse<ApiError> {
  console.error('API Error:', err);

  // Handle validation errors
  if (err && typeof err === 'object' && 'name' in err && err.name === 'ValidationError' && 'errors' in err) {
    const validationError = err as { errors: Record<string, { message: string }> };
    const details = Object.values(validationError.errors)
      .map((e) => e.message)
      .join(', ');
    return createErrorResponse('Validation error', 400, details);
  }

  // Handle duplicate key error (MongoDB)
  if (err && typeof err === 'object' && 'code' in err && err.code === 11000 && 'keyPattern' in err) {
    const mongoError = err as { keyPattern: Record<string, unknown> };
    const field = Object.keys(mongoError.keyPattern)[0];
    return createErrorResponse(
      `${field === 'username' ? 'Username' : field === 'email' ? 'Email' : 'Field'} already exists`,
      409
    );
  }

  // Handle authentication errors
  const errorMessage = err && typeof err === 'object' && 'message' in err && typeof err.message === 'string' 
    ? err.message.toLowerCase() 
    : '';
  const errorStatus = err && typeof err === 'object' && 'status' in err && typeof err.status === 'number'
    ? err.status
    : undefined;

  if (errorStatus === 401 || errorMessage.includes('unauthorized')) {
    return createErrorResponse('Unauthorized', 401);
  }

  // Handle not found errors
  if (errorStatus === 404 || errorMessage.includes('not found')) {
    return createErrorResponse('Resource not found', 404);
  }

  // Default to 500 server error
  return createErrorResponse(
    'Internal server error',
    500,
    process.env.NODE_ENV === 'development' && err && typeof err === 'object' && 'message' in err && typeof err.message === 'string'
      ? err.message
      : undefined
  );
}

