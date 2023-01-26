import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstName.length <= 0) {
      tempErrors['firstName'] = true;
      isValid = false;
    }

    if (lastName.length <= 0) {
      tempErrors['lastName'] = true;
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();

      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
    }

    console.log('show success', showSuccessMessage);
    console.log(firstName, lastName, email, subject, message);
  };

  return (
    <div className='h-screen w-screen'>
      <Navbar iconColor={'orange'} />
      <div className='flex flex-col mt-20 justify-center items-center'>
        <h2 className='text-5xl font-extralight'>Send me and Email</h2>
        <form
          onSubmit={handleSubmit}
          className='flex w-full flex-col justify-around items-center'
        >
          {/* ------- FIRST NAME ------- */}

          <label
            htmlFor='firstName'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            First Name<span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            name='firstName'
            className='w-1/2 h-10 border border-black text-center rounded-lg'
          ></input>

          {/* ------- LAST NAME ------- */}
          <label
            htmlFor='lastName'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            Last Name<span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            name='lastName'
            className='w-1/2 h-10 border border-black text-center rounded-lg'
          ></input>

          {/* ------- EMAIL ------- */}
          <label
            htmlFor='email'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            Your Email Adress
            <span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name='email'
            className='w-1/2 h-10 border border-black text-center rounded-lg'
          ></input>

          {/* ------- SUBJECT ------- */}
          <label
            htmlFor='subject'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            Subject<span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            name='subject'
            className='w-1/2 h-10 border border-black text-center rounded-lg'
          ></input>

          {/* ------- MESSAGE ------- */}
          <label
            htmlFor='message'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            Message<span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name='message'
            className='w-1/2 h-40 border border-black rounded-lg'
          ></input>
          <button
            value={buttonText}
            className='px-10 my-4 py-1 hover:bg-orange-200 bg-orange-50 hover:text-black hover:border-orange-600 duration-200 text-gray-700 font-light rounded-lg border border-black text-lg flex items-center'
          >
            {buttonText}
          </button>
        </form>
      </div>
      <footer className='h-1/4 bg-orange-200 flex'>
        <Footer />
      </footer>
      <div className='wrapper w-screen'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
