import {
  Box,
  Grid,
  Grommet,
  PageHeader,
  ResponsiveContext,
} from "grommet";

import ClassCard from "../../components/ClassCard";
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

 

function CurrentGrad() {
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
            <Box gridArea="header" background="#ffffff" align="center" justify="center">
              <PageHeader className="pageHeader" title="Current Graduate Courses" />
            </Box>
            <Box gridArea="main" background="#ffffff" align="center" justify="center">
              <div className="classCard">
                <ClassCard code={"GERM-GA1999"} course={"GRADUATE RESEARCH & WRITING"} meetingTime={"M 2:00 - 4:45p"} language={"German"} credits={"4"} professor={"Andrea Krauss"} description={"The goal of this course is to guide students through writing a publication-ready article. The seminar follows a work-in-progress format including the following components: introduction to the scholarly publication system (i.e. peer review procedures, criteria for acceptance, journals in the field); analysis and evaluation of a variety of published articles with regard to practices of outlining a research question, building an argument, and developing a conceptual framework, methodology and a writing style. The second half of the seminar proceeds in the mode of a Schreibwerkstatt. Participants will present their projects, write abstracts, circulate and discuss their works-in-progress. They will receive a grade once they have submitted their article to a journal for publication review."}></ClassCard>
                <ClassCard code={"GERM-GA2223"} course={"...THEN WE TAKE BERLIN! AESTHETIC PRACTICES AND SOCIAL CRITICISM IN CONTEMPORARY GERMANY"} meetingTime={"T 2:00 - 4:45p, (meets 3/5 - 4/19)"} language={"English"} credits={"2"} professor={"Max Czollek"} description={"The year 2013 saw the takeover of the state theater Maxim Gorki Theater Berlin by Shermin Langhoff and Jens Hillje. Langhoff and Hillje, who had formerly been based in the small theater Ballhaus Naunynstraße in Berlin Kreuzberg, had become known for a new approach to theater they labeled post-migrant theater. Why, they asked, had German theater stages remained so far behind in representing the actual diversity of contemporary society - in their stories and the bodies on and behind the stage? And why had they been so slow in taking up their concerns? This development marked a shift towards a return to social criticism in artistic practices that subsequently spread to other fields such as prose, visual arts, and - to a certain degree - poetry. In this course, we will examine the predecessors of social criticism in German literature and art, a few of its international inspirations, and the developments that have taken place during the last decade. We will read texts, watch movies, and engage in dialogue about the possibilities and responsibilities of artistic practices in our time"}></ClassCard>
                <ClassCard code={"GERM-GA2610"} course={"DIGITAL MEDIA THEORY"} meetingTime={"W 11:00a - 1:45p"} language={"English"} credits={"4"} professor={"Leif Weatherby"} description={"This course introduces the history and concept of the digital. Digital systems are representation systems, and so engage a wide variety of philosophical sources, literary theory, and media theory. Digital technologies developed from a dense multidisciplinary discourse that included mathematics, language philosophy, logic, and philosophy, reposing the classical metaphysical question of the relationship of representation to reality. The course focuses on three concepts that emerged from this rich overlap: information, computation, and the network. These concepts are associated with Claude Shannon, Alan Turing, and Warren McCulloch, and rely on frameworks from Gottfried Wilhelm Leibniz, Immanuel Kant, and the trajectory from Gottlob Frege and Charles Sanders Peirce through the Vienna School's logical positivism, Ludwig Wittgenstein, and beyond. The philosophical origins of digital technologies form a dialogue with media-theoretical assessments of those same technologies, and the course will give particular weight to the works of Friedrich Kittler, N. Katherine Hayles, Wendy Chun, and, Luciana Parisi, Ramon Amaro, and Sianne Ngai, with a focus on bridging the gap between the origins of digital technologies and their extensive aesthetic and political-economic consequences in the present. This course fulfills a core requirement for the Advanced Certificate in Digital Humanities."}></ClassCard>
                <ClassCard code={"GERM-GA2600"} course={"LITERATURE AND JUSTICE: KLEIST, KAFKA, COETZEE"} meetingTime={"W 2 - 4:45p"} language={"English"} credits={"4"} professor={"Benjamin Lewis Robinson"} description={"Kleist, Berlin, 1800s – Kafka, Prague, 1910s – Coetzee, Cape Town, 1980s. Reading these three writers shows how the question of justice has been posed and reconfigured – from the revolutionary epoch, to the climax and collapse of European imperialism in the First World War, and on to the period of anti-colonization and neocolonial predations of globalization. In each case, the literary engagement with justice gives rise to distinctive kinds of literature and probing explorations of modern political life. Saturated by the injustices of their times, these literary works expose aporias in the law, navigate intractable problems of personal and institutional complicity, reflect on the history and the form of rendering justice (or denying it), and, for lack of a clear theoretical conception, convey a sense of the justice that is felt to be missing. What does reading literature contribute to the theory of justice?"}></ClassCard>
                <ClassCard code={"GERM-GA1117"} course={"GOETHE, HEGEL, SHAKESPEARE THE EMERGENCE OF LITERATURE AS CRITIQUE"} meetingTime={"R 2:00 - 4:45p"} language={"English"} credits={"4"} professor={"Anselm Haverkamp"} description={"Political criticism (in the general sense of the word ‘political’) is no recent invention, it is the oldest mode of literary application, which limits the reach of literature from the start (Plato’s Politeia). In the Structural Transformation of the Literary Sphere that occurred after the 18 th century (Habermas’s title), literature’s ways of representation came to include critique, and criticism aesthetic critique. The exemplary scene for this turn is Goethe’s Wilhelm Meister’s involvement with Shakespeare’s Hamlet. The philosopher Hegel’s Phenomenology of Spirit made world historical sense of this primal scene of a literary critique. In a close reading of Shakespeare’s plays, which is unrivaled and little recognized in its depth up to now, Hegel traced and marked in Shakespeare’s theater the threshold of the modern world in its critical emergence. The seminar shall elaborate the theoretical approach of Hegel’s critical method as the model of a ‘new’ criticism as a new historicism and discuss some consequences for the theater performance after Shakespeare and the novel after Goethe."}></ClassCard>
              </div>
            </Box>


            <Box gridArea="sidebar" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="rightSideLinks">
                <div className="rightLinkSection">
                  <h4>Click Here</h4>
                  <a className="pagelink" href="https://as.nyu.edu/content/dam/nyu-as/german/documents/1.23.24%20Spring%2024%20Grad%20website%20schedule.pdf">PDF of the Spring 2024 Graduate Course Schedule.</a>
                </div>
                <div className="rightLinkSection">
                  <h4>Click Here</h4>
                  <a className="pagelink" href="https://as.nyu.edu/content/dam/nyu-as/german/documents/GERM_GA_SPR24_COURSE_POSTERS.pdf">PDF of the Spring 2024 Graduate Course Posters.</a>
                </div>

              </div>
            </Box>

          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default CurrentGrad;
