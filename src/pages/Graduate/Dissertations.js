import {
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
  
  const AlumniCard = ({ name, thesis, job}) => {
    return (
      <div className="class-card">
        <h3 className="alumniName">{name}</h3>
        <hr></hr>
        <h3 className="alumniThesis">"{thesis}"</h3>
        <h5 className="alumniText">{job}</h5>
      </div>
    );
  };


  
  function Dissertations() {
    return (
      <Grommet theme={theme}>
        <PageContent>
       
          <PageHeader className="pageHeader" title="Dissertations and Alumni Careers" />
          <div className="classCard">
          <AlumniCard name={"Leonie Ettinger, Ph.D. 2023"} thesis={"A Fatherland for the Fatherless: Crises of Authority in Expressionist Literature"} job={"Postdoctoral Teaching Fellow, NYU College Core Curriculum"}></AlumniCard>
          <AlumniCard name={"Endre Holéczy, Ph.D. 2023"} thesis={"Framing the Modern Subject: Stage Directions in German-Language Drama from 1889 to 1922"} job={"Dramaturg, Maxim Gorki Theater in Berlin, Germany"}></AlumniCard>
          <AlumniCard name={"Benjamin Dillon Schluter, Ph.D. 2023"} thesis={"After Geo-Graphy: Oceanic Turns in German Thought and Culture Around 1800"} job={"Postdoctoral Teaching Fellow, NYU College Core Curriculum"}></AlumniCard>
          <AlumniCard name={"William Cheung, Ph.D. 2022"} thesis={"The Colors of Modernity: Limning the Margins in Walter Benjamin, Rainer Maria Rilke, and Peter Altenberg"} job={"Abby O'Neill Fellow at Teachers College, Columbia University; Social Studies Teacher, Brooklyn Technical High School"}></AlumniCard>
          <AlumniCard name={"Marie-Luise Goldmann, Ph.D. 2021"} thesis={"'Gebannt, gebannt!' Zur Poetik des Banns in der Novelle des Realismus."} job={"Editor, Die Welt in Germany"}></AlumniCard>
          <AlumniCard name={"Ferdinand Bubacz, Ph.D. 2019"} thesis={"Die Möglichkeiten der Sinne – Wahrnehmungsmodelle und Wirklichkeitsinszenierungen bei Robert Musil und Rainer Maria Rilke"} job={"Program Coordinator Bachelor Program, Munich Business School"}></AlumniCard>
          <AlumniCard name={"Hyowon Cho, Ph.D. 2019"} thesis={"Rehearsal for the Eschaton"} job={"Assistant Professor of the Department of German Language and Literature at Yonsei University in Seoul"}></AlumniCard>
          <AlumniCard name={"Sean Larson, Ph.D. 2019"} thesis={"Built on Sand: Weimar Republic Representation and the November Revolution."} job={""}></AlumniCard>
          <AlumniCard name={"Temitope Noah, Ph.D. 2019"} thesis={"Nietzsche, Luther, and Thus Spoke Zarathustra"} job={"Visiting Research Fellow, University College London"}></AlumniCard>
          <AlumniCard name={"James Wagner, Ph.D. 2019"} thesis={"Irony and 'Unpolitics' in Wartime: An Overdue Critical Analysis of Thomas Mann’s Betrachtungen eines Unpolitischen and Its Place in the Critical Theory Tradition."} job={"Adjunct Instructor, NYU Translator"}></AlumniCard>
          <AlumniCard name={"Dominik Zechner, Ph.D. 2019"} thesis={"The Survival of Literature: Kafka and the Problem of Finitude"} job={"Assistant Professor of German, Rutgers University"}></AlumniCard>
          <AlumniCard name={"Daniel Cheng, M.A. 2018"} thesis={"Arbitrariness, Personhood, and Property in Hegel's Philosophy of Right"} job={"Accounts Assistant, Verso Books Publishing Company"}></AlumniCard>
          <AlumniCard name={"Jacob Denz, Ph.D. 2018"} thesis={"A Feeling Unlike Any Other: Reactionary Rhetorics of Rechtsgefühl in Kleist, Droste-Hülshoff, and Fontane"} job={"Law Clerk, United States District Court for the Southern District of Ohio"}></AlumniCard>
          <AlumniCard name={"Kurt Hollender, Ph.D. 2017"} thesis={"Literary Potions and Poisons: Schiller, Goethe, Kleist"} job={"Visiting Assistant Professor of German, College of Saint Benedict and Saint John’s University"}></AlumniCard>
          <AlumniCard name={"Jonathan Kassner, Ph.D. 2017"} thesis={"Autonomie und Kreatuerlichkeit: Hunde in der Literatur der Goethezeit und der Moderne"} job={"Tech Talent Acquisition Specialist EMEA at Belden"}></AlumniCard>
          <AlumniCard name={"Susanne Fuchs, Ph.D. 2016"} thesis={"Scenes of Surrender Figures of War Sociality and Subjectivity in German Drama around 1800"} job={"Visiting Lecturer in German Studies, Wellesley College; Translator"}></AlumniCard>
          <AlumniCard name={"Carmen Schmechel, Ph.D. 2015"} thesis={"Schiller und Freud: Vom Erhabenen zur Sublimierung. Eine Wissensgeschichte intellektueller Leidbewältigung"} job={""}></AlumniCard>
          <AlumniCard name={"Jerome Bolton, Ph.D. 2015"} thesis={"Toward a Theory of the Veteran: The Trenches, Trauma, and Technology's 'Third' Hero"} job={""}></AlumniCard>
          <AlumniCard name={"Nimrod Reitman, Ph.D. 2015"} thesis={"On the Serious Motherhood of Men: Dissonance in Music, Rhetoric, and Poetry"} job={""}></AlumniCard>
          <AlumniCard name={"Kevin Vennemann, Ph.D. 2015"} thesis={"'(denn unser Organismus ist oligarchisch eingerichtet)' - Thermodynamik und der Verfall einer Familie"} job={"Assistant Professor in the Department of German Studies, Scripps College"}></AlumniCard>
          <AlumniCard name={"Ruth Zisman, Ph.D. 2015"} thesis={"Displaced Battlefields: Sigmund Freud and the Reading of War Zones"} job={"Assistant Professor of the Humanities, Bard College"}></AlumniCard>
          <AlumniCard name={"Sarah Harris, M.A. 2014"} thesis={"Disjointed Narratives: Limbs, Gears, and the Monstrosities of the Human Form in Romanticism"} job={""}></AlumniCard>
          <AlumniCard name={"Dania Hückmann, Ph.D. 2014"} thesis={"Das Versprechen der Gerechtigkeit: Rache im Realismus"} job={""}></AlumniCard>
          <AlumniCard name={"Lydia B. Tang, Ph.D. 2013"} thesis={"Die Inszenierung der Einbildungskraft: Phantasie und Publikumsbezug in Lessings Dramatik, Kritk und Ästhetik"} job={"Assistant Director of Programs, Modern Language Association"}></AlumniCard>
          <AlumniCard name={"Alicja Kowalska, Ph.D. 2013"} thesis={"Bildung und Rebellion. Jugend in literarischen und philosophischen Texten von Johann G. Herder bis Friedrich Nietzsche"} job={"Translator"}></AlumniCard>
          <AlumniCard name={"Joshua Winchester, M.A. 2013"} thesis={"Apprehension: Towards Franz Kafka's Ethics"} job={""}></AlumniCard>
          <AlumniCard name={"Lauren Stone, Ph.D. 2013"} thesis={"The Turn to Childhood: Toward a Theory of the 'Kinderstube' in Stifter, Rilke, and Benjamin"} job={"Assistant Professor of German, University of Colorado"}></AlumniCard>
          <AlumniCard name={"Thorsten Carstensen, Ph.D. 2012"} thesis={"Romanisches Erzählen: Peter Handke und die epische Tradition"} job={"Associate Professor of German, Indiana University-Purdue University"}></AlumniCard>
          <AlumniCard name={"Allan Madin, M.A. 2012"} thesis={"Romancing the Stone: Stone as trope in Novalis' novel fragments: Die Lehrlinge zu Sais and Heinrich von Ofterdingen"} job={""}></AlumniCard>
          <AlumniCard name={"Barbara Natalie Nagel, Ph.D. 2012"} thesis={"Der Skandal des Literalen. Barocke Literalisierungen bei Gryphius, Kleist, Büchner"} job={"Associate Professor of German, Princeton University"}></AlumniCard>
          <AlumniCard name={"Chadwick Smith, Ph.D. 2012"} thesis={"The Self-Defeat of Enlightenment Politics: German Premises of Global Human Rights"} job={"Instructional Designer, Yellowbrick.co; Translator"}></AlumniCard>
          <AlumniCard name={"Jeffrey Champlin, Ph.D. 2011"} thesis={"The Making of a Terrorist: German Rogues in Götz von Berlichingen, Die Räuber, and Michael Kohlhaas"} job={"Lecturer of Literature, Barenboim-Said Akademie"}></AlumniCard>
          <AlumniCard name={"Christopher J. Delcker, M.A. 2011"} thesis={"Die Geraeuschkulisse Berlins bei der Einfuehrung des Tonfilms"} job={""}></AlumniCard>
          <AlumniCard name={"Leigh Gold, Ph.D. 2011"} thesis={"'Ich sterbe am Leben': Else Lasker-Schueler and the Work of Mourning"} job={""}></AlumniCard>
          <AlumniCard name={"Daniela Leder, Ph.D. 2011"} thesis={"Wenn Maedchen Ueberleben inventur im Gewalthaushalt bei J.M.R. Lenz und Frank Wedekind"} job={""}></AlumniCard>
          <AlumniCard name={"William Rauscher, Ph.D. 2011"} thesis={"Powering Down: Disfigurations of Authority in the Modern Era"} job={"Post-doc at the NYU German Department through the Morse Academic Program; Copy/Online Writer, Ardency Inn, 2012"}></AlumniCard>
          <AlumniCard name={"Nicola Behrmann, Ph.D. 2010"} thesis={"The Signature of Emmy Hennings Dada. Autobiography and Abandonment"} job={"Associate Professor of German at Rutgers University"}></AlumniCard>
          <AlumniCard name={"Antje Pfannkuchen, Ph.D. 2010"} thesis={"When Nature Begins to Write Herself: German Romantics Read the Electrophore"} job={"Associate Professor of German at Dickinson College"}></AlumniCard>
          <AlumniCard name={"Thomas Stachel, Ph.D. 2010"} thesis={"Der Ring der Notwendigkeit: Friedrich Schiller nach der Natur"} job={"Independent language coach, translator, and editor at www.stachel-english.de"}></AlumniCard>
          <AlumniCard name={"Cornelia Uhlenhaut, Ph.D. 2010"} thesis={"Zur Ökonomie des Genusses bei Bertolt Brecht"} job={""}></AlumniCard>
          <AlumniCard name={"Julia Goesser Assaiante, Ph.D. 2009"} thesis={"Body Language and the Body of Language: Corporeality, Subjectivity, and Language in Johann Georg Hamann"} job={"Lecturer of German in the Department of Modern Languages at Trinity College"}></AlumniCard>
          <AlumniCard name={"Peter Banki, Ph.D. 2009"} thesis={"The Forgiveness to Come: Dreams and Aporias"} job={"Lecturer in the Department of Humanities and Languages at the University of Western Sydney, Australia"}></AlumniCard>
          <AlumniCard name={"Brian W. Kassenbrock, Ph.D. 2009"} thesis={"Novalis and the Two Cultures: The Chiasmic Discourse of Mathematics, Philosophy, and Poetics"} job={""}></AlumniCard>
          <AlumniCard name={"Irani-Tehrani Amir, Ph.D. 2008"} thesis={"Persian Figures in German Letters (1700-1900)"} job={"Assistant Professor, US Military Academy - West Point, New York"}></AlumniCard>
          <AlumniCard name={"Yevgeniy (Zhenya) Pomerantsev, Ph.D. 2008"} thesis={"Enchanted Truths: Romantic and Post-Romantic Models of Poetic Knowledge in E.T.A. Hoffman, Gottfried Keller, and Fyodor Dostoevsky"} job={"Russian Program Coordinator and Lecturer at the Department of Modern Languages & Literatures, Fordham University"}></AlumniCard>
          <AlumniCard name={"Alexandra Huster, Ph.D. 2007"} thesis={"Eigene Wege Gehen. Zur literarischen Konstruktion des Sonderlings"} job={"Management and communication trainer, Pro: Aktiv Management AG in Munich, Germany"}></AlumniCard>
          <AlumniCard name={"Edna Epelbaum, Ph.D. 2006"} thesis={"Das Drama zum Ende. Friederike Roth, Elfriede Jelinek, und Theresia Walser"} job={"CEO/owner of Cinevital AG and Cinepal SA, Switzerland; Artistic director of the Festival du Film Francais d'Helvetie"}></AlumniCard>
          <AlumniCard name={"Gilbert W. Meyns, Ph.D. 2006"} thesis={"Der himmel über Hellas und Halberstadt: A study of the image of the sky in Greek philosophy and recent German literature (Plato and Alexander Kluge)"} job={""}></AlumniCard>
          <AlumniCard name={"Jörg Kreienbrock, Ph.D. 2005"} thesis={"Robert Walser"} job={"Professor of German, Northwestern University"}></AlumniCard>
          <AlumniCard name={"Ulrich Plass, Ph.D. 2004"} thesis={"The Art of Transition. Language and History in T.W. Adorno's Notes to Literature"} job={"Associate Professor in the Department of German at Wesleyan University"}></AlumniCard>
          <AlumniCard name={"Kirk Wetters, Ph.D. 2004"} thesis={"'Life and Opinions': On the Foundations of Modern Discourse"} job={"Associate Professor of German, Yale University"}></AlumniCard>
          <AlumniCard name={"Andrea Dortmann, Ph.D. 2003"} thesis={"Winter Facets: Traces and Tropes of the Cold"} job={"Clinical Associate Professor, and Language Program Director in the Dept. of German, NYU"}></AlumniCard>
          <AlumniCard name={"Paul Greene, Ph.D. 2002"} thesis={"Hoffmannian Variations: The Figure of E.T.A. Hoffmann in Scott, Baudelaire, Wagner, Freud, and Kofman"} job={""}></AlumniCard>
          <AlumniCard name={"Saskia Hintz, Ph.D. 2002"} thesis={"Writing in Another Tongue: Contemporary German Minority Literature and Creative Writing in German as a Foreign Language"} job={"Senior Instructor of German, University of Colorado, Boulder"}></AlumniCard>



          
          </div>

  
        </PageContent>
      </Grommet>
    );
  }
  
  export default Dissertations;
  