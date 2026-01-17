import React from 'react'

const Contact = () => {
  return (
    <div className='container margin'>
        <section className="contact">
    <h2>Contact Us</h2>

    <form className="contact-form">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea rows="5" placeholder="Write your message..." required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </section>
    </div>
  )
}

export default Contact