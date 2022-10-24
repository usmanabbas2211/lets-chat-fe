import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import { io } from 'socket.io-client'

const ChatBoard = () => {
    useEffect(() => {
        // console.log('hey')
        const socket = new io.connect('http://localhost:5000/')
        socket.on('connection', () => console.log(socket.id))
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000)
        })
        socket.on('time', (data) => setTime(data))
        socket.emit('hello', 'world')
        socket.on('disconnect', () => setTime('server disconnected'))
    }, [])
    const [message, setMessage] = useState('')
    const sendMessage = (e) => {
        e.preventDefault()
        console.log(message)
        setMessage('')
    }
    return (
        <div className="chat">
            <div className="contact bar">
                <div className="pic stark"></div>
                <div className="name">Tony Stark</div>
                <div className="seen">Today at 12:56</div>
            </div>
            <Messages />
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
