import React from 'react'

function ChatInput({ message, setMessage, sendMessage }) {
    return (
        <div className="mt-auto align-items-end border-1 py-3 px-4 border-top-d-lg-block chat-input">
            <div className="input-group flex-fill">
                <input type="text" className='form-control' name='message' value={message} placeholder='Type your message...' onChange={({ currentTarget: input }) => setMessage(input.value)}
                    onKeyDown={(e) =>(e.code === "Enter" ? sendMessage() : null)}
                />
                <button className='btn btn-info'>Send</button>
            </div>
        </div>
    )
}

export default ChatInput