import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContainer from './ChatContainer'
import ScrollableFeed from 'react-scrollable-feed'

function Chat({ user, message, sendMessage, messages, setMessage }) {
    return (
        <ChatContainer>
            <ChatHeader user={user} />
            <div className="position-relative chat-height overflow-auto">
                <ScrollableFeed>
                    <div className="d-flex flex-column p-4">
                        {messages.map((message, index) => {
                            return message.type === "userStatus" ? (
                                <div key={index} className='text-center'>
                                    <span className='badge bg-info'>
                                        {message.userId === user.userId ? "you have Joined!" : `${message.username} has Joined!`}
                                    </span>
                                </div>
                            ) : (
                                <div key={index} className={message.userId === user.userId ? "chat-message-right pb-4" : "chat-message-left pb-4"}>
                                    <div>
                                        <img src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain" width="40" height="40" alt={message.username} title={message.username} className='rounded-circle mr-1' />
                                        <div className='text-muted small text-nowarp mt-2'>
                                            12:00 AM
                                        </div>
                                    </div>
                                    <div className='flex-shrink-1 bg-light rounded py-2 px-3 ml-3'>
                                        <div className="font-weight-bold mb-1">
                                            {message.userId === user.userId ? "You" : message.username}
                                        </div>
                                        {message.message}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollableFeed>
            </div>
            <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage} />
        </ChatContainer>
    )
}

export default Chat