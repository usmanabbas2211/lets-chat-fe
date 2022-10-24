import React from 'react'

const Messages = () => {
    return (
        <div className="messages" id="chat">
            <div className="time">Today at 11:41</div>
            <div className="message parker">
                Hey, man! What's up, Mr Stark? 👋
            </div>
            <div className="message stark">Kid, where'd you come from?</div>
            <div className="message parker">Field trip! 🤣</div>
            <div className="message parker">
                Uh, what is this guy's problem, Mr. Stark? 🤔
            </div>
            <div className="message stark">
                Uh, he's from space, he came here to steal a necklace from a
                wizard.
            </div>
            <div className="message stark">
                <div className="typing typing-1"></div>
                <div className="typing typing-2"></div>
                <div className="typing typing-3"></div>
            </div>
        </div>
    )
}

export default Messages
