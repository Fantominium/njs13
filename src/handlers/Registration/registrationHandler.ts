import { RegistrationFormData, ApiResponse } from "@/types/Registration";

export const registerUser = async (
    formData: RegistrationFormData
  ): Promise<ApiResponse> => {
    try {
      const response = await fetch('http://localhost:8080/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'Registration failed!',
        };
      }
  
      return {
        success: true,
        message: data.message || 'Registration successful!',
      };
    } catch (error) {
      console.error('Error during registration:', error);
      return {
        success: false,
        message: 'An unexpected error occurred.',
      };
    }
  };