import {
    Card,
    CardHeader,
    CardBody,
    Grid,
    Grommet,
    Heading,
    PageContent,
    PageHeader,
    Paragraph,
    ResponsiveContext,
  } from "grommet";
  
  
  import '../../index.css';
  
  import React, { useContext } from "react";
  
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
  
  const CardTemplate = ({ name, email, interests }) => {
    const size = useContext(ResponsiveContext);
    return (
     
      <Card>
        <CardHeader pad={{ bottom: 'small', horizontal: 'medium', top: 'medium'}}>
          <Heading level={2} margin={{ vertical: "none", horizontal: "none" }}>
            {name}
          </Heading>
        </CardHeader>
        <CardBody pad={{ top: 'small', horizontal: 'medium' }}>
          <Heading level={4} margin="none">
            <a className="emailLink" href={"mailto:" + email}>{email}</a>
          </Heading>
  
          <Heading level={3} margin={{ top: '3', bottom: 'small' }}>
            Areas of Research/Interest:
          </Heading>
          <Paragraph className="interests" maxLines={size === "small" ? 3 : undefined}>
            {interests}
          </Paragraph>
        </CardBody>
      </Card>
    );
  };
  

  function StudentProfiles() {
    return (
      <Grommet theme={theme}>
        <PageContent>
          <PageHeader className="pageHeader" title="Graduate Student Profiles" />
          <div className="cards">
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
        
          
          <CardTemplate name={"Alexander Braunegg"} email={"acb787@nyu.edu"} interests={" German literature from the 19th Century to the present, literary theory, and political theory"}></CardTemplate>
          <CardTemplate name={"Aviv Hilbig-Bokaer"} email={"ah5423@nyu.edu"} interests={"Literature and visual culture from the early 1900s with a focus on the Mann family and Weimar-era performance"}></CardTemplate>
          <CardTemplate name={"Julia Landmann"} email={"jal9436@nyu.edu"} interests={"Focusing on the relations between social and aesthetic theory and philosophy, her research combines poetics of form, critical theory, and black study"}></CardTemplate>
          <CardTemplate name={"Lukas Oberem"} email={"lo2096@nyu.edu"} interests={"Philosophy, narratology, and psychoanalysis, especially in regards to the debate between French philosophy and German thought"}></CardTemplate>
          <CardTemplate name={"Marlene Reich"} email={"mr5390@nyu.edu"} interests={"19th and early 20th century literature, psychoanalysis, and the mind-body relationship in literature"}></CardTemplate>
          <CardTemplate name={"Manuela Ruckdeschel"} email={"mmr9849@nyu.edu"} interests={"The 19th to 21st century, and include poetry and poetics, interrelationships between literature and visual art, visual studies, media and film studies, psychoanalysis and political theory"}></CardTemplate>
          <CardTemplate name={"Arne Sander"} email={"arne.sander@nyu.edu"} interests={"Epistemology, semiotics, affect– and media theory"}></CardTemplate>
          <CardTemplate name={"Simon Schoch"} email={"simschoch@nyu.edu"} interests={"The close connection between politics and aesthetics, thhe drama around 1800, 19th century Realism, and literature after 1945"}></CardTemplate>
          <CardTemplate name={"Dafna Shetreet"} email={"ds5770@nyu.edu"} interests={"20th-century German-Jewish philosophy and literature, the dialectics of modernity and tradition, secularism and theology as well as literary theory, history of reception and translation theory"}></CardTemplate>
          <CardTemplate name={"Rahel von Minden"} email={"rvm271@nyu.edu"} interests={"German literature of the late 19th and early 20th century, literary theory, the historical avant-garde(s), psychoanalysis, theories of the body"}></CardTemplate>
          <CardTemplate name={"Ioanna Kostopoulou"} email={"ik2274@nyu.edu"} interests={"The theory and practice of translation, Surrealism, psychoanalysis’ intersections (as a theory and a clinical practice) with literature, philosophy and the arts"}></CardTemplate>
          <CardTemplate name={"Raymond Blankenhorn"} email={"rdb9843@nyu.edu"} interests={"The dynamics of performance within the context of German history and criticism"}></CardTemplate>
          <CardTemplate name={"Owen Hart"} email={"orh6958@nyu.edu"} interests={"Aesthetic philosophy, narratives of consciousness, modernism, media studies, and literary theory"}></CardTemplate>
         
          
          </Grid>
          </div>
        </PageContent>
      </Grommet>
    );
  }
  
  export default StudentProfiles;
  