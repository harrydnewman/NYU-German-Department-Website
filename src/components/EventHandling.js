import React, { useState, useEffect } from "react";



const FunctionCard = ({ eventName, date, time, eventDescription, location}) => {
  return (
    <div className="event-card">
      <h3 className="classCode">{date}</h3>
      <hr></hr>
      <h3 className="courseName">{eventName}</h3>
      <h5 className="class-card-text">{time}</h5>
      <h5 className="class-card-text">{location}</h5>
      <p className="class-card-text">{eventDescription}</p>
    </div>
  );
};

function EventHandling() {
    const [eventData, setEventData] = useState([]);
  
    useEffect(() => {
      fetch("/messages")
        .then((response) => response.json())
        .then((data) => {
          setEventData(data); 
          console.log("Event Data Received:", data);
        })
        .catch((error) => {
          console.error("Error fetching event data:", error);
        });
    }, []);
  
    return (
          <div className="Events">
            {eventData.map((event, index) => (
              <div key={index}>
                {/* <h2>{event.eventName}</h2>
                <h5>{event.date}</h5>
                <h5>{event.time}</h5>
                <p><strong>Description:</strong><br></br> {event.eventDescription}</p>
                <h5><strong>Location:</strong><br></br> {event.location}</h5> */}
                <FunctionCard eventName={event.eventName} date={event.date} time={event.time} eventDescription={event.eventDescription} location={event.location}></FunctionCard>
  
              </div>
            ))}
          </div>
    );
  }

export default EventHandling;