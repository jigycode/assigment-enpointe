import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import FormikExamples from './pages/FormikExamples';
import FunctionalComponents from './pages/FunctionalComponents';
import ClassComponents from './pages/ClassComponents';


function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-4 mb-8 p-4">
      <button
        onClick={() => navigate('/formik')}
        className="bg-gray-800 text-white border-none px-6 py-3 rounded-md text-base font-medium cursor-pointer transition-all duration-200 hover:bg-black hover:-translate-y-0.5 active:translate-y-0"
      >
        Formik Examples
      </button>
      <button
        onClick={() => navigate('/functional')}
        className="bg-gray-800 text-white border-none px-6 py-3 rounded-md text-base font-medium cursor-pointer transition-all duration-200 hover:bg-black hover:-translate-y-0.5 active:translate-y-0"
      >
        Functional Components
      </button>
      <button
        onClick={() => navigate('/class')}
        className="bg-gray-800 text-white border-none px-6 py-3 rounded-md text-base font-medium cursor-pointer transition-all duration-200 hover:bg-black hover:-translate-y-0.5 active:translate-y-0"
      >
        Class Components
      </button>
    </div>
  );
}


function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <NavigationButtons />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Aspect</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Formik</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Functional Components</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Class Components</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Syntax & Boilerplate</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Declarative, minimal boilerplate with useFormik hook or Formik component</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Concise, less boilerplate, no 'this' keyword</td>
                  <td className="px-6 py-4 text-sm text-gray-700">More verbose, requires render method, 'this' binding</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>State Management</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Built-in form state management (values, touched, errors, submission status)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">useState hook for local state, custom hooks for complex logic</td>
                  <td className="px-6 py-4 text-sm text-gray-700">this.state and this.setState for state management</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Lifecycle Management</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">N/A - Form-specific lifecycle through Formik's internal state</td>
                  <td className="px-6 py-4 text-sm text-gray-700">useEffect hook for side effects and lifecycle simulation</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Explicit lifecycle methods (componentDidMount, componentDidUpdate, etc.)</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Learning Curve</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Moderate - Requires understanding of form patterns and validation</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Moderate - Hooks require understanding of closures and dependency arrays</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Steeper - Requires understanding of 'this' binding and lifecycle methods</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Performance</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Good - Controlled components, but can cause re-renders</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Excellent - Better optimization opportunities, lighter memory footprint</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Good - Class overhead, but can use shouldComponentUpdate</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Error Handling</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Built-in validation and error display mechanisms</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Standard try-catch, no built-in error boundaries</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Can implement error boundaries for catching child errors</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Testing</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Straightforward - Form state and validation testing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Easier - Function-based nature simplifies testing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">More complex - Requires class instance testing</td>
                </tr>



                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <strong>Future-Proofing</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Active development, but React Hook Form gaining popularity</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Recommended by React team, hooks are the future</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Legacy approach, still supported but not recommended for new code</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formik" element={<FormikExamples />} />
          <Route path="/functional" element={<FunctionalComponents />} />
          <Route path="/class" element={<ClassComponents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
