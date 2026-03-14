interface Course {
  id: number;
  title: string;
}

interface UserData {
  id: number;
  name: string;
  role: string;
  email: string;
  isActive: boolean;
  courses: Course[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: UserData;
}