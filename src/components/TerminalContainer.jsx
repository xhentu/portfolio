// TerminalContainer.jsx
import "../styles/TerminalContainer.css";
import TerminalBox from "./TerminalBox";
import { useState } from "react";
import { projectList, skillsList, aboutList, contactList } from "../data/terminalData.jsx";
import TerminalDetail from "./TerminalDetail";

export default function TerminalContainer() {
  const [activeContent, setActiveContent] = useState(null);

  return (
    <section className="terminal-container">
      <div className="left-column">
        <TerminalBox
          title="About"
          items={aboutList}
          onSelect={setActiveContent}
          from="left"
        />
        <TerminalBox
          title="Skills"
          items={skillsList}
          onSelect={setActiveContent}
          from="right"
        />
        <TerminalBox
          title="Projects"
          items={projectList}
          onSelect={setActiveContent}
          from="left"
        />
      </div>

      <div className="right-column">
        <TerminalBox 
          title="Contact" 
          items ={contactList} 
          onSelect={setActiveContent} 
          from="right"
        />
        <TerminalDetail content={activeContent} from="right" />

      </div>
    </section>
  );
}
