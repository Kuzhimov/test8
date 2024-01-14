import React, { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Data submitted successfully')
      } else {
        console.error('Failed to submit data')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input
            placeholder='First Name'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        <br />
       
          <input
            placeholder='Last Name'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
