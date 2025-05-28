import { useState } from 'react';

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation (e.g., email validation)
    if (!formData.name || !formData.email || !formData.question) {
      setMessage('All fields are required.');
      return;
    }

    // Example of where you would send the data (e.g., to an API or database)
    console.log('Submitted Data:', formData);

    // Show success message and clear form
    setMessage('Your question has been submitted successfully!');
    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  return (
    <div className="question-form">
      <h2>Ask a Question</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className='flex-lab'>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className='flex-lab'>
         
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className='flex-lab'>
       
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Write your question here"
            required
          />

            <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default QuestionForm;
