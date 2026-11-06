import React from "react";
import {
  Header,
  Section,
  SectionItem,
  Text,
} from "./components";

const Luciano: React.FC = () => {
  return (
    <>
      <Header
        name="Luciano Rodrigues Lucio Neto"
        role="Engenheiro de Software"
        address="Natal, Brasil"
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
                desenvolvimento web e mobile, principalmente com{" "}
                <b>React Native</b>, <b>React</b> e <b>TypeScript</b>. Desde
                2022, trabalha em apps de clientes como Marisa (milhões de
                usuários), Omo Lavanderia e Grupo Vamos, e em microsserviços{" "}
                <b>NestJS</b> no back-end. Usa no dia a dia fluxos próprios de{" "}
                <b>Claude Code</b> com <b>MCP</b>.
              </Text>
              <Text>
                Antes disso, trabalhou quase quatro anos na Lógica em um ERP
                em <b>PHP</b>, <b>APIs REST</b> e integrações <b>GraphQL</b>,
                com bancos <b>PostgreSQL</b> e deploy em <b>Docker</b> e{" "}
                <b>Kubernetes</b>. Formado em Engenharia da Computação pela
                UFRN e cursando pós-graduação em Engenharia de IA Aplicada.
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
              <Text className="-mt-4 font-bold italic text-lg">
                <li>Engenheiro de Software</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Atuação front-end e full stack em squads ágeis (Jira, ClickUp)
                  atendendo os clientes da empresa.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Marisa</b>: front-end nos apps React Native, em dois
                  períodos.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Desde mai 2026, mantém e evolui o app de e-commerce, usado por
                  milhões de usuários, e gera as builds e publica nas{" "}
                  <b>App Store</b> e <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Corrigiu bugs recorrentes de analytics e de rastreamento de
                  campanhas, integrou o novo fornecedor <b>Scala</b> para busca,
                  recomendações e listas dinâmicas de produtos a partir de URLs
                  específicas, e trabalha na migração completa de{" "}
                  <b>Hybris</b> + Scala para <b>VTEX</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Construiu um harness de <b>Claude Code</b> para o projeto,
                  com skills, subagentes e um ponto de aprovação em cada fase,
                  que leva um card do <b>Jira</b> até o PR: o card entra pelo{" "}
                  <b>MCP</b> da Atlassian, um subagente cruza o card com a
                  documentação do projeto atrás de conflitos e lacunas, e três
                  revisores validam o plano contra a spec, as regras do projeto
                  e o código antes da implementação. Num app com parte do
                  código legado, assumido há pouco tempo, reduziu o tempo de
                  implementação e as idas e voltas com o QA.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Usa o MCP da <b>VTEX</b> na migração e o MCP do{" "}
                  <b>Firebase</b> para analisar e corrigir crashes reportados
                  no <b>Crashlytics</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Antes, num time de três devs, migrou os serviços de banco
                  digital do app principal para um módulo separado, carregado
                  dentro dele, e depois desenvolveu e manteve esse módulo, que
                  reúne os serviços de banco digital e seguros.
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
                  Ajudou a construir o app em <b>React Native (Expo)</b>:
                  cadastro, busca de lojas no <b>Google Maps</b>, reserva de
                  máquinas, acionamento das máquinas na compra, voucher para outro
                  usuário, pagamentos pelo gateway <b>PagBank</b> e tempo e status
                  de cada máquina ao vivo, a partir dos webhooks do fornecedor.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  No back-end, contribuiu com os microsserviços <b>NestJS</b> e{" "}
                  <b>Fastify</b> de pagamentos, consumo de mensagens, core da
                  aplicação e acionamento de máquinas, com <b>PostgreSQL</b>,{" "}
                  <b>Prisma</b> e <b>RabbitMQ</b>, e participou da modelagem do
                  banco de dados.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Escreveu parte dos testes: end-to-end com <b>Maestro</b> e
                  unitários com <b>Jest</b> e <b>React Testing Library</b>.
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
                  <b>React Native (Expo)</b> para iOS e Android, com notícias,
                  status e dados dos caminhões. Entregou o MVP em 4 meses e seguiu
                  na manutenção; usado por milhares de motoristas.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Desenvolveu um dashboard web de gestão de frota em{" "}
                  <b>React</b> e <b>Chakra UI</b>, com MVP entregue em 3 meses,
                  usado por milhares de usuários. O dashboard mostra composição da
                  frota, histórico de reparos e filtros por região, estado e
                  cidade, além de uma home customizável em que o usuário arrasta
                  cards das telas internas; cada card tem filtro próprio e um
                  filtro de tela se aplica a todos.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Manteve o app de vistoria em <b>React Native</b> usado nas
                  oficinas do Vamos, um checklist dinâmico que guia a avaliação de
                  cada caminhão na chegada.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Ajudou a implementar testes end-to-end com <b>Cypress</b> e
                  testes unitários com <b>Jest</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Na <b>Smiles Fidelidade</b>, num time de quatro devs, adaptou
                  templates de e-mail para a <b>Oracle Responsys</b> com{" "}
                  <b>HTML/CSS</b>, <b>SQL</b> e <b>RPL</b> na lógica de
                  personalização.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Cobriu férias em apps <b>React Native</b> da{" "}
                  <b>Henry Schein Brasil</b> e da <b>Semex Brasil</b>. Na Henry
                  Schein, manteve uma base modular em que módulos de regra de
                  negócio (regras e conexões com APIs) e módulos de UI (componentes
                  e layouts) são reaproveitados em vários apps.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Integrou o <b>Google Firebase</b> (Push Notifications, Remote
                  Config, Database, Authentication) e o <b>Google Analytics</b> em
                  apps mobile.
                </li>
              </Text>
            </div>
          }
        />
        <SectionItem
          period="ago 2018 — mai 2022"
          time="3 anos e 9 meses"
          title="Lógica Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <Text className="font-bold italic text-lg">
                <li>Desenvolvedor Full Stack (ago 2019 — mai 2022)</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Trabalhou em correções e novas funcionalidades do ERP da
                  empresa, em <b>PHP</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Manteve um app white label em <b>React Native</b> entregue a
                  vários clientes, cada um com marca, cores e funcionalidades
                  próprias, e cuidava das publicações na <b>App Store</b> e no{" "}
                  <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Manteve um app <b>React Native</b> offline first para os
                  técnicos de campo dos clientes registrarem e revisarem visitas,
                  junto com a API <b>GraphQL</b> em <b>Node.js</b> que o
                  atendia.
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
                  Era um dos responsáveis pelos bancos <b>PostgreSQL</b> dessas
                  aplicações e fez deploy delas com <b>Docker</b> e{" "}
                  <b>Kubernetes</b>.
                </li>
              </Text>
              <Text className="mt-4 font-bold italic text-lg">
                <li>Estágio em Desenvolvimento Full Stack (ago 2018 — ago 2019)</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Trabalhou em correções e novas funcionalidades de um ERP em{" "}
                  <b>PHP</b> voltado a telecomunicações e gestão empresarial.
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
          period="mar 2013 — jul 2018"
          time="5 anos e 4 meses"
          title="Universidade Federal do Rio Grande do Norte (UFRN)"
          description={
            <div>
              <li className="font-[500]">
                Bacharel em Engenharia da Computação (jul 2016 — jul 2018)
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
                Native Web, Tailwind, Chakra UI
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
                Git, App Store Connect, Google Play Console
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
