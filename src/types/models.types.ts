// Model-related TypeScript types

// User Model
export interface UserDocument {
  _id: string;
  username: string;
  mailadress: string;
  password: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Message Model
export interface MessageDocument {
  _id: string;
  message: string;
  username: string;
  time: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// Meeting Model
export interface MeetingDocument {
  _id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  location: string;
  agenda: string;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Record Model
export interface RecordDocument {
  _id: string;
  username: string;
  mailadress: string;
  date: Date;
  reason: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Boat Model
export interface BoatDocument {
  _id: string;
  Adresse: string;
  Postnummer: number;
  Poststed: string;
  Båtplass: number;
  startUse: Date;
  endUse: Date;
  mailadress: string;
  createdAt?: Date;
  updatedAt?: Date;
}

