import {useTranslations} from 'next-intl';
import TypingAnimation from "@/components/TypingAnimation";
import styles from "../../styles/page.module.css"
 
export default function Index() {
  return (
    <section className={styles.homePage}>
        <TypingAnimation />
    </section>
  );
}