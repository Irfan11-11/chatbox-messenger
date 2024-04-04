import React from 'react'


function ChatContainer(probs) {
    return (
        <div className='card border-2 w-100'>
            <div className="row vh-95">
                <div className="d-flex flex-column col-12 col-lg-12 col-xl-12 chat-window">
                    {probs.children}
                </div>
            </div>
        </div>
    )
}

export default ChatContainer