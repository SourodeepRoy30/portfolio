"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number };
type Connection = { from: Node; to: Node; duration: number; offset: number };

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const layerSizes = [4, 6, 6, 3];
    let layers: Node[][] = [];
    let connections: Connection[] = [];

    function layout() {
      const layerGap = width / (layerSizes.length + 1);
      layers = layerSizes.map((count, i) => {
        const x = layerGap * (i + 1);
        const nodeGap = height / (count + 1);
        return Array.from({ length: count }, (_, j) => ({
          x,
          y: nodeGap * (j + 1),
        }));
      });

      connections = [];
      for (let i = 0; i < layers.length - 1; i++) {
        for (const from of layers[i]) {
          for (const to of layers[i + 1]) {
            connections.push({
              from,
              to,
              duration: 1500 + Math.random() * 1500,
              offset: Math.random() * 3000,
            });
          }
        }
      }
    }

    layout();

    let animationId: number;
    const start = performance.now();

    function draw(now: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const elapsed = now - start;

      const css = getComputedStyle(document.documentElement);
      const accent = css.getPropertyValue("--accent").trim() || "#7aa7ff";
      const foreground = css.getPropertyValue("--foreground").trim() || "#ece8df";

      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 1;
      for (const conn of connections) {
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.stroke();
      }

      ctx.fillStyle = accent;
      for (const conn of connections) {
        const t = ((elapsed + conn.offset) % conn.duration) / conn.duration;
        const px = conn.from.x + (conn.to.x - conn.from.x) * t;
        const py = conn.from.y + (conn.to.y - conn.from.y) * t;
        const fade = Math.sin(t * Math.PI);

        ctx.globalAlpha = fade;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = foreground;
      for (const layer of layers) {
        for (const node of layer) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      layout();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}