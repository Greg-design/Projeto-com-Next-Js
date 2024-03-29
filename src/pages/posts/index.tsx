import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import thumbImg from "../../../public/images/thumb.png";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={thumbImg} alt="Post titulo 1" width={720} height={410} quality={100} />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 julho 2023</time>
              <p>
                Hoje vamos criar o controle de mostrar a senha no input, uma opção para os nossos formulários de
                cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!
              </p>
            </a>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#fff" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#fff" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronRight size={25} color="#fff" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
