import React, { useState } from "react";

function AddEvents() {
    const [eventName, setEventName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventName,
                    date,
                    time,
                    location,
                    eventDescription,
                }),
            });

            if (response.ok) {
                console.log('Submission successful');
                // Optionally, reset form fields after successful submission
                setEventName("");
                setDate("");
                setTime("");
                setLocation("");
                setEventDescription("");
            } else {
                console.error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <h1>Add Event</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="eventName">Event Name</label><br />
                <input id="eventName" type="text" name="eventName1" value={eventName} onChange={(e) => setEventName(e.target.value)} /><br />

                <label htmlFor="date">Date</label><br />
                <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />

                <label htmlFor="time">Time</label><br />
                <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} /><br />

                <label htmlFor="location">Location</label><br />
                <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} /><br />

                <label htmlFor="eventDescription">Description</label><br />
                <textarea id="eventDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}></textarea><br />

                <button type="submit">Submit</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </form>
        </div>
    );
}

export default AddEvents;
