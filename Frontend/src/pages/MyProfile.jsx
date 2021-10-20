import React from 'react'
import { MyProfileView } from '../components/myProfileView/MyProfileView'

function MyProfile({user}) {
    return (
        <MyProfileView user={user}/>
    )
}

export default MyProfile
