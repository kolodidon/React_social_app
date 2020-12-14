import React from 'react'
import s from './Preloader.module.scss'
import preloader from '../../../assets/preloader.svg'

let Preloader = () => {
    return (
        <img className={s.preloader} src={preloader} alt="preloader"/>
    )
}

export default Preloader