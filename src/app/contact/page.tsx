import React from 'react'

const ContactUPage = () => {
  return (
<div className="w-full flex justify-center items-center ">
<div className="w-9/12 max-sm:w-full">
    <h1 className="text-3xl font-bold">Contact Us</h1> 
    <p className="mt-4">Last updated: October 13, 2024</p>
    <p className="mt-4">
      We would love to hear from you! If you have any questions, feedback, or inquiries about our services, please feel free to reach out.
    </p>

    <h2 className="mt-6 text-2xl font-semibold">Get in Touch</h2>
    <ul className="list-disc list-inside mt-2">
      <li>
        <strong>Email:</strong> <a href="mailto:kamleshbca2005@gmail.com" className="text-blue-600 hover:underline">kamleshbca2005@gmail.com</a>
      </li>
      <li>
        <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/kamlesh-sahani-692ab7247/" className="text-blue-600 hover:underline">Kamlesh Sahani</a>
      </li>
    </ul>

    <h2 className="mt-6 text-2xl font-semibold">Feedback</h2>
    <p className="mt-2">
      Your feedback is essential to us. Please let us know how we can improve our services or if you have any specific requests.
    </p>

    <p className="mt-4">Thank you for visiting <strong>ApisMaster</strong>!</p>
  </div></div>
  )
}

export default ContactUPage