import React, {useState, useEffect} from 'react'
//import s from './ProfileStatus.module.scss'

type PropsType = {
    status: string
    userId: number | null
    isAuth: boolean
    myId: number | null
    changeUserStatusThunkCreator: (statusText: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({status, userId, isAuth, myId, changeUserStatusThunkCreator}) => {

    let [editMode, setEditMode] = useState(false)
    let [localStatus, setStatus] = useState(status)

    useEffect( () => {
        setStatus(status)
    }, [status] )

    const toggleEdit = () => {
        setEditMode(true)
    }

    const unToggleEdit = () => {
        setEditMode(false)
        changeUserStatusThunkCreator(localStatus)
    }

    const onStatusInputChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(element.currentTarget.value)
    }

    if(editMode){
        return (
            <>
                <div>
                    <input 
                        type="text" 
                        onChange={ onStatusInputChange } 
                        value={localStatus}
                    />
                    
                    <button onClick={unToggleEdit}>Сохранить</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div><span>{status}</span></div>
                { ( (userId === myId) && (isAuth) ) ? <div><button onClick={toggleEdit}>Редактировать</button></div> : null }
            </>
        ) 
    }
}

export default ProfileStatusWithHooks