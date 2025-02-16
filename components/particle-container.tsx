"use client";

import { useEffect, useRef } from "react";

export function ParticleContainer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        // Using non-null assertions on canvas
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.fill();
      }
    }

    function init() {
      particles = [];
      const numberOfParticles = (canvas!.width * canvas!.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw lines between particles if they are close enough
      particles.forEach((particleA) => {
        particles.forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            context.beginPath();
            context.strokeStyle = `rgba(255, 255, 255, ${
              0.1 * (1 - distance / 100)
            })`;
            context.lineWidth = 0.5;
            context.moveTo(particleA.x, particleA.y);
            context.lineTo(particleB.x, particleB.y);
            context.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      init();
    }

    // Set initial canvas size and start the animation.
    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.3 }}
    />
  );
}