import React, { useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup'
import s from './UploadAvatar.module.scss'

type PropsType = {
    userId: number
    isAuth: boolean
    myId: number
    sendAvatarThunkCreator: (image: any) => void
}
type FormValuesType = {
    file: any
}

const UploadAvatar: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]
    const onAvatarUploadSubmit = (image) => {
        props.sendAvatarThunkCreator(image)
        setEditMode(false)
    }
    const initialValues: FormValuesType = { file: null }
    if ((props.userId === props.myId) && (props.isAuth)) {
        if (editMode) {
            return (
                <div className={s.modalBackground}>
                    <div className={s.modalContent}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => {onAvatarUploadSubmit(values.file)}}
                            validationSchema={yup.object().shape({
                                file: yup
                                    .mixed()
                                    .required("Please choose an image to upload.")
                                    .test("fileFormat", "Unsupported file format. You can only upload .jpg, .jpeg and .png files.", 
                                    value => value && SUPPORTED_FORMATS.includes(value.type))
                            })}
                        >
                            {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="file">Upload an avatar</label>
                                        <input 
                                            id="file" 
                                            name="file" 
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(event) => {setFieldValue("file", event.currentTarget.files[0]);}}
                                            className="form-control"
                                        />
                                        {values.file && !errors.file && <Thumb file={values.file} />}
                                    </div>
                                    {touched.file && errors.file && <p className={s.error}>{errors.file}</p>}
                                    <div className={s.formButtons}>
                                        <button type="submit">Save</button>
                                        <button onClick={() => setEditMode(false)}>Close</button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                        
                    </div>
                </div>
            )
        } else {
            return <div><button onClick={() => setEditMode(true)}>Загрузить Аватар</button></div>
        }
    } else {
        return null
    }
}


const Thumb = (props) => {
    let [thumb, setThumb] = useState(undefined)
    let reader = new FileReader();
    reader.readAsDataURL(props.file);
    reader.onloadend = () => {
        setThumb(reader.result)
    }
    return(
        <img 
            src={thumb}
            alt={props.file.name}
            className="img-thumbnail mt-2"
            height={200}
            width={200} 
        />
    )
}

export default UploadAvatar