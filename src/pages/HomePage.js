

import {
  Grommet,
  PageContent,
  PageHeader,
} from "grommet";


import EventHandling from '../components/EventHandling';
let mapImage = require('../images/location.png');





const theme = {
  global: {
    colors: {
      brand: '#4f0f87',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '40px',
    },
  },
};

function HomePage() {
  return (
    <Grommet theme={theme}>
      <PageContent>
        <div>
        <PageHeader className="pageHeader" title="NYU Department of German" />
        <div className='eventsDiv'>
          <h2 className="eventsHeader"><a className="eventsLink" href='/Events'>Upcoming Events</a></h2>
          
          <div className='eventsContentDiv'>
          <EventHandling></EventHandling>
          

          </div>
          </div>
          <div className='mapDiv'>
            <h2 className="eventsHeader">Where To Find Us</h2>
            <img className='mapImage' src={mapImage} alt='map'></img>
            <p><strong>13-19 University Place </strong></p>
            <p><strong>3rd floor</strong></p> 
            <p><strong>New York, NY 10003</strong></p>
          </div>
          <a className="eventsLink" href="/AddEvents">Add Event</a>
         
        </div>
      </PageContent>
    </Grommet>
  );
}

export default HomePage;
