import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Blog } from "../mirage/Blog";
import CommentForm from "./Form";

const MiragePage = () => {
  const { id } = useParams();
  const selectedSection = Blog.find((sect) => sect.id === parseInt(id));
  const [comments, setComments] = useState([]);

  if (!selectedSection) {
    return <div>Section not found!</div>;
  }

  const handleAddComment = (newComment) => {        //This function handles adding new comments:
    setComments((prevComments) => {
      const updatedComments = [newComment, ...prevComments];
      return updatedComments.slice(0, 4); // Limit to the 4 most recent comments
    });
  };

  return (
    <section>
      <div className="blog-tag">
        <h1>My Blog</h1>
      </div>
      <div className="selection-flex">
        <div className="selection-flex1">
          <img src={selectedSection.image} alt="" />
          <div className="company-flex">
            <p className="com">{selectedSection.company}</p>
            <p className="com">{selectedSection.date}</p>
            <p className="com">{selectedSection.title}</p>
          </div>

          <div className="guide">
            <h1 className="guide-bold">
              The Ultimate Guide to Copywriting for Events.
            </h1>
            <p className="guide-light">
              There’s such a thing as “too much information”, especially for the
              companies scaling out their sales operations. That’s why Attentive
              was born in 2015 help sales teams make their increasing pipelines
              simpler to manage. Indeed, the small, Portugal-based team is itself
              focused on scaling, having much participated in accelerator
            </p>

            <h1 className="guide-bold">Check upcoming Events</h1>

            <p className="guide-light">
              In this episode, Attentive founder and CTO Pedro Araújo talks about
              what it takes to build a tech new product from the ground up.
              Discover their approach to running an engineering team, from
              adopting new open source technologies, to onboarding junior
              developers and learning.
            </p>

            <div className="guide2">
              <h5 className="financial">
                Financial engagements are typically multifaceted, solving for
                specific digital marketing and challenges while building. – Anger
                Mathe
              </h5>
            </div>
          </div>

          <div className="email-form">
            <CommentForm onAddComment={handleAddComment} />
          </div>
        </div>

        <div className="selection-flex2">
          <div className="recent-post">
           <div>
           <h1>Recent Posts</h1>
           <hr className="line"/>
           </div>

            <div className="comments">
            <p className="digital">Digital Marketing Guide For Events.</p>
            <p className="digital">The Ultimate Guide To Copy Writing For Events.</p>
            <p className="digital">6 Excellent Examples Event Invitations And Email.</p>
            </div>
          </div>

          <div className="recent-post">
          <div>
          <h3>Recent Comments:</h3>
          <hr className="line"/>
          </div>
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <p className="digital" key={index} style={{ marginBottom: "10px" }}>
                {comment}
              </p>
            ))
          )}
          </div>

          <div className="recent-post">
            <div>
              <h1>Archives</h1>
              <hr className="line"/>
            </div>
          
              <p>December 2024</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiragePage;
