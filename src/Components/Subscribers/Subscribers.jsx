import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add logic to handle subscription (e.g., send email to server)
    console.log(`Subscribed with email: ${email}`);
    // You can reset the email input after submission
    setEmail('');
  };

  return (
    <div className="subscribers section">
      <div className="sectionContainer container">
        <h2 data-aos='fade-left' data-aos-duration='2500'>Subscribe Newsletters & get Latest News</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }}>
          <div data-aos='fade-up' data-aos-duration='2500' className="inputDiv">
            <input
              className='text'
              type="text"
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className='btn'>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribers;
