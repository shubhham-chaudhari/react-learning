import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import EditProfile from './edit-profile';

function Main({ location }) {
    return (
          <section className="route-section">
              {/* <Switch location={location}>
                <Route exact path="/individual/edit-profile" component={EditProfile} />
              </Switch> */}
            </section>
    );
  }
  export default withRouter(Main);