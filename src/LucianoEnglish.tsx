import React from "react";
import {
  Header,
  Section,
  SectionItem,
  SectionItemScore,
  Text,
} from "./components";

const LucianoEnglish: React.FC = () => {
  return (
    <>
      <Header
        name="Luciano Rodrigues Lucio Neto"
        role="Software Developer"
        address={`Niquelândia Street, n 135, 59068-820, Natal. Brazil`}
        email="lucianorlneto@gmail.com"
        birthcity="Natal"
        birthdate="12/06/1994"
        citizenship="Brazilian"
        phone="+55 84 9 9131-7498"
        socialmedia={[
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/luciano-rodrigues-lucio-neto-88aa58165/",
          },
          { name: "GitHub", link: "https://github.com/lucianorlneto" },
        ]}
        language="en"
      />
      <Section index={1} title="PROFILE">
        <SectionItem
          description={
            <div>
              <Text>
                Full Stack and Mobile Developer, utilizing React Native, with
                over 3 years of experience.
              </Text>
              <Text>
                Professional experience in a variety of technologies, including{" "}
                <b>TypeScript</b>, <b>SQL</b>, <b>GraphQL</b>,{" "}
                <b>React Native</b>, <b>React</b>, <b>Tailwind</b> and{" "}
                <b>PHP</b>.
              </Text>
              <Text>
                Chose to pursue a career in programming while pursuing a degree
                in computer engineering, believing in the power of programming
                to solve problems. If there's a logistical/business problem,
                there's certainly a solution using programming, aided by logic,
                and that's why passionate about the field.
              </Text>
            </div>
          }
        />
      </Section>

      <Section index={2} title="Experience">
        <SectionItem
          period="Aug 2019 — May 2022"
          title="Junior Full Stack Developer at Lógica Natal Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <Text>
                Member of a team responsible for bug fixes and development of
                new features in an Enterprise Resource Planning (ERP) system
                developed in <b>PHP</b>.
              </Text>
              <Text>
                Responsible for third-party API integrations and the creation of{" "}
                <b>REST APIs</b>.
              </Text>
              <Text>
                Mobile Developer Utilized <b>React Native</b> and worked with
                two APIs: one <b>REST</b> API developed in <b>PHP</b> (
                <b>Lumen</b>) and the other <b>GraphQL</b> developed in{" "}
                <b>Node.js</b>.
              </Text>
              <Text>
                Experience in Deployment of applications in <b>Docker</b> and{" "}
                <b>Kubernetes</b> and use of <b>SQL</b> databases, specifically{" "}
                <b>PostgreSQL</b>.
              </Text>
            </div>
          }
        />
        <SectionItem
          period="May 2022 — Feb 2023"
          title="Front-end Mid-level Developer at Sparta Labs"
          city="Blumenau (Remote)"
          description={
            <div>
              <Text>
                Member of an agile squad, utilizing the <b>ClickUp</b> platform,
                as a front-end developer. Mainly worked for clients within the{" "}
                <b>Vamos Group</b> — controlled by the SIMPAR holding company,
                leaders in the truck, machinery, and equipment rental sector in
                Brazil — implementing interfaces designed by the team's
                designers, with the aid of the Figma platform, using{" "}
                <b>React Native</b> and <b>TypeScript</b>.
              </Text>
              <Text>
                Responsible, along with the squad I participated in, for
                developing a mobile application and maintaining and adding new
                features to another, both in <b>React Native</b>, using{" "}
                <b>TypeScript</b>.
              </Text>
            </div>
          }
        />
        <SectionItem
          period="Mar 2023 — Present"
          title="Front-end Mid-level Developer at Môre"
          city="São Paulo (Remote)"
          description={
            <div>
              <Text>
                Participated in different agile development squads, with the
                assistance of the <b>ClickUp</b> and <b>Jira</b> platforms,
                acting as a front-end developer for clients such as{" "}
                <b>Henry Schein Brasil</b>, <b>Smiles Fidelidade</b>,{" "}
                <b>Semex Brasil</b>, <b>Marisa</b>, and members of the{" "}
                <b>Vamos Group</b>.
              </Text>
              <Text>
                Responsible for assisting in development, maintenance, test
                implementation, and integration with <b>REST APIs</b> for mobile
                applications implemented in <b>React Native</b>, as well as web
                applications implemented in <b>React</b>, using <b>ChakraUi</b>,
                and also cross-platform applications implemented in{" "}
                <b>React Native Web</b> and <b>Expo</b>, using <b>Tailwind</b>{" "}
                for styling.
              </Text>
              <Text>
                Also worked on the integration and implementation of tools from{" "}
                <b>Google Firebase</b> such as{" "}
                <b>
                  <i>Push Notifications</i>
                </b>
                ,{" "}
                <b>
                  <i>Remote Config</i>
                </b>
                , and{" "}
                <b>
                  <i>Database</i>
                </b>
                , as well as{" "}
                <b>
                  <i>Firebase Authentication</i>
                </b>
                , and{" "}
                <b>
                  <i>Google Analytics</i>
                </b>{" "}
                also .
              </Text>
            </div>
          }
        />
      </Section>
      <Section index={3} title="EDUCATION">
        <SectionItem
          city="Natal"
          period="Feb 2010 — Nov 2012"
          title="Nossa Senhora das Neves High School"
          description={<p>High School</p>}
        />
        <SectionItem
          city="Natal"
          period="Mar 2013 — Jun 2016"
          title="Federal University of Rio Grande do Norte (UFRN)"
          description={<p>Bachelor's Degree in Science and Technology</p>}
        />
        <SectionItem
          city="Natal"
          period="Jul 2016 — Jul 2018"
          title="Federal University of Rio Grande do Norte (UFRN)"
          description={<p>Bachelor's Degree in Computer Engineering</p>}
        />
      </Section>
      <Section index={4} title="SKILLS">
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
      <Section index={5} title="Internships">
        <SectionItem
          city="Natal"
          period="Aug 2017 — Nov 2017"
          title="Embedded Systems Engineer at Centro de Lançamento da Barreira do Inferno (CLBI)"
          description={
            <Text>
              Development of embedded intelligence for a confidential project at
              CLBI using microprocessors with the assistance of the prototyping
              platform <b>Arduino</b> in <b>C++</b>.
            </Text>
          }
        />
        <SectionItem
          city="Natal"
          period="Aug 2018 — Jul 2019"
          title="Full Stack Developer at Lógica Sistemas de Natal Informação"
          description={
            <Text>
              Full Stack Developer member of a team that worked on bug fixes and
              development of new features in an Enterprise Resource Planning
              (ERP) system, built in <b>PHP</b>, focusing on software solutions
              for telecommunications and business management issues.
            </Text>
          }
        />
      </Section>
      <Section index={4} title="LANGUAGES">
        <SectionItemScore
          content={[{ label: "Portuguese" }, { label: "English" }]}
        />
      </Section>
      <Section index={4} title="HOOBIES">
        <SectionItem
          description={
            <Text>
              Playing guitar, producing and mixing music, and performing at
              local bars/clubs with bands.
            </Text>
          }
        />
      </Section>
    </>
  );
};

export default LucianoEnglish;
