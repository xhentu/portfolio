import './App.css'
import BackgroundCanvas from './components/BackgroundCanvas.jsx';
import ClipProfile from './components/ClipProfile.jsx';
import TerminalContainer from './components/TerminalContainer.jsx';
import EmailMe from "./components/EmailMe";

function App() {

  
  return (
    <>
      <BackgroundCanvas />
      <ClipProfile />
      <TerminalContainer />
      <EmailMe />
      <div style={{ height: "100px", margin: "10px" }} />
    </>
  )
}

export default App
