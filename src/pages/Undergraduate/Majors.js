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




function Majors() {
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
              <PageHeader className="pageHeader" title="Majors, Minors, & Honors" />
              
            </Box>
            <Box gridArea="main" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="coursesContent">
              <div>
                <p>The prerequisite for all majors in the department is the completion of German language training through the intermediate level (GERM-UA 4 or GERM-UA 20). Students who have received equivalent language training elsewhere may satisfy the prerequisite through the departmental placement examination. Students who wish to major or minor in German must register with the department and have their programs approved by the Director of Undergraduate Studies (DUS) or the Director of Language Programs. Majors and minors will be assigned a departmental adviser, usually the DUS, with whom they should consult before course registration each semester.</p>
                <p>A note on course numbers:</p>
                <ul>
                  <li>100-level courses (GERM-UA 1xx in New York or GERM-UA 91xx at NYU Berlin) are all taught in German at the post-intermediate level</li>
                  <ul>
                    <li>take any two of these courses before moving on to the 300/400 level</li>
                  </ul>
                  <li>200-level courses (GERM-UA 2xx in New York or GERM-UA 92xx at NYU Berlin) are all taught in English</li>
                  <ul>
                    <li>these courses do not count toward the German minor</li>
                  </ul>
                  <li>300-/400-level courses (GERM-UA 3xx/4xx in New York or GERM-UA 93xx/94xx at NYU Berlin) are all taught in German at the advanced level</li>
                  <ul>
                    <li>the prerequisite for these courses is two courses at the 100 level</li>
                    <li>if you are a native or heritage speaker, please consult with the DUS for placement</li>
                  </ul>
                </ul>
              </div>
              <div>
                <h3 className="majorHeader">MAJOR PROGRAMS</h3>
                <hr></hr>
                <h3 className="majorHeader">GERMAN LITERATURE AND CULTURE</h3>
                <h4>REQUIREMENTS</h4>
                <p>This major consists of eight 4-point courses (32 points) at the 100 level or higher, three of which may be taught in English, and all of which must be completed with a grade of C or better. Courses in English outside of the department must have approval of the DUS. No courses may be double-counted toward the requirements of another major or minor.</p>
                <p>The eight courses are to be distributed as follows:</p>
                <ul>
                  <li>Two required courses at the 100 level</li>
                  <ul>
                    <li>German Conversation and Composition, GERM-UA (9)111</li>
                    <li>Introduction to German Literature, GERM-UA (9)152</li>
                  </ul>
                  <li>Six courses above the 100 level (a maximum of three of these may be taught in English)</li>

                </ul>
                <p><strong>Note: </strong>Students are strongly encouraged to fulfill some of the program requirements through a semester of study abroad.</p>
                <p>Students eligible for honors are required to pursue a two-semester, 8-point sequence, in which they take the Honors Seminar (GERM-UA 999) in the fall and the Honors Thesis (GERM-UA 500) in the spring of their senior year (see the Honors Program description). With the permission of the director of undergraduate studies, up to 4 points of independent study, work-study in Germany, or internship work may also be counted toward the major. See below for additional information.</p>
                <br></br>
                <h3 className="majorHeader">GERMAN AND LINGUISTICS</h3>
                <p>This joint major requires a total of nine 4-point courses (36 points) completed with a grade of C or better. The German part of this major is satisfied by taking four 4-point courses (16 points) beyond the intermediate level.</p>
                <h4>REQUIREMENTS</h4>
                <p>The nine courses are to be distributed as follows:</p>
                <ul>
                  <li>One advanced conversation or composition course chosen from</li>
                  <ul>
                    <li>German Conversation and Composition (GERM-UA 111)</li>
                    <li>Advanced Composition and Grammar (GERM-UA 114)</li>
                  </ul>
                  <li>Introduction to German Literature (GERM-UA 152)</li>
                  <li>Two additional advanced literature courses taught in German, to be selected from among departmental offerings (300- or 400-level courses).</li>
                </ul>
                <p>The linguistics part of this major is satisfied by taking the following five 4-point courses (20 points):</p>
                <ul>
                  <li>One introductory course: Language (LING-UA 1) or Language and Mind (LING-UA 3)</li>
                  <li>Sound and Language (LING-UA 11)</li>
                  <li>Grammatical Analysis (LING-UA 13)</li>
                  <li>And a total of two additional courses from two different fields of linguistics, chosen from the following:</li>
                  <ul>
                    <li>Historical linguistics (LING-UA 14)</li>
                    <li>Sociolinguistics (LING-UA 15, LING-UA 18, LING-UA 30, LING-UA 38, LING-UA 57)</li>
                    <li>Phonology (LING-UA 12)</li>
                    <li>Semantics (LING-UA 4)</li>
                    <li>Computational linguistics (LING-UA 6, LING-UA 7)</li>
                    <li>Psycholinguistics (LING-UA 5, LING-UA 43, LING-UA 54, LING-UA 59)</li>
                    <li>Structure of a Modern Language (LING-UA 10, LING-UA 42, LING-UA 44, LING-UA 9032)</li>
                  </ul>
                </ul>
              </div>
              <div>
              <h3 className="majorHeader">MAJOR IN GERMAN AND GLOBAL LIBERAL STUDIES</h3>
                <hr></hr>
                <h3 className="majorHeader">(FOR STUDENTS MATRICULATED IN GLS)</h3>
                <p>To earn this joint major, students must fulfill all requirements of the GLS degree and the major in German. However, a maximum of two courses may count simultaneously for both programs with the following directives:</p>
                <ul>
                  <li>Any of the advanced courses in the department of German, GERM-UA 300 or higher, will also count as meeting one of the GLS senior seminar requirements. Please note that students will nonetheless be expected to complete one GLS senior seminar at minimum</li>
                  <li>Courses with a significant transnational content will also count toward meeting the GLS Advanced Global Topics requirement (usually completed while abroad during junior year).</li>
                </ul>
              </div>
              <div>
              <h3 className="majorHeader">MINOR PROGRAM</h3>
                <hr></hr>
                <p>The German minor is a flexible course of study, designed to meet you at your proficiency level and to allow you to refine your skills and knowledge. Whether you just began learning German at NYU, studied it for years in high school, or are a heritage speaker—there’s an individualized version of the German minor tailor-made just for you.</p>
                <h4>REQUIREMENTS</h4>
                <p>The German minor program requires five 4-point courses (20 points) of departmental course work, all of it taught in German, and all of which must be completed with a grade of C or better. The guidelines are as follows:</p>
                <ul>
                  <li>Intermediate German I (GERM-UA 3), Intermediate German II (GERM-UA 4), or Intensive Intermediate German (GERM-UA 20) can be counted toward the minor.</li>
                  <li>Any 100-, 300-, and 400-level courses can be applied toward the minor. (You are not limited only to GERM-UA 111 Conversation/Composition or GERM-UA 152 Introduction to German Literature.)</li>
                  <li>A minimum of one course at the advanced level (any 300-/400-level course) is required. </li>
                </ul>
                <p>Courses taught in English, independent studies, and Elementary German I and II (GERM-UA 1 and GERM-UA 2)/Intensive Elementary German (GERM-UA 10) do not count toward the minor.</p>
              </div>
              <div>
              <h3 className="majorHeader">HONORS PROGRAM</h3>
                <hr></hr>
                <p><strong>Eligibility:</strong> The departmental honors program is open to German majors. Students are admitted to the program on the basis of superior work after at least two semesters of study in German at the advanced level. The minimum eligibility requirements for the honors program are an overall grade point average of 3.65 and an average of 3.65 in the major. Each student in the honors program should select an honors adviser from among the undergraduate teaching faculty of the department.</p>
                <p><strong>Requirements: </strong>Students must register for Honors Seminar (GERM-UA 999) in the fall, and Honors Thesis (GERM-UA 500) in the spring, and work under the guidance of a faculty member to produce a research paper of 40 to 60 pages. The thesis can be written in German or English. If it is written in English, the student must also write an abstract of 3 to 4 pages in German. There will also be a one-hour oral presentation of the senior thesis with two faculty members.</p>
              </div>
              <div>
              <h3 className="majorHeader">B.A./M.A. PROGRAM IN GERMAN</h3>
                <hr></hr>
                <p>The B.A./M.A. program in German is designed to prepare undergraduate students for career choices requiring advanced knowledge of German language, literature, and culture, or a sophisticated understanding of the German intellectual and critical traditions. The four-year undergraduate component of the program includes one semester of study abroad and leads to the B.A. degree. Students in this portion of the program develop their language skills and cultural awareness and examine significant works and authors of German literature.</p>
                <p><strong>Eligibility: </strong>Students must have completed 48 credits of undergraduate work, with at least 16 of these points completed at NYU, and have been approved by the director of undergraduate studies for application to the combined degree program. Students must also meet the following minimum requirements for admission to the program:</p>
                <ul>
                  <li>Primary major in German</li>
                  <li>Cumulative GPA of 3.5 or higher</li>
                  <li>Major GPA of 3.6 or higher</li>
                  <li>Satisfactory completion at NYU of at least two 4-point courses in German at the advanced level by the start of the first semester in the program</li>
                  <li>Evidence of overall language competency in German, sufficient for successful advanced undergraduate and graduate study</li>
                </ul>
                <h4>Degree Requirements:</h4>
                <p><strong>Study Abroad: </strong>Undergraduates accepted into the program are required to spend at least one semester studying abroad in one of the NYU exchange programs in a German-speaking country. The study abroad requirement may be waived by the department in consideration of special circumstances. Summer study in an approved program may be used to satisfy the study abroad requirement.</p>
                <p><strong>Master’s Thesis: </strong>Students are required at the end of the fifth year of the program to submit a master’s thesis, which should represent the culmination of a longer-term research effort.</p>

              </div>
              </div>
            </Box>


            <Box gridArea="sidebar" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="rightSidePeople">
                <div className="rightSidePeopleSection">
                  <h3 className="majorHeader">DIRECTOR OF UNDERGRADUATE STUDIES</h3>
                  <hr></hr>
                  <h3 className="majorHeader">Leif Weatherby</h3>
                  <h4>Associate Professor</h4>
                  <a className="emailLink" href="google.com">leif.weatherby@nyu.edu</a>
                  <p className="address">19 University Place<br></br>Room 521</p>
                </div>
                <div className="rightSidePeopleSection">
                  <h3 className="majorHeader">LANGUAGE PROGRAM DIRECTOR</h3>
                  <hr></hr>
                  <h3 className="majorHeader">Andrea Dortmann</h3>
                  <h4>Clinical Associate Professor</h4>
                  <a className="emailLink" href="google.com">Andrea.dortmann@nyu.edu</a>
                  <p className="address">19 University Place<br></br>Room 333</p>
                </div>
              </div>
            </Box>

          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}


export default Majors;

