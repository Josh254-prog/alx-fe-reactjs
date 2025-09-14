import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       <div style={{ padding: '20px' }}>
         <h1>Welcome to Our Company</h1>
         <p>We are dedicated to delivering excellence in all our services.</p>
       </div>
       <div style={{ padding: '20px' }}>
         <h1>About Us</h1>
         <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
       </div>
      <div style={{ padding: '20px' }}>
         <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
        <div style={{ padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button type="submit">Send Message</button>
         </form>
       </div>
    </>
  )
}

export default App
