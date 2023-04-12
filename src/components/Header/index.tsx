import Image from "next/image";
import logo from "../../../public/images/Logo.svg";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <Image src={logo} alt="Logo Sujeito Programador" />
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>
          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="https://sujeitoprogramador.com">
          COMEÇAR
        </a>
      </div>
    </header>
  );
}
