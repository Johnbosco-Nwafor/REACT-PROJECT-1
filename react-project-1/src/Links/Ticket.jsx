import React, { useState, useEffect } from 'react';

const Ticket = ({ selectedSection }) => {
  // State to manage ticket availability and user actions
  const [isTicketAvailable, setIsTicketAvailable] = useState(true);
  const [salesEndDate, setSalesEndDate] = useState(new Date('2024-11-26T23:59:59'));
  const [remainingTime, setRemainingTime] = useState('');
  const [email, setEmail] = useState(''); // New state for email input
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validity
  const [isRegistered, setIsRegistered] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false); // New state for email confirmation

  // Calculate remaining time for ticket sales
  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const timeLeft = salesEndDate - now;

      if (timeLeft <= 0) {
        setIsTicketAvailable(false);
        setRemainingTime('Sales have ended');
      } else {
        // Calculate remaining days, hours, minutes
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        setRemainingTime(`Sales end in ${days}d ${hours}h ${minutes}m`);
      }
    };

    // Update countdown every minute
    const interval = setInterval(calculateRemainingTime, 60000);
    calculateRemainingTime(); // Initial calculation

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [salesEndDate]);

  // Email validation function
  const validateEmail = (email) => {
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail)); // Check if email is valid
  };

  // Handle registration button click
  const handleRegister = () => {
    if (validateEmail(email)) {
      setIsRegistered(true);
      setIsEmailSent(true);
      alert('Thank you for registering! A code has been sent to your email.');
    } else {
      setIsEmailValid(false); // If email is not valid, show an error
    }
  };

  // Handle closing the component after registration
  const handleClose = () => {
    if (isRegistered) {
      setIsClosed(true); // Set the closed state to true after successful registration
    } else {
      setIsTicketAvailable(false); // Close the registration section
    }
  };

  return (
    <div className="ticket-section">
      <h2 className="ticket-title">Webinar only</h2>

      {/* Ticket Details */}
      <div className="ticket-details">
        <span className="ticket-price">FREE</span>
        <button className="close-button" onClick={handleClose}>Close</button>
      </div>

      {/* Sales status */}
      <p className="ticket-info">
        {isTicketAvailable ? remainingTime : 'Sales have ended'}
      </p>

      {/* Ticket Description */}
      <p className="ticket-description">
        Includes access to the livestream. This event will be recorded.
      </p>

      {/* Conditional rendering based on ticket availability and registration */}
      {!isClosed && isTicketAvailable && !isRegistered && (
        <div>
          {/* Email input field */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={`email-input ${!isEmailValid ? 'invalid' : ''}`}
          />
          {!isEmailValid && <p className="error-message">Please enter a valid email address.</p>}

          <button className="ticket-button" onClick={handleRegister}>
            Get Your Free Ticket Now
          </button>
        </div>
      )}

      {/* Show a "Successful" message if the registration is closed successfully */}
      {isClosed && (
        <div className="confirmation-message">
          <p>Registration Successful! Check your email for the free access code.</p>
        </div>
      )}

      {/* Confirmation message if registered but not yet closed */}
      {isRegistered && !isClosed && isEmailSent && (
        <div className="confirmation-message">
          <p>You're registered! Check your email for the free access code.</p>
        </div>
      )}
    </div>
  );
};

export default Ticket;
