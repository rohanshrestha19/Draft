
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isBestseller?: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  category: string;
  progress?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
