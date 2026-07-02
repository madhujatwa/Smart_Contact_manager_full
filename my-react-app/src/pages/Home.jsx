import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Smart Contact Manager</h1>
        <p className="text-lg mb-8">Manage all your contacts in one place — fast, easy, secure.</p>
        <Link to="/register" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '📋', title: 'Organize Contacts', desc: 'Add, edit, and group your contacts easily.' },
            { icon: '🔒', title: 'Secure Storage', desc: 'Your data is protected with JWT authentication.' },
            { icon: '🔍', title: 'Quick Search', desc: 'Find any contact in seconds.' },
          ].map((f) => (
            <div key={f.title} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <Link to="/register" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
          Create Account
        </Link>
      </section>
    </div>
  );
}