import React from 'react'
import { Container } from 'react-bootstrap'
import { MyProfileView } from '../../components/myProfileView/MyProfileView'

export default function ProfileAdmin({ user, requestUserData }) {
    return (
        <div >
            <Container>
                <MyProfileView requestUserData={requestUserData} user={user} />
            </Container>
        </div>

    )
}
