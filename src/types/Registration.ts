export interface RegistrationFormData {
    email: string;
    password: string;
    confirmPassword ?: string;
    firstName: string;
    lastName: string;
    rsvp: string;
  }
  
  export interface ApiResponse {
    success: boolean;
    message: string;
  }