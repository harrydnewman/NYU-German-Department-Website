import {
    Grommet,
    PageContent,
    PageHeader,
  } from "grommet";
  
  
  import '../../index.css';
  
  
  const theme = {
    global: {
      colors: {
        brand: "#4f0f87",
      },
      font: {
        family: "Roboto",
        size: "18px", 
        height: "40px",
      },
    },
  };

 

  
  function Contact() {
    return (
      <Grommet theme={theme}>

        <PageContent>
              <PageHeader className="pageHeader" title="Contact Us" />
              <br></br>
          <div className="contactUs">
            <p>19 University Place, 3rd floor, New York, NY 10003</p>
            <p>Phone: (212) 998-8651 or (212) 998-8652</p>
            <p>E-mail: <a className="joeLink" href="mailto:german.dept@nyu.edu">german.dept@nyu.edu</a></p>
            <br></br>
            <h3 className="majorHeader">Chair of the Department</h3>
            <br></br>
            <p>Elisabeth Strowick</p>
            <a className="joeLink" href="mailto:strowick@nyu.edu">strowick@nyu.edu</a>
            <br></br>
            <br></br>
            <h3 className="majorHeader">Director of Graduate Studies</h3>
            <br></br>
            <p>Benjamin Lewis Robinson</p>
            <a className="joeLink" href="mailto:blr4141@nyu.edu">blr4141@nyu.edu</a>
            <br></br>
            <br></br>
            <h3 className="majorHeader">Director of Undergraduate Studies</h3>
            <br></br>
            <p>Leif Weatherby</p>
            <a className="joeLink" href="mailto:leif.weatherby@nyu.edu">leif.weatherby@nyu.edu</a>
            <br></br>
            <br></br>
            <h3 className="majorHeader">Director of Language Program</h3>
            <br></br>
            <p>Andrea Dortmann</p>
            <a className="joeLink" href="mailto:andrea.dortmann@nyu.edu">andrea.dortmann@nyu.edu</a>
            <br></br>
            <br></br>
            <br></br>
            <h3 className="majorHeader">ADMINISTRATION</h3>
            <br></br>
            <h3 className="majorHeader">Department Administrator</h3>
            <br></br>
            <p>Lindsay O'Connor</p>
            <p>Phone: (212) 998-8651</p>
            <a className="joeLink" href="mailto:lindsay.oconnor@nyu.edu">lindsay.oconnor@nyu.edu</a>
            <br></br>
            <br></br>
            <h3 className="majorHeader">Administrative Aide</h3>
            <br></br>
            <p>Sasha Orama</p>
            <p>Phone: (212) 998-8652</p>
            <a className="joeLink" href="mailto:smo409@nyu.edu">smo409@nyu.edu</a>
          </div>
          <br></br> 
          <br></br> 
         
        </PageContent>
      </Grommet>
    );
  }
  
  export default Contact;
  