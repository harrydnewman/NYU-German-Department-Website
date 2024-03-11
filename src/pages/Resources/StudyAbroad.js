import {
  Box,
  Grid,
  Grommet,
  Heading,
  ResponsiveContext,
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




function StudyAbroad() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            rows={size === 'small' ? ['auto', 'auto', 'auto'] : ['auto', 'auto']}
            columns={size === 'small' ? ['1/1'] : ['80%', '20%']}
            gap="small"
            areas={
              size === 'small'
                ? [
                  { name: 'header', start: [0, 0], end: [0, 0] },
                  { name: 'main', start: [0, 1], end: [0, 1] },
                  { name: 'sidebar', start: [0, 2], end: [0, 2] },
                ]
                : [
                  { name: 'header', start: [0, 0], end: [1, 0] },
                  { name: 'main', start: [0, 1], end: [0, 1] },
                  { name: 'sidebar', start: [1, 1], end: [1, 1] },
                ]
            }
          >
            <Box className="headerArea" gridArea="header" background="#ffffff" align="center" justify="center">
              <Heading className="pageHeader">Study Abroad</Heading>
            </Box>
            <Box gridArea="main" background="#ffffff" align="center" justify="center">
              <div className="coursesContent">
                <h3 className="majorHeader">UNDERGRADUATE</h3>
                <hr></hr>
                <p>Students pursuing the major in German are highly encouraged to complete some of the requirements by spending a semester abroad at one of the NYU exchange sites in Berlin (Freie or Humboldt University), Bonn, or Vienna. NYU financial aid can be applied to the costs of living and studying at any of these exchange institutions, and NYU academic credit is awarded directly for courses taken. Students may study abroad for one semester or a full year, usually in the junior year, with the approval of the major department(s) and the assistant dean for international study. The minimum requirement for any of the exchange programs is successful completion of 64 points of undergraduate course work and a 3.0 GPA. Both programs in Berlin require proficiency in German; the programs in Bonn and Vienna offer some courses in English.</p>
                <h4>NYU in Berlin (Fall and Spring Semester Program) </h4>
                <p>NYU in Berlin is a semester- or year-long study abroad program based at the prestigious Humboldt University, located in the heart of the city. Course offerings focus on the society, politics, history, and culture of Germany, as well as contemporary Western Europe. The program features NYU courses, taught by NYU faculty, members of the Humboldt faculty, and Berlin’s wider academic community. The program is designed for students of German, as well as history and the social sciences. All content courses, taught in English, will either count for credit in the department in which they are listed or toward the three courses in English as part of the German Literature and Culture major. At least one course must be taken in German.</p>
                <p>For more information on NYU in Berlin (Fall and Spring Semester Program) click <a className="joeLink" href="https://www.nyu.edu/academics/studying-abroad.html">here</a>.</p>
                <h4>NYU in Berlin (Fall and Spring Semester Program) </h4>
                <p>The department offers a six-week summer program in Berlin. The program consists of language courses and culture courses (in English), which may be applied to the major or minor.</p>
                <p>For more information on NYU in Berlin (Summer Program) click <a className="joeLink" href="https://cas.nyu.edu/summer-abroad.html">here</a>.</p>
                <br></br>
                  <h3 className="majorHeader">GRADUATE</h3>
                  <hr></hr>
                  <p>In 2009 a exchange program for graduate students was established between the German Department at NYU and the <a className="joeLink" href="https://www.ds.uzh.ch/de/error404.html">Deutsches Seminar of the University of Zurich</a>, financed independently from graduate student MacCracken stipends. Through the current exchange, one student from NYU is able to join the Zurich Department in Fall, while one student from Zurich is sent in exchange. In addition, the German Department at NYU participates in another exchange program, sending graduate students from NYU to <a className="joeLink" href="https://www.nyu.edu/berlin.html">Free University Berlin</a> for either one term or an entire academic year. The Department strongly supports all Graduate Students applying for other exchange stipends such as those offered by the German Academic Exchange Service (DAAD).</p>
               
              </div>

            </Box>


            <Box gridArea="sidebar" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="sidebar">
                <h3 className="infoHeader">More Information</h3>
                <hr></hr>
                <a className="joeLink" href="https://www.nyu.edu/berlin.html" target="_blank" rel="noreferrer">NYU Berlin</a><br></br>
                <a className="joeLink" href="https://www.nyu.edu/prague.html" target="_blank" rel="noreferrer">NYU Prague</a>
                <br></br>
              </div>
            </Box>

          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default StudyAbroad;

