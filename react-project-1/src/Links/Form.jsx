import React, { useState } from "react";

function CommentForm({ onAddComment }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.comment.trim() !== "") {
      // Pass the comment to the parent
      onAddComment(formData.comment);
      alert("Your comment has been posted successfully!");
    }
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  return (
    <div style={{ paddingTop: "3rem", maxWidth: "100%" }}>
      <h2 style={{ paddingBottom: "2rem", fontSize: "25px" }}>Leave A Reply</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "30px" }}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              width: "70%",
              padding: "12px",
              fontSize: "17px",
              borderRadius: "7px",
              border: "2px solid grey",
            }}
          />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              width: "70%",
              padding: "12px",
              fontSize: "17px",
              borderRadius: "7px",
              border: "2px solid grey",
            }}
          />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter your website"
            style={{
              width: "70%",
              padding: "15px",
              fontSize: "17px",
              borderRadius: "7px",
              border: "2px solid grey",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your comment here"
            required
            style={{
              width: "72%",
              padding: "8px",
              height: "100px",
              resize: "none",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            background: "none",
            color: "blue",
            padding: "10px 55px",
            border: "2px solid blue",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "7px",
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
