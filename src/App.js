//function component
// 1component = 1 file
//localhost
//IP address of local host is 127.0.01

// everything we can wrap in the pranthesis () 

import Name from './Name';
function App() {
    return (
    <div>
        <h1>I have created a react file</h1>
        <h1>Hello React!!</h1>
        <Name id="1" val="Syeda" age="25"/>
        <Name id="2" val="Afreen" age="25"/>
        <Name id="3" val="Mabood" age="25"/>
        <Name id="4" val="Zain" age="25"/>
        <Name id="5" val="Arshiya" age="25"/>


    </div>
    )
}

export default App;