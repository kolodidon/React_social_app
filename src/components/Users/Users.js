import React from 'react';
import s from './Users.module.scss'

let Users = (props) => {

    if (props.users.length === 0 ) (
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png',
                followed: false,
                fullName: 'Bababui',
                status: 'U are going to Brazil!',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png',
                followed: true,
                fullName: 'Johnie',
                status: 'Where am I?',
                location: {city: '?', country: '?'}
            },
            {
                id: 3,
                photoUrl: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png',
                followed: true,
                fullName: 'Supahero',
                status: 'I gotchu homie',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    )
    return(
        <div className={s.main}>

            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={u.photoUrl} alt='avatar'/>
                        </div>
                    </span>
                    <span>
                        {u.followed ? <button onClick={ () => props.unfollow(u.id) }>Unfollow</button> : <button onClick={ () => props.follow(u.id) }>Follow</button>}
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users