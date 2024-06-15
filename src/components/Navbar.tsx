"use client"
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { useLocale, useTranslations } from 'next-intl';
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const t = useTranslations("home");
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        router.replace(`/${nextLocale}`);
    }

    return (
        <>
            <section className={styles.navbar}>
                <h2>Isis G Santos</h2>
                            
                <ul className={styles.navbarList}>
                    <li><Link href="/" locale={localActive}>Home</Link></li>
                    <li><Link href="/about" locale={localActive}>{t("Navbar.about")}</Link></li>
                    <li><Link href="/skills" locale={localActive}>Skills</Link></li>
                    <li><Link href="/projects" locale={localActive}>{t("Navbar.projects")}</Link></li>
                    <li><Link href="/contact" locale={localActive}>{t("Navbar.contact")}</Link></li>
                </ul>

                <select onChange={onSelectChange} defaultValue={localActive} className={styles.languageSelect}>
                    <option value="en">English</option>
                    <option value="pt-BR">Português</option>
                </select>
            </section>
        </>
    )
}