import { useState } from "react";
import "../styles/matrix.css";

// export default function MatrixText({ text }) {
//   const words = text.split(" ");

//   return (
//     <div className="matrix-text-wrapper">
//       {words.map((word, i) => (
//         <MatrixWord key={i} word={word} />
//       ))}
//     </div>
//   );
// }

export default function MatrixText({ text }) {
  const paragraphs = text.split("\n");

  return (
    <div className="matrix-text-wrapper">
      {paragraphs.map((para, index) => (
        <p key={index} className="matrix-paragraph">
          {para.split(" ").map((word, i) => (
            <MatrixWord key={i} word={word} />
          ))}
        </p>
      ))}
    </div>
  );
}

function MatrixWord({ word }) {
  const [chars, setChars] = useState([...word]);

  const handleHover = () => {
    let iteration = 0;
    const original = [...word];

    const interval = setInterval(() => {
      setChars(prev =>
        prev.map((char, idx) => {
          if (idx < iteration) return original[idx];
          return randomChar();
        })
      );

      iteration += 1 / 2;
      if (iteration >= original.length) {
        clearInterval(interval);
        setChars(original);
      }
    }, 40);
  };

  return (
    <span className="matrix-word" onMouseEnter={handleHover}>
      {chars.map((c, i) => (
        <span key={i}>{c}</span>
      ))}
      <span>&nbsp;</span>
    </span>
  );
}

function randomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01¥Ψ#∆§λΩπΣЖ";
  return chars[Math.floor(Math.random() * chars.length)];
}
