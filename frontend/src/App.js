import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import CreateSpot from "./components/Spots/CreateSpot/CreateSpot";
import AllTiles from "./components/Spots/AllTiles/AllTiles";
import Manager from "./components/Spots/Manager/Manager";
import Reviews from "./components/Reviews/Reviews";
import EditSpot from "./components/Spots/Manager/Edit/EditSpot ";
import SpotShow from "./components/Spots/SpotInfo/SpotDetail";
import SpotInfo from "./components/Spots/SpotInfo/SpotDetail";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" component={AllTiles} />
          <Route path="/spots/new" component={CreateSpot}></Route>
          <Route path="/spots/current" component={Manager}/>
          <Route path="/reviews/current" component={Reviews}/>
          <Route path="/spots/:spotId" component={SpotInfo} />
          <Route path="/spots/:spotId/edit" component={EditSpot}/>
        </Switch>
      )}
    </>
  );
}

export default App;
