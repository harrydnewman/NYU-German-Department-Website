import {
    Box,
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
  
  
  
  function Tutoring() {
    return (
      <Grommet theme={theme}>
        <PageContent>
        <Box className="headerArea" gridArea="header" background="#ffffff" align="center" justify="center">
        <PageHeader className="pageHeader" title="German Language Tutoring" />
              
            </Box>
          
          <div className="coursesContent">
          <p>Every student who is learning another language will encounter certain stumbling blocks along the way: be it pronunciation and wrapping your tongue around the new sounds and those weird “umlauts” (ä, ü, ö), be that a grammatical structure that causes you a headache, write a text or hold a conversation in German, or a dozen other issues that you might struggle with. You are no longer alone. Aside from your teachers and their office hours where you always find help, we now offer free, not-for-credit tutorials to assist you with your individual learning curve. Your tutor offers five hours a week to work with you on a one-on-one basis. Just sign up weekly regardless of your proficiency level and get the most out of your German learning experience. Every week, you will receive via e-mail a Doodle link by which you can sign up for 20 minute sessions (one session per booking). The tutor for Fall 2023 is <a className="emailLink" href="mailto:tina.samartzi@nyu.edu">Tina Samartzi.</a></p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </PageContent>
        
        
      </Grommet>
    );
  }
  
  export default Tutoring;
  