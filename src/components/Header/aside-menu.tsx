// import Image from 'next/image'
import styles from './aside-menu.module.scss'

export default function AsideMenu() {
    return (
        <>
            <aside className={styles.asideContainer}>
                <nav className={styles.asideNav}>
                    <ul className={styles.asideMenuList}>
                        <li className={styles.asideMenuItem}>
                            Sobre
                        </li>
                        <li className={styles.asideMenuItem}>
                            Educacional
                        </li>
                        <li className={styles.asideMenuItem}>
                            Experiências
                        </li>
                        <li className={styles.asideMenuItem}>
                            Habilidades
                        </li>
                        <li className={styles.asideMenuItem}>
                            Portfólio
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}
