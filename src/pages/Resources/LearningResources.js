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




function LearningResources() {
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
              <Heading className="pageHeader">Learning Resources</Heading>
            </Box>
            <Box gridArea="one" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="resourceLinks">
                <div>
                  <h3 className="resourceHeader">Libraries & Databases</h3>
                  <hr></hr>
                  <a href="https://library.nyu.edu/" title="Bobst Library" target="_blank" rel="noreferrer">Bobst Library</a><br></br>
                  <hr></hr>
                  <a href="http://guides.nyu.edu/german" title="Bobst German Language &amp; Literature Research Guide" target="_blank" rel="noreferrer">Bobst German Language &amp; Literature Research Guide</a><br></br>
                  <hr></hr>
                  <a href="https://www.buchhandel.de/" title="Buchhandel.de" target="_blank" rel="noreferrer">Buchhandel.de</a><br></br>
                  <hr></hr>
                  <a href="http://www.fu-berlin.de/sites/ub/index.html/" title="Freie Universität German Studies Database" target="_blank" rel="noreferrer">Freie Universität German Studies Database</a><br></br>
                  <hr></hr>
                  <a href="http://wessweb.info/index.php/German_Studies_Web" title="German Studies Web" target="_blank" rel="noreferrer">German Studies Web</a><br></br>
                  <hr></hr>
                  <a href="http://www.jstor.org/action/showBasicSearch" title="JSTOR" target="_blank" rel="noreferrer">JSTOR</a><br></br>
                  <hr></hr>
                  <a href="http://literature.proquest.com/initCritRefSearch.do?listType=mla" title="MLA Bibliography" target="_blank" rel="noreferrer">MLA Bibliography</a><br></br>
                  <hr></hr>
                  <a href="http://www.thenietzschechannel.com/" title="The Nietzsche Channel" target="_blank" rel="noreferrer">The Nietzsche Channel</a><br></br>
                  <hr></hr>
                  <a href="http://gutenberg.spiegel.de/" title="Project Gutenberg, Germany" target="_blank" rel="noreferrer">Project Gutenberg, Germany</a><br></br>
                  <hr></hr>
                  <a href="http://literature.proquest.com/initCritRefSearch.do?listType=mla" title="Project Muse" target="_blank" rel="noreferrer">Project Muse</a><br></br>
                  <hr></hr>
                  <a href="http://www.textkritik.de/projekte/projekte.htm" title="Textkritik.de" target="_blank" rel="noreferrer">Textkritik.de</a><br></br>
                  <hr></hr>
                  <a href="http://guides.nyu.edu/az.php?q=worldcat" title="WorldCat" target="_blank" rel="noreferrer">WorldCat</a><br></br>
                  <hr></hr>
                  <a href="http://ds.ub.uni-bielefeld.de/viewer/" title="Zeitschriften der Aufklärung" target="_blank" rel="noreferrer">Zeitschriften der Aufklärung</a><br></br>
                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">News &amp; Media</h3>
                  <hr></hr>
                  <a href="http://www.bild.de/wa/ll/bild-de/unangemeldet-42925516.bild.html" title="Bild" target="_blank" rel="noreferrer">Bild</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="http://cicero.de/" title="Cicero" target="_blank" rel="noreferrer">Cicero</a><br></br>
                  <span className="linkDescription">Magazin für Politische Kultur</span><br></br>
                  <hr></hr>
                  <a href="http://www.dw.com" title="Deutsche Welle" target="_blank" rel="noreferrer">Deutsche Welle</a><br></br>
                  <span className="linkDescription">TV</span><br></br>
                  <hr></hr>
                  <a href="http://www.deutschlandfunk.de/" title="Deuttschlandfunk" target="_blank" rel="noreferrer">Deuttschlandfunk</a><br></br>
                  <span className="linkDescription">Radio</span><br></br>
                  <hr></hr>
                  <a href="http://www.deutschlandradiokultur.de" title="Deutschlandradio Kultur" target="_blank" rel="noreferrer">Deutschlandradio Kultur</a><br></br>
                  <span className="linkDescription">Radio</span><br></br>
                  <hr></hr>
                  <a href="http://www.du-magazin.com/" title="Du" target="_blank" rel="noreferrer">Du</a><br></br>
                  <span className="linkDescription">Magazine</span><br></br>
                  <hr></hr>
                  <a href="http://www.dummy-magazin.de/" title="Dummy" target="_blank" rel="noreferrer">Dummy</a><br></br>
                  <span className="linkDescription">Magazine</span><br></br>
                  <hr></hr>
                  <a href="http://www.faz.net/" title="Frankfurter Allgemeine Zeitung" target="_blank" rel="noreferrer">Frankfurter Allgemeine Zeitung</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="http://www.fr.de/" title="Frankfurter Rundschau" target="_blank" rel="noreferrer">Frankfurter Rundschau</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="http://www.fsk-hh.org/" title="Freies Sender Kombinat Hamburg" target="_blank" rel="noreferrer">Freies Sender Kombinat Hamburg</a><br></br>
                  <span className="linkDescription">Radio</span><br></br>
                  <hr></hr>
                  <a href="http://www.goyax.de/" title="Goyax" target="_blank" rel="noreferrer">Goyax</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="http://jungle-world.com/" title="Jungle World" target="_blank" rel="noreferrer">Jungle World</a><br></br>
                  <span className="linkDescription">Updated Weekly</span><br></br>
                  <hr></hr>
                  <a href="http://www.lettre.de/" title="Lettre International" target="_blank" rel="noreferrer">Lettre International</a><br></br>
                  <hr></hr>
                  <a href="http://literaturkritik.de/" title="Literaturkritik.de" target="_blank" rel="noreferrer">Literaturkritik.de</a><br></br>
                  <hr></hr>
                  <a href="http://www.mare.de" title="Mare" target="_blank" rel="noreferrer">Mare</a><br></br>
                  <hr></hr>
                  <a href="https://www.nzz.ch/" title="Neue Zürcher Zeitung" target="_blank" rel="noreferrer">Neue Zürcher Zeitung</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="https://www.perlentaucher.de/" title="Perlentaucher" target="_blank" rel="noreferrer">Perlentaucher</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="http://www.spex.de/" title="Spex" target="_blank" rel="noreferrer">Spex</a><br></br>
                  <hr></hr>
                  <a href="http://www.spiegel.de/" title="Der Spiegel" target="_blank" rel="noreferrer">Der Spiegel</a><br></br>
                  <span className="linkDescription">Updated Weekly</span><br></br>
                  <hr></hr>
                  <a href="http://www.stern.de/" title="Der Stern" target="_blank" rel="noreferrer">Der Stern</a><br></br>
                  <span className="linkDescription">Updated Weekly</span><br></br>
                  <hr></hr>
                  <a href="http://www.sueddeutsche.de" title="Süddeutsche Zeitung" target="_blank" rel="noreferrer">Süddeutsche Zeitung</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="http://www.tagesschau.de/" title="Tagesschau" target="_blank" rel="noreferrer">Tagesschau</a><br></br>
                  <span className="linkDescription">TV</span><br></br>
                  <hr></hr>
                  <a href="http://www.taz.de/" title="Die Tageszeitung" target="_blank" rel="noreferrer">Die Tageszeitung</a><br></br>
                  <span className="linkDescription">Updated Daily</span><br></br>
                  <hr></hr>
                  <a href="https://www.textezurkunst.de/" title="Texte zur Kunst" target="_blank" rel="noreferrer">Texte zur Kunst</a><br></br>
                  <hr></hr>
                  <a href="http://www.theaterheute.de/" title="Theater heute" target="_blank" rel="noreferrer">Theater heute</a><br></br>
                  <hr></hr>
                  <a href="http://volltext.net/" title="Volltext" target="_blank" rel="noreferrer">Volltext</a><br></br>
                  <hr></hr>
                  <a href="https://www.zdf.de/" title="ZDF" target="_blank" rel="noreferrer">ZDF</a><br></br>
                  <span className="linkDescription">TV</span><br></br>
                  <hr></hr>
                  <a href="http://www.zeit.de/index" title="Die Zeit" target="_blank" rel="noreferrer">Die Zeit</a><br></br>
                  <span className="linkDescription">Weekly</span><br></br>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
            </Box>


            <Box gridArea="two" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="resourceLinks">
                <div>
                  <h3 className="resourceHeader">German Studies Web Material</h3>
                  <hr></hr>
                  <a href="http://www.aicgs.org/" title="American Institute for Contemporary German Studies" target="_blank" rel="noreferrer">American Institute for Contemporary German Studies</a><br></br>
                  <hr></hr>
                  <a href="https://fu-berlin.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?&vid=FUB&" title="Bibliotheksportal Primo" target="_blank" rel="noreferrer">Bibliotheksportal Primo</a><br></br>
                  <span className="linkDescription">Universitätsbibliothek der F.U. Berlin</span><br></br>
                  <hr></hr>
                  <a href="http://www.dla-marbach.de/" title="Deutsches Literaturarchiv Marbach" target="_blank" rel="noreferrer">Deutsches Literaturarchiv Marbach</a><br></br>
                  <hr></hr>
                  <a href="https://www.deutsche-digitale-bibliothek.de/" title="Digitale Bibliothek" target="_blank" rel="noreferrer">Digitale Bibliothek</a><br></br>
                  <hr></hr>
                  <a href="http://germanhistorydocs.ghi-dc.org/" title="German History in Documents and Images" target="_blank" rel="noreferrer">German History in Documents and Images</a><br></br>
                  <hr></hr>
                  <a href="http://www.goethezeitportal.de/home.html" title="Goethezeitportal" target="_blank" rel="noreferrer">Goethezeitportal</a><br></br>
                  <hr></hr>
                  <a href="http://www.mla.org/career_resources" title="MLA Career Resources" target="_blank" rel="noreferrer">MLA Career Resources</a><br></br>
                  <hr></hr>
                  <a href="http://www.thenietzschechannel.com/" title="The Nietzsche Channel" target="_blank" rel="noreferrer">The Nietzsche Channel</a><br></br>
                  <hr></hr>
                  <a href="http://gutenberg.spiegel.de/" title="Projekt Gutenberg" target="_blank" rel="noreferrer">Projekt Gutenberg</a><br></br>
                  <span className="linkDescription">Classic German Literature Online</span><br></br>
                  <hr></hr>
                  <a href="http://sophie.byu.edu/" title="Sophie" target="_blank" rel="noreferrer">Sophie</a><br></br>
                  <span className="linkDescription">Digital Library of Works by German-Speaking Women</span><br></br>
                  <hr></hr>
                </div>
                <br></br>
                <div>
                  <h3 className="resourceHeader">Teaching</h3>
                  <hr></hr>
                  <a href="http://www.aatg.org/" title="American Association of Teachers of German" target="_blank" rel="noreferrer">American Association of Teachers of German</a><br></br>
                  <hr></hr>
                  <a href="http://metro-ny.aatg.org/" title="AATG Metropolitian New York Chapter" target="_blank" rel="noreferrer">AATG Metropolitian New York Chapter</a><br></br>
                  <hr></hr>
                  <a href="http://www.goethe.de/lhr/mat/deindex.htm" title="Goethe-Institut: Unterrichtsmaterialen" target="_blank" rel="noreferrer">Goethe-Institut: Unterrichtsmaterialen</a><br></br>
                  <hr></hr>
                  <a href="http://www.bpb.de/" title="Bundeszentrale für politische Bildung" target="_blank" rel="noreferrer">Bundeszentrale für politische Bildung</a><br></br>
                  <hr></hr>
                  <a href="http://www.bpb.de/shop/lernen/filmhefte/" title="bpb: Filmhefte" target="_blank" rel="noreferrer">bpb: Filmhefte</a><br></br>
                  <span className="linkDescription">Available for Download</span><br></br>
                  <hr></hr>
                  <a href="http://www.bpb.de/shop/lernen/thema-im-unterricht/" title="bpb: Thema im Unterricht" target="_blank" rel="noreferrer">bpb: Thema im Unterricht</a><br></br>
                  <hr></hr>
                  <a href="http://www.bpb.de/publikationen/ZB0AXD,0,0,Themenbl%E4tter_im_Unterricht.html" title="bpb: Themenblätter im Unterricht" target="_blank" rel="noreferrer">bpb: Themenblätter im Unterricht</a><br></br>
                  <span className="linkDescription">Available for Download</span><br></br>
                  <hr></hr>
                  <a href="http://nyugerman.altervista.org/index.html" title="Learn German" target="_blank" rel="noreferrer">Learn German</a><br></br>
                  <span className="linkDescription">Clarissa Karantzis</span><br></br>
                  <hr></hr>
                </div>
                <div>
                  <h3 className="resourceHeader">Bücher Kaufen</h3>
                  <hr></hr>
                  <a href="https://www.buchhandel.de/" title="buchhandel.de" target="_blank" rel="noreferrer">buchhandel.de</a><br></br>
                  <hr></hr>
                  <a href="https://www.zvab.com/english/" title="Zentrales Verzeichnis Antiquarischer Bücher" target="_blank" rel="noreferrer">Zentrales Verzeichnis Antiquarischer Bücher</a><br></br>
                  <hr></hr>
                </div>
                <br></br>

              </div>
            </Box>
            <Box gridArea="three" background="#ffffff" align="start" justify="start" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="resourceLinks">
                <div>
                  <h3 className="resourceHeader">Radio &amp; Podcasts</h3>
                  <hr></hr>
                  <a href="http://www.ard.de/home/radio/Radio/22550/index.html" title="ARD Radio" target="_blank" rel="noreferrer">ARD Radio</a><br></br>
                  <hr></hr>
                  <a href="http://www.deutschlandfunkkultur.de/startseite.197.de.html" title="Deutschlandfunk Kultur" target="_blank" rel="noreferrer">Deutschlandfunk Kultur</a><br></br>
                  <hr></hr>
                  <a href="http://www.deutschlandradio.de/podcasts.226.de.html" title="Deutschlandradio &amp; Deutschlandradio Kultur Podcasts" target="_blank" rel="noreferrer">Deutschlandradio &amp; Deutschlandradio Kultur Podcasts</a><br></br>
                  <hr></hr>
                  <a href="http://www.tagesschau.de/infoservices/podcast/index.html" title="Tagesschau Podcasts" target="_blank" rel="noreferrer">Tagesschau Podcasts</a><br></br>
                  <span className="linkDescription">e.g.: Essay &amp; Diskurs, Büchermarkt, Kalendarblatt, Radiofeuilleton im Gespräch, Buchkritik, Fazit</span><br></br>
                  <hr></hr>
                  <br></br>

                </div>
                <div>
                  <h3 className="resourceHeader">Scholarly Journals</h3>
                  <hr></hr>

                  <a href="http://muse.jhu.edu/journals/american_imago/" title="American Imago" target="_blank" rel="noreferrer">American Imago</a><br></br>
                  <hr></hr>
                  <a href="http://boundary2.dukejournals.org/" title="Boundary 2" target="_blank" rel="noreferrer">Boundary 2</a><br></br>
                  <hr></hr>
                  <a href="http://criticalinquiry.uchicago.edu/" title="Critical Inquiry" target="_blank" rel="noreferrer">Critical Inquiry</a><br></br>
                  <hr></hr>
                  <a href="http://muse.jhu.edu/journals/cultural_critique/" title="Cultural Critique" target="_blank" rel="noreferrer">Cultural Critique</a><br></br>
                  <hr></hr>
                  <a href="https://www.metzlerverlag.de/index.php?mod=dvjs&menuid=44" title="Deutsche Vierteljahrsschrift" target="_blank" rel="noreferrer">Deutsche Vierteljahrsschrift</a><br></br>
                  <hr></hr>
                  <a href="https://www.press.jhu.edu/journals/diacritics/" title="Diacritics" target="_blank" rel="noreferrer">Diacritics</a><br></br>
                  <hr></hr>
                  <a href="https://www.dukeupress.edu/differences/" title="Differences" target="_blank" rel="noreferrer">Differences</a><br></br>
                  <hr></hr>
                  <a href="http://www.digizeitschriften.de/home/zeitschriften/" title="DIGIZeitschriften" target="_blank" rel="noreferrer">DIGIZeitschriften</a><br></br>
                  <hr></hr>
                  <a href="http://muse.jhu.edu/journals/discourse/" title="Discourse" target="_blank" rel="noreferrer">Discourse</a><br></br>
                  <hr></hr>
                  <a href="http://www.uni-konstanz.de/dvjs/editorial.htm" title="DVJS" target="_blank" rel="noreferrer">DVJS</a><br></br>
                  <hr></hr>
                  <a href="https://www.press.jhu.edu/journals/eighteenth-century_studies/" title="Eighteenth-Century Studies" target="_blank" rel="noreferrer">Eighteenth-Century Studies</a><br></br>
                  <hr></hr>
                  <a href="http://www.theeuropean.de/" title="The European" target="_blank" rel="noreferrer">The European</a><br></br>
                  <hr></hr>
                  <a href="http://figurationen.ch/" title="Figurationen" target="_blank" rel="noreferrer">Figurationen</a><br></br>
                  <hr></hr>
                  <a href="https://german.wustl.edu/kade/yearbook" title="Gegenwartsliteratur: A German Studies Yearbook" target="_blank" rel="noreferrer">Gegenwartsliteratur: A German Studies Yearbook</a><br></br>
                  <hr></hr>
                  <a href="http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1468-0483" title="German Life and Letters" target="_blank" rel="noreferrer">German Life and Letters</a><br></br>
                  <hr></hr>
                  <a href="http://www.aatg.org/?page=Publications#.VYQhm_lVhHw" title="The German Quarterly" target="_blank" rel="noreferrer">The German Quarterly</a><br></br>
                  <hr></hr>
                  <a href="https://www.press.jhu.edu/journals/german_studies_review/index.html" title="German Studies Review" target="_blank" rel="noreferrer">German Studies Review</a><br></br>
                  <hr></hr>
                  <a href="http://www.tandfonline.com/loi/vger20#.VFJAAhaOpLs" title="The Germanic Review" target="_blank" rel="noreferrer">The Germanic Review</a><br></br>
                  <hr></hr>
                  <a href="http://www.goethesociety.org/pages/yearbook.html" title="The Goethe Yearbook" target="_blank" rel="noreferrer">The Goethe Yearbook</a><br></br>
                  <hr></hr>
                  <a href="http://www.iaslonline.de/" title="IASLonline" target="_blank" rel="noreferrer">IASLonline</a><br></br>
                  <span className="linkDescription">Internationales Archiv Für Sozialgeschichte der Literatur</span><br></br>
                  <hr></hr>
                  <a href="https://www.press.jhu.edu/journals/modern_language_notes/" title="Modern Language Notes" target="_blank" rel="noreferrer">Modern Language Notes</a><br></br>
                  <hr></hr>
                  <a href="http://depts.washington.edu/mlq/" title="Modern Language Quarterly" target="_blank" rel="noreferrer">Modern Language Quarterly</a><br></br>
                  <hr></hr>
                  <a href="http://www.mhra.org.uk/journals/MLR" title="Modern Language Review" target="_blank" rel="noreferrer">Modern Language Review</a><br></br>
                  <hr></hr>
                  <a href="https://uwpress.wisc.edu/journals/journals/m.html" title="Monatshefte" target="_blank" rel="noreferrer">Monatshefte</a><br></br>
                  <hr></hr>
                  <a href="http://www.arts.cornell.edu/ngc/" title="New German Critique" target="_blank" rel="noreferrer">New German Critique</a><br></br>
                  <hr></hr>
                  <a href="http://muse.jhu.edu/journals/paragraph/" title="Paragraph" target="_blank" rel="noreferrer">Paragraph</a><br></br>
                  <hr></hr>
                  <a href="https://www.mla.org/Publications/Journals/PMLA" title="PMLA" target="_blank" rel="noreferrer">PMLA</a><br></br>
                  <hr></hr>
                  <a href="https://www.ocf.berkeley.edu/~quiparle/" title="Qui Parle" target="_blank" rel="noreferrer">Qui Parle</a><br></br>
                  <hr></hr>
                  <a href="http://muse.jhu.edu/journal/351" title="Seminar" target="_blank" rel="noreferrer">Seminar</a><br></br>
                  <hr></hr>
                  <a href="http://saq.dukejournals.org/" title="South Atlantic Quarterly" target="_blank" rel="noreferrer">South Atlantic Quarterly</a><br></br>
                  <hr></hr>
                  <a href="https://uwpress.wisc.edu/journals/journals/sub.html" title="SubStance" target="_blank" rel="noreferrer">SubStance</a><br></br>
                  <hr></hr>
                  <a href="https://www.etk-muenchen.de/" title="Text + Kritik" target="_blank" rel="noreferrer">Text + Kritik</a><br></br>
                  <hr></hr>
                  <a href="http://www.textkritik.de/text/text.htm" title="Text: Kritische Beiträge" target="_blank" rel="noreferrer">Text: Kritische Beiträge</a><br></br>
                  <hr></hr>
                  <a href="http://muse.jhu.edu/journal/210" title="Yale Journal of Criticism" target="_blank" rel="noreferrer">Yale Journal of Criticism</a><br></br>
                  <hr></hr>
                  <a href="http://www.esv.info/z/ZfdPh/zeitschriften.html" title=" Zeitschrift für deutsche Philologie" target="_blank" rel="noreferrer"> Zeitschrift für deutsche Philologie</a><br></br>
                  <hr></hr>
                </div>
              </div>


            </Box>



          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default LearningResources;






