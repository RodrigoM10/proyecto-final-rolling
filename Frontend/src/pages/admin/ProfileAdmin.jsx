import React from 'react'
import { MyProfileView } from '../../components/myProfileView/MyProfileView'

export default function ProfileAdmin({user}) {
    return (
        <div>
            <MyProfileView user={user}/>
        </div>
    )
}
