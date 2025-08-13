import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationWrapper({ children }) {
  const navigate = useNavigate();
  return children(navigate);
}

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      formErrors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  validateForm() {
    const errors = {};
    if (!this.state.firstName) errors.firstName = 'First name is required';
    if (!this.state.lastName) errors.lastName = 'Last name is required';
    if (!this.state.email) {
      errors.email = 'Email is required';
    }
    if (!this.state.password) {
      errors.password = 'Password is required';
    } else if (this.state.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (this.state.password !== this.state.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!this.state.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms';
    }
    this.setState({ formErrors: errors });
    return Object.keys(errors).length === 0;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      console.log('Form submitted:', this.state);
    }
  }

  render() {
    return (
      <NavigationWrapper>
        {(navigate) => (
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
                <h1 className="text-4xl font-bold text-gray-800 mb-0">Class Components</h1>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Registration Form</h1>

                <form onSubmit={this.handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    {this.state.formErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{this.state.formErrors.firstName}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    {this.state.formErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{this.state.formErrors.lastName}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    {this.state.formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{this.state.formErrors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    {this.state.formErrors.password && (
                      <p className="text-red-500 text-xs mt-1">{this.state.formErrors.password}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    {this.state.formErrors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">{this.state.formErrors.confirmPassword}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        name="agreeTerms"
                        type="checkbox"
                        checked={this.state.agreeTerms}
                        onChange={this.handleChange}
                        className="mr-2"
                      />
                      <span className="text-gray-700 text-sm">I agree to the terms and conditions</span>
                    </label>
                    {this.state.formErrors.agreeTerms && (
                      <p className="text-red-500 text-xs mt-1">{this.state.formErrors.agreeTerms}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Register
                  </button>
                </form>
              </div>

              <section className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
                <h2 className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 m-0 text-xl font-semibold">Common Patterns</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg text-gray-800 mb-2 font-semibold">State Management</h3>
                    <p className="text-gray-600 mb-4">Traditional state handling</p>
                    <ul className="space-y-1">
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">this.state initialization</li>
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">this.setState() for updates</li>
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Functional setState for dependencies</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg text-gray-800 mb-2 font-semibold">Event Handling</h3>
                    <p className="text-gray-600 mb-4">Method binding patterns</p>
                    <ul className="space-y-1">
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Constructor binding</li>
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Arrow functions in render</li>
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Class properties (experimental)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg text-gray-800 mb-2 font-semibold">Performance Optimization</h3>
                    <p className="text-gray-600 mb-4">Class-specific optimizations</p>
                    <ul className="space-y-1">
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">shouldComponentUpdate</li>
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">React.PureComponent</li>
                      <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Component memoization</li>
                    </ul>
                  </div>
                </div>
              </section>

            </main>
          </div>
        )}
      </NavigationWrapper>
    );
  }
}

export default ClassForm; 