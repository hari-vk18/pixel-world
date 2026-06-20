import React from "react";
import TeamMember from "../company/TeamMember";
import Footer from "../../components/Footer";
import FadeOnScroll from "../../components/FadeOnScroll";

export default function MeetTheTeam() {
  return (
    <div className="company-meet-team-page">

      <section className="lg:pt-[0%] lg:pb-[6%] 3xs:pb-[6%] lg:px-[4%] 3xs:px-6">
        <div className="lg:mx-auto">

          {/* Heading */}
          <FadeOnScroll direction="left" distance={40} duration={800}>
            <h1 className="2xl:text-[500%] lg:text-[250%] 3xs:text-[200%] font-normal">
              Meet the Team
            </h1>
          </FadeOnScroll>

          <FadeOnScroll direction="up" delay={150} distance={30} duration={800}>
            <p className="2xl:text-[250%] lg:text-[120%] 3xs:text-[110%] text-gray-600 mt-3 3xs:mb-10">
              We understand that property Development and Asset Managment can be challenging at different stages of the journey. We have a dedicated team of professionals who are committed to supporting projects on their investment journey.
            </p>
          </FadeOnScroll>

          {/* Leadership Section */}
          <FadeOnScroll direction="up" distance={40}>
            <h2 className="2xl:text-[500%] lg:text-[250%] 3xs:text-[200%] font-[400] mb-8">
              Leadership
            </h2>
          </FadeOnScroll>

          <FadeOnScroll direction="up" distance={40} delay={100}>
            <div className="grid 3xs:grid-row-1 md:grid-cols-2 gap-x-8 gap-y-8 items-start content-start auto-rows-fr">

              <TeamMember
                img="/Diego.webp"
                name="Diego Fernández de Córdoba"
                title="Chairman of IOTC, Senior Legal &<br /> Tax Expert"
                bio="Renowned legal and taxation specialist with over 30 years of experience, advising global firms and institutions."
                link="https://www.linkedin.com/in/diego-fern%C3%A1ndez-de-c%C3%B3rdova-a657861/"
              />

              <TeamMember
                img="/Thinesh.webp"
                name="Thinesh Ganeshakumaran"
                title="Co-Founder of FT Capital | <br />Group CEO of IOTC"
                bio="Group leader with over 15 years of expertise in real economy investments and asset management, specializing in structuring and leading high-impact financial strategies."
                link="https://www.linkedin.com/in/tg1909/"
              />

              <TeamMember
                img="/Fillipo.webp"
                name="Filippo De Toma"
                title="Co-Founder of FT Capital"
                bio="Managing Partner of IOTC Investments
Wealth and asset management executive with over 10 years of expertise in private equity, strategic investments and capital growth.
"
                link="https://www.linkedin.com/in/filippo-de-toma-a4354886/"
              />

              <TeamMember
                img="/Rob.webp"
                name="Rob Willems"
                title="Director of IOTC Real Asset Netherlands"
                bio="Former advisor to the Dutch Finance Minister, specialized in fashion and real estate large-scale projects."
                link="https://www.linkedin.com/in/rob-willems-b73241378/"
              />

              <TeamMember
                img="/murug.webp"
                name="Murugaraj Balakrishnan"
                title="Head of IOTC Real Asset APAC & <br /> Middle East"
                bio="Strategic finance leader with over 15 years of global experience in real estate investments, FDI structuring, and asset management across India, the US, and Germany."
                link="https://www.linkedin.com/in/murugarajbalakrishnan/"
              />

            </div>
          </FadeOnScroll>

          {/* Advisory Committee */}
          {/* <FadeOnScroll direction="up" distance={40}>
            <h2 className="3xl:text-[400%] lg:text-[250%] 3xs:text-[200%] font-normal lg:mt-10 3xs:mt-5">
              Advisory Committee
            </h2>
          </FadeOnScroll>

          <FadeOnScroll direction="up" distance={40} delay={100}>
            <div className="grid 3xs:grid-row-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-10">

              <TeamMember
                img="/Contact.png"
                name="Prof. Ashu Marasinghe"
                title="Director of IOTC Ventures | Former Sri Lanka Presidential Advisor"
                bio="PhD doctor, distinguished economist and policymaker, former MP, expert in infrastructure and economic development, Chairman of the State Engineering Corporation."
                link="https://www.linkedin.com/in/ashu-marasinghe-7497ba1ab/?skipRedirect=true"
              />

              <TeamMember
                img="/Omar.webp"
                name="H.E. Omar Abdul Razzak"
                title="Director of IOTC Ventures | Former State Minister & Ambassador"
                bio="Senior diplomat and economic strategist with extensive experience in international relations. Former State Minister and Ambassador to the European Union, with extensive diplomatic and economic expertise."
              />

            </div>
          </FadeOnScroll> */}

        </div>
      </section>

      <Footer />
    </div>
  );
}
