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
  // come back and edit the margins and padding and shit later
  
  
 
  
  function Handbook() {
    return (
      <Grommet theme={theme}>
        <PageContent>
          <PageHeader className="pageHeader" title="Graduate Student Handbook" />
          <div className="linkContent">
          <a className="joeLink" href="https://as.nyu.edu/content/dam/nyu-as/german/documents/UPDATED%20GERMAN%20DEPT%20HANDBOOK_Fall%202023.pdf">Click here for a PDF of the Student Handbook</a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
        </PageContent>
      </Grommet>
    );
  }
  
  export default Handbook;
  

  