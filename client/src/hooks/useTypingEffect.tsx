import { useState, useEffect, useRef } from "react";

export const useTypingEffect = (
  texts: string[], 
  typingSpeed: number = 100, 
  delayBetweenTexts: number = 1000
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeout.current = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout.current = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      if (displayedText.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, typingSpeed / 2);
      } else {
        setCurrentIndex((currentIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [texts, currentIndex, displayedText, isTyping, typingSpeed, delayBetweenTexts]);

  return displayedText;
};
