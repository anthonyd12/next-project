import Link from "next/link"
import styles from '../styles/NavBar.module.css'

export default function NavBar(){
    return(
            <div className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">
                        Home
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/products">
                        Products
                        </Link>
                    </li>
                    <li className={styles.item}>
                    <Link href="about">
                        About
                        </Link>
                    </li>
                    <li className={styles.item}>
                    <Link href="change">
                        Change
                        </Link>
                    </li>
                </ul>
            </div>
    )
}