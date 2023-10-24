import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

//Import Components
import Navbar from "./Navbar";
import Home from "./Home";
import User from "./User";
import ManageFriends from "./ManageFriend";
import FriendProfiles from "./FriendProfiles";

function App() {
  return;
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={User} />
      <Route path="/friend-profiles" component={FriendProfiles} />
      <Route path="/manage-friends" component={ManageFriends} />
    </Switch>
  </Router>;
}

export default App;
