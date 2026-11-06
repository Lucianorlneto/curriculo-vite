import React from "react";
import {
  Header,
  Section,
  SectionItem,
  Text,
} from "./components";

// The 2017 CLBI internship is hidden to keep the resume at two pages.
const showCLBIInternship = false;

const LucianoEnglish: React.FC = () => {
  return (
    <>
      <Header
        name="Luciano Rodrigues Lucio Neto"
        role="Software Engineer"
        address="Natal, Brazil"
        email="lucianorlneto@gmail.com"
        citizenship="Brazilian"
        phone="+55 84 99131-7498"
        socialmedia={[
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/luciano-rodrigues-lucio-neto-88aa58165/",
          },
          { name: "GitHub", link: "https://github.com/lucianorlneto" },
        ]}
      />
      <Section index={1} title="PROFILE">
        <SectionItem
          description={
            <div>
              <Text>
                Software Engineer with over 8 years of experience in web and
                mobile development, mostly with <b>React Native</b>,{" "}
                <b>React</b> and <b>TypeScript</b>. Since 2022, has worked on
                apps for clients such as Marisa (millions of users), Omo
                Lavanderia and Grupo Vamos, and on <b>NestJS</b> microservices
                on the back end. Uses custom <b>Claude Code</b> workflows with{" "}
                <b>MCP</b> in daily development.
              </Text>
              <Text>
                Previously worked for almost four years at Lógica with{" "}
                <b>PHP</b>, <b>React Native</b> and <b>PostgreSQL</b>. Holds a
                Computer Engineering degree from UFRN and is pursuing a
                postgraduate degree in Applied AI Engineering.
              </Text>
            </div>
          }
        />
      </Section>

      <Section index={2} title="Experience">
        <SectionItem
          period="May 2022 — Present"
          title="Bamse Digital (formerly Sparta Labs/Môre)"
          city="Blumenau (Remote)"
          present
          language="en"
          description={
            <div>
              <Text className="font-bold italic">
                <li>Software Engineer</li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Marisa</b>: front end on the React Native apps, in two
                  periods.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Since May 2026, maintains and extends the e-commerce app, used
                  by millions of users, and generates the builds and publishes them
                  to the <b>App Store</b> and <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Fixed recurring bugs in analytics and campaign tracking,
                  integrated the new <b>Scala</b> vendor for search,
                  recommendations and dynamic product lists built from specific
                  URLs, and is working on the full migration from{" "}
                  <b>Hybris</b> + Scala to <b>VTEX</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Built a <b>Claude Code</b> harness for the project, with
                  skills, subagents and an approval gate at each phase, that
                  takes a <b>Jira</b> card to a pull request: the card comes in
                  through the Atlassian <b>MCP</b>, a subagent checks it against
                  the project docs for conflicts and gaps, and three reviewers
                  validate the plan against the spec, project rules and code
                  before implementation. On a partly legacy codebase picked up
                  recently, it cut implementation time and rounds of QA
                  rework.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Uses the <b>VTEX</b> MCP to support the migration and the{" "}
                  <b>Firebase</b> MCP to analyze and fix crashes reported in{" "}
                  <b>Crashlytics</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Earlier, in a team of three developers, moved the digital
                  banking features out of the main app into a separate module
                  loaded inside it, then built and maintained that module, which
                  covers digital banking and insurance services.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Omo Lavanderia</b>: full stack developer in a team of four
                  developers, two UI/UX designers and a tech lead, building from
                  scratch the customer app for Omo's self-service laundries. The
                  MVP shipped in 8 months, and the app is used by tens of
                  thousands of users.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Helped build the <b>React Native (Expo)</b> app: sign-up, store
                  search on <b>Google Maps</b>, machine booking, starting machines
                  at checkout, vouchers bought for other users, payments through
                  the <b>PagBank</b> gateway, and live time and status for each
                  machine, fed by the machine supplier's webhooks.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  On the back end, contributed to <b>NestJS</b> and{" "}
                  <b>Fastify</b> microservices for payments, message consumption,
                  the core domain and machine activation, using{" "}
                  <b>PostgreSQL</b>, <b>Prisma</b> and <b>RabbitMQ</b>, and took
                  part in the database modeling.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Wrote part of the test suite: end-to-end tests with{" "}
                  <b>Maestro</b> and unit tests with <b>Jest</b> and{" "}
                  <b>React Testing Library</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Debugged production issues with <b>Prometheus</b>,{" "}
                  <b>Grafana Loki</b> and <b>Grafana Tempo</b> on an <b>AWS</b>{" "}
                  (S3, CloudFront, EC2) and <b>Kubernetes</b> infrastructure, and
                  added a rate limiting rule in <b>Cloudflare</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  <b>Grupo Vamos</b>: three products, each in a team of two
                  developers.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Built from scratch the truck driver app in{" "}
                  <b>React Native (Expo)</b> for iOS and Android, with news, truck
                  status and vehicle data. Delivered the MVP in 4 months and kept
                  maintaining it; used by thousands of drivers.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Built a fleet management web dashboard in <b>React</b> and{" "}
                  <b>Chakra UI</b>, with the MVP delivered in 3 months, used by
                  thousands of users. It covers fleet composition, repair history,
                  and filters by region, state and city, plus a customizable home
                  where users drag and drop cards from internal screens, each card
                  with its own filter and a page filter that applies to all of
                  them.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Maintained the <b>React Native</b> inspection app used in Vamos
                  workshops, a dynamic checklist that guides the evaluation of each
                  truck on arrival.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Helped implement end-to-end tests with <b>Cypress</b> and unit
                  tests with <b>Jest</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  At <b>Smiles Fidelidade</b>, in a team of four developers,
                  adapted email templates to <b>Oracle Responsys</b> using{" "}
                  <b>HTML/CSS</b>, <b>SQL</b> and <b>RPL</b> for the
                  personalization logic.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Covered vacations on <b>React Native</b> apps for{" "}
                  <b>Henry Schein Brasil</b> and <b>Semex Brasil</b>. At Henry
                  Schein, maintained a modular codebase whose business logic
                  modules (rules, API connections) and UI modules (components,
                  layouts) are reused across several apps.
                </li>
              </Text>
            </div>
          }
        />
        <SectionItem
          period="Jul 2018 — May 2022"
          time="3 years and 10 months"
          title="Lógica Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <Text className="font-bold italic">
                <li>Full Stack Developer (Jul 2019 — May 2022)</li>
              </Text>
              <Text>
                <li className="pl-4">
                  Worked on bug fixes and new features in the company's ERP,
                  built in <b>PHP</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Maintained a white label <b>React Native</b> app shipped to
                  several clients, each with its own brand, colors and features,
                  and managed its releases on the <b>App Store</b> and{" "}
                  <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Maintained an offline-first <b>React Native</b> app for
                  clients' field technicians to record and review service
                  visits, along with its <b>GraphQL</b> API in <b>Node.js</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Built <b>REST APIs</b> in <b>Lumen</b> to integrate TV channel
                  services with the ERP's clients.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Shared responsibility for the <b>PostgreSQL</b> databases of
                  these applications and deployed them with <b>Docker</b> and{" "}
                  <b>Kubernetes</b>.
                </li>
              </Text>
              <Text className="mt-2 font-bold italic">
                <li>Full Stack Developer Intern (Jul 2018 — Jul 2019)</li>
              </Text>
            </div>
          }
        />
        {showCLBIInternship && (
          <SectionItem
            period="Aug 2017 — Nov 2017"
            time="3 months"
            title="Barreira do Inferno Launch Center (CLBI)"
            city="Natal"
            description={
              <div>
                <Text className="font-bold italic">
                  <li>Internship as Embedded Systems Engineer</li>
                </Text>
                <Text>
                  <li className="pl-4">
                    Wrote embedded <b>C++</b> on <b>Arduino</b> for a
                    confidential CLBI project.
                  </li>
                </Text>
              </div>
            }
          />
        )}
      </Section>
      <Section index={3} title="EDUCATION">
        <SectionItem
          period="May 2026 — Present"
          present
          language="en"
          title="Faculdade UNIPDS"
          description={
            <div>
              <li className="font-[500]">
                Postgraduate Degree in Applied AI Engineering (in progress)
              </li>
              <li>
                Coursework: LLMs, RAG, embeddings, vector databases and AI
                agents.
              </li>
            </div>
          }
        />
        <SectionItem
          city="Natal"
          period="Mar 2013 — Jul 2019"
          title="Federal University of Rio Grande do Norte (UFRN)"
          description={
            <div>
              <li className="font-[500]">
                Bachelor's Degree in Science and Technology (Mar 2013 — Jun
                2016)
              </li>
              <li className="font-[500]">
                Bachelor's Degree in Computer Engineering (Jul 2016 — Jul 2019)
              </li>
            </div>
          }
        />
      </Section>
      <Section index={4} title="SKILLS">
        <SectionItem
          description={
            <div>
              <Text>
                <b>Languages:</b> TypeScript, JavaScript, HTML/CSS, SQL, PHP
              </Text>
              <Text>
                <b>Front-end/Mobile:</b> React, React Native, Expo, React
                Native Web, Tailwind, Chakra UI
              </Text>
              <Text>
                <b>Testing:</b> Jest, React Testing Library, Cypress,
                Playwright, Maestro
              </Text>
              <Text>
                <b>Back-end/Data:</b> Node.js, NestJS, Fastify, GraphQL, REST
                APIs, PostgreSQL, Prisma, RabbitMQ
              </Text>
              <Text>
                <b>Platforms:</b> Firebase, VTEX, SAP Hybris, Oracle Responsys
              </Text>
              <Text>
                <b>DevOps/Tools:</b> Docker, Kubernetes, AWS, Cloudflare, Git,
                App Store Connect, Google Play Console
              </Text>
              <Text>
                <b>Observability:</b> Prometheus, Grafana Loki, Grafana Tempo
              </Text>
              <Text>
                <b>AI-assisted development:</b> Claude Code (skills,
                subagents), MCP (Atlassian, VTEX, Firebase, GitHub), Prompt
                Engineering, Context Engineering, Agent Harness
              </Text>
            </div>
          }
        />
      </Section>
      <Section index={5} title="LANGUAGES">
        <SectionItem
          description={
            <div>
              <Text>
                <b>Portuguese:</b> Native
              </Text>
              <Text>
                <b>English:</b> Upper Intermediate (B2)
              </Text>
            </div>
          }
        />
      </Section>
    </>
  );
};

export default LucianoEnglish;
