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
          <h6 className="dark--text mb-0">March 2021 - Date</h6>
          <h5 className="dark--text mb-0">Enlumi - Frontend Engineer</h5>
          <ul>
            <li>
              Serving as the frontend lead in a team of eight, I work alongside
              my team to upgrade our web application from version 1 to 2, which
              led to an increase of more than 70,000 users within two months,
              which was double the number achieved in the last 12 months. This
              application helps businesses understand and better connect with
              their daily consumers and was built using React.js and Django (
              <a
                className="purple--text"
                style={{ fontWeight: 600 }}
                href="https://www.getlumi.io"
                target="_blank"
                rel="noreferrer"
              >
                https://www.getlumi.io
              </a>
              ,{" "}
              <a
                className="purple--text"
                style={{ fontWeight: 600 }}
                href="https://www.Insiight.io"
                target="_blank"
                rel="noreferrer"
              >
                https://www.Insiight.io
              </a>
              ).
            </li>
            <li>
              Collaborate with my team to design, structure, and plan the
              frontend of an application or feature while ensuring that best
              practices such as testing, proper documentation, and agreed-upon
              conventions are followed.
            </li>
            <li>
              Collaborate with my team to design, structure, and plan the
              frontend of an application or feature while ensuring that best
              practices such as testing, proper documentation, and agreed-upon
              conventions are followed.
            </li>
            <li>
              Give weekly reports about our progress as a team to the CTO and
              discuss general concerns and developments.
            </li>
            <li>
              Develop robust chart systems that can visualize data in real-time
              which allows businesses to derive meanings from their results.
            </li>
            <li>
              Supervise and assist interns in their journey to becoming a
              frontend developer
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">November 2020 - February 2022</h6>
          <h5>Brandmobile Africa - Frontend Engineer</h5>
          <ul>
            <li>
              Served as a frontend lead in a team of five. Worked alongside my
              team to build a platform that enables retailers without capital to
              have access to products at no upfront cost, sell them and make
              profits while helping hundreds of product owners scale their reach
              to customers. (
              <a
                style={{ fontWeight: 600 }}
                href="https://kuuzza.com"
                target="_blank"
                rel="noreferrer"
                className="purple--text"
              >
                https://kuuzza.com
              </a>
              )
            </li>
            <li>
              Collaborate with my team to design, structure, and plan the
              frontend of an application or feature while ensuring that best
              practices such as unit testing, proper documentation, and
              agreed-upon conventions are followed. I also work alongside my
              team to code out different modules of an application.
            </li>
            <li>
              Crafted some frontend components using Quasar for a web
              application used by a popular television show called Gulder
              ultimate search. This show has over 10,000 applicants each year,
              and the web application built is responsible for easing the
              processes involved in the show, such as user registration,
              application screening, voting, etc.
            </li>
          </ul>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">June 2020 - August 2020</h6>
          <h5>HNG Internship - Frontend Developer</h5>
          <ul>
            <li>
              This internship is like a competition, it has over 11,000
              candidates accepted into it. There are 10 stages present in the
              internship, each stage comes with its challenges. For each stage,
              we are divided into teams to work on a task or project.
            </li>
            <li>
              This internship was a good drill for me that gave me exposure,
              patience, improved my resilience, and taught me more about
              teamwork. In the end, I was able to make it to the final and come
              out as a winner alongside other members of about 200 plus out of
              11,000 plus candidates.
            </li>
            <li>
              On this journey, I worked on several web applications which helped
              to improve my technical skills.
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
