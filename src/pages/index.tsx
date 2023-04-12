import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>
              Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto aplicando o que
              usamos no mercado de trabalho. 👊
            </span>

            <a>
              <button>Começar agora!</button>
            </a>
          </section>
          <img src="/images/babyvictory.png" alt="Conteúdos Sujeito Programdor" />
        </div>

        <hr className={styles.divider} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps nativos para IOS e Android, construindo
              aplicativos do zero até aplicativos profissionais.
            </span>
          </section>
          <img src="/images/demoApp.png" alt="Conteúdos sobre desenvolvimento de apps." />
        </div>

        <hr className={styles.divider} />

        <div className={styles.sectionContent}>
          <img src="/images/demos1.png" alt="Conteúdos sobre desenvolvimento de aplicações web." />

          <section>
            <h2>Aprenda a criar sistemas web.</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </div>
      </main>
    </>
  );
}
