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



function FAQ() {
  return (
    <Grommet theme={theme}>
      <PageContent>
      <Box className="headerArea" gridArea="header" background="#ffffff" align="center" justify="center">
      <PageHeader className="pageHeader" title="FAQs" />
            </Box>
          
        
        <div className="coursesContent">
              <h3 className="majorHeader">PLACEMENT</h3> 
                <hr></hr>
                <ul>
                  <li><strong>How do I know which language course I should take?</strong></li>
                  <ul>
                    <li>You need to first schedule a placement interview. More information is given on the <a className="joeLink" href="https://as.nyu.edu/departments/german/undergraduate/language-placement.html">Language Placement</a> page under Undergraduate Programs.</li>
                    <li>If you have not studied German previously, do not speak German at home and have not lived in Germany for any extended period of time, you do not need to schedule a placement interview. You should register for either GERM-UA1 Elementary German I or GERM-UA10 Intensive Elementary German.</li>
                    <li>If you have been awarded transfer credit by NYU for a German language course taken at another university, then you may register for the next equivalent course in the NYU language sequence. A full placement interview is not necessary for transfer students in this situation, but the Director of Language Programs can provide advice on course equivalencies.</li>
                  </ul>
                  <li><strong>How and when can I schedule a placement interview?</strong></li>
                  <ul>
                    <li>You can schedule a placement interview just about anytime you need one. Allow up to 30 minutes for the interview. E-mail the <a className="joeLink" href="mailto:andrea.dortmann@nyu.edu">Director of Language Programs</a> or call the department at 998-8650.</li>
                  </ul>
                  <li><strong>How do I officially declare a major or minor in German?</strong></li>
                  <ul>
                    <li>Schedule an appointment with the Director of Language Programs or the Director of Undergraduate Studies, or just drop by during office hours. The offices are in 19 University Place, 3rd floor.</li>
                  </ul>
                  <li><strong>How many courses do I need for a major in German?</strong></li>
                  <ul>
                    <li>The major in German Literature and Culture requires eight courses (32 points) at the advanced level (100-level and higher), <strong>three of which may be in English. Courses in English must be approved by the DUGS and form a coherent concentration.</strong> The prerequisite for the major is the successful completion of German language training through the intermediate level; language courses at the elementary or intermediate levels cannot be counted for major credit.</li>
                  </ul>
                  <li>How many courses do I need for a minor in German?</li>
                  <ul>A minor in German requires 5 courses (20 points), including two courses at the 100-level and one course at the 3/400-level. Courses taught in English cannot be used to satisfy minor requirements. However, 8 points of intermediate language study may be counted for the minor.</ul>
                </ul>
                <br></br>
                <h3 className="majorHeader">STUDY ABROAD</h3> 
                <hr></hr>
                <ul>
                  <li><strong>How do I find out about my options for study abroad?</strong></li>
                  <ul>
                    <li>If you are interested in participating in an NYU direct exchange programs (in Bonn, Berlin or Vienna) or in NYU global site in Berlin, consult with the Director of Undergraduate Studies.</li>
                  </ul>
                  <li><strong>If you are interested in participating in an NYU direct exchange programs (in Bonn, Berlin or Vienna) or in NYU global site in Berlin, consult with the Director of Undergraduate Studies.</strong></li>
                  <ul>
                    <li>Minimum requirements for study abroad are the successful completion of 64 points of undergraduate course work and a GPA of 3.0.</li>

                  </ul>
                  <li><strong>How much German do I need to know in order to study abroad?</strong></li> 
                  <ul>
                    <li>This depends upon the program you choose. If you want to apply to an NYU direct exchange program in Berlin or Vienna, you must have successfully completed Intermediate German II or the equivalent by the time you begin the exchange. We recommend that you also, if possible, take at least one post-intermediate course, such as Conversation & Composition or Germany: 1989 & Beyond, to prepare yourself adequately for these exchange programs.</li>
                    <li>The exchange program in Bonn offers courses in English as well as in German. If you want to do all of your coursework there in German, then the same considerations apply as for the exchanges in Berlin and Vienna. But if you are interested only in courses in English, then no German language preparation is necessary (although we still recommend completion of at least the elementary level before you go abroad to give you some basic "survival" skills). </li>
                  </ul>
                  <li><strong>When do I apply for study abroad?</strong></li>
                  <ul>
                    <li>Applications for fall-semester of full-year study abroad are due by May 15. Applications for spring-semester study abroad are due by November 1. NYU in Berlin applications are due before spring break.</li>
                  </ul>
                </ul>
                <br></br>
                <h3 className="majorHeader">HONORS</h3> 
                <hr></hr>
                <ul>
                  <li><strong>When should I start thinking about honors in German?</strong></li>
                  <ul>
                    <li>If you qualify or think you will qualify for honors (GPA of 3.65 both overall and in the major), you should begin to consider a research focus or thesis topic in the second semester of your junior year. Begin discussions with potential thesis advisors and with your academic advisor as soon as possible. The honors thesis is a significant project that will require a lot of reading and research; it should represent both a culmination of your undergraduate studies and a natural evolution of your own interests.</li>
                  </ul>
                </ul>
                <br></br>
                <h3 className="majorHeader">ADVISING</h3> 
                <hr></hr>
                <ul>
                  <li><strong>Who is my academic advisor?</strong></li>
                  <ul>
                    <li>Both majors and minors should please consult with either the Director of Undergraduate Studies or the Director of Language Programs before registering for courses.</li>
                  </ul>
                </ul>
                </div>

      </PageContent>
    </Grommet>
  );
}

export default FAQ;
