import styles from "@/styles/projects.module.css";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql } from "react-icons/si";
import { CiCloudOn } from "react-icons/ci";

export default function Projects() {
    const t = useTranslations("projects");

    return (
        <section className={styles.projects}>
            <h2>{t("title")}</h2>

            <ul className={styles.projects_list}>
                <li className={styles.project}>
                    <h3>Digital Hub Store</h3>
                    <button>
                        <Link href="https://digitalhub-store.vercel.app"><i>{t("link")}</i></Link>
                    </button>
                    <img src="/images/digitalhub.jpg" alt="Digital Hub Store Site" />
                    <p>{t("DigitalHub")}</p>
                    <div>
                        <FaReact />
                        <SiTypescript />
                    </div>
                </li>

                <li className={styles.project}>
                    <h3>ScienceBlog</h3>
                    <button>
                        <Link href="https://github.com/Isis-gsantos/ScienceBlog-Node.js"><i>{t("link")}</i></Link>
                    </button>
                    <img src="/images/scienceblog.jpg" alt="ScienceBlog Site" />
                    <p>{t("ScienceBlog")}</p>
                    <div>
                        <FaNodeJs />
                        <SiMysql />
                        <FaCss3Alt />
                    </div>
                </li>

                <li className={styles.project}>
                    <h3>FoodDev</h3>
                    <button>
                        <Link href="https://isis-gsantos.github.io/FoodDev-projeto/"><i>{t("link")}</i></Link>
                    </button>
                    <img src="/images/fooddev.jpg" alt="FoodDev Site" />
                    <p>{t("FoodDev")}</p>
                    <div>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <IoLogoJavascript />
                    </div>
                </li>

                <li className={styles.project}>
                    <h3>Book API</h3>
                    <button>
                        <Link href="https://github.com/Isis-gsantos/Bookstore-APIRest"><i>{t("link")}</i></Link>
                    </button>
                    <img src="/images/api-book.jpg" alt="Book API Site" />
                    <p>{t("BookAPI")}</p>
                    <div>
                        <FaNodeJs />
                        <SiMysql />
                        <CiCloudOn />
                        <FaSass />
                    </div>
                </li>

                <li className={styles.project}>
                    <h3>React Form</h3>
                    <button>
                        <Link href="https://github.com/Isis-gsantos/React-Form"><i>{t("link")}</i></Link>
                    </button>
                    <img src="/images/form-react.jpg" alt="" />
                    <p>{t("ReactForm")}</p>
                    <div>
                        <FaReact />
                        <FaCss3Alt />
                    </div>
                </li>

                <li className={styles.project}>
                    <h3>GitHub API Fetch</h3>
                    <button>
                        <Link href="https://github.com/Isis-gsantos/QUEST-JS-fetch-github-API"><i>{t("link")}</i></Link>
                    </button>
                    <img src="/images/github.jpg" alt="GitHub API Fetch" />
                    <p>{t("GithubAPI")}</p>
                    <div>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <IoLogoJavascript />
                    </div>
                </li>
            </ul>
        </section>
    )
}