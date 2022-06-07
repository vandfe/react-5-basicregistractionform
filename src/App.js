import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={(e) => setValues({...values, firstName: e.target.value})}
        />
        {
          submitted && !valid ?
          <span id="first-name-error">Please enter a first name</span> : null
        }
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={(e) => setValues({...values, lastName: e.target.value})}
        />
        {
          submitted && !valid ?
          <span id="last-name-error">Please enter a last name</span> : null
        }
        
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={(e) => setValues({...values, email: e.target.value})}
        />
        {
          submitted && !valid ?
          <span id="email-error">Please enter an email address</span> : null
        }
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
