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
 
  
 
  
  function LanguagePlacement() {
    return (
      <Grommet theme={theme}>
        <PageContent>
        <Box className="headerArea" gridArea="header" background="#ffffff" align="center" justify="center">
        <PageHeader  className="pageHeader" title="Language Placement" />
              
            </Box>
          
          <div className="coursesContent">
              <h3 className="majorHeader">GERMAN LANGUAGE PLACEMENT INFORMATION</h3> 
                <hr></hr>
                <h3 className="majorHeader">Language Study Requirement for College of Arts and Science (Undergraduates)</h3> 
                <p>Students in the College of Arts and Science (CAS) need to complete a fourth semester of language study as part of their College Core Curriculum (CCC). For German, this would entail completing Intermediate German II (GERM-UA 04) or Intensive Intermediate German (GERM-UA 20). </p>  
                <h3 className="majorHeader">Course Placement</h3> 
                <p>Students who have never studied German before should enroll in either Elementary German I (GERM-UA 01) or Intensive Elementary German (GERM-UA 10). All other students must show proof of placement through the <a className="joeLink" href="https://cas.nyu.edu/academic-programs/academic-support-services/placementexams.html">Foreign Language Placement and Exemption Examinations</a>.</p>
                <p><strong>I.</strong> For placement in (and possible eligibility to later take an exemption exam in) German, students must go to the College of Arts and Science’s language exam website and take the online exam of their <a className="joeLink" href="http://www.nyu.edu/cas/flpexam/">choice</a>.</p>
                <p><strong>II.</strong> Exemption-only paper exams in the following languages are offered in person (one hour long) for students who score above the specified cutoffs on the online placement exams:</p>
                <ul>
                  <li><strong>German: 71 or higher (departmental exam)</strong></li>
                </ul>
                <p><i>Students who score above this cutoff on the placement exam and who wish to continue their study of the language at NYU rather than exempt from the Core requirement should consult the score and placement results of their online exam and/or consult directly with the language departments or visit their websites.</i></p>
                <p><strong>III.</strong> Students who are eligible and wish to take an in-person language exam, must RSVP to <a className="joeLink" href="mailto:cas.placementexams@nyu.edu">cas.placementexams@nyu.edu</a> (with your NYU ID # and online exam score).</p>
                <p>Students registered with the Center for Students with Disabilities (CSD) must R.S.V.P. to <a className="joeLink" href="mailto:cas.placementexams@nyu.edu">cas.placementexams@nyu.edu</a> at least two days in advance of their scheduled testing time.</p>
                <p><strong>Be sure to bring your NYU I.D. card to the exam. If you do not yet have an NYU I.D. card, you must bring a government photo-I.D. card.</strong></p>
                <p><strong>IV.</strong> For languages offered through our agreement with Columbia University, visit <a className="joeLink" href="https://cas.nyu.edu/academic-programs/columbia-language-exchange.html">Columbia Language Exchange</a>.</p>
                <p><strong>V.</strong> Policies: Under very exceptional circumstances, students who wish to petition to re-take the same language exam should contact the Office of Academic Affairs in Silver 908. Language exam results are valid for no more than 18 months.</p>
          </div>
         
        </PageContent>
      </Grommet>
    );
  }
  
  export default LanguagePlacement;
  