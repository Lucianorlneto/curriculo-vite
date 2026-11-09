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
        availability="Open to remote (UTC−3)"
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
                Software Engineer with over 8 years of experience building web
                and mobile products, mostly with <b>React Native</b>,{" "}
                <b>React</b> and <b>TypeScript</b>, plus <b>Node.js</b> back
                ends in <b>NestJS</b>. Since 2022, has worked in{" "}
                <b>Agile/Scrum</b> teams on apps for clients such as Marisa
                (millions of users), Omo Lavanderia and Grupo Vamos, and is now
                the only developer on Marisa's e-commerce app. Built a{" "}
                <b>Claude Code</b> harness with skills, subagents and{" "}
                <b>MCP</b> that takes Jira cards to reviewed pull requests.
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
                  <b>Marisa</b>: React Native front end in two periods, first on
                  the digital banking module and, since May 2026, on the
                  e-commerce app.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Only developer on the e-commerce app team. Maintains and
                  extends the app, used by millions of users and built with{" "}
                  <b>Redux</b> (legacy), <b>Zustand</b> and <b>React Query</b>,
                  and publishes its builds to the <b>App Store</b> and{" "}
                  <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Fixed recurring bugs in analytics and campaign tracking,
                  integrated the new search vendor (Scala), also used for
                  recommendations and URL-based product lists, and is migrating
                  the app from <b>Hybris</b> and that vendor to <b>VTEX</b>.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Built a <b>Claude Code</b> harness with skills, subagents and
                  an approval gate at each phase that takes a <b>Jira</b> card
                  to a pull request: the card comes in through the Atlassian{" "}
                  <b>MCP</b>, a subagent checks it against the project docs for
                  conflicts and gaps, and three reviewers validate the plan
                  against the spec, project rules and code. Compared with
                  earlier projects, it cut implementation time and rounds of QA
                  rework.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Fixed production crashes that QA had not caught, tracked down
                  with the <b>Firebase</b> MCP and <b>Crashlytics</b>, and uses
                  the <b>VTEX</b> MCP to support the migration.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Earlier, in a team of three developers, moved the digital
                  banking features out of the main app into a separate{" "}
                  <b>React Native Web</b> module loaded inside it, then built and
                  maintained that module, which covers digital banking and
                  insurance and is used by hundreds of thousands of people.
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
                  Developed features of the <b>React Native (Expo)</b> app,
                  built with <b>Zustand</b>, <b>React Query</b> and{" "}
                  <b>NativeWind</b>: sign-up, store search on{" "}
                  <b>Google Maps</b>, machine booking, starting machines at
                  checkout, vouchers for other users, <b>PagBank</b> payments,
                  live machine status from the supplier's webhooks,{" "}
                  <b>Firebase</b> push notifications and deep linking.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  On the back end, built features in <b>NestJS</b> and{" "}
                  <b>Fastify</b> microservices for payments, messaging, the core
                  domain and machine activation, with{" "}
                  <b>PostgreSQL</b>, <b>Prisma</b> and <b>RabbitMQ</b>, and
                  co-designed the database.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Wrote part of the tests (end-to-end with <b>Maestro</b>, unit
                  with <b>Jest</b> and <b>React Testing Library</b>); the app
                  shipped through a <b>CI/CD</b> pipeline on{" "}
                  <b>GitHub Actions</b>.
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
                  <b>React Native (Expo)</b> and <b>Redux</b> for iOS and Android,
                  with news, truck status, vehicle data, push notifications
                  through <b>Firebase</b> and deep linking. Delivered the MVP in 4
                  months and kept maintaining it; used by thousands of drivers.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Built a fleet management web dashboard in <b>React</b>,{" "}
                  <b>Redux Toolkit</b> and <b>Chakra UI</b> (MVP in 3 months,
                  thousands of users), with fleet composition, repair history,
                  regional filters and a drag-and-drop home screen.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Maintained the <b>React Native</b> and <b>Redux</b> inspection
                  app used in Vamos workshops, a dynamic checklist that guides
                  the evaluation of each truck on arrival.
                </li>
              </Text>
              <Text>
                <li className="ml-6 pl-4 list-[circle]">
                  Wrote end-to-end tests with <b>Cypress</b> and unit tests with{" "}
                  <b>Jest</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Shorter engagements: <b>Oracle Responsys</b> email templates{" "}
                  (<b>HTML/CSS</b>, <b>SQL</b>, <b>RPL</b>) for{" "}
                  <b>Smiles Fidelidade</b>, and vacation cover on{" "}
                  <b>React Native</b> apps for <b>Semex Brasil</b> and{" "}
                  <b>Henry Schein Brasil</b> (modular codebase shared across
                  several apps).
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Reviewed teammates' pull requests across projects and
                  onboarded colleagues joining them.
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
                  Maintained a white label <b>React Native</b> app published as a
                  separate store app for each of 12+ clients, with their own
                  brand, colors and features, and managed the releases on the{" "}
                  <b>App Store</b> and <b>Google Play</b>.
                </li>
              </Text>
              <Text>
                <li className="pl-4">
                  Maintained an offline-first <b>React Native</b> app used by
                  hundreds of field technicians across Brazil to record and
                  review service visits, along with its <b>GraphQL</b> API in{" "}
                  <b>Node.js</b>.
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
                  Co-managed the <b>PostgreSQL</b> databases of these apps and
                  deployed them with <b>Docker</b> and{" "}
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
                Native Web, Redux, Redux Toolkit, Zustand, React Query,
                Tailwind, NativeWind, Chakra UI
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
                GitHub Actions, App Store Connect, Google Play Console
              </Text>
              <Text>
                <b>Practices:</b> Agile/Scrum, CI/CD, code review
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
