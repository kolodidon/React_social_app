import React, {useState, useEffect} from 'react'
//import s from './ProfileStatus.module.scss'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const toggleEdit = () => {
        setEditMode(true)
    }

    const unToggleEdit = () => {
        setEditMode(false)
        props.changeUserStatusThunkCreator(status)
    }

    const onStatusInputChange = (element) => {
        setStatus(element.currentTarget.value)
    }

    if(editMode){
        return (
            <>
                <div>
                    <input 
                        type="text" 
                        onChange={ onStatusInputChange } 
                        value={status}
                    />
                    
                    <button onClick={unToggleEdit}>Сохранить</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div><span>{props.status}</span></div>
                { ( (props.userId === props.myId) && (props.isAuth) ) ? <div><button onClick={toggleEdit}>Редактировать</button></div> : null }
            </>
        ) 
    }
}

export default ProfileStatusWithHooks