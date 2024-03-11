import React from "react";
import { Grommet, Grid, Box, PageHeader, ResponsiveContext } from "grommet"; // Import Grommet components
import '../../index.css';
// import ClassCard from "./ClassCard"; // Assuming you have a separate ClassCard component
import ClassCard from "../../components/ClassCard";
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

function CurrentUgradCourses() {
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
            <Box  gridArea="header" background="#ffffff" align="center" justify="center">
              <PageHeader className="pageHeader" title="Current Undergraduate Courses" />
            </Box>
            <Box gridArea="main" background="#ffffff" align="center" justify="center">
              <div className="classCard">
                <ClassCard code={"GERM-UA133"} course={"GERMAN CULTURE THROUGH FILM"} meetingTime={"TR 12:30 – 1:45p"} language={"German"} credits={"4"} professor={"Doreen Densky"} description={"In this course, we will examine different aspects of German culture through cinematic expression. As historical documents, feature films offer unique insights into everyday life and collective memory surrounding past events. As aesthetic products, they provide access to contemporary reflections of, and reactions to, multiple regime changes, ruptures, crises, and antagonisms. The course has three interrelated aims: 1) to present select films as entertainment and art form in relation to larger social and political frameworks, from Wilhelmine and Weimar-era films, via Third Reich and Postwar cinema, on to movies from both sides of the Wall during the Cold War; 2) to introduce the elements of film analysis in German while refining speaking and writing skills; and 3) to shed light on the complex issues involved in constructing or defining any unified national identity. Taught in German."}></ClassCard>
                <ClassCard code={"GERM-UA152"} course={"INTRODUCTION TO GERMAN LITERATURE"} meetingTime={"TR 3:30 – 4:45p"} language={"German"} credits={"4"} professor={"Doreen Densky"} description={"This course has two major goals. First, it introduces students to a selection of representative authors and exemplary texts of German-language literature from the 18th to the 21st century. Second, it helps students develop close and critical reading skills while they learn to express their analysis of literary texts in German, both in speaking and in writing. Covering the three major literary genres—poetry, prose, drama—some of the following issues will be discussed: the depiction of otherness; the representation of time and history; the uncanny; the relationship between form and content; the economy of human relationships on the basis of hierarchy, love, and authority. Taught in German."}></ClassCard>
                <ClassCard code={"GERM-UA220"} course={"MARX AND PHILOSOPHY"} meetingTime={"F 11:00a – 1:30p"} language={"English"} credits={"4"} professor={"Hent de Vries"} description={"While the publication of a new complete translation into English and accompanying annotation of Karl Marx's magnum opus, entitled Das Kapital (Capital), is imminent, this intellectual and political moment in time is as good as any to revisit the theoretical (metaphysical) and pragmatic (ethical) premises, next to the renewed and still growing influence, of this author's most important work. In addition to proposing an integral rereading of Capital as a founding document of so-called historical materialism and a resounding critique of classical political economy, special attention will be paid to the most original and rigorous among Marx's 20th and 21st century philosophical interpreters. "}></ClassCard>
                <ClassCard code={"GERM-UA244"} course={"DERRIDA’S GREATEST HITS"} meetingTime={"MW 4:55 – 6:10p"} language={"English"} credits={"4"} professor={"Avital Ronell"} description={"with German philosophy, psychoanalysis, aesthetics, and literature. We shall study how he slays major falsehoods and mystifications associated with the metaphysical tradition, including gender, drugs, nationalisms, and political presumption."}></ClassCard>
                <ClassCard code={"GERM-UA283"} course={"SIGNS OF LIFE"} meetingTime={"TR 3:30-4:45p"} language={"English"} credits={"4"} professor={"Benjamin Lewis Robinson"} description={"What is the meaning of “life”? The use of the word life is ambiguous: On the one hand, it refers to biological life, the organic cycle of birth and decay, of labor and consumption, the sustenance of a living body. On the other hand, life means something more – that which transcends the biological, beginning when the necessities of life have been met. It is in this second sense that one usually speaks of the meaning of life referring to the good life, higher life, truly human life. In the face of contemporary social and ecological crises, this distinction between sheer life and meaningful life needs urgently to be reconsidered."}></ClassCard>
                <ClassCard code={"GERM-UA390"} course={"CONTEMPORARY GERMAN FILM"} meetingTime={"TR 9:30 – 10:45a"} language={"German"} credits={"4"} professor={"Elisabeth Strowick"} description={"German cinema is on the map again. The many awards German films have been granted over the past two decades speak to the renaissance of German Cinema since 2000. Among these movies are Florian Henckel von Donnersmarcks The Lives of Others (Academy Award for Best Foreign Language Film, 2006), Caroline Link's Nowhere in Africa (Academy Award for Best Foreign Language Film, 2002), Fatih Akin's Head-On (Golden Bear at the Berlin International Film Festival, 2004; European Film Award 2004), Oliver Hirschbiegel's Downfall (nominated for Academy Award for Best Foreign Language Film, 2004) or Wolfgang Becker’s Goodbye, Lenin! (European Film Award, 2003). Nazi Germany, the Stasi, or the Reunification are prominent topics of this internationally acclaimed Contemporary German Cinema. Parallel to these mainstream productions, an aesthetically far more adventurous cinema has developed known as “Berlin School” or “Nouvelle Vague Allemande.” Directors associated with the Berlin School are Christian Petzold, Angela Schanelec, Christoph Hochhäusler or Valeska Grisebach. Dissecting the everyday reality of post-wall Germany, this ‘counter-cinema’ draws on the New German Cinema of the 1970s (among others) to develop radical notions of realism and challenge narrative conventions. This course will give a survey on German Film since 2000 – discussing the historical and cultural context of selected movies as well as analyzing aesthetic strategies and concepts of realism in Contemporary German Cinema. Taught in German."}></ClassCard>
                <ClassCard code={"GERM-UA488"} course={"WEIMAR ON THE PACIFIC: GERMAN EXILE CULTURE IN THE UNITED STATES"} meetingTime={"MW 9:30 – 10:45a"} language={"German"} credits={"4"} professor={"Andrea Krauss"} description={"After Hitler's seizure of power in 1933, the number of artists and intellectuals who fled the Nazi regime soon rose into the thousands. Many of these German expatriates ultimately settled in the United States (e.g. Los Angeles, New York), where, simultaneously attracted and alienated by their new surroundings, they made a significant impact on American culture. The seminar will explore German Exile Culture in the U.S. in its broad variety spanning a spectrum from film (Fritz Lang, Fred Zinnemann) to architecture (Walter Gropius), literature (Thomas Mann, Bertolt Brecht, Lion Feuchtwanger), and philosophy (Theodor W. Adorno, Hannah Arendt). Based on the aesthetic and conceptual specificities of the artifacts, class discussions will focus on the relations between language and identity, art and politics, modernist and mass culture, public discourse and democracy. The seminar will close with a look at postwar America and the McCarthy era, when European emigrants became the target of suspicion as left-wing intellectuals."}></ClassCard>
              </div>
            </Box>


            <Box gridArea="sidebar" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="rightSideLinks">
                <div className="rightLinkSection">
                  <h4>Click Here</h4>
                  <a className="pagelink" href="https://as.nyu.edu/content/dam/nyu-as/german/documents/1.24.25%20GERM%20UA%20Spring%2024%20website%20schedule.pdf">PDF of the Spring 2024 Undergraduate Course Schedule.</a>
                </div>
                <div className="rightLinkSection">
                  <h4>Click Here</h4>
                  <a className="pagelink" href="https://as.nyu.edu/content/dam/nyu-as/german/documents/GERM_UA_COURSE_POSTERS_S24V.pdf">PDF of the Spring 2024 Undergraduate Course Posters.</a>
                </div>

              </div>
            </Box>

          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default CurrentUgradCourses;
