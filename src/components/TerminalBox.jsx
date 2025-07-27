// its working in functionality but not animation
import "../styles/TerminalContainer.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import MatrixText from "./MatrixText";

export default function TerminalBox({ title, items, onSelect, from = "left" }) {
  const { ref, inView } = useInView({ threshold: 0.3, rootMargin: "-20% 0px", triggerOnce: false });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const hiddenClass = from === "right" ? "hidden-right" : "hidden-left";

  return (
    <div
      ref={ref}
      className={`terminal-box ${isVisible ? "fade-in-horizontal" : hiddenClass}`}
    >
      <div className="header"><MatrixText text={title} /></div>
      <div className="page-info"><MatrixText text={`${items.length} items`} /></div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} onClick={() => onSelect(item.detail)}>
            <MatrixText text={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

