import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-8xl font-bold text-blue-600">404</h1>
      <p className="text-2xl font-semibold mt-4 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-8">The page you are looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
}