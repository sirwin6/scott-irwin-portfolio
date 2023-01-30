import React, { useRef, useState, useCallback, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import HamburgerMenu from '../Components/HamburgerMenu';

export default function Contact() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, [width, updateTarget]);

    return targetReached;
  };

  const isBreakpoint = useMediaQuery(1023);

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

    console.log('errors', errors);
    setErrors({ ...tempErrors });
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

      if (error.length > 0) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Sent');
    }

    console.log('show success', showFailureMessage);
    console.log(firstName, lastName, email, subject, message);
  };

  return (
    <div className='h-screen w-screen'>
      {isBreakpoint ? (
        <HamburgerMenu displayIcon={true} iconColor={'orange'} />
      ) : (
        <Navbar iconColor={'orange'} />
      )}
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
            {errors['firstName'] ? (
              <span className='text-red-500'>
                Please include your first name
              </span>
            ) : (
              'first Name'
            )}
            <span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            name='firstName'
            className='w-1/2 h-10 border border-black px-3 rounded-lg'
          ></input>

          {/* ------- LAST NAME ------- */}
          <label
            htmlFor='lastName'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            {errors['lastName'] ? (
              <span className='text-red-500'>
                Please include your last name
              </span>
            ) : (
              'Last Name'
            )}
            <span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            name='lastName'
            className='w-1/2 h-10 border border-black px-3 rounded-lg'
          ></input>

          {/* ------- EMAIL ------- */}
          <label
            htmlFor='email'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            {errors['email'] ? (
              <span className='text-red-500'>
                Please include your email address
              </span>
            ) : (
              'Your Email Adress'
            )}
            <span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name='email'
            className='w-1/2 h-10 border border-black px-3 rounded-lg'
          ></input>

          {/* ------- SUBJECT ------- */}
          <label
            htmlFor='subject'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            {errors['subject'] ? (
              <span className='text-red-500'>Please include a subject</span>
            ) : (
              'Subject'
            )}
            <span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <input
            type='text'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            name='subject'
            className='w-1/2 h-10 border border-black px-3 rounded-lg'
          ></input>

          {/* ------- MESSAGE ------- */}
          <label
            htmlFor='message'
            className='text-gray-500 font-light text-left w-1/2 mt-6 dark:text-gray-50'
          >
            {errors['message'] ? (
              <span className='text-red-500'>Please include your message</span>
            ) : (
              'Message'
            )}
            <span className='text-red-500 dark:text-gray-50'>*</span>
          </label>
          <textarea
            type='text'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name='message'
            className='w-1/2 h-40 resize-none p-3 border border-black rounded-lg'
          ></textarea>
          <button
            disabled={buttonText === 'Sent' ? true : false}
            value={buttonText}
            onClick={handleSubmit}
            className='px-10 my-4 py-1 hover:bg-orange-200 bg-orange-50 hover:text-black hover:border-orange-600 duration-200 text-gray-700 font-light rounded-lg border border-black text-lg flex items-center'
          >
            {buttonText}
          </button>
          <p>
            {showSuccessMessage ? (
              <span className='italic text-orange-500 tracking-wider'>
                Thank you for reaching out, I will get back to you as soon as I
                can!
              </span>
            ) : (
              <></>
            )}
          </p>
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
