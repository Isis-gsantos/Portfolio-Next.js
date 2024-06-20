"use client"
import { useState } from 'react';
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { useLocale, useTranslations } from 'next-intl';
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
    const t = useTranslations("home");
    const router = useRouter();
    const localActive = useLocale();
    const [isActive, setIsActive] = useState(false);

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        router.replace(`/${nextLocale}`);
    }

    const toggleNavbar = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <header className={styles.navbar}>
                <ThemeToggle />

                <ul className={`${styles.navbarList} ${isActive ? styles.active : ''}`}>
                    <li><Link href={`/${localActive}/`}>Home</Link></li>
                    <li><Link href={`/${localActive}/about`}>{t("Navbar.about")}</Link></li>
                    <li><Link href={`/${localActive}/skills`}>Skills</Link></li>
                    <li><Link href={`/${localActive}/projects`}>{t("Navbar.projects")}</Link></li>
                    <li><Link href={`/${localActive}/contact`}>{t("Navbar.contact")}</Link></li>
                </ul>

                <select onChange={onSelectChange} defaultValue={localActive} className={styles.languageSelect}>
                    <option value="en">English</option>
                    <option value="pt-BR">Português</option>
                </select>

                <div className={styles.hamburguer} onClick={toggleNavbar} />
            </header>
        </>
    )
}