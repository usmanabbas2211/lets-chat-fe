import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import { io } from 'socket.io-client'
const socket = new io.connect('http://localhost:5000/')

const ChatBoard = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
        console.log('useffect running')
        socket.on('got-message', (data) =>
            setMessages((prev) => [...prev, data])
        )
    }, [socket])
    const sendMessage = (e) => {
        e.preventDefault()
        // console.log(message, socket)
        socket.emit('message', message)
        setMessage('')
    }
    return (
        <div className="chat">
            <div className="contact bar">
                <div className="pic stark"></div>
                <div className="name">Tony Stark</div>
                <div className="seen">Today at 12:56</div>
            </div>
            <Messages messages={messages} />
            <div className="input">
                <form onSubmit={sendMessage} style={{ width: '100%' }}>
                    <input
                        placeholder="Type your message here!"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export default ChatBoard
