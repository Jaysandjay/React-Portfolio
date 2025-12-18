import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-[50vw] h-[60vh] mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      {submitted && (
        <p className="text-green-600 mb-4">Thank you! Your message has been sent.</p>
      )}

      <form
        action="https://formspree.io/f/xvzppoob" 
        method="POST"
        className="space-y-4"
        onSubmit={() => setSubmitted(true)} 
      >

        <div className="flex justify-between">
            <div className="flex items-center">
            <label htmlFor="name" className="mb-1 font-medium">Name</label>
            <input
                type="text"
                name="name"          
                id="name"
                className="w-max-xl border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-5 h-8"
                required
            />
            </div>

            <div className="flex items-center">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
                type="email"
                name="email"         
                id="email"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-5 h-8"
                required
            />
            </div>

        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">Message</label>
          <textarea
            name="message"       
            id="message"
            rows={5}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
