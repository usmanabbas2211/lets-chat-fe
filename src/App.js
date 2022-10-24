import './App.css';
import {io} from 'socket.io-client'
import { useEffect, useState } from "react";
import Chat from './components/Chat'

function App() {
  const [time,setTime]=useState('fetchin')
  useEffect(()=>{
    // console.log('hey')
    const socket =new io.connect('http://localhost:5000/')
    socket.on('connection', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
    socket.on('time', (data)=>setTime(data))
    socket.emit("hello", "world");
    socket.on('disconnect',()=>setTime('server disconnected'))
  },[])
  return (
    <div className="App">
      {time}
      <Chat/>
    </div>
  );
}

export default App;
