// BackgroundCanvas.jsx
import { useEffect, useRef } from 'react';
import '../styles/BackgroundCanvas.css'; // Create this file with styles below

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const numStars = 200;
  // const colors = ['#ffffff', '#00ccff', '#ffcc00', '#ff6666', '#99ccff'];
  const colors = ['#ffffff', '#bcdcff', '#f5f3ff', '#ffd4f0', '#c6f7ff'];

  let animationFrameId;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random(),
        delta: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      }));
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    createStars();
    drawStars();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-canvas" />;
}
