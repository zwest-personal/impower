import './App.css'
import {useState} from "react";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {
    const [session, setSession] = useState();

    return (
        <>
            {session ? <Dashboard/> : <Login setSession={setSession}/>}
        </>
    )
}

export default App
