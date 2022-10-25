import './App.css';
// import {io} from 'socket.io-client'
import { useEffect } from "react";
import Chat from './components/Chat'

function App() {
  useEffect(()=>{
    // console.log('hey')
    // const socket =new io.connect('http://localhost:5000/')
    // socket.on('connection', ()=>console.log(socket.id))
    // socket.on('chat-res',data=>{
    //   console.log(data)
    // })
    // socket.on('connect_error', ()=>{
    //   setTimeout(()=>socket.connect(),5000)
    // })
  },[])
  return (
    <div className="App">
      <Chat/>
    </div>
  );
}

export default App;
