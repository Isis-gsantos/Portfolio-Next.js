import {useTranslations} from 'next-intl';
import TypingAnimation from "@/components/TypingAnimation";
import styles from "@/styles/page.module.css"
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
 
export default function Index() {
  return (
    <>
      <section className={styles.homePage}>
        <TypingAnimation />
      </section>
      <About />
      <Skills />
      <Projects />
    </>
  );
}