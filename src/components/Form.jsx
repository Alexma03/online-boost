import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { saveContact } from '../db/saveContact.astro.js';
import "tailwindcss/tailwind.css";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const onSubmit = async (values, { setSubmitting }) => {
      console.log('Submitting form:', values);
      try {
        const insertedId = await saveContact(values.name, values.email, values.message);
        console.log('Contact saved with ID:', insertedId);
      } catch (error) {
        console.error('Error saving contact:', error);
      }
      setSubmitting(false);
    };
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mt-16 mb-10">Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form method="POST">
            <div className="mb-8">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="ej: John Doe"
                className="w-full border border-gray-400 p-2 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="ej: johndoe@example.com"
                className="w-full border border-gray-400 p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block font-bold mb-2">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows="4"
                placeholder="ej: Hola, quisiera saber más sobre sus servicios."
                className="w-full border border-gray-400 p-2 rounded"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
