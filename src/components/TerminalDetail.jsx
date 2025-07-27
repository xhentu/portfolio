import "../styles/TerminalContainer.css";
import { useInView } from "react-intersection-observer";
import MatrixText from "./MatrixText";

export default function TerminalDetail({ content, from = "right" }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-20% 0px",
    triggerOnce: false,
  });

  const translateX = from === "left" ? "-40px" : "40px";
  const animationClass = inView ? "fade-in-horizontal" : (from === "right" ? "hidden-right" : "hidden-left");
  // let didSelected = content ? "Selected" : "None";
  const detailText = typeof content === "string" && content.trim()
    ? content
    : "Select an item to view details.";

  return (
    <div
      ref={ref}
      className={`terminal-box ${animationClass}`}
      style={{ "--start-x": translateX }}
    >
      <div className="header"><MatrixText text="Detail" /></div>
      {/* <div className="page-info"><MatrixText text={didSelected} /></div> */}
      <div className="content-area">
        {!content ? (
        <p className="placeholder">← Select a command to view details</p>
        ) : typeof content === "string" ? (
        <MatrixText key={detailText} text={detailText} />
        ) : (
        <div className="matrix-wrap">{content}</div>
        )}
        </div>
    </div>
  );
}

