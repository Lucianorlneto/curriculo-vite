import React from "react";
import {
  Header,
  Section,
  SectionItem,
  Text,
} from "./components";

// The 2017 CLBI internship is hidden to keep the resume at two pages.
const showCLBIInternship = false;

const Luciano: React.FC = () => {
  return (
    <>
      <Header
        name="Luciano Rodrigues Lucio Neto"
        role="Engenheiro de Software"
        address="Natal, Brasil"
        availability="Disponível para remoto (UTC−3)"
        email="lucianorlneto@gmail.com"
        citizenship="Brasileiro"
        phone="+55 84 99131-7498"
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
                Engenheiro de Software com mais de 8 anos de experiência em
                produtos web e mobile, principalmente com <b>React Native</b>,{" "}
                <b>React</b> e <b>TypeScript</b>, além de back-ends{" "}
                <b>Node.js</b> em <b>NestJS</b>. Desde 2022, trabalha em times{" "}
                <b>Agile/Scrum</b> em apps de clientes como Marisa (milhões de
                usuários), Omo Lavanderia e Grupo Vamos, e hoje é o único dev do
                app de e-commerce da Marisa. Criou um harness de{" "}
                <b>Claude Code</b> com skills, subagentes e <b>MCP</b> que leva
                cards do Jira até PRs revisados.
              </Text>
              <Text>
                Antes disso, trabalhou quase quatro anos na Lógica com{" "}
                <b>PHP</b>, <b>React Native</b> e <b>PostgreSQL</b>. Formado
                em Engenharia da Computação pela UFRN e cursando pós-graduação
                em Engenharia de IA Aplicada.
              </Text>
            </div>
          }
        />
      </Section>

      <Section index={2} title="EXPERIÊNCIA PROFISSIONAL">
        <SectionItem
          period="mai 2022 — atualmente"
          present
          title="Bamse Digital (antiga Sparta Labs/Môre)"
          city="Blumenau (Remoto)"
          description={
            <div>
              <Text className="font-bold italic">
                <li>Engenheiro de Software</li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Marisa</b>: front-end React Native em dois períodos,
                  primeiro no banco digital e, desde mai 2026, no e-commerce.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Único dev do time do app de e-commerce. Mantém e evolui o app,
                  usado por milhões de usuários e feito com <b>Redux</b>{" "}
                  (legado), <b>Zustand</b> e <b>React Query</b>, e publica as
                  builds na <b>App Store</b> e no <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Corrigiu bugs recorrentes de analytics e de rastreamento de
                  campanhas, integrou o novo fornecedor de busca (Scala), usado
                  também em recomendações e listas de produtos por URL, e
                  trabalha na migração do app de <b>Hybris</b> e desse
                  fornecedor para <b>VTEX</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Construiu um harness de <b>Claude Code</b> com skills,
                  subagentes e um ponto de aprovação em cada fase, que leva um
                  card do <b>Jira</b> até o PR: o card entra pelo <b>MCP</b> da
                  Atlassian, um subagente cruza o card com a documentação do
                  projeto atrás de conflitos e lacunas, e três revisores validam
                  o plano contra a spec, as regras do projeto e o código. Em
                  comparação com projetos anteriores, reduziu o tempo de
                  implementação e as idas e voltas com o QA.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Corrigiu crashes em produção que o QA não tinha identificado,
                  investigados com o MCP do <b>Firebase</b> e o{" "}
                  <b>Crashlytics</b>, e usa o MCP da <b>VTEX</b> na migração.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Antes, num time de três devs, migrou os serviços de banco
                  digital do app principal para um módulo separado em{" "}
                  <b>React Native Web</b>, carregado dentro dele, e depois
                  desenvolveu e manteve esse módulo, que reúne banco digital e
                  seguros e é usado por centenas de milhares de pessoas.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Omo Lavanderia</b>: desenvolvedor full stack num time de
                  quatro devs, dois designers de UI/UX e um tech lead, criando do
                  zero o app de clientes das lavanderias self-service Omo. O MVP
                  saiu em 8 meses, e o app é usado por dezenas de milhares de
                  usuários.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Desenvolveu funcionalidades do app em{" "}
                  <b>React Native (Expo)</b>, feito com <b>Zustand</b>,{" "}
                  <b>React Query</b> e <b>NativeWind</b>: cadastro, busca de
                  lojas no <b>Google Maps</b>, reserva e acionamento de
                  máquinas, voucher para outro usuário, pagamentos pelo{" "}
                  <b>PagBank</b>, status das máquinas ao vivo via webhooks do
                  fornecedor, push notifications pelo <b>Firebase</b> e deep
                  linking.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  No back-end, desenvolveu funcionalidades nos microsserviços{" "}
                  <b>NestJS</b> e <b>Fastify</b> de pagamentos, consumo de
                  mensagens, core da aplicação e acionamento de máquinas, com{" "}
                  <b>PostgreSQL</b>, <b>Prisma</b> e <b>RabbitMQ</b>, e modelou o
                  banco com o time.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Escreveu parte dos testes (end-to-end com <b>Maestro</b>,
                  unitários com <b>Jest</b> e <b>React Testing Library</b>); o
                  app era publicado por um pipeline de <b>CI/CD</b> no{" "}
                  <b>GitHub Actions</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Investigou erros em produção com <b>Prometheus</b>,{" "}
                  <b>Grafana Loki</b> e <b>Grafana Tempo</b> numa infraestrutura{" "}
                  <b>AWS</b> (S3, CloudFront, EC2) com <b>Kubernetes</b>, e criou
                  uma regra de rate limit na <b>Cloudflare</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Grupo Vamos</b>: três produtos, cada um com um time de dois
                  desenvolvedores.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Desenvolveu do zero o app dos caminhoneiros em{" "}
                  <b>React Native (Expo)</b> e <b>Redux</b> para iOS e Android,
                  com notícias, status e dados dos caminhões, push notifications
                  pelo <b>Firebase</b> e deep linking. Entregou o MVP em 4 meses
                  e seguiu na manutenção; usado por milhares de motoristas.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Criou um dashboard web de gestão de frota em <b>React</b>,{" "}
                  <b>Redux Toolkit</b> e <b>Chakra UI</b> (MVP em 3 meses,
                  milhares de usuários), com composição da frota, reparos,
                  filtros regionais e home com cards arrastáveis.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Manteve o app de vistoria em <b>React Native</b> e{" "}
                  <b>Redux</b> usado nas oficinas do Vamos, um checklist dinâmico
                  que guia a avaliação de cada caminhão na chegada.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Escreveu testes end-to-end com <b>Cypress</b> e testes
                  unitários com <b>Jest</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Projetos mais curtos: templates de e-mail na{" "}
                  <b>Oracle Responsys</b> (<b>HTML/CSS</b>, <b>SQL</b>,{" "}
                  <b>RPL</b>) para a <b>Smiles Fidelidade</b>, e cobertura de
                  férias em apps <b>React Native</b> da <b>Semex Brasil</b> e da{" "}
                  <b>Henry Schein Brasil</b> (base modular compartilhada entre
                  vários apps).
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Revisou pull requests de colegas nos projetos e fez o
                  onboarding de colegas que entravam neles.
                </li>
              </Text>
            </div>
          }
        />
        <SectionItem
          period="jul 2018 — mai 2022"
          time="3 anos e 10 meses"
          title="Lógica Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <Text className="font-bold italic">
                <li>Desenvolvedor Full Stack (jul 2019 — mai 2022)</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Trabalhou em correções e novas funcionalidades do ERP da
                  empresa, em <b>PHP</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Manteve um app white label em <b>React Native</b> publicado
                  como app próprio na loja para mais de 12 clientes, cada um com
                  marca, cores e funcionalidades próprias, e cuidava das
                  publicações na <b>App Store</b> e no <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Manteve um app <b>React Native</b> offline first usado por
                  centenas de técnicos de campo em todo o Brasil para registrar
                  e revisar visitas, junto com a API <b>GraphQL</b> em{" "}
                  <b>Node.js</b> que o atendia.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Desenvolveu <b>APIs REST</b> em <b>Lumen</b> para integrar
                  serviços de canais de televisão aos clientes do ERP.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Administrou com o time os bancos <b>PostgreSQL</b> desses apps
                  e fez deploy delas com <b>Docker</b> e{" "}
                  <b>Kubernetes</b>.
                </li>
              </Text>
              <Text className="mt-2 font-bold italic">
                <li>Estágio em Desenvolvimento Full Stack (jul 2018 — jul 2019)</li>
              </Text>
            </div>
          }
        />
        {showCLBIInternship && (
          <SectionItem
            city="Natal"
            period="ago 2017 — nov 2017"
            time="3 meses"
            title="Centro de Lançamento da Barreira do Inferno (CLBI)"
            description={
              <div>
                <Text className="font-bold italic">
                  <li>Estágio em Sistemas Embarcados</li>
                </Text>
                <Text>
                  <li className="pl-4">
                    Programou software embarcado em <b>C++</b> com <b>Arduino</b>{" "}
                    para um projeto confidencial do CLBI.
                  </li>
                </Text>
              </div>
            }
          />
        )}
      </Section>
      <Section index={3} title="FORMAÇÃO ACADÊMICA">
        <SectionItem
          period="mai 2026 — atualmente"
          present
          title="Faculdade UNIPDS"
          description={
            <div>
              <li className="font-[500]">
                Pós-graduação em Engenharia de IA Aplicada (em andamento)
              </li>
              <li>
                Disciplinas: LLMs, RAG, embeddings, bancos vetoriais e agentes
                de IA.
              </li>
            </div>
          }
        />
        <SectionItem
          city="Natal"
          period="mar 2013 — jul 2019"
          time="6 anos e 4 meses"
          title="Universidade Federal do Rio Grande do Norte (UFRN)"
          description={
            <div>
              <li className="font-[500]">
                Bacharel em Engenharia da Computação (jul 2016 — jul 2019)
              </li>
              <li className="font-[500]">
                Bacharel em Ciências e Tecnologia (mar 2013 — jun 2016)
              </li>
            </div>
          }
        />
      </Section>
      <Section index={4} title="COMPETÊNCIAS">
        <SectionItem
          description={
            <div>
              <Text>
                <b>Linguagens:</b> TypeScript, JavaScript, HTML/CSS, SQL, PHP
              </Text>
              <Text>
                <b>Front-end/Mobile:</b> React, React Native, Expo, React
                Native Web, Redux, Redux Toolkit, Zustand, React Query,
                Tailwind, NativeWind, Chakra UI
              </Text>
              <Text>
                <b>Testes:</b> Jest, React Testing Library, Cypress,
                Playwright, Maestro
              </Text>
              <Text>
                <b>Back-end/Dados:</b> Node.js, NestJS, Fastify, GraphQL, APIs
                REST, PostgreSQL, Prisma, RabbitMQ
              </Text>
              <Text>
                <b>Plataformas:</b> Firebase, VTEX, SAP Hybris, Oracle Responsys
              </Text>
              <Text>
                <b>DevOps/Ferramentas:</b> Docker, Kubernetes, AWS, Cloudflare,
                Git, GitHub Actions, App Store Connect, Play Console
              </Text>
              <Text>
                <b>Práticas:</b> Agile/Scrum, CI/CD, code review
              </Text>
              <Text>
                <b>Observabilidade:</b> Prometheus, Grafana Loki, Grafana Tempo
              </Text>
              <Text>
                <b>Desenvolvimento assistido por IA:</b> Claude Code (skills,
                subagentes), MCP (Atlassian, VTEX, Firebase, GitHub),
                Engenharia de Prompt, Engenharia de Contexto, Agent Harness
              </Text>
            </div>
          }
        />
      </Section>
      <Section index={5} title="IDIOMAS">
        <SectionItem
          description={
            <div>
              <Text>
                <b>Português:</b> Nativo
              </Text>
              <Text>
                <b>Inglês:</b> Intermediário avançado (B2)
              </Text>
            </div>
          }
        />
      </Section>
    </>
  );
};

export default Luciano;
