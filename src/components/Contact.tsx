"use client"
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from 'emailjs-com';
import styles from "@/styles/contact.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Contact() {
    const t = useTranslations("contact");

    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setFormData({ from_name: '', reply_to: '', message: '' });
        }, (err) => {
            console.error('FAILED...', err);
            alert('Failed to send message.');
        });
    };

    return (
        <section className={styles.contact}>
            <h2>{t("title")}</h2>

            <article>
                <ul className={styles.socials}>
                    <h2>{t("socials")}</h2>
                    <li><Link href="https://github.com/Isis-gsantos" target="_blank"><FaGithub /> Github</Link></li>
                    <li><Link href="https://www.linkedin.com/in/isis-goncalves-santos/" target="_blank"><FaLinkedin /> Linkedin</Link></li>
                    <li><CiMail /> isissantos8425@gmail.com</li>
                </ul>

                <form onSubmit={handleSubmit} className={styles.contact_form}>
                    <input
                        type="text"
                        name="from_name"
                        placeholder={t("name")}
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="reply_to"
                        placeholder='E-mail'
                        value={formData.reply_to}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t("message")}
                        maxLength={500}
                        style={{ height: "180px", width: "300px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>
            </article>
        </section>
    );
}