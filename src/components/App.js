import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from "./Signin";
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){

//   const user = null;

//   return (
//     user ? 
//     <ProfilePage />
//     :
//     <Router>
//       <Signup path="signUp" />
//       <Signin path="/" />
//     </Router>
//   );
// }

  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <TicketControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;