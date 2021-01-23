import React, { useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup'
import s from './UploadInfo.module.scss'

export default function UploadInfo(props) {
    let [editMode, setEditMode] = useState(false)
    const onInfoUploadSubmit = (values) => {
        props.sendInfoThunkCreator(values)
        setEditMode(false)
    }
    if ((props.userId === props.myId) && (props.isAuth)) {
        if (editMode) {
            return (
                <div className={s.modalBackground}>
                    <div className={s.modalContent}>
                        <Formik
                            initialValues={{
                                "fullName": "",
                                "aboutMe": "",
                                "github": "",
                                "vk": "",
                                "facebook": "",
                                "instagram": "",
                                "twitter": "",
                                "website": "",
                                "youtube": "",
                                "mainLink": "",
                                "lookingForAJob": false,
                                "lookingForAJobDescription": ""
                            }}
                            validationSchema={yup.object().shape({
                                "fullName": yup.string().required("Please enter your name").min(3, 'Name must be more than 3 symbols'),
                                "aboutMe": yup.string().required("Please add some info about youself").max(50, "This topic is limited by 50 symbols"),
                                "github": yup.string().url("Please, provide a GitHub page URL").max(50, "URL length is limited by 50 symbols"),
                                "facebook": yup.string().url("Please, provide a Facebook page URL").max(50, "URL length is limited by 50 symbols"),
                                "instagram": yup.string().url("Please, provide a Instagram page URL").max(50, "URL length is limited by 50 symbols"),
                                "twitter": yup.string().url("Please, provide a Twitter page URL").max(50, "URL length is limited by 50 symbols"),
                                "website": yup.string().url("Please, provide your Website URL").max(50, "URL length is limited by 50 symbols"),
                                "youtube": yup.string().url("Please, provide your Youtube channel URL").max(50, "URL length is limited by 50 symbols"),
                                "mainLink": yup.string().url("Please, provide your Main Link").max(50, "URL length is limited by 50 symbols"),
                                "lookingForAJob": yup.boolean(),
                                "lookingForAJobDescription": yup.string().required("Please add some info about job you are trying to obtain").max(50, "This topic is limited by 50 symbols")
                            })}
                            onSubmit={(values) => { onInfoUploadSubmit(values) }}
                            validateOnBlur
                        >
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                <div>
                                    <div className={s.formGroup}>
                                        <h2>Personal Information</h2>
                                        <div className={s.formItem}>
                                            <label htmlFor={"fullName"}>Full name:</label>
                                            <input
                                                type={"text"}
                                                name={"fullName"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.fullName}
                                            />
                                            {touched.fullName && errors.fullName && <p className={s.error}>{errors.fullName}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"aboutMe"}>Tell about yourself:</label>
                                            <textarea
                                                name={"aboutMe"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.newPost}
                                            />
                                            {touched.aboutMe && errors.aboutMe && <p className={s.error}>{errors.aboutMe}</p>}
                                        </div>
                                    </div>
                                    <div className={s.formGroup}>
                                        <h2>Contacts</h2>
                                        <div className={s.formItem}>
                                            <label htmlFor={"github"}>Github Link:</label>
                                            <input
                                                type={"url"}
                                                name={"github"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.github}
                                            />
                                            {touched.github && errors.github && <p className={s.error}>{errors.github}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"facebook"}>Facebook Link:</label>
                                            <input
                                                type={"url"}
                                                name={"facebook"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.facebook}
                                            />
                                            {touched.facebook && errors.facebook && <p className={s.error}>{errors.facebook}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"instagram"}>Instagram Link:</label>
                                            <input
                                                type={"url"}
                                                name={"instagram"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.instagram}
                                            />
                                            {touched.instagram && errors.instagram && <p className={s.error}>{errors.instagram}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"twitter"}>Twitter Link:</label>
                                            <input
                                                type={"url"}
                                                name={"twitter"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.twitter}
                                            />
                                            {touched.twitter && errors.twitter && <p className={s.error}>{errors.twitter}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"vk"}>VK Link:</label>
                                            <input
                                                type={"url"}
                                                name={"vk"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.vk}
                                            />
                                            {touched.vk && errors.vk && <p className={s.error}>{errors.vk}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"website"}>Link to your Website:</label>
                                            <input
                                                type={"url"}
                                                name={"website"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.website}
                                            />
                                            {touched.website && errors.website && <p className={s.error}>{errors.website}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"youtube"}>Youtube Link:</label>
                                            <input
                                                type={"url"}
                                                name={"youtube"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.youtube}
                                            />
                                            {touched.youtube && errors.youtube && <p className={s.error}>{errors.youtube}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"mainLink"}>Your Main Link:</label>
                                            <input
                                                type={"url"}
                                                name={"mainLink"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mainLink}
                                            />
                                            {touched.mainLink && errors.mainLink && <p className={s.error}>{errors.mainLink}</p>}
                                        </div>

                                    </div>
                                    <div className={s.formGroup}>
                                        <h2>Job information</h2>
                                        <div className={`${s.formItemCheckbox} ${s.formItem}`}>
                                            <label htmlFor={"lookingForAJob"}>Are you looking for a job?</label>
                                            <input
                                                type={"checkbox"}
                                                name={"lookingForAJob"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lookingForAJob}
                                            />
                                            {touched.lookingForAJob && errors.lookingForAJob && <p className={s.error}>{errors.lookingForAJob}</p>}
                                        </div>
                                        <div className={s.formItem}>
                                            <label htmlFor={"lookingForAJobDescription"}>Type some info about the job you are looking for:</label>
                                            <textarea
                                                name={"lookingForAJobDescription"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lookingForAJobDescription}
                                            />
                                            {touched.lookingForAJobDescription && errors.lookingForAJobDescription && <p className={s.error}>{errors.lookingForAJobDescription}</p>}
                                        </div>
                                    </div>
                                    <div className={s.formButtons}>
                                        <button disabled={!isValid && !dirty} onClick={handleSubmit} type="submit" className={`${s.submitBtn} ${s.formBtn} `}>Save</button>
                                        <button onClick={() => setEditMode(false)} className={`${s.closeBtn} ${s.formBtn} `}>Close</button>
                                    </div>
                                </div>
                            )}
                        </Formik>

                    </div>
                </div>
            )
        } else {
            return <div><button onClick={() => setEditMode(true)}>Set Profile Info</button></div>
        }
    } else {
        return null
    }
}