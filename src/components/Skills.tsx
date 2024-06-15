import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { CiCloudOn } from "react-icons/ci";
import styles from "@/styles/skills.module.css"

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2>Skills</h2>
            <ul className={styles.skills_list}>
                <li>
                    <FaHtml5 style={{color: "#fd610d", fontSize: "50px"}} />
                    <h3>HTML</h3>
                </li>

                <li>
                    <FaCss3Alt style={{color: "#0830d4", fontSize: "50px"}} />
                    <h3>CSS</h3>
                </li>

                <li>
                    <FaSass style={{color: "#f4579b", fontSize: "50px"}} />
                    <h3>Sass</h3>
                </li>

                <li>
                    <FaBootstrap style={{color: "#9102de", fontSize: "50px"}} />
                    <h3>Bootstrap</h3>
                </li>

                <li>
                    <IoLogoJavascript style={{color: "#FFD43B", fontSize: "50px"}} />
                    <h3>JavaScript</h3>
                </li>

                <li>
                    <FaReact style={{color: "#74C0FC", fontSize: "50px"}} />
                    <h3>React</h3>
                </li>

                <li>
                    <SiTypescript style={{color: "#00b4d8", fontSize: "50px"}} />
                    <h3>Typescript</h3>
                </li>

                <li>
                    <TbBrandNextjs style={{color: "#74C0FC", fontSize: "50px"}} />
                    <h3>Next.js</h3>
                </li>

                <li>
                    <FaNodeJs style={{color: "#aacc00", fontSize: "50px"}} />
                    <h3>Node.js</h3>
                </li>

                <li>
                    <SiMysql style={{color: "#34a0a4", fontSize: "50px"}} />
                    <h3>MySQL</h3>
                </li>

                <li>
                    <FaGithub style={{color: "#9102de", fontSize: "50px"}} />
                    <h3>Git | GitHub</h3>
                </li>

                <li>
                    <CiCloudOn />
                    <h3>API Rest</h3>
                </li>
            </ul>
        </section>
    )
}