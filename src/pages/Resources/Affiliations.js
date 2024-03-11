import {
  Box,
  Grid,
  Grommet,
  Heading,
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




function Affiliations() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            rows={size === 'small' ? ['auto', 'auto', 'auto', 'auto'] : ['auto', 'auto', 'auto']}
            columns={size === 'small' ? ['1/1'] : ['33%', '33%', '33%']}
            gap="small"
            areas={
              size === 'small'
                ? [
                  { name: 'header', start: [0, 0], end: [0, 0] },
                  { name: 'one', start: [0, 1], end: [0, 1] },
                  { name: 'two', start: [0, 2], end: [0, 2] },
                  { name: 'three', start: [0, 3], end: [0, 3] },
                ]
                : [
                  { name: 'header', start: [0, 0], end: [2, 0] },
                  { name: 'one', start: [0, 1], end: [0, 1] },
                  { name: 'two', start: [1, 1], end: [1, 1] },
                  { name: 'three', start: [2, 1], end: [2, 1] },
                ]
            }
          >

            <Box className="headerArea" gridArea="header" background="#ffffff" align="center" justify="center">
              <Heading className="pageHeader">Affiliations</Heading>
            </Box>
            <Box gridArea="one" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="resourceLinks">
                <div>
                  <h3 className="resourceHeader">Conferences</h3>
                  <hr></hr>
                  <a href="https://www.acla.org/annual-meeting" title="ACLA Annual Meeting" target="_blank" rel="noreferrer">ACLA Annual Meeting</a><br></br><hr></hr>
                  <a href="http://german.yale.edu/graduate-student-conference-2017" title="Graduate Student Conference of the Yale German Department" target="_blank" rel="noreferrer">Graduate Student Conference of the Yale German Department</a><br></br><hr></hr>
                  <a href="https://www.thegsa.org/conference/current.html" title="GSA Conference" target="_blank" rel="noreferrer">GSA Conference</a><br></br><hr></hr>
                  <a href="https://kflc.as.uky.edu/register" title="Kentucky Foreign Language Conference" target="_blank" rel="noreferrer">Kentucky Foreign Language Conference</a><br></br><hr></hr>
                  <a href="https://www.mla.org/Convention" title="MLA Convention" target="_blank" rel="noreferrer">MLA Convention</a><br></br><hr></hr>
                  <a href="http://www.buffalo.edu/nemla.html" title="NeMLA Convention" target="_blank" rel="noreferrer">NeMLA Convention</a><br></br><hr></hr>

                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Literaturpreise und Messen</h3>
                  <hr></hr>
                  <a href="http://www.buchmesse.de/en/" title="Frankfurter Buchmesse" target="_blank" rel="noreferrer">Frankfurter Buchmesse</a><br></br><hr></hr>
                  <a href="http://www.deutscheakademie.de/preise_buechner.html" title="Der Georg-Büchner-Preis" target="_blank" rel="noreferrer">Der Georg-Büchner-Preis</a><br></br><hr></hr>
                  <a href="http://bachmannpreis.orf.at/" title="Ingeborg-Bachmann-Preis" target="_blank" rel="noreferrer">Ingeborg-Bachmann-Preis</a><br></br><hr></hr>
                  <a href="http://www.leipziger-buchmesse.de/" title="Leipziger Buchmesse" target="_blank" rel="noreferrer">Leipziger Buchmesse</a><br></br><hr></hr>

                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Other Comparative Literature Departments</h3>
                  <hr></hr>
                  <a href="https://www.brown.edu/academics/comparative-literature/" title="Brown University" target="_blank" rel="noreferrer">Brown University</a><br></br><hr></hr>
                  <a href="http://icls.columbia.edu/" title="Columbia University" target="_blank" rel="noreferrer">Columbia University</a><br></br><hr></hr>
                  <a href="https://literature.duke.edu/" title="Duke University" target="_blank" rel="noreferrer">Duke University</a><br></br>
                  <span class="useful-links__description">Program in Literature</span><br></br><hr></hr>
                  <a href="http://humctr.jhu.edu/" title="Johns Hopkins University" target="_blank" rel="noreferrer">Johns Hopkins University</a><br></br>
                  <span class="useful-links__description">Humanities Center</span><br></br><hr></hr>
                  <a href="http://www.complit.buffalo.edu/" title="SUNY Buffalo" target="_blank" rel="noreferrer">SUNY Buffalo</a><br></br><hr></hr>
                  <a href="http://complit.berkeley.edu/" title="University of California, Berkeley" target="_blank" rel="noreferrer">University of California, Berkeley</a><br></br><hr></hr>
                  <a href="http://rhetoric.berkeley.edu/" title="University of California, Berkeley" target="_blank" rel="noreferrer">University of California, Berkeley</a><br></br>
                  <span class="useful-links__description">Department of Rhetoric</span><br></br><hr></hr>
                  <a href="https://cla.umn.edu/cscl" title="University of Minnesota" target="_blank" rel="noreferrer">University of Minnesota</a><br></br><hr></hr>
                  <a href="http://complit.yale.edu/" title="Yale University" target="_blank" rel="noreferrer">Yale University</a><br></br><hr></hr>
                </div>
              </div>
              <br></br>
            </Box>


            <Box gridArea="two" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="resourceLinks">

                <div>
                  <h3 className="resourceHeader">Institutions</h3>
                  <hr></hr>
                  <a href="https://www.daad.org/en/" title="DAAD" target="_blank" rel="noreferrer">DAAD</a><br></br><hr></hr>
                  <a href="http://www.columbia.edu/cu/german/deutsches-haus/" title="Deutsches Haus at Columbia University" target="_blank" rel="noreferrer">Deutsches Haus at Columbia University</a><br></br><hr></hr>
                  <a href="http://deutscheshaus.as.nyu.edu/page/home" title="Deutsches Haus at NYU" target="_blank" rel="noreferrer">Deutsches Haus at NYU</a><br></br><hr></hr>
                  <a href="http://us.fulbrightonline.org/" title="Fulbright " target="_blank" rel="noreferrer">Fulbright </a><br></br><hr></hr>
                  <a href="http://www.book-fair.com/en/international/offices_abroad/" title="German Book Office" target="_blank" rel="noreferrer">German Book Office</a><br></br><hr></hr>
                  <a href="https://www.goethe.de/ins/us/en/sta/ney.html" title="Goethe-Institut" target="_blank" rel="noreferrer">Goethe-Institut</a><br></br>
                  <span class="useful-links__description">New York Location</span><br></br><hr></hr>
                  <a href="https://www.goethe.de/ins/us/en/sta/ney/bib.html" title="Goethe-Institut Library" target="_blank" rel="noreferrer">Goethe-Institut Library</a><br></br><hr></hr>
                  <a href="http://sct.cornell.edu/" title="The School of Criticism and Theory at Cornell University" target="_blank" rel="noreferrer">The School of Criticism and Theory at Cornell University</a><br></br>
                  <span class="useful-links__description">Summer Program with Stipend</span><br></br><hr></hr>
                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Other German Departments</h3>
                  <hr></hr>
                  <a href="http://nyugerman.altervista.org/index.html" title="Bard College" target="_blank" rel="noreferrer">Bard College</a><br></br><hr></hr>
                  <a href="http://www.brown.edu/academics/german-studies/" title="Brown University" target="_blank" rel="noreferrer">Brown University</a><br></br><hr></hr>
                  <a href="http://www.columbia.edu/cu/german/" title="Columbia University" target="_blank" rel="noreferrer">Columbia University</a><br></br><hr></hr>
                  <a href="http://german.cornell.edu/" title="Cornell University" target="_blank" rel="noreferrer">Cornell University</a><br></br><hr></hr>
                  <a href="http://german.duke.edu/" title="Duke University" target="_blank" rel="noreferrer">Duke University</a><br></br><hr></hr>
                  <a href="http://german.emory.edu/home/" title="Emory College" target="_blank" rel="noreferrer">Emory College</a><br></br><hr></hr>
                  <a href="http://www.egs.edu/" title="European Graduate School" target="_blank" rel="noreferrer">European Graduate School</a><br></br><hr></hr>
                  <a href="http://www.geisteswissenschaften.fu-berlin.de/we03/index.html" title="Freie Universität Berlin" target="_blank" rel="noreferrer">Freie Universität Berlin</a><br></br><hr></hr>
                  <a href="http://german.fas.harvard.edu/" title="Harvard University" target="_blank" rel="noreferrer">Harvard University</a><br></br><hr></hr>
                  <a href="http://www.hunter.cuny.edu/german/" title="Hunter College" target="_blank" rel="noreferrer">Hunter College</a><br></br><hr></hr>
                  <a href="http://germanic.indiana.edu/" title="Indiana University, Bloomington" target="_blank" rel="noreferrer">Indiana University, Bloomington</a><br></br><hr></hr>
                  <a href="http://grll.jhu.edu/german/" title="Johns Hopkins University" target="_blank" rel="noreferrer">Johns Hopkins University</a><br></br><hr></hr>
                  <a href="http://www.german.northwestern.edu/" title="Northwestern University" target="_blank" rel="noreferrer">Northwestern University</a><br></br><hr></hr>
                  <a href="http://german.princeton.edu/" title="Princeton University" target="_blank" rel="noreferrer">Princeton University</a><br></br><hr></hr>
                  <a href="https://language.stanford.edu/programs/german/languages/german" title="Stanford University" target="_blank" rel="noreferrer">Stanford University</a><br></br><hr></hr>
                  <a href="https://linguistics.buffalo.edu/programs/language/german/program/" title="SUNY Buffalo" target="_blank" rel="noreferrer">SUNY Buffalo</a><br></br><hr></hr>
                  <a href="http://www.goethe-university-frankfurt.de/en?locale=en" title="Universität Frankfurt" target="_blank" rel="noreferrer">Universität Frankfurt</a><br></br><hr></hr>
                  <a href="http://german.berkeley.edu/" title="University of California, Berkeley" target="_blank" rel="noreferrer">University of California, Berkeley</a><br></br><hr></hr>
                  <a href="http://www.gss.ucsb.edu/" title="University of California, Santa Barbara" target="_blank" rel="noreferrer">University of California, Santa Barbara</a><br></br><hr></hr>
                  <a href="https://german.uchicago.edu/" title="University of Chicago" target="_blank" rel="noreferrer">University of Chicago</a><br></br><hr></hr>
                  <a href="http://lsa.umich.edu/german/" title="University of Michigan" target="_blank" rel="noreferrer">University of Michigan</a><br></br><hr></hr>
                  <a href="https://cla.umn.edu/gsd" title="University of Minnesota" target="_blank" rel="noreferrer">University of Minnesota</a><br></br><hr></hr>
                  <a href="http://gsll.unc.edu/" title="University of North Carolina, Chapel Hill" target="_blank" rel="noreferrer">University of North Carolina, Chapel Hill</a><br></br><hr></hr>
                  <a href="https://www.sas.upenn.edu/germanic/" title="University of Pennsylvania" target="_blank" rel="noreferrer">University of Pennsylvania</a><br></br><hr></hr>
                  <a href="http://www.german.virginia.edu/" title="University of Virginia" target="_blank" rel="noreferrer">University of Virginia</a><br></br><hr></hr>
                  <a href="https://gns.wisc.edu/" title="University of Wisconsin - Madison" target="_blank" rel="noreferrer">University of Wisconsin - Madison</a><br></br><hr></hr>
                  <a href="http://german.wustl.edu/" title="Washington University in St. Louis" target="_blank" rel="noreferrer">Washington University in St. Louis</a><br></br><hr></hr>
                  <a href="http://www.wesleyan.edu/german/" title="Wesleyan University" target="_blank" rel="noreferrer">Wesleyan University</a><br></br><hr></hr>
                  <a href="http://german.yale.edu/" title="Yale University" target="_blank" rel="noreferrer">Yale University</a><br></br><hr></hr>
                </div>
              </div>
              <br></br>
            </Box>
            <Box gridArea="three" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="resourceLinks">
                <div>
                  <h3 className="resourceHeader">Affiliations</h3>
                  <hr></hr>
                  <a href="https://www.avlberlin.com/en/" title="AVL Berlin" target="_blank" rel="noreferrer">AVL Berlin</a><br></br><hr></hr>
                  <a href="/nyu-as/as/departments/complit.html" title="NYU Comparative Literature" target="_self">NYU Comparative Literature</a><br></br><hr></hr>

                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Calls for Papers, Listservs, Etc.</h3>
                  <hr></hr>
                  <a href="https://www.thegsa.org/conference/cfp.html" title="German Studies Association" target="_blank" rel="noreferrer">German Studies Association</a><br></br>
                  <span class="useful-links__description">Call for Papers List</span><br></br><hr></hr>
                  <a href="http://www.womeningerman.org/" title="Coalition of Women in German" target="_blank" rel="noreferrer">Coalition of Women in German</a><br></br><hr></hr>
                  <a href="http://www.lsoft.com/scripts/wl.exe?SL1=FOCUS-GERMAN-STUDIES&H=LISTSERV.UC.EDU" title="Focus-German-Studies" target="_blank" rel="noreferrer">Focus-German-Studies</a><br></br>
                  <span class="useful-links__description">Listserv Subscription</span><br></br><hr></hr>
                  <a href="https://networks.h-net.org/h-germanistik" title="H-Germanistik" target="_blank" rel="noreferrer">H-Germanistik</a><br></br><hr></hr>
                  <a href="https://networks.h-net.org/" title="H-Net | Humanities and Social Sciences Online" target="_blank" rel="noreferrer">H-Net | Humanities and Social Sciences Online</a><br></br><hr></hr>
                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Literaturgeschichte/ Geschichte</h3>
                  <hr></hr>
                  <a href="http://www.aicgs.org/" title="AICGS" target="_blank" rel="noreferrer">AICGS</a><br></br><hr></hr>
                  <a href="http://www.dhm.de/" title="German Historical Museum, Berlin" target="_blank" rel="noreferrer">German Historical Museum, Berlin</a><br></br><hr></hr>
                  <a href="http://germanhistorydocs.ghi-dc.org/" title="German History in Documents and Images" target="_blank" rel="noreferrer">German History in Documents and Images</a><br></br><hr></hr>
                  <a href="http://www.dla-marbach.de/" title="German Literary Archive, Marbach" target="_blank" rel="noreferrer">German Literary Archive, Marbach</a><br></br><hr></hr>
                  <a href="http://www.goethezeitportal.de/home.html" title="The Goethezeit Portal" target="_blank" rel="noreferrer">The Goethezeit Portal</a><br></br><hr></hr>
                  <a href="https://www.dhm.de/lemo/" title="LeMO - Virtual Online Museum" target="_blank" rel="noreferrer">LeMO - Virtual Online Museum</a><br></br><hr></hr>
                  <a href="https://www.moma.org/interactives/exhibitions/2006/dada/index_f.html" title="MOMA Dada Exhibition" target="_blank" rel="noreferrer">MOMA Dada Exhibition</a><br></br><hr></hr>
                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Professional Organizations</h3>
                  <hr></hr>
                  <a href="http://www.aatg.org/" title="American Association of Teachers of German" target="_blank" rel="noreferrer">American Association of Teachers of German</a><br></br><hr></hr>
                  <a href="https://www.acla.org/" title="American Comparative Literature Association" target="_blank" rel="noreferrer">American Comparative Literature Association</a><br></br><hr></hr>
                  <a href="https://asecs.press.jhu.edu/" title="American Society for Eighteenth-Century Studies" target="_blank" rel="noreferrer">American Society for Eighteenth-Century Studies</a><br></br><hr></hr>
                  <a href="http://www.womeningerman.org/" title="Coalition of Women in German" target="_blank" rel="noreferrer">Coalition of Women in German</a><br></br><hr></hr>
                  <a href="http://goethesociety.org/" title="The Goethe Society of North America" target="_blank" rel="noreferrer">The Goethe Society of North America</a><br></br><hr></hr>
                  <a href="https://www.thegsa.org/index.html" title="German Studies Association" target="_blank" rel="noreferrer">German Studies Association</a><br></br><hr></hr>
                  <a href="http://www.hsozkult.de/" title="H-Soz-Kult" target="_blank" rel="noreferrer">H-Soz-Kult</a><br></br><hr></hr>
                  <a href="https://www.mla.org/" title="Modern Language Association" target="_blank" rel="noreferrer">Modern Language Association</a><br></br><hr></hr>
                  <a href="http://www.buffalo.edu/nemla.html" title="Northeast Modern Language Association" target="_blank" rel="noreferrer">Northeast Modern Language Association</a><br></br><hr></hr>

                </div>
              </div>


            </Box>



          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default Affiliations;
