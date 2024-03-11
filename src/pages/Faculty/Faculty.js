import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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

const CardTemplate = ({ title, paragraph, professorOf, email }) => {
  const size = useContext(ResponsiveContext);
  return (
   
    <Card>
      <CardHeader pad={{ bottom: 'small', horizontal: 'medium', top: 'medium'}}>
        <Heading level={2} margin={{ vertical: "none", horizontal: "none" }}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad={{ top: 'small', horizontal: 'medium' }}>
        <Heading level={4} margin="none">
          {professorOf}
        </Heading>

        <Heading level={3} margin={{ top: '3', bottom: 'small' }}>
          Areas of Research/Interest
        </Heading>
        <Paragraph maxLines={size === "small" ? 3 : undefined}>
          {paragraph}
        </Paragraph>
      </CardBody>
      <CardFooter pad="medium" background="background-contrast">
      <a className="emailLink" href={"mailto:" + email}>{email}</a>
      </CardFooter>
    </Card>
  );
};

 

function Faculty() {
  return (
    <Grommet theme={theme}>

      <PageContent>
        <PageHeader  className="pageHeader" title="Faculty" />
        <div className="cards">
        <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
          <CardTemplate title={"Elisabeth Strowick"} professorOf={"Chair of the Department of German, Professor of German"} paragraph={"German literature and thought from the 19th century to the present, literary theory, psychoanalysis, ecocriticism, aesthetics, rhetoric, and poetics of knowledge"} email={"strowick@nyu.edu"} />
          <CardTemplate title={"Benjamin Lewis Robinson"} professorOf={"Director of Graduate Studies, Assistant Professor of German"} paragraph={"Literature and political theory; political theater; postcolonial literature and theory; biopolitics and the Anthropocene"} email={"blr4141@nyu.edu"} />
          <CardTemplate title={"Leif Weatherby"} professorOf={"Director of Undergraduate Studies, Associate Professor of German"} paragraph={"Romanticism and Idealism; digital theory; political economy"} email={"leif.weatherby@nyu.edu"} />
          <CardTemplate title={"Andrea Dortmann"} professorOf={"Director of Language Program, Clinical Associate Professor"} paragraph={"German Literature and Culture from the 19th to the 21st centuries; Foreign Language Pedagogy; Content Based Language Instruction (CBI); Curriculum Development; History, Theory, and Practice of Translation"} email={"andrea.dortmann@nyu.edu"} />
          <CardTemplate
            title={"Ulrich Baer"}
            professorOf={
              "Professor of Comparative Literature, German, and English"
            }
            paragraph={
              'Poetry (especially 19th and 20th century European and American); photography; literary theory; continental philosophy; visual culture; trauma and witnessing; what constitutes a "great" book; the liberal arts'
            }
            email={"ulrich.baer@nyu.edu"}
          />

          <CardTemplate title={"Christopher Wood"} professorOf={"Professor of German"} paragraph={"Temporalities of art: anachronism, archaism, typology, primitivisms; history of scholarship, esp. the disciplines of art history and archeology; folk art and folk literature; Märchen and Sagen; portraiture and especially “embedded” portraits (donors, votaries); votive objects and images, pilgrimages, relics; drawing and studio practice in the Renaissance; European art and the New World; art and replication technologies; magic and witchcraft in early modern Europe; art and the Protestant Reformation; iconoclasm; German art and culture in the 19th century; art and poetry of Romanticism"} email={"christopher.wood@nyu.edu"} />
          <CardTemplate title={"Hent de Vries"} professorOf={"Prof. of Religious Studies, German, Comparative Literature and Affiliated Prof. of Philosophy"} paragraph={"Metaphysics, philosophy of religion, religion and law"} email={"hentdevries@nyu.edu"} />
          <CardTemplate title={"Doreen Densky"} professorOf={"Clinical Associate Professor"} paragraph={"19th to 21st century German-language literature, culture and thought, literary and filmic modernism, narratology, content-based instruction"} email={"doreen.densky@nyu.edu"} />
          <CardTemplate title={"Andrea Krauss"} professorOf={"Professor of German"} paragraph={"German Literature, Poetics/Aesthetics of the long 18 th century, German Literature after 1945, Exile Literature, Literary Theory, Methodology, Cultural Theory and Analysis"} email={"andrea.krauss@nyu.edu"} />
          <CardTemplate title={"Avital Ronell"} professorOf={"Professor of German and Comparative Literature"} paragraph={"Literary and other discourses; feminist and queer letters; philosophy; technology and media; psychoanalysis; deconstruction; performance art"} email={"avital.ronell@nyu.edu"} />
          <CardTemplate title={"Friedrich Ulfers"} professorOf={"Associate Professor of German"} paragraph={"German Romanticism; 20th-century novel (Franz Kafka, Robert Musil); post-classical philosophy and its relation to modern science"} email={"friedrich.ulfers@nyu.edu"} />
          {/* <CardTemplate title={""} professorOf={""} paragraph={""} email={""} /> */}

         
        </Grid>
        </div>
      </PageContent>
    </Grommet>
  );
}

export default Faculty;
