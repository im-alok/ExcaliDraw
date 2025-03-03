"use client"
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const particles: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];

        const createParticles = () => {
            const particleCount = Math.floor(window.innerWidth / 30);

            for (let i = 0; i < particleCount; i++) {
                const radius = Math.random() * 2 + 0.5;

                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: radius,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    color: Math.random() > 0.5 ? 'rgba(15, 244, 198, 0.2)' : 'rgba(139, 92, 246, 0.2)'
                });
            }
        };

        createParticles();

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                particles.forEach((otherParticle, j) => {
                    if (i === j) return;

                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1500})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });
        };

        let animationId: number;

        const animate = () => {
            drawParticles();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
            />
            <div className="blur-dot bg-primary-teal/20 top-20 left-1/4 animate-pulse-slow" />
            <div className="blur-dot bg-primary-purple/20 bottom-20 right-1/4 animate-pulse-slow delay-700" />
        </>
    );
};

export default AnimatedBackground;
