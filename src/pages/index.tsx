// import Image from 'next/image'
import styles from '../styles/home.module.scss'
import SEO from "../components/SEO";
import AsideMenu from '@/components/Header/aside-menu';

export default function Home() {
  return (
    <>
      <SEO title="Tony Carvalho" excludeTitleSuffix />
      <main className={styles.mainContainer}>

        <section className={styles.mainTitle}>
          <h1>TONY CARVALHO - PERFIL PROFISSIONAL</h1>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.card}>
            <h2>Sobre</h2>
            <p>Formado em Arquitetura e Urbanismo em 2018, com experiências de trabalhos desde estágios
              durante o período acadêmico até a realização de projetos autorais entre as diversas áreas da
              Arquitetura e do Design. A partir de 2020 despertei o interesse pela área da Tecnologia, com o foco
              em Desenvolvimento Front-End e UI/UX Design por ser apaixonado pela parte visual e de
              planejamento. Desde então venho fazendo cursos e trabalhando como Freelancer em Webdesign
              a fim de me capacitar para o mercado de trabalho, levando como premissa a melhor interação
              possível do usuário com o produto.</p>
          </div>
        </section>

        <section className={styles.educationalSection}>
          <div className={styles.card}>
            <h2>Educacional</h2>
            <ul className={styles.educationalList}>
              <li className={styles.educationalItem}>
                Curso técnico em Design pela SOS Computação - 2010
              </li>
              <li className={styles.educationalItem}>
                Graduação em Arquitetura e Urbanismo - 2018
              </li>
              <li className={styles.educationalItem}>
                Inglês pelo SENAC - 2018
              </li>
              <li className={styles.educationalItem}>
                Formação profissional em desenvolvimento Front-End pela Gama Academy - 2020
              </li>
              <li className={styles.educationalItem}>
                Cursos de HTML, CSS, Javascript, React, Redux e UI Design pela Origamid - 2020/2021
              </li>
              <li className={styles.educationalItem}>
                Espanhol com Bruno Gonzalez- em andamento
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.professionalSection}>
          <div className={styles.card}>
            <h2>Profissional</h2>
            <ul className={styles.professionalList}>
              <li className={styles.professionalItem}>
                Projetos e acompanhamento de obras residenciais, comerciais, institucionais - 2018 a 2020
              </li>
              <li className={styles.professionalItem}>
                Design de Interiores - 2018 a 2020
              </li>
              <li className={styles.professionalItem}>
                Design de identidades visuais - 2018 até o momento
              </li>
              <li className={styles.professionalItem}>
                Design de decoração para eventos de grande porte - 2019 até o momento
              </li>
              <li className={styles.professionalItem}>
                Trabalhos como Freelancer em Webdesign - 2020 até o momento
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
