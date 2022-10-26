import React from 'react'

const Messages = ({ messages }) => {
    return (
        <div className="messages" id="chat">
            {messages.map((msg, idx) => (
                <div
                    className={`message ${
                        msg.type === 'sent' ? 'parker' : 'stark'
                    }`}
                    key={idx}
                >
                    {msg.message}
                </div>
            ))}
            <div className="message stark">
                <div className="typing typing-1"></div>
                <div className="typing typing-2"></div>
                <div className="typing typing-3"></div>
            </div>
        </div>
    )
}

export default Messages
