import React from 'react';

function ChatHeader({ user }) {

    const username = user.username;

    return (
        <div className="align-items-start py-2 px-4 w-100 border-bottom d-lg-block sticky-top bg-white">
            <div className="d-flex align-items-center py-1">
                <div className="position-relative">
                    <img src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain" className='rounded-circle mx-2' alt={username.username} width="40" height="40" />
                </div>
                <div className="flex-grow-1">
                    <strong>Logged in as {username}</strong>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;
