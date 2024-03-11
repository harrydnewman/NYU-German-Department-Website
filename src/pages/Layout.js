import React from 'react';
import {
    Header,
    Text,
} from "grommet";

const AppBar = (props) => (
    <Header
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="none"
        {...props}
    />
);

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar>
        <Text size="large">Your App Name</Text>
      </AppBar>
      <div style={{ marginTop: '60px' }}>{children}</div>
    </div>
  );
};

export default Layout;
