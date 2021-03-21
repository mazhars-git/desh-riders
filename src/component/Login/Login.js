import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

//----------sign in with google----------------------

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

//----------sign in with facebook----------------------

    const handleFbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid =  /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFieldValid =  /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = {...loggedInUser};
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
       
    }

    //----------create new account----------------------
    const handleSubmit = (e) => {
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                // Signed in 
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                updateUserName(loggedInUser.name);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
            });
        }
        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log('logged in user info', res.user)
            })
            .catch((error) => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
            });
            
        }
        e.preventDefault();
    }

//------------Update user name-------------
    const updateUserName = (name) => {
        const loggedInUser = firebase.auth().currentUser;
        loggedInUser.updateProfile({
        displayName: name,
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <div className="login-area">
            <h3>{newUser ? 'Create an account' : 'Login'}</h3>
            <form onSubmit={handleSubmit}>
                {newUser && <input onBlur={handleBlur} type="text" name="name" placeholder="Name" className="input-style"/>}
                <br/>
                <input onBlur={handleBlur} type="email" name="email" placeholder="Your Email" required className="input-style"/>
                <br/>
                <input onBlur={handleBlur} type="password" name="password" placeholder="Your Password" required className="input-style"/>
                <br/>
                {/* <input type="password" name="confirmPass" placeholder="Confirm Password" required className="input-style"/> */}
                <br/>
                <input type="submit" value={newUser ? 'Sign up' : 'Login'} className="btn-submit"/>
            </form>
                <p style={{color: 'red'}}>{loggedInUser.error}</p>
                {loggedInUser.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'Logged in'} successfully</p>}
                <p>
                {newUser ? 'Already have an account?' : 'Do not have an account?'}
                    <Link to="/login" onClick={() => setNewUser(!newUser)}>
                    {newUser ? ' Login' : ' Create an account'}</Link>
                </p>
            <button className="btn-style" onClick={handleGoogleSignIn}>Continue with Google</button>
            <button className="btn-style" onClick={handleFbSignIn}>Continue with Facebook</button>
        </div>
    );
};

export default Login;