import "./Experience.scss";
import { primaryComponents } from "../../primaryComponents";

const Experience = () => {
  return (
    <div className="experiences mt-4">
      <h4 className="purple--text mb-0" style={{ fontWeight: "600" }}>
        WORK EXPERIENCE
      </h4>
      <primaryComponents.Hr />
      <div className="mt-4">
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">July 2021 - Date</h6>
          <h5 className="dark--text mb-0">Enlumi - Lead Frontend Engineer</h5>
          <ul>
            <li>
              Developed a fintech application that allows users to send and
              receive money, buy airtime, and pay their bills while earning
              cashback on their purchases. Within 7 months of its release, this
              product gained more than 200 thousand customers, which helped my
              company maintain stability as a startup
            </li>
            <li>
              Built an application that enables merchants to receive payments
              and give cashback to their customers. This application has helped
              many businesses to understand their customers behaviors and
              creates a loyalty system that enables a business to retain and
              reach out to more customers
            </li>
            <li>
              Built an application that allows businesses to find out more about
              their products, ideas, or solutions by enabling businesses to
              publish surveys while we automatically connect them to our users
              for feedback. This application also allows businesses to publish
              ads and generate leads
            </li>
            <li>
              Collaborate with my team to design, structure, and plan the
              frontend of an application or feature while ensuring that best
              practices such as testing, proper documentation, and agreed-upon
              conventions are followed
            </li>
            <li>
              Implement CICD pipelines that enable us as a team to automate
              deployment processes and integrate our applications with Sentry to
              pick up production errors as soon as they occur without having to
              wait for users to file complaints
            </li>
            <li>
              Follow up and discuss with the frontend team members on their
              daily tasks to ensure there are no blockers and features are
              implemented efficiently while I also assist interns in gaining a
              solid ground as a frontend developer
            </li>
            <li>
              Develop robust chart systems that can visualize data in real time
              which allows businesses to derive meanings from their results
            </li>
            <li>
              Give weekly reports about our progress as a team to the CTO and
              discuss general concerns and developments
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">November 2020 - February 2022</h6>
          <h5>Brandmobile Africa - Frontend Engineer</h5>
          <ul>
            <li>
              Built a platform that enables retailers without capital to have
              access to products at no upfront cost, sell them and make profits
              while helping hundreds of product owners scale their reach to
              customers
            </li>
            <li>
              Crafted an application that enables a TV show with over 10,000
              applicants and millions of voters to ease users registration,
              application screening, and voting etc.
            </li>
            <li>
              Collaborate with my team to design, structure, and plan the
              frontend of an application or feature while ensuring that best
              practices such as unit testing, proper documentation, and
              agreed-upon conventions are followed
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">June 2020 - August 2020</h6>
          <h5>HNG I7 - Frontend Developer</h5>
          <ul>
            <li>
              This is a competition with over 11,000 candidates. There are 10
              stages present, and each stage comes with its own challenges. For
              each stage, we are divided into teams to work on a task or
              project, which exposed me to a lot of great minds and broadened my
              knowledge.
            </li>
            <li>
              Helped upcoming developers who needed laptops but didn't have the
              funds to get loans or sponsors by creating a platform that
              connects developers and donors.
            </li>
            <li>
              Built a product that provides APIs for developers to ease and
              hasten development processes
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">January 2019 - March 2020</h6>
          <h5>Hiosoft Technology - Frontend Developer</h5>
          <ul>
            <li>
              Raised investments for farmers by developing an application that
              enables investors to invest in farming and get returns on their
              investment
            </li>
            <li>
              Improved customers experience by building a chatbot that helps to
              answer questions about customers concerns or challenges
            </li>
            <li>
              Built an e-learning platform that enables learners to gain access
              to resources like videos and notes that helps to aid their journey
              in computer programming .
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress last={true}>
          <h6 className="dark--text mb-0">July to December 2019</h6>
          <h5>Network Assistant (Internship) at Airtel Network Limited</h5>
          <ul>
            <li>
              I was responsible for the allocation of IP Addresses, monitoring
              of cache servers, assisted in designing and documentation of
              networks, network debugging, and maintenance.
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
      </div>
    </div>
  );
};
export default Experience;
