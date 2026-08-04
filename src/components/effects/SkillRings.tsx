import { CSSProperties } from "react";
import { skillCategories } from "../skillsData";
import "./SkillRings.css";

type SkillRingsProps = {
  /** "four" = one concentric ring per category; "two" = skills ring + category ring */
  mode: "four" | "two";
  /** radius of the innermost ring in px */
  baseRadius?: number;
  /** gap between concentric rings in px */
  ringGap?: number;
};

// Places characters of `text` around a circle of the given radius.
const Ring = ({
  text,
  radius,
  duration,
  reverse,
  color,
  fontSize = 12,
}: {
  text: string;
  radius: number;
  duration: number;
  reverse?: boolean;
  color: string;
  fontSize?: number;
}) => {
  const chars = Array.from(text);
  const step = 360 / chars.length;
  return (
    <div
      className={`skill-ring ${reverse ? "skill-ring--reverse" : ""}`}
      style={
        {
          width: radius * 2,
          height: radius * 2,
          "--sr-duration": `${duration}s`,
        } as CSSProperties
      }
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          className="skill-ring-char"
          style={{
            color,
            fontSize,
            transform: `translate(-50%, -50%) rotate(${i * step}deg) translateY(${-radius}px)`,
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
};

const SkillRings = ({ mode, baseRadius = 205, ringGap = 26 }: SkillRingsProps) => {
  if (mode === "four") {
    return (
      <div className="skill-rings">
        {skillCategories.map((cat, i) => {
          const radius = baseRadius + i * ringGap;
          const text =
            `${cat.name.toUpperCase()}  ·  ` +
            cat.skills.map((s) => s.short).join("  ·  ") +
            "  ·  ";
          return (
            <Ring
              key={cat.name}
              text={text}
              radius={radius}
              duration={40 + i * 7}
              reverse={i % 2 === 1}
              color={cat.color}
              fontSize={15}
            />
          );
        })}
      </div>
    );
  }

  // two-ring mode: inner = all skill shorts, outer = category names
  const inner =
    skillCategories.flatMap((c) => c.skills.map((s) => s.short)).join("  ·  ") + "  ·  ";
  const outer = skillCategories.map((c) => c.name.toUpperCase()).join("   ·   ") + "   ·   ";

  return (
    <div className="skill-rings">
      <Ring text={inner} radius={baseRadius} duration={40} color="#8fe9dd" fontSize={11} />
      <Ring
        text={outer}
        radius={baseRadius + ringGap + 6}
        duration={30}
        reverse
        color="#5eead4"
        fontSize={14}
      />
    </div>
  );
};

export default SkillRings;
