import React, {useState} from 'react';
import classes from './styles/Login.module.css';
import Navbar from '../jsFiles/Navbar';
import Footer from '../Footer/Footer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Login = ( props ) => {
    return(
        <div>
            <div className={classes.wrapper}>
                <div className={classes.title}>Login Form</div>
                <form action="#">
                    <div className={classes.field}>
                        <input type="text" required placeholder="Username"/>
                        <label>Email Address</label>
                    </div>
                    <div className={classes.field}>
                            <input type="password" required placeholder="Password"/>
                            <label>Password</label>
                    </div>
                    <div className={classes.content}>
                            <div className={classes.checkbox}>
                                <input type="checkbox" id="remember-me" />
                                <label for="remember-me">Remember me</label>
                            </div>
                    <div className={classes.passlink}><a href="#">Forgot password?</a></div>
                    </div>
                    <div className={classes.field}>
                            <input type="submit" value="Login" /></div>
                    <div className={classes.signuplink}>Not a member? <a href="#">Signup now</a></div>
                </form>
            </div>
        </div>
    );
}

export default Login;