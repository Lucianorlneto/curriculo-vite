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
          period="May 2022 — Present"
          title="Sparta Labs/Môre"
          city="São Paulo (Remote)"
          description={
            <div>
              <Text className="-mt-4 font-bold italic text-lg">
                <li>Front-end Mid-level Developer</li>
              </Text>
              <Text>
                Responsible for assisting in development, maintenance, test
                implementation, and integration with <b>REST APIs</b> for mobile
                applications implemented in <b>React Native</b>, as well as web
                applications implemented in <b>React</b>, using <b>ChakraUi</b>,
                and also cross-platform applications implemented in{" "}
                <b>React Native Web</b> and <b>Expo</b>, using <b>Tailwind</b>{" "}
                for styling and <b>TypeScript</b>.
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
        <SectionItem
          period="Aug 2018 — May 2022"
          title="Lógica Sistemas de Informação"
          city="Natal"
          description={
            <div>
              <Text className="font-bold italic text-lg">
                <li>Internship as Junior Full Stack Developer</li>
              </Text>
              <Text>
                Full Stack Developer member of a team that worked on bug fixes
                and development of new features in an Enterprise Resource
                Planning (ERP) system, built in <b>PHP</b>, focusing on software
                solutions for telecommunications and business management issues.
              </Text>
              <Text className="mt-4 font-bold italic text-lg">
                <li>Junior Full Stack Developer</li>
              </Text>
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
          period="Aug 2017 — Nov 2017"
          title="Barreira do Inferno Launch Center (CLBI)"
          city="Natal"
          description={
            <div>
              <Text className="font-bold italic text-lg">
                <li>Internship as Embedded Systems Engineer</li>
              </Text>
              <Text>
                Development of embedded intelligence for a confidential project
                at CLBI using microprocessors with the assistance of the
                prototyping platform <b>Arduino</b> in <b>C++</b>.
              </Text>
            </div>
          }
        />
      </Section>
      <Section index={3} title="EDUCATION">
        <SectionItem
          city="Natal"
          period="Mar 2013 — Jul 2018"
          title="Federal University of Rio Grande do Norte (UFRN)"
          description={
            <div>
              <li className="text-lg font-[500]">
                Bachelor's Degree in Science and Technology (Mar 2013 — Jun
                2016)
              </li>
              <li className="text-lg font-[500]">
                Bachelor's Degree in Computer Engineering (Jul 2016 — Jul 2018)
              </li>
            </div>
          }
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
