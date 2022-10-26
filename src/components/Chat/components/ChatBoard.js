import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import { io } from 'socket.io-client'
const socket = new io.connect('http://localhost:5000/')

const ChatBoard = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [client, setClient] = useState('')
    useEffect(() => {
        socket.on('got-message', (message) =>
            setMessages((prev) =>
                prev.concat([{ message: message, type: 'recieved' }])
            )
        )
    }, [socket])
    const sendMessage = (e) => {
        e.preventDefault()
        setMessages((prev) => prev.concat([{ message: message, type: 'sent' }]))
        socket.emit('message', { message: message, socketId: client })
        setMessage('')
    }
    return (
        <div className="chat">
            <p>{socket.id}</p>
            <input
                type="text"
                placeholder="enter client id"
                value={client}
                onChange={(e) => setClient(e.target.value)}
            />
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
