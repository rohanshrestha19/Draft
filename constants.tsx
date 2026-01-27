
import { Book, Course, Category, Testimonial } from './types';

export const BOOKS: Book[] = [
  { id: '1', title: 'The Modern JavaScript', author: 'Sarah Drasner', price: 45.00, image: 'https://picsum.photos/seed/js/400/500', category: 'JavaScript', rating: 4.8, isBestseller: true },
  { id: '2', title: 'Python for AI', author: 'James Clear', price: 39.99, image: 'https://picsum.photos/seed/python/400/500', category: 'Python', rating: 4.9 },
  { id: '3', title: 'Rust Masterclass', author: 'Tom Preston', price: 55.00, image: 'https://picsum.photos/seed/rust/400/500', category: 'Rust', rating: 4.7, isBestseller: true },
  { id: '4', title: 'React Architecture', author: 'Dan Abramov', price: 49.99, image: 'https://picsum.photos/seed/react/400/500', category: 'Frontend', rating: 5.0 },
  { id: '5', title: 'Database Design 101', author: 'Elena Joy', price: 29.99, image: 'https://picsum.photos/seed/db/400/500', category: 'Backend', rating: 4.5 },
  { id: '6', title: 'Go Microservices', author: 'Robert Martin', price: 52.00, image: 'https://picsum.photos/seed/go/400/500', category: 'Go', rating: 4.6 },
];

export const COURSES: Course[] = [
  { id: '1', title: 'Full-Stack React & Node', instructor: 'Angela Yu', duration: '24h 15m', level: 'Beginner', thumbnail: 'https://picsum.photos/seed/fullstack/600/400', category: 'Web Development', progress: 45 },
  { id: '2', title: 'Advanced CSS Animation', instructor: 'Cassie Evans', duration: '8h 45m', level: 'Intermediate', thumbnail: 'https://picsum.photos/seed/css/600/400', category: 'Design' },
  { id: '3', title: 'Machine Learning A-Z', instructor: 'Kirill Eremenko', duration: '40h 30m', level: 'Advanced', thumbnail: 'https://picsum.photos/seed/ml/600/400', category: 'AI' },
  { id: '4', title: 'SwiftUI Foundations', instructor: 'Paul Hudson', duration: '12h 10m', level: 'Beginner', thumbnail: 'https://picsum.photos/seed/ios/600/400', category: 'Mobile' },
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Web Development', icon: '🌐', color: 'from-blue-500 to-cyan-400', description: 'Master HTML, CSS, React and more.' },
  { id: '2', name: 'Data Science', icon: '📊', color: 'from-purple-500 to-pink-400', description: 'Analyze data and build predictions.' },
  { id: '3', name: 'Cybersecurity', icon: '🛡️', color: 'from-red-500 to-orange-400', description: 'Protect systems from threats.' },
  { id: '4', name: 'Mobile Apps', icon: '📱', color: 'from-green-500 to-emerald-400', description: 'Build for iOS and Android.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Alex Rivera', role: 'Junior Dev @ Vercel', content: "CodeShelf changed my trajectory. The combination of books and videos is exactly how I learn best.", avatar: 'https://i.pravatar.cc/150?u=alex' },
  { id: '2', name: 'Sophia Chen', role: 'Student @ Stanford', content: "Premium quality content at an affordable price. The learning paths are so easy to follow!", avatar: 'https://i.pravatar.cc/150?u=sophia' },
  { id: '3', name: 'Marcus Thorne', role: 'Senior Architect', content: "Even as an experienced dev, I find their advanced books to be deep and well-researched.", avatar: 'https://i.pravatar.cc/150?u=marcus' },
];
