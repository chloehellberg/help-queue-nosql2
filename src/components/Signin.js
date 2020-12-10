// import firebase from "firebase/app";
// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';


// function Signin() {

//   const [redirect, handleRedirect] = useState(false)

//   const handleRedirectChange = () => (handleRedirect(!redirect))

  
//   function doSignIn(event) {
//     event.preventDefault();
//     const email = event.target.signinEmail.value;
//     const password = event.target.signinPassword.value;
//     firebase.auth().signInWithEmailAndPassword(email, password).then(
//       handleRedirectChange
//     ).catch(function (error) {
//       console.log(error.message);
//     });
//   }

//   function doSignOut() {
//     firebase.auth().signOut().then(function () {
//       console.log("Successfully signed out!");
//     }).catch(function (error) {
//       console.log(error.message);
//     });
//   }

//     if (redirect) {
//       return <Redirect to="/"/>
//     } else {
//         return (
//         <React.Fragment>
//           <p>Sign In</p>
//           <form className="form-group" onSubmit={doSignIn}>
//             <input
//               className="form-control"
//               type='text'
//               name='signinEmail'
//               placeholder='email' />
//             <input
//               className="form-control"
//               type='password'
//               name='signinPassword'
//               placeholder='Password' />
//             <button className="btn btn-outline-dark btn-sm btn-block" type='submit'>Sign In</button>
//             <p>Sign Out</p>
//             <button className="btn btn-outline-dark btn-sm" onClick={doSignOut}>Sign Out</button>
//           </form>
//           <Link className="btn btn-outline-dark btn-sm" to="/">Home</Link>
//         </React.Fragment>
//       )
//     }
//   }

// export default Signin;

import React from "react";
import firebase from "firebase/app";
import ReactDOM from 'react-dom';
import { withRouter, Redirect, useHistory, Link } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { useState } from 'react';

function Signin(){
  
  // const [redirect, handleRedirect] = useState(false);
  
  // const handleRedirectChange = () => (handleRedirect(!redirect));
  const history = useHistory();
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      // const newElement = <Link to='/signout'>Sign Out</Link>;
      // ReactDOM.render(newElement,document.getElementById('header-link'));
      const message = "Successfully signed in!";
      ReactDOM.render(message,document.getElementById('error-message'))
      history.push('/')
      // return (<Redirect to='/' />);
     }).catch(function(error) {
      console.log(error.message);
    });
  }

  
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' />
          <button type='submit'>Sign in</button>
        </form>
      </React.Fragment>
    )
}

export default withRouter(Signin)
