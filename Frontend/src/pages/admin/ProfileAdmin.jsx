import React from 'react'
import { Container } from 'react-bootstrap'
import { MyProfileView } from '../../components/myProfileView/MyProfileView'

export default function ProfileAdmin({ user }) {
    return (
        <div className="bg-profile">
            <Container>
                <MyProfileView user={user} />
            </Container>

        </div>

    )
}
