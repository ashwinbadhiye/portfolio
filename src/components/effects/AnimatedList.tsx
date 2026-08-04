import { Children, ReactNode, useEffect, useRef, useState } from "react";
import "./AnimatedList.css";

type AnimatedListProps = {
  children: ReactNode;
  /** ms between each item appearing */
  delay?: number;
};

/**
 * Ported from Magic UI's Animated List. Reveals its children one after another
 * with a slide-and-fade, starting when scrolled into view. No framer-motion.
 */
const AnimatedList = ({ children, delay = 700 }: AnimatedListProps) => {
  const items = Children.toArray(children);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (count >= items.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [started, count, items.length, delay]);

  return (
    <div className="animated-list" ref={ref}>
      {items.slice(0, count).map((child, i) => (
        <div className="animated-list-item" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;
