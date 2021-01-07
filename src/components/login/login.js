import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup'
import s from './login.module.scss'
import { loginUserThunkCreator } from "../../redux/auth-reducer";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';



const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to ={"/profile"}/>
    } else {
        return (
            <div className={s.loginWrapper}>
                <h1>You need to login first:</h1>
                <LoginForm 
                    loginUserThunkCreator={props.loginUserThunkCreator} 
                    errorMessage={props.errorMessage}
                    captchaUrl={props.captchaUrl}
                />
            </div>
        )
    }
}

const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Valid email is required'),
        password: yup.string().typeError('Must be string').required('Password is required').min(3, 'Password must be more than 3 symbols')
    })
    return(
        <div className={s.loginWrapper}>
            <Formik
            initialValues={{
                email: '',
                password: '',
                remember: false,
                captcha: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
                props.loginUserThunkCreator(values.email, values.password, values.remember, values.captcha)
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div className={s.loginForm}>
                    {props.errorMessage && <p className={(props.errorMessage === "Logged Successful!") ? s.success : s.error}>{props.errorMessage}</p>}
                    
                    <label htmlFor={"email"}>Email</label>
                    <input
                        type={"text"}
                        name={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}

                    <label htmlFor={"password"}>Password</label>
                    <input
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}

                    <label htmlFor={"remember"}>Remember me
                        <input
                            type={"checkbox"}
                            name={"remember"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.remember}
                        />
                    </label>

                    {
                    props.captchaUrl && 
                        <label htmlFor={"captcha"}>Captcha
                        <input
                            type={"text"}
                            name={"captcha"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.captcha}
                        />
                        <img src={props.captchaUrl} alt="captcha"/>
                        </label>
                    }

                    <button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >Отправить
                    </button>
                </div>
            )}
        </Formik>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

let actionCreators = {loginUserThunkCreator}

export default connect(mapStateToProps, actionCreators)(Login);

