import React from 'react'
import ChatBoard from './components/ChatBoard'
import './Chat.scss'
import Contacts from './components/Contacts'

const Chat = () => {
    return (
        <div className="center">
            <Contacts />
            <ChatBoard />
        </div>
    )
}

export default Chat
