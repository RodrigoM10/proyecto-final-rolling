import React from 'react'
import { Container } from 'react-bootstrap'
import { MyProfileView } from '../components/myProfileView/MyProfileView'

function MyProfile({ user, requestUserData }) {
    return (
        <div className="bg-grey">
            <Container>
                <MyProfileView  requestUserData={requestUserData} user={user} />
            </Container>
        </div>
    )
}

export default MyProfile
