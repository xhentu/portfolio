// // src/components/ClipProfile.jsx
// import "../styles/clipProfile.css";
// import profileImg from "/profile.jpg";
// import MatrixText from "./matrixText";

// export default function ClipProfile() {
//   return (
//     <section className="clip-container">
//       <div className="clip-content animate-fade-in-up">
//         <img src={profileImg} alt="Profile" className="clip-img" />
//         <MatrixText text="Hein Chan Thu" />
//         <MatrixText text="Stairways to Web Developement"/>
//         <div className="width350"></div>
//       </div>
//     </section>
//   );
// }

// src/components/ClipProfile.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/clipProfile.css";
import profileImg from "/profile.jpg";
import MatrixText from "./matrixText";

export default function ClipProfile() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-30% 0px",
    triggerOnce: false, // show animation again on scroll up
  });

  return (
    <section className="clip-container" ref={ref}>
      <motion.div
        className="clip-content"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={profileImg} alt="Profile" className="clip-img" />
        <MatrixText text="Hein Chan Thu" />
        <MatrixText text="Stairways to Web Development" />
        <div className="width350"></div>
      </motion.div>
    </section>
  );
}
