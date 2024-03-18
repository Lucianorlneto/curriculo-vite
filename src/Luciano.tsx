import React from "react";
import { Header, Section, SectionItem, SectionItemScore } from "./components";

const Luciano: React.FC = () => {
  return (
    <>
      <Header
        name="Luciano Rodrigues Lucio Neto"
        role="Desenvolvedor de Software"
        address={`Rua Niquelândia, n 134, 59068-820, Natal. Brasil`}
        email="lucianorlneto@gmail.com"
        birthcity="Natal"
        birthdate="06/12/1994"
        citizenship="Brasileiro"
        phone="+55 84 9 9131-7498"
        socialmedia={[
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/luciano-rodrigues-lucio-neto-88aa58165/",
          },
          { name: "GitHub", link: "https://github.com/lucianorlneto" },
        ]}
      />
      <Section index={1} title="PERFIL">
        <SectionItem
          description={
            <div>
              <p>
                Desenvolvedor Full Stack e Mobile, utilizando React Native, com
                mais de 3 anos de experiência.
              </p>
              <br />
              <p>
                Com experiência profissional numa variedade de tecnologias,
                incluindo JavaScript, SQL, GraphQL, React Native, React e Php.
              </p>
              <br />
              <p>
                Escolheu seguir a área de programação, seguindo seu curso de
                engenharia da computação, por acreditar no poder da programação
                para resolução de problemas. Se existem um problema
                logístico/empresarial, certamente há uma solução utilizando da
                programação, com auxílio da lógica e por isso é apaixonado pela
                área.
              </p>
            </div>
          }
        />
      </Section>
      <Section index={2} title="EXPERIÊNCIA PROFISSIONAL">
        <SectionItem
          period="08/2019 — 03/2022"
          title="Desenvolvedor Full Stack Junior em Lógica Natal Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <p>
                Desenvolvedor Full Stack integrante de uma equipe que trabalhava
                com correções e desenvolvimento de novas funcionalidades em um
                Sistema Integrado de Gestão Empresarial (ERP), constrúido em
                PHP.
              </p>
              <br />
              <p>
                Responsável por integrações de API's de terceiros e com a
                criação de API's REST.
              </p>
              <br />
              <p>
                Desenvolvedor Mobile, utilizando React Native, e trabalhando com
                duas API's REST, uma desenvolvida em PHP, Lumen, e a outra
                desenvolvida em Node e GraphQL.
              </p>
              <br />
              <p>
                Experiência com deploy de aplicações em Docker e Kubernetes e
                utilização de banco de dados relacional, utilizando SQL.
              </p>
            </div>
          }
        />
        <SectionItem
          period="05/2022 — 02/2023"
          title="Desenvolvedor Pleno Front-end em Sparta Labs"
          city="Blumenau (Remoto)"
          description={<div></div>}
        />
        <SectionItem
          period="03/2023 — atualmente"
          title="Desenvolvedor Pleno Front-end em Môre"
          city="São Paulo (Remoto)"
          description={<div></div>}
        />
      </Section>
      <Section index={3} title="FORMAÇÃO ACADÊMICA">
        <SectionItem
          city="Natal"
          period="fev 2010 — nov 2012"
          title="Colégio Nossa Senhora das Neves"
          description={<p>Ensino Médio</p>}
        />
        <SectionItem
          city="Natal"
          period="mar 2013 — jun 2016"
          title="Universidade Federal do Rio Grande do Norte"
          description={<p>Bacharel em Ciências & Tecnologia</p>}
        />
        <SectionItem
          city="Natal"
          period="jul 2016 — jul 2018"
          title="Universidade Federal do Rio Grande do Norte"
          description={<p>Bacharel em Engenharia da Computação</p>}
        />
      </Section>
      <Section index={4} title="COMPETÊNCIAS">
        <SectionItemScore
          content={[
            { label: "SQL", score: 3 },
            { label: "PHP", score: 3 },
            { label: "JavaScipt", score: 4 },
            { label: "Docker", score: 2 },
            { label: "Git", score: 4 },
            { label: "GraphQL", score: 3 },
            { label: "React", score: 4 },
          ]}
        />
      </Section>
      <Section index={5} title="ESTÁGIOS">
        <SectionItem
          city="Natal"
          period="ago 2017 — nov 2017"
          title="Engenheiro de Sistemas Embarcados em Centro de Lançamento da Barreira do Inferno (CLBI)"
          description={
            <p>
              Desenvolvimento da inteligência embarcada de um projeto
              confidencial do CLBI utilizando de micro processadores com auxílio
              da plataforma de prototipagem Arduíno.
            </p>
          }
        />
        <SectionItem
          city="Natal"
          period="ago 2018 — jul 2019"
          title="Desenvolvedor Full Stack em Lógica Sistemas de Natal Informação"
          description={
            <p>
              Desenvolvedor Full Stack integrante de uma equipe que trabalhava
              com correções e desenvolvimento de novas funcionalidades em um
              Sistema Integrado de Gestão Empresarial (ERP), constrúido em PHP,
              com foco em soluções em software para problemas de
              telecomunicações e gestão empresarial.
            </p>
          }
        />
      </Section>
      <Section index={4} title="IDIOMAS">
        <SectionItemScore
          content={[
            { label: "Português", score: 5 },
            { label: "Inglês", score: 4 },
          ]}
        />
      </Section>
      <Section index={4} title="HOOBIES">
        <SectionItem
          description={
            <p>
              Tocar guitarra, produção e mixagem de músicas, se apresentar em
              bares/clubes locais com bandas.
            </p>
          }
        />
      </Section>
    </>
  );
};

export default Luciano;
