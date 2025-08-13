import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FunctionalComponents() {
  const navigate = useNavigate();

  // Form state using useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8 p-4">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-800 text-white border-none px-6 py-3 rounded-md text-base font-medium cursor-pointer transition-all duration-200 hover:bg-black hover:-translate-y-0.5 active:translate-y-0"
          >
            ← Back to Home
          </button>
        </div>

        <div className="text-center mb-8 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-0">Functional Components </h1>
        </div>
        <section className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <h2 className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 m-0 text-xl font-semibold">
            Basic Hooks Example (useState)
          </h2>
          <div className="p-6">
            <h3 className="text-xl text-gray-700 mb-4 font-semibold">Simple Contact Form</h3>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                Form submitted successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-black transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <h2 className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 m-0 text-xl font-semibold">Advanced Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg text-gray-800 mb-2 font-semibold">useContext</h3>
              <p className="text-gray-600 mb-4">Global state management</p>
              <ul className="space-y-1">
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Theme context</li>
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">User authentication</li>
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Language preferences</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg text-gray-800 mb-2 font-semibold">useReducer</h3>
              <p className="text-gray-600 mb-4">Complex state logic</p>
              <ul className="space-y-1">
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Form state management</li>
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Todo list operations</li>
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Shopping cart logic</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg text-gray-800 mb-2 font-semibold">useMemo & useCallback</h3>
              <p className="text-gray-600 mb-4">Performance optimization</p>
              <ul className="space-y-1">
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Expensive calculations</li>
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Preventing unnecessary re-renders</li>
                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Memoized callbacks</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FunctionalComponents; 