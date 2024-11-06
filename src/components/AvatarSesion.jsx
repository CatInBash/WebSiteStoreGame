import React from 'react';

function AvatarSesion({ user }) {
    if (!user) {
        return null;
    }

    return (
        <div className="avatar-sesion">
            <img 
                src= 'default-avatar.png'
                alt="Avatar del usuario" 
                className="avatar-icon"
            />
            <label className="avatar-label">{user.name}</label>
        </div>
    );
}

export default AvatarSesion;