import React from 'react'
import { Form, Formik } from 'formik';
import * as yup from 'yup'
import s from './login.module.scss'

type LoginFormPropsType = {
    errorMessage: string | null
    captchaUrl: string | null
    loginUserThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormValuesType = {
    email: string
    password: string
    remember: boolean
    captcha: string
}

const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string().email('Valid email is required'),
        password: yup.string().typeError('Must be string').required('Password is required').min(3, 'Password must be more than 3 symbols')
    })
    const initialValues: LoginFormValuesType = {
        email: '',
        password: '',
        remember: false,
        captcha: ''
    }
    return(
        <div className={s.loginWrapper}>
            <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={(values) => {
                props.loginUserThunkCreator(values.email, values.password, values.remember, values.captcha)
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form className={s.loginForm}>
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
                        type={'submit'}
                    >Login
                    </button>
                </Form>
            )}
        </Formik>
        </div>
    )
}

export default LoginForm

