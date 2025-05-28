import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    eventLink: "",
    organizer: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!eventData.eventName || !eventData.eventDate || !eventData.organizer) {
      setMessage("All fields are required.");
      return;
    }

    try {
      // Make API request
      const response = await axios.post("http://localhost:3000/api/events", eventData);

      // Success message
      setMessage("Event created successfully!");
      setEventData({
        eventName: "",
        eventDate: "",
        eventDescription: "",
        eventLink: "",
        organizer: "",
      });

      // Redirect to another page after 5 seconds
      setTimeout(() => {
        navigate("/events"); // Replace "/events" with your desired route
      }, 5000);
    } catch (error) {
      console.error("Error creating event:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        setMessage(error.response.data.message || "Failed to create event. Please try again.");
      } else {
        setMessage("You Have Successfully Created Your Event.");
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "400px",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Create an Event
        </h2>
        {message && (
          <p
            style={{
              textAlign: "center",
              color: message.includes("successfully") ? "#27ae60" : "#e74c3c",
              fontSize: "0.9rem",
              marginBottom: "15px",
            }}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Event Name:
            </label>
            <input
              type="text"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              placeholder="Enter event name"
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "0.9rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Event Date:
            </label>
            <input
              type="date"
              name="eventDate"
              value={eventData.eventDate}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "0.9rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Organizer:
            </label>
            <input
              type="text"
              name="organizer"
              value={eventData.organizer}
              onChange={handleChange}
              placeholder="Your name or organization"
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "0.9rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Event Link (optional):
            </label>
            <input
              type="url"
              name="eventLink"
              value={eventData.eventLink}
              onChange={handleChange}
              placeholder="https://your-event-link.com"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "0.9rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Description:
            </label>
            <textarea
              name="eventDescription"
              value={eventData.eventDescription}
              onChange={handleChange}
              placeholder="Describe the event"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "0.9rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                resize: "none",
                height: "80px",
              }}
            ></textarea>
          </div>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#3498db",
                color: "#fff",
                fontSize: "1rem",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
