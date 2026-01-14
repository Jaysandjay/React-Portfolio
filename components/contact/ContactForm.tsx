import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-2xl min-h-[60vh] mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        {submitted && (
          <p className="text-green-600">Thank you! Your message has been sent.</p>
        )}
      </div>

      {/* Form */}
      <form
        action="https://formspree.io/f/xvzppoob"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="flex flex-col flex-1 gap-4"
      >
        {/* Name + Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <label htmlFor="name" className="whitespace-nowrap font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="flex-1 min-w-0 border border-gray-300 rounded-md p-2 h-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-0">
            <label htmlFor="email" className="whitespace-nowrap font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="flex-1 min-w-0 border border-gray-300 rounded-md p-2 h-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col flex-1">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="flex-1 resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       <div>
        <button
          type="submit"
          className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>

       </div>
      </form>
    </div>
  );
}
