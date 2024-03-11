import React from 'react';
import { Grommet, Box, Grid, ResponsiveContext } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
    },
  },
};

function Chairs() {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            rows={size === 'small' ? ['auto', 'auto', 'auto'] : ['auto', 'auto']}
            columns={size === 'small' ? ['1/1'] : ['1/3', '2/3']}
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
                    { name: 'sidebar', start: [0, 1], end: [0, 1] },
                    { name: 'main', start: [1, 0], end: [1, 1] },
                  ]
            }
          >
            <Box gridArea="header" background="light-4" align="center" justify="center">
              Header
            </Box>
            <Box gridArea="sidebar" background="light-4" align="center" justify="center">
              Sidebar
            </Box>
            <Box gridArea="main" background="light-4" align="center" justify="center">
              Main Content
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default Chairs;
