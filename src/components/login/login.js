import React from 'react'
import s from './login.module.scss'

const Login = (props) => {
    return (
        <div className={s.loginWrapper}>
            <h1>You need to login first:</h1>

            <form action="action_page.php" method="post">
                <div className={s.loginForm}>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>

                </div>
                
                <div className={s.loginForm}>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#1">password?</a></span>
                </div>
            </form>
        </div>
    )
}

export default Login