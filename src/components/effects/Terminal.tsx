import { useEffect, useRef, useState } from "react";
import "./Terminal.css";

export type TerminalLine = {
  text: string;
  /** "cmd" shows a prompt, "ok" is a success line, "muted" is dim, "out" plain */
  type?: "cmd" | "ok" | "muted" | "out";
};

type TerminalProps = {
  lines: TerminalLine[];
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms pause between lines */
  linePause?: number;
  title?: string;
};

/**
 * Ported from Magic UI's Terminal. Types each line out sequentially with a
 * blinking cursor, starting once scrolled into view. No framer-motion.
 */
const Terminal = ({
  lines,
  typeSpeed = 22,
  linePause = 320,
  title = "hr-connect — zsh",
}: TerminalProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typed, setTyped] = useState<string>("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // start only when scrolled into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (visibleLines >= lines.length) return;
    const current = lines[visibleLines].text;

    if (typed.length < current.length) {
      const t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), typeSpeed);
      return () => clearTimeout(t);
    }
    // line finished — pause, commit it, move on
    const t = setTimeout(() => {
      setVisibleLines((n) => n + 1);
      setTyped("");
    }, linePause);
    return () => clearTimeout(t);
  }, [started, typed, visibleLines, lines, typeSpeed, linePause]);

  const renderLine = (line: TerminalLine, text: string, key: number) => (
    <div className={`terminal-line terminal-${line.type || "out"}`} key={key}>
      {line.type === "cmd" && <span className="terminal-prompt">$</span>}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="terminal" ref={ref}>
      <div className="terminal-bar">
        <span className="terminal-dot terminal-dot--red" />
        <span className="terminal-dot terminal-dot--yellow" />
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, visibleLines).map((line, i) => renderLine(line, line.text, i))}
        {started && visibleLines < lines.length && (
          <div className={`terminal-line terminal-${lines[visibleLines].type || "out"}`}>
            {lines[visibleLines].type === "cmd" && <span className="terminal-prompt">$</span>}
            <span>{typed}</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
