import React from 'react';
import { Grommet, Footer, Text, Anchor } from 'grommet';

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

function FooterComponent() {
  return (
    <Grommet theme={theme}>
      <Footer background="brand" pad="medium">
        <Text>NYU Department of German</Text>
        <Anchor label="" />
      </Footer>
    </Grommet>
  );
}

export default FooterComponent;
