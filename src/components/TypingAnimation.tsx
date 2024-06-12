"use client";

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import styles from "../styles/page.module.css";

const TypingAnimation: React.FC = () => {
  const t = useTranslations('home');
  const phrases = [
    t('typing_phrase_1'),
    t('typing_phrase_2')
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      setText(
        isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
      );

      setTypeSpeed(isDeleting ? 40 : 60);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, typeSpeed, phrases]);

  return (
    <article className={styles.phrases}>
      <h1>{text}</h1>
    </article>
  );
};

export default TypingAnimation;
