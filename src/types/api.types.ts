// API Request/Response Types

export interface ApiError {
  error: string;
  details?: string;
}

export interface ApiSuccessResponse<T = any> {
  message?: string;
  data?: T;
  [key: string]: any;
}

// User API Types
export interface CreateUserRequest {
  username: string;
  mailadress: string;
  password: string;
}

export interface CreateUserResponse {
  message: string;
  username: string;
  exists: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  isAdmin: boolean;
}

// Meeting API Types
export interface CreateMeetingRequest {
  title: string;
  startTime: string | Date;
  endTime: string | Date;
  location: string;
  agenda: string;
  isCompleted?: boolean;
}

export interface UpdateMeetingRequest {
  isCompleted: boolean;
}

// Message API Types
export interface CreateMessageRequest {
  username: string;
  message: string;
  time: string | Date;
}

// Record API Types
export interface CreateRecordRequest {
  username: string;
  mailadress: string;
  date: string | Date;
  reason: string;
}

// Boat API Types
export interface CreateBoatRequest {
  Adresse: string;
  Postnummer: number | string;
  Poststed: string;
  Båtplass: number;
  startUse: string | Date;
  endUse: string | Date;
  mailadress: string;
}
