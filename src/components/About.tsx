import styles from "@/styles/about.module.css";
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations("about");

    return (
        <section className={styles.about_me}>
            <h2>{t("title")}</h2>

            <div>
                <img className={styles.profile} src="/images/me.png" alt="me" />
                <p>{t("description")}</p>
            </div>
        </section>
    )
}