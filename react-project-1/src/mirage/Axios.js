import axios from 'axios';

const createEvent = async () => {
  const eventData = {
    eventName: "My Test Event",
    eventDate: "2024-12-01",
    eventDescription: "This is a test event",
    eventLink: "https://example.com",
    organizer: "John Doe"
  };

  try {
    const response = await axios.post('http://localhost:3000/api/events', eventData);
    console.log('Event created successfully:', response.data);
  } catch (error) {
    console.error('Error creating event:', error);
  }
};

createEvent();
