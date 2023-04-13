import { createClient } from "@/services/prismic";
import Head from "next/head";
import Image from "next/image";
import { RichText } from "prismic-dom";
import techs from "../../public/images/techs.png";
import styles from "../styles/home.module.scss";

type Content = {
  title: string;
  titleContent: string;
  linkAction: string;
  mobileTitle: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
  webBanner: string;
};

interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.titleContent}</span>

            <a href={content.linkAction}>
              <button>Começar agora!</button>
            </a>
          </section>
          <img src="/images/babyvictory.png" alt="Conteúdos Sujeito Programdor" />
        </div>

        <hr className={styles.divider} />

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobileTitle}</h2>
            <span>{content.mobileContent}</span>
          </section>
          <img src={content.mobileBanner} alt="Conteúdos sobre desenvolvimento de apps." />
        </div>

        <hr className={styles.divider} />

        <div className={styles.sectionContent}>
          <img src={content.webBanner} alt="Conteúdos sobre desenvolvimento de aplicações web." />

          <section>
            <h2>{content.webTitle}</h2>
            <span>{content.webContent}</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techs} alt="Tecnologias" />
          <h2>
            Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nível.
          </h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a href={content.linkAction}>
            <button>Acessar turma</button>
          </a>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home");

  console.log(page.data);

  const { title, sub_title, link_action, mobile, mobile_content, mobile_banner, title_web, web_content, web_banner } =
    page.data;

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // A cada 2 minutos
  };
}
