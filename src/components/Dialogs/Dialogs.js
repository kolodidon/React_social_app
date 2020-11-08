import React from 'react'
import s from './Dialogs.module.scss'

const Dialogs = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog + ' ' + s.dialogActive}>
                    Name
                </div>
                <div className={s.dialog}>
                    Name_1
                </div>
                <div className={s.dialog}>
                    Name_2
                </div>
                <div className={s.dialog}>
                    Name_3
                </div>
                <div className={s.dialog}>
                    Name_4
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Wassup 1</div>
                <div className={s.message}>Wassup 2</div>
                <div className={s.message}>Wassup 3</div>
            </div>
        </div>
    )
}

export default Dialogs