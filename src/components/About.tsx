import styles from "@/styles/about.module.css";
import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function About() {
    const t = useTranslations("about");

    return (
        <section className={styles.about_me}>
            <FadeInSection>
                <h2>{t("title")}</h2>
            </FadeInSection>

            <div className={styles.content}>
                <FadeInSection>
                    <img className={styles.profile} src="/images/me.png" alt="me" />
                    <p>
                        {t("description")} <br></br>
                        <span>
                            <Link target="blank" href="https://github.com/Isis-gsantos"><FaGithub /></Link>
                            <Link target="blank" href="https://www.linkedin.com/in/isis-goncalves-santos/"><FaLinkedin /></Link>
                        </span>
                    </p>
                </FadeInSection>
            </div>
        </section>
    )
}