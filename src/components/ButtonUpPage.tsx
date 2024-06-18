"use client"
import { useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import style from "@/styles/ButtonUpPage.module.css"

export default function ButtonUpPage() {
    useEffect(() => {
        const upButton = document.getElementById("btn-up");
        if (upButton) {
            upButton.addEventListener("click", () => {
                window.scrollTo({ top: 0 });
            });
        }
    }, []);

    return <button className={style.btn_up_page } id="btn-up"><FaArrowUp /></button>;
}
