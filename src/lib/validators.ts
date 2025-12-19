// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string | undefined) {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required' };
  }
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  return { valid: true };
}

// Password validation
export function validatePassword(password: string | undefined) {
  if (!password || typeof password !== 'string') {
    return { valid: false, error: 'Password is required' };
  }
  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters long' };
  }
  return { valid: true };
}

// Username validation
export function validateUsername(username: string | undefined) {
  if (!username || typeof username !== 'string') {
    return { valid: false, error: 'Username is required' };
  }
  if (username.length < 3) {
    return { valid: false, error: 'Username must be at least 3 characters long' };
  }
  if (username.length > 30) {
    return { valid: false, error: 'Username must be less than 30 characters' };
  }
  return { valid: true };
}

// Date validation
export function validateDateRange(startDate: string | undefined, endDate: string | undefined) {
  if (!startDate || !endDate) {
    return { valid: false, error: 'Start date and end date are required' };
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const now = new Date();
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { valid: false, error: 'Invalid date format' };
  }
  
  if (start >= end) {
    return { valid: false, error: 'Start date must be before end date' };
  }
  
  if (start < now) {
    return { valid: false, error: 'Start date cannot be in the past' };
  }
  
  return { valid: true };
}

// Postnummer validation (Norwegian postal code - 4 digits)
export function validatePostnummer(postnummer: number | string | undefined | null) {
  if (postnummer === undefined || postnummer === null) {
    return { valid: false, error: 'Postnummer is required' };
  }
  const num = typeof postnummer === 'string' ? parseInt(postnummer) : postnummer;
  if (isNaN(num) || num < 0 || num > 9999) {
    return { valid: false, error: 'Postnummer must be a valid 4-digit number' };
  }
  return { valid: true };
}

