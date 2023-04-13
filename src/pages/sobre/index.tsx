import Head from "next/head";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Quem somos? | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Sujeito Programador</h1>
            <p>
              Opa tudo bem? Meu nome é Matheus Fraga sou formado em Análise e Desenvolvimento de Sistemas e fundador do
              Sujeito Programador. Desde pequeno sempre fui apaixonado por tecnologias e sempre com aquela curiosidade
              de como tudo aquilo funcionava, foi ai que comecei minha jornada, trabalhei como freelancer, web sites,
              aplicativos e por ai vai. Após a faculdade eu vi uma barreira enorme que muitos passavam que era entrar na
              área ou criar seus proprios sistemas, por que basicamente saimos cru da faculdade. Então depois de me
              especializar eu decidi tirar a minha ideia do papel e levar aos amantes da tecnologia a alcançarem sucesso
              em suas carreiras, e ai surgiu o Sujeito Programador onde nossos cursos vão do zero até o profissional na
              pratica, direto ao ponto e juntando com o que está no mercado de trabalho.
            </p>

            <a href="">
              <FaYoutube size={40} />
            </a>
            <a href="">
              <FaInstagram size={40} />
            </a>
            <a href="">
              <FaLinkedin size={40} />
            </a>
            <a href="">
              <FaFacebook size={40} />
            </a>
          </section>
          <div>
            <img src="../../../images/demos1.png" alt="Sobre sujeito programador" />
            <img src="../../../images/techs.png" alt="Sobre sujeito programador tecnologias usadas" />
          </div>
        </div>
      </main>
    </>
  );
}
