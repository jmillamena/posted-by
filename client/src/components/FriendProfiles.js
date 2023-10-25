import React from "react";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./CreatePost";
import ViewPostDetails from "./ViewPostDetails";

const FriendProfiles = () => {
  return (
    <div>
      {/* Friend Profiles content */}
      <Switch>
        <Route path="/friend-profiles/create-post" component={CreatePost} />

        <Route
          path="/friend-profiles/view-post-details"
          component={ViewPostDetails}
        />
      </Switch>
    </div>
  );
};

export default FriendProfiles;
