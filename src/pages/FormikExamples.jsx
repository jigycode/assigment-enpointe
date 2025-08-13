import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikExamples() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().min(10, 'Message must be at least 10 characters'),
    });

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
                    <h1 className="text-4xl font-bold text-gray-800 mb-0">Formik Examples </h1>
                </div>

                <section className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
                    <h2 className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 m-0 text-xl font-semibold">
                        Basic Form Example
                    </h2>
                    <div className="p-6">
                        <h3 className="text-xl text-gray-700 mb-4 font-semibold">Simple Contact Form</h3>
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                                setSubmitting(false);
                                resetForm();
                                alert('Form submitted successfully!');
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-4">
                                    <div>
                                        <Field
                                            name="name"
                                            placeholder="Your Name"
                                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <Field
                                            name="message"
                                            as="textarea"
                                            placeholder="Your Message"
                                            className="w-full border border-gray-300 rounded-md px-4 py-2"
                                            rows="4"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-black transition-all"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
                    <h2 className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-4 m-0 text-xl font-semibold">Advanced Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                            <h3 className="text-lg text-gray-800 mb-2 font-semibold">Field Arrays</h3>
                            <p className="text-gray-600 mb-4">Handle dynamic lists of form fields</p>
                            <ul className="space-y-1">
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Add/remove fields dynamically</li>
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Validate array items</li>
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Nested form structures</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                            <h3 className="text-lg text-gray-800 mb-2 font-semibold">Custom Field Components</h3>
                            <p className="text-gray-600 mb-4">Create reusable form components</p>
                            <ul className="space-y-1">
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Custom input styling</li>
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Complex field logic</li>
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Third-party integrations</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                            <h3 className="text-lg text-gray-800 mb-2 font-semibold">Form Validation</h3>
                            <p className="text-gray-600 mb-4">Comprehensive validation strategies</p>
                            <ul className="space-y-1">
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Schema-based validation (Yup)</li>
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Custom validation functions</li>
                                <li className="text-gray-700 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-gray-800 before:font-bold">Async validation</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default FormikExamples;
