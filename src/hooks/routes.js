import React from "react";
import { Route, IndexRoute } from "react-router";

/**
 * Import all page components here
 */
import App from "./components/App";
import Page from "./components/home/Page";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path='/home' component={App}>
    {/* <IndexRoute component={MainPage} /> */}
    <Route path='/page' component={Page} />
  </Route>
);
