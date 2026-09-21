"use client";

import { useEffect, useRef } from "react";

const CATEGORIES = [
  {
    title: "Core Programming",
    pos: { x: 0.20, y: 0.16 },
    skills: ["Python", "NumPy", "Pandas", "scikit-learn", "R", "C++", "Git", "Linux/CLI"],
  },
  {
    title: "ML & Deep Learning",
    pos: { x: 0.78, y: 0.18 },
    skills: ["PyTorch", "TensorFlow", "Neural Nets", "Transformers", "CNNs", "Regression", "Clustering", "Ensembles", "Fine-tuning", "Optimization"],
  },
  {
    title: "GenAI & Modern Workflows",
    pos: { x: 0.5, y: 0.5 },
    skills: ["Hugging Face", "LangChain", "LlamaIndex", "RAG", "Embeddings", "Vector Search", "Context Eng.", "Agentic Workflows"],
  },
  {
    title: "Data Engineering & APIs",
    pos: { x: 0.20, y: 0.82 },
    skills: ["SQL", "PySpark", "Spark SQL", "Apache Airflow", "REST API", "FastAPI", "Flask"],
  },
  {
    title: "Cloud & MLOps",
    pos: { x: 0.78, y: 0.84 },
    skills: ["AWS SageMaker", "Docker", "Kubernetes"],
  },
];

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  label: string;
  isHub: boolean;
  phase: number;
  freq: number;
  labelSide: "left" | "right" | "center";
};

export default function SkillsGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
    
    let nodes: Node[] = [];
    let lines: { from: Node; to: Node }[] = [];

    function layout() {
      nodes = [];
      lines = [];
      const cx = width / 2;
      const cy = height / 2;

      for (const cat of CATEGORIES) {
        const hubX = cat.pos.x * width;
        const hubY = cat.pos.y * height;

        const hub: Node = {
          x: hubX,
          y: hubY,
          baseX: hubX,
          baseY: hubY,
          label: cat.title,
          isHub: true,
          phase: Math.random() * 10,
          freq: 0.4 + Math.random() * 0.2,
          labelSide: "center",
        };
        nodes.push(hub);

        const outwardAngle = Math.atan2(hubY - cy, hubX - cx);
        const isCenter = cat.pos.x === 0.5 && cat.pos.y === 0.5;
        const spreadArc = isCenter ? Math.PI * 2 : Math.PI * 0.85;
        const startAngle = isCenter ? 0 : outwardAngle - spreadArc / 2;
        const radius = isCenter ? Math.min(width, height) * 0.24 : Math.min(width, height) * 0.15;

        cat.skills.forEach((skill, i) => {
          const divisor = isCenter ? cat.skills.length : cat.skills.length - 1 || 1;
          const angle = startAngle + (spreadArc * i) / divisor;
          const sx = hubX + Math.cos(angle) * radius;
          const sy = hubY + Math.sin(angle) * radius;
          const dx = Math.cos(angle);

          const skillNode: Node = {
            x: sx,
            y: sy,
            baseX: sx,
            baseY: sy,
            label: skill,
            isHub: false,
            phase: Math.random() * 10,
            freq: 0.5 + Math.random() * 0.3,
            labelSide: dx > 0.15 ? "right" : dx < -0.15 ? "left" : "center",
          };
          nodes.push(skillNode);
          lines.push({ from: hub, to: skillNode });
        });
      }
    }

    layout();

    let animationId: number;
    const start = performance.now();

    function draw(now: number) {
      if (!ctx) return;
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x = node.baseX + Math.sin(t * node.freq + node.phase) * 5;
        node.y = node.baseY + Math.cos(t * node.freq * 0.8 + node.phase) * 5;
      }

      ctx.strokeStyle = "rgba(79, 168, 255, 0.15)";
      ctx.lineWidth = 1;
      for (const line of lines) {
        ctx.beginPath();
        ctx.moveTo(line.from.x, line.from.y);
        ctx.lineTo(line.to.x, line.to.y);
        ctx.stroke();
      }

      for (const node of nodes) {
        ctx.fillStyle = node.isHub ? "#4fa8ff" : "#eaf2ff";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.isHub ? 5 : 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = node.isHub ? "bold 13px sans-serif" : "11px sans-serif";
        ctx.fillStyle = node.isHub ? "#4fa8ff" : "rgba(234, 242, 255, 0.75)";

        const offset = node.isHub ? 14 : 9;
        if (node.labelSide === "right") {
          ctx.textAlign = "left";
          ctx.fillText(node.label, node.x + offset, node.y + 4);
        } else if (node.labelSide === "left") {
          ctx.textAlign = "right";
          ctx.fillText(node.label, node.x - offset, node.y + 4);
        } else {
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y - offset - 4);
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    function handleResize() {
      if (!canvas || !ctx) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
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