import {
    Box,
    Grommet,
    Heading,
    PageContent,
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
  
  
 
  
  function DeutschesHaus() {
    return (
      <Grommet theme={theme}>
        <PageContent>
        <Box className="headerArea" gridArea="header" background="#ffffff" align="center" justify="center">
              <Heading className="pageHeader">Deutsches Haus at NYU</Heading>
            </Box>
         <div className="coursesContent">
          <p>Welcome to Deutsches Haus, New York’s leading institution for the culture and language of the German-speaking world. Located in the historic Greenwich Village district, Deutsches Haus is an integral part of New York University. Since 1977, it has provided New Yorkers with a unique forum for cultural, intellectual, and artistic exchange with Germany, Austria, and Switzerland through its three pillars: the language program, the cultural program, and the children's program.</p>
         <p><strong>Language:</strong> We are dedicated to meeting our students' diverse and ever-changing motivations for learning German. Our students receive the best instruction possible through our small class sizes (typically between 6-12 students) and innovative, thoughtful, and creative German language lessons (in-person and online) delivered by our team of highly qualified and experienced teachers. We also offer private tutoring for individuals and small groups at a variety of businesses across New York City</p>
         <p><strong>Culture: </strong>Our exhibitions, talks, concerts, conferences, readings, and film screenings attract a diverse and involved audience of New Yorkers, interested in today’s artistic and intellectual agenda. Deutsches Haus serves as a platform for encounters between artists, writers, scientists, thinkers, and academics engaged with the German-speaking world.</p>
          <p><strong>Children: </strong>Deutsches Haus offers fun classes and educational activities for children, including the celebration of traditional festivities around St. Martin, St. Nicholas, Carnival, and Easter. The children's program continues to create a sense of community among families who share an interest in German, Austrian, and Swiss culture.</p>
          <p>For more information on the history of Deutsches Haus please <a className="joeLink" href="https://as.nyu.edu/research-centers/deutscheshaus/about/history-of-deutsches-haus.html">visit this link</a>.</p>
         </div>
  
        </PageContent>
      </Grommet>
    );
  }
  
  export default DeutschesHaus;
  