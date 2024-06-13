import styles from "../styles/about.module.css";
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations("about");
    // const description = t("description");
    // const formattedDescription = description.replace(/\n/g, "<br />");

    return (
        <section className={styles.about_me}>
            <h2>{t("title")}</h2>

            <div className="description">
                <img className={styles.profile} src="/images/me.png" alt="me" />

                <p dangerouslySetInnerHTML={{ __html: t("description", { breakLines: true }) }}></p>
            </div>
        </section>
    )
}