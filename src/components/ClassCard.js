
const ClassCard = ({ code, course, meetingTime, language, credits, professor, description }) => {
    return (
      <div className="class-card">
        <h3 className="classCode">{code}</h3>
        <hr></hr>
        <h3 className="courseName">{course}</h3>
        <h5 className="class-card-text">{meetingTime}</h5>
        <h5 className="class-card-text">In {language}/{credits} Credits</h5>
        <h5 className="class-card-text">Taught By {professor}</h5>
        <p className="class-card-text">{description}</p>
      </div>
    );
  };

  export default ClassCard;