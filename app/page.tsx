import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiPython, SiFastapi, SiTensorflow, SiPandas, SiMysql } from "react-icons/si";
import { Cloud } from "lucide-react";
import NetworkAnimation from "./components/NetworkAnimation";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="about" className="min-h-screen flex items-center justify-center px-8">
        <div className="flex flex-col sm:flex-row items-center gap-10 max-w-3xl">
          <img
            src="/profile.jpg"
            alt="Sourodeep Roy"
            className="w-64 h-64 rounded-full object-cover border border-border"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl mb-4">About Myself</h2>
            <p className="text-foreground/90 leading-relaxed text-justify">
              I'm Sourodeep Roy, a Data Science and Analytics graduate currently
              focused on independent research in Retrieval-Augmented Generation and
              Agentic AI systems. My interest lies in closing the gap between research
              and deployment — building systems that don't just perform well on
              benchmarks, but function reliably end to end, from retrieval and
              reasoning through to a usable interface.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" className="min-h-screen px-8 py-24 max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl mb-2">My Journey</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent underline underline-offset-4 hover:text-foreground transition-colors"
          >
            View résumé (PDF)
          </a>
        </div>

        <div className="mb-12">
          <h3 className="text-xl mb-6 text-accent">Education</h3>
          <div className="mb-6">
            <div className="flex justify-between flex-wrap gap-2">
              <p className="font-medium">MSc Data Science & Analytics — Distinction</p>
              <p className="text-muted text-sm">Sept 2024 – Sept 2025</p>
            </div>
            <p className="text-muted text-sm">University of Leeds, Leeds, UK</p>
          </div>
          <div>
            <div className="flex justify-between flex-wrap gap-2">
              <p className="font-medium">BTech Computer Science & Engineering — CGPA 8.56/10</p>
              <p className="text-muted text-sm">Jul 2018 – Jun 2022</p>
            </div>
            <p className="text-muted text-sm">University of Engineering and Management, Kolkata, India</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl mb-6 text-accent">Professional Experience</h3>
          <div>
            <div className="flex justify-between flex-wrap gap-2">
              <p className="font-medium">Programmer Analyst — AI & Analytics</p>
              <p className="text-muted text-sm">Aug 2022 – Jul 2024</p>
            </div>
            <p className="text-muted text-sm mb-3">Cognizant</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/90 text-sm leading-relaxed">
              <li>
                Built production-grade data and analytics pipelines in Python and
                PySpark/Spark SQL across 20+ heterogeneous sources, improving
                ingestion latency by 40% and query performance by 25%.
              </li>
              <li>
                Implemented 100+ automated data-quality and integrity checks with
                end-to-end lineage traceability, reducing downstream discrepancies
                by 30%.
              </li>
              <li>
                Orchestrated end-to-end workflows using Apache Airflow, automating
                80% of routine processing and sustaining 97% pipeline uptime.
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen px-8 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="#"
            className="group block rounded-2xl border border-border bg-white/[.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(94,234,212,0.25)] hover:border-accent/40"
          >
            <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">
              RAG Pipeline
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-5">
              A retrieval-augmented generation system with hybrid search and
              reranking, built end to end from ingestion to a live query interface.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "pgvector", "LangChain"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </a>

          <a
            href="#"
            className="group block rounded-2xl border border-border bg-white/[.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(94,234,212,0.25)] hover:border-accent/40"
          >
            <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">
              Agentic Assistant
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-5">
              A multi-agent system that plans, delegates, and executes research
              tasks autonomously, with full tool-use visibility.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "LangGraph", "FastAPI", "Groq"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </a>

          <a
            href="#"
            className="group block rounded-2xl border border-border bg-white/[.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(94,234,212,0.25)] hover:border-accent/40"
          >
            <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">
              Credit Risk Intelligence Suite
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-5">
              Extended a production credit default model on 1.3M Lending Club loans
              with LLM signal extraction, SHAP-grounded memo generation, and a
              macro-driven early warning system.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "XGBoost", "SHAP", "FinBERT", "Ollama", "WoE/IV"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </a>

          <a
            href="#"
            className="group block rounded-2xl border border-border bg-white/[.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(94,234,212,0.25)] hover:border-accent/40"
          >
            <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">
              Intraday Volatility & Market Risk Forecasting
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-5">
              MSc dissertation (Distinction) modelling trade arrival intensity via
              Weibull ACD to improve intraday volatility forecasting and tail-risk
              calibration over standard GARCH.
            </p>
            <div className="flex flex-wrap gap-2">
              {["R", "Weibull ACD", "GARCH", "VaR/ES Backtesting"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl mb-16 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { icon: SiPython, label: "Python" },
              { icon: Cloud, label: "AWS" },
              { icon: SiFastapi, label: "FastAPI" },
              { icon: SiTensorflow, label: "TensorFlow" },
              { icon: SiPandas, label: "Pandas" },
              { icon: SiMysql, label: "SQL" },
            ].map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 animate-[float_3s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="group w-20 h-20 rounded-full border border-border bg-white/[.02] flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_15px_30px_-10px_rgba(94,234,212,0.25)]">
                  <Icon size={32} className="text-foreground/80 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="interests" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl mb-8">Research Interests</h2>
          <p className="text-foreground/90 leading-relaxed">
            My research interests center on retrieval-augmented generation and
            agentic AI systems — particularly how to make them reliable enough to
            trust in production, not just capable in a demo. I'm actively
            developing my skills in multi-agent orchestration and tool use,
            rigorous evaluation methods for LLM-based systems, and the MLOps
            practices needed to deploy AI reliably at scale. The throughline
            across my work, from hallucination evaluation in credit risk memos to
            agentic research assistants, is treating evaluation and deployment as
            first-class problems, not afterthoughts.
          </p>
        </div>
      </section>
      <section className="h-64 md:h-96">
        <NetworkAnimation />
      </section>      
      <section id="socials" className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h2 className="text-3xl mb-10">Get in touch</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sourodeeproy30@gmail.com"
              className="group flex items-center gap-3 rounded-full border border-border px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <FaEnvelope size={18} className="text-muted group-hover:text-accent transition-colors" />
              <span className="text-sm">Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sourodeeproy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-border px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <FaLinkedin size={18} className="text-muted group-hover:text-accent transition-colors" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="https://github.com/SourodeepRoy30"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-border px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <FaGithub size={18} className="text-muted group-hover:text-accent transition-colors" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
