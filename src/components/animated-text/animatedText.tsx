import React from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const textArray = React.Children.toArray(children).join("").split("");

  return (
    <span>
      {textArray.map((char, index) => (
        <span key={index} className="letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
