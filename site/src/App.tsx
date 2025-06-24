import './App.css'
import {useState} from "react";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {
    const [session, setSession] = useState();

    return (
        <div>
            {session ? <Dashboard/> : <Login setSession={setSession}/>}
        </div>
    )
}

export default App
