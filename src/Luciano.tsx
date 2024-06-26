import React from "react";
import {
  Header,
  Section,
  SectionItem,
  SectionItemScore,
  Text,
} from "./components";

const Luciano: React.FC = () => {
  return (
    <>
      <Header
        name="Luciano Rodrigues Lucio Neto"
        role="Desenvolvedor de Software"
        address={`Rua Niquelândia, n 135, 59068-820, Natal. Brasil`}
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
              <Text>
                Desenvolvedor Full Stack e Mobile, utilizando React Native, com
                mais de 3 anos de experiência.
              </Text>
              <Text>
                Com experiência profissional numa variedade de tecnologias,
                incluindo <b>TypeScript</b>, <b>SQL</b>, <b>GraphQL</b>,{" "}
                <b>React Native</b>, <b>React</b>, <b>Tailwind</b> e <b>PHP</b>.
              </Text>
              <Text>
                Escolheu seguir a área de programação, seguindo seu curso de
                engenharia da computação, por acreditar no poder da programação
                para resolução de problemas. Se existem um problema
                logístico/empresarial, certamente há uma solução utilizando da
                programação, com auxílio da lógica e por isso é apaixonado pela
                área.
              </Text>
            </div>
          }
        />
      </Section>

      <Section index={2} title="EXPERIÊNCIA PROFISSIONAL">
        <SectionItem
          period="mai 2022 — atualmente"
          time="1 ano e 11 meses"
          title="Sparta Labs/Môre"
          city="São Paulo (Remoto)"
          description={
            <div>
              <Text className="-mt-4 font-bold italic text-lg">
                <li>Desenvolvedor Pleno Front-end</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Participou de diferentes squads ágeis de desenvolvimento, com
                  auxílio das plataformas ClickUp e Jira, atuando como
                  desenvolvedor front-end em clientes como{" "}
                  <b>Henry Schein Brasil</b>, <b>Smiles Fidelidade</b>,{" "}
                  <b>Semex Brasil</b>,<b>Marisa</b> e integrantes do{" "}
                  <b>Grupo Vamos</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Responsável por auxiliar no desenvolvimento, mantimento,
                  implementação de testes e integrações com <b>API`s REST</b>{" "}
                  para aplicações mobile implementadas em <b>React Native</b>,
                  assim como aplicações web implementadas em <b>React</b>,
                  utilizando a <b>ChakraUi</b>, e também aplicações
                  multiplataformas implementadas em <b>React Native Web</b> e{" "}
                  <b>Expo</b>, utilizando <b>Tailwind</b> para estilização.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Trabalhou também com o auxílio do <b>Google Firebase</b> para
                  implementação de integração com <i>Push Notifications</i>,{" "}
                  <i>Remote Config</i> e <i>Database</i> e <i> </i>, assim como
                  também autou com auxílio do <i>Google Analytics</i>
                </li>
              </Text>
            </div>
          }
        />
        <SectionItem
          period="ago 2018 — mar 2022"
          time="3 anos e 9 meses"
          title="Lógica Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <Text className="font-bold italic text-lg">
                <li>Desenvolvedor Full Stack Junior</li>
              </Text>

              <Text>
                <li className="pl-4">
                  Desenvolvedor Full Stack integrante de uma equipe que
                  trabalhava com correções e desenvolvimento de novas
                  funcionalidades em um Sistema Integrado de Gestão Empresarial
                  (ERP), desenvolvido em <b>PHP</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Responsável por integrações de API's de terceiros e com a
                  criação de <b>API's REST</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Desenvolvedor Mobile, utilizando <b>React Native</b>, e
                  trabalhando com duas API's, uma <b>REST</b> desenvolvida em{" "}
                  <b>PHP</b>, <b>Lumen</b>, e a outra <b>GraphQL</b>{" "}
                  desenvolvida em <b>Node</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Experiência com deploy de aplicações em <b>Docker</b> e{" "}
                  <b>Kubernetes</b> e utilização de banco de dados <b>SQL</b>,{" "}
                  <b>PostgreSQL</b>.
                </li>
              </Text>
            </div>
          }
        />
        <SectionItem
          city="Natal"
          period="ago 2017 — nov 2017"
          time="3 meses"
          title="Centro de Lançamento da Barreira do Inferno (CLBI)"
          description={
            <div>
              <Text className="-mt-4 font-bold italic text-lg">
                <li>Engenheiro de Sistemas Embarcados</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Desenvolvimento da inteligência embarcada de um projeto
                  confidencial do CLBI utilizando de micro processadores com
                  auxílio da plataforma de prototipagem <b>Arduíno</b> em{" "}
                  <b>C++</b>.
                </li>
              </Text>
            </div>
          }
        />
      </Section>
      <Section index={3} title="FORMAÇÃO ACADÊMICA">
        <SectionItem
          city="Natal"
          period="mar 2013 — jul 2018"
          time="5 anos e 4 meses"
          title="Universidade Federal do Rio Grande do Norte (UFRN)"
          description={
            <div>
              <li className="font-[500]">
                Bacharel em Engenharia da Computação (jul 2016 — jul 2018)
              </li>
              <li className="font-[500]">
                Bacharel em Ciências & Tecnologia (mar 2013 — jun 2016)
              </li>
            </div>
          }
        />
      </Section>
      <Section index={4} title="COMPETÊNCIAS">
        <SectionItemScore
          content={[
            { label: "SQL" },
            { label: "PHP" },
            { label: "JavaScipt" },
            { label: "TypeScript" },
            { label: "Docker" },
            { label: "Git" },
            { label: "GraphQL" },
            { label: "ReactJs" },
            { label: "React Native" },
            { label: "Tailwind" },
          ]}
        />
      </Section>
      <Section index={4} title="IDIOMAS">
        <SectionItemScore
          content={[{ label: "Português" }, { label: "Inglês" }]}
        />
      </Section>
      <Section index={4} title="HOOBIES">
        <SectionItem
          description={
            <Text>
              Tocar guitarra, produzir e mixar músicas e se apresentar em
              bares/clubes locais com bandas.
            </Text>
          }
        />
      </Section>
    </>
  );
};

export default Luciano;
