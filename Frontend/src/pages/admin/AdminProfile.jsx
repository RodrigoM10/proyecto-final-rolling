import React from 'react'
import { Redirect, useParams } from 'react-router';
function AdminProfile() {
    const { userId } = useParams();
    
    return (
        <div>
            Perfil de {userId.name}
        </div>
    )
}

export default AdminProfile
