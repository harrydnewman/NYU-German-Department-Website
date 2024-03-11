
import { Grommet, PageContent, PageHeader } from "grommet";
import EventHandling from "../components/EventHandling";

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



function Events() {
  return (
    <Grommet theme={theme}>
      <PageContent>
        <PageHeader className="pageHeader" title="Events" />
        {/* could use a for loop to create like the class cards but for events instead!! */}
        <EventHandling></EventHandling>
        

      </PageContent>
    </Grommet>
  );
}

export default Events;
