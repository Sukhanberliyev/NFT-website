import React, { Fragment } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const Layout = (props) => {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
