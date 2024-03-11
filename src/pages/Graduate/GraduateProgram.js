import {
    Box,
    Grid,
    Grommet,
    PageHeader,
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
  
  

  
  function GraduateProgram() {
    return (
      <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            rows={size === 'small' ? ['auto', 'auto', 'auto'] : ['auto', 'auto']}
            columns={size === 'small' ? ['1/1'] : ['70%', '30%']}
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
              <PageHeader className="pageHeader" title="The Graduate Program" />
              
            </Box>
            <Box gridArea="main" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="coursesContent">
            <div>
             <p>The Department of German at NYU has long been one of the most innovative and theoretically rigorous programs in German Studies. Drawing on a broad spectrum of expertise, its faculty teach German literature, critical thought, philosophy, political theory, the history of art, media theory, and the history of science from the early modern period to the present. The emphasis on theory in approaching the study of literature and culture distinguishes NYU’s German program and ensures students receive an excellent preparation for a wide range of careers.</p>
              <p><strong>Faculty:</strong> The department recruits highly distinguished faculty who are widely published and internationally engaged in scholarship that attracts the attention of colleagues and students across the disciplines.</p>
              <p><strong>Visiting Faculty: </strong>Internationally recognized scholars and thinkers play an active role in our department. Past visitors include Susan Bernstein, Hartmut Boehme, Rüdiger Campe, Jacques Derrida, Alexander García Düttmann, Werner Hamacher, Vivian Liska, Jean-Luc Nancy, Laurence Rickels, Marianne Schuller, Slavoj Žižek among others.</p>
              <p>Currently, the Department welcomes Elisabeth Bronfen (Zurich) and Catherine Malabou (Paris/London) each fall. At least one more distinguished scholar joins us as Eberhard Berent Goethe Professor each year. In addition, the DAAD Chair for Contemporary Poetics brings a renowned literary writer in the German language to NYU each spring.</p>
              <p>Departmental life is further enriched by the various international exchange programs, which enable our graduate students to spend significant time at universities in Europe, while also bringing international students and postdoctoral scholars to our community each year. </p>
              <p><a href="/Resources/DeutschesHaus">Deutsches Haus at NYU</a> is an important locus for our departmental community offering a site of lively intellectual and cultural exchange. It offers a rich cultural program throughout the year which attracts a wide audience from the greater New York area. In cooperation with the NYU Department of German, Deutsches Haus hosts major international conferences, lectures and readings by distinguished writers, scholars, philosophers, and artists, as well as contemporary art installations and exhibitions. </p>
              <p>Located in downtown Manhattan, <strong>New York City</strong> itself plays a major part in the intellectual and personal experience afforded by the program. Students can expect to get to know New York’s many academic institutions and to take part in the vibrant art and cultural scene the city has to offer. </p>
              </div>
              <div id="PHDprograms">
              <h3 className="majorHeader">PH.D. PROGRAMS</h3>
                <hr></hr>
                <h3 className="majorHeader">PH.D. IN GERMANIC LANGUAGES AND LITERATURES</h3>
                <p>The Department of German at NYU fosters innovative intellectual work that is both responsive to established scholarship and proactively engaged in the future of the field. Combining the study of German literature with the history of German critical thought and its legacies in contemporary theory, the program offers a challenging course of study that invites transdisciplinary approaches and stresses theoretical sophistication.</p>
                <p>For students who choose to concentrate on the study of German literature we offer a rigorous training in contemporary methods of literary criticism. We also greatly welcome those whose interests include a more theoretical bent. The program encourages taking German critical thought as a point of departure for a wide range of investigations. The German Department maintains strong links with other departments to ensure that students can make full use of NYU’s exceptional strengths across the humanities.</p>  
                <p>The graduate program is conceived to encourage and guide each student in developing an individual course of study that at the same time affords fluency in the broad field of German Studies. We stress tailoring each program of study to make the student competitive in a constantly evolving academic market as well as for other career opportunities they may wish to pursue.</p>
                <p>To get an impression of the dissertations that have been written in the Department and what students have achieved with their degrees, consult the <a href="/Graduate/Dissertations">Dissertations and Alumni Careers</a> page.</p>
                <p>NYU is a member of the <a href="https://gsas.nyu.edu/academics/inter-university-doctoral-consortium.html">New York Inter-University Doctoral Consortium (IUDC)</a> that enables students from NYU, Columbia, Princeton, Rutgers, the New School and CUNY to take courses for credit at any of these institutions.</p>
                <p>The German Department participates in the NYU Public Humanities initiative which enables students to pursue intellectual and practical training at various cultural institutions in New York City. In addition, students have the option to pursue Certificate Programs including Poetics & Theory and Museum Studies</p>
                <p><strong>Exchange Programs and Opportunities Abroad:</strong> All students have the opportunity to spend at least a semester of research and/or teaching at the Department’s sister institutions at the Freie Universität Berlin, LMU Munich, and the University of Zurich. These programs are funded in addition to the five-year package. Beyond these departmental programs, students are strongly encouraged to apply for external funding including to Fulbright and DAAD.</p>
                <p><strong>Careers:</strong> Recognizing the challenges and changing nature of the job market in German Studies and the humanities more broadly, the Department offers support in preparing for postdoctoral life including seminars devoted to professionalization and publishing. The German Department spearheads an interdepartmental initiative among language departments at NYU devoted to preparing students for a wide range of careers.</p>
                <p><strong>Funding:</strong> NYU provides generous stipends for 5 years, including health insurance. Graduate students in German at NYU also receive teaching experience and pedagogical training, with the opportunity to teach for three or more semesters. Compensation for teaching is very competitive and in addition to the stipend.</p>
                <p><strong>Applicants</strong> should have a strong background in the study of literature, philosophy, or any neighboring field at the M.A. or B.A. levels, as well as excellent German language skills by the time they start the program.</p>
                <p>Please do not hesitate to get in touch with members of our faculty by email if you would like to discuss your interests and suitability for the program. For general questions contact the Director of Graduate Studies.</p>
                <p>Students who are new to German Studies or still learning German may be interested in considering our MA in German Thought and Literature as a steppingstone to the Ph.D. program.</p>
                <p>See the <a href="/Graduate/Handbook">Graduate Student Handbook</a> for details about the program. For information on applying visit GSAS Admissions.</p>
            </div>
            <div id="mastersPrograms">
            <h3 className="majorHeader">MASTERS PROGRAMS</h3>
                <hr></hr>
                <h3 className="majorHeader">M.A. IN GERMAN THOUGHT AND LITERATURE</h3>
                <p>NYU’s re-envisioned M.A. in German Thought and Literature provides students with the opportunity to deepen their study of <strong>literature, critical theory, philosophy, aesthetics, psychoanalysis, and media theory.</strong> The program is specifically tailored to students attracted to German thought and literature from other fields, or who are still in the process of learning the German language. Students can expect to explore their intellectual interests in graduate seminars alongside Ph.D. students while also improving their language skills as a prerequisite for any serious scholarly work with German texts. M.A. students are fully integrated into the graduate community and encouraged to take part proactively in departmental programming and other social and intellectual activities.</p>
                <p>The M.A. in German Thought and Literature is a rewarding stand-alone program while also offering an excellent steppingstone to Ph.D. programs in German and related disciplines. Students may concentrate their electives towards Certificate Programs such as Poetics & Theory or Museum Studies or develop a focus in Public Humanities.</p>
                <p>Please do not hesitate to get in touch with members of our faculty by email if you would like to discuss your interests and suitability for the program. For general questions contact the Director of Graduate Studies. </p>
                <p>See the <a href="/Graduate/Handbook">Graduate Student Handbook</a> for details about the program. For information on applying visit <a href="https://gsas.nyu.edu/admissions/arc/programs/german.html">GSAS Admissions</a>.</p>
                <p><strong>Funding:</strong> The M.A. is a paid program of study. The Department encourages students to explore external funding alternatives and to pursue the following initiatives available through NYU:</p>
                <p><a href="https://gsas.nyu.edu/admissions/financial-aid/diversity-and-access-funding-programs.html">GSAS Diversity Funding Programs</a></p>
                <p><a href="https://gsas.nyu.edu/financial-support/fellowships.html">GSAS Master's Opportunities</a></p>
                <p><a href="https://gsas.nyu.edu/admissions/financial-aid/graduate-school-fellowships-and-assistantships.html">TIP</a></p>
                <p><a href="https://gsas.nyu.edu/admissions/financial-aid/gsas-resources-for-military-veterans-and-members.html">Veterans</a></p>
                <p><a href="https://gsas.nyu.edu/admissions/financial-aid/gsas-tuition-assistance-program-for-school-teachers.html">Teachers Discount</a></p>
            </div>
            </div>
            </Box>


            <Box gridArea="sidebar" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="rightSidePeople">
                <div className="rightSidePeopleSection">
                  <h3 className="majorHeader">DIRECTOR OF GRADUATE STUDIES</h3>
                  <hr></hr>
                  <h3 className="majorHeader">Benjamin Lewis Robinson</h3>
                  <h4>Associate Professor of German</h4>
                  <a className="emailLink" href="/">blr4141@nyu.edu</a>
                  <p className="address">19 University Place<br></br>Room 323</p>
                 
                </div>
               
              </div>
            </Box>

          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

  
  export default GraduateProgram;
  






