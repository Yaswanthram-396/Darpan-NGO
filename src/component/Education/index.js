import { ReDirect } from "../Health&familypage";
import { InnerBanner } from "../Health&familypage";
import ImpactOfHandF from "../Health&familypage/impactOnH&F/impactOnH&F";
import donateImage from "../images/Donate.svg";
import "./index.css";
const volunteerDonatePartner = [
  {
    heading: "Environment",
    paragraph: "We are dedicated on conserving the environment and forests.",
    background: "environmentFigma.svg",
    buttonText: "Learn more",
    link: "/Environment",
  },
  {
    heading: "Health and Family Welfare",
    paragraph:
      "Ensuring essential healthcare for all, especially in rural and underserved areas.",
    background: "healthAndFamilyFigma.svg",
    buttonText: "Learn more",
    link: "/Health&Familypage",
  },
  {
    heading: "Tribal Effairs",
    paragraph:
      "Supporting tribal development and preserving cultural heritage.",
    background: "TribalFigma.svg",
    buttonText: "Learn more",
    link: "/TribalCommunities",
  },
];

function EducationPage() {
  const programs = [
    {
      title: "Run programs to teach children and adults",
      details: [
        "We set up classes in areas where schools are hard to reach",
        "Our teachers help students with reading, writing, and math",
        "We also offer adult education classes in the evenings",
      ],
    },
    {
      title: "Give out books and school supplies",
      details: [
        "We provide free textbooks to students who can't afford them",
        "We hand out notebooks, pens, and other basic school items",
        "Our mobile library brings books to remote areas",
      ],
    },
    {
      title: "Offer money to help bright students continue their studies",
      details: [
        "We give scholarships to students who do well in school",
        "This money helps pay for school fees, uniforms, and supplies",
        "We support students from elementary school through college",
      ],
    },
  ];
  return (
    <div className="entireEducation">
      <div className="EducationPage">
        <div className="innerContentOfEducationPage">
          <div className="EducationOurProject">
            <img className="LineOfOurProject" src="Line (1).svg" alt="reload" />
            <h4 className="OurProjectHeadingH4">OUR PROJECT</h4>
          </div>

          <div className="Health&FamilyHeading">
            <h1 className="Health&FamilyWelfare">Education</h1>
          </div>
          <div className="container">
            <p className="heading-main">Education for All</p>
            <p>
              We help people learn and grow, especially those who don't have
              many chances. Here's what we do:
            </p>

            <div className="program-list">
              {programs.map((program, index) => (
                <div key={index} className="program-item">
                  <div className="program-content">
                    <p className="program-title">
                      {index + 1}. {program.title}
                    </p>
                    <ul className="program-details">
                      {program.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Our goal is to make sure everyone has a chance to learn, no matter
              where they come from. We believe education can change lives and
              make our community stronger!
            </p>
            <img
              src="EducationThumb.jpg"
              alt="reload"
              className="educationImg"
            />
            <div className="program-list">
              <div className="program-item">
                <div className="program-content">
                  <h1 className="SkillDevoplementHead">Skill Devoplement</h1>
                  <p className="program-title">
                    Job Fair Success: Connecting Youth with Opportunities
                  </p>
                  <p>
                    On June 9, 2023, Jana Raksha Charitable Trust held a job
                    fair to help young people find work. Here's what happened:
                  </p>
                  <ul className="program-details toOverRideMargin">
                    <li>240 students attended the event</li>
                    <li>2 companies offered</li>
                    <li>There were 515 job </li>
                    <li>70 students got jobs</li>
                  </ul>
                  <p>
                    This event shows how we're helping young people start their
                    careers. It's a big step in fighting unemployment and
                    helping our community grow.We're proud of everyone who
                    participated and look forward to more events like this in
                    the future!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xdcfghj overRidePositioning">
        <div className="impactOnOtherCards">
          <ImpactOfHandF
            heading={" 800 Students Empowered in 1 Month"}
            heading1={"1,200 Learners Supported in 1 Month"}
            paragraph={
              "Through digital literacy programs, enabling access to online educational resources and skill development platforms."
            }
            paragraph1={
              "Focused on rural education, distributing learning materials and organizing virtual classes for underserved areas."
            }
            image={"Edit Square.svg"}
            image1={"topRight.svg"}
          />
        </div>
        <div className="impactOnOtherCards">
          <ImpactOfHandF
            heading={"950 Children Benefited in 1 Month"}
            heading1={"1,100 Teachers Trained in 1 Month"}
            paragraph={
              "Providing access to scholarships and after-school programs to improve educational opportunities for young learners."
            }
            paragraph1={
              "Offering professional development courses to educators, enhancing teaching methodologies and classroom engagement."
            }
            image={"bootomLeft.svg"}
            image1={"bootomRight.svg"}
          />
        </div>
      </div>
      <div className="paddingForOurProject">
        <div className="OurProject">
          <img className="line-Health&Family" src="Line (1).svg" alt="reload" />
          <h4 className="OurProjectHeadingH4">MORE PROJECTS</h4>
        </div>
        {<ReDirect arrayOfElements={volunteerDonatePartner} />}
      </div>
      <InnerBanner
        image={donateImage}
        heading={
          "You can contribute to provide a place for children with special needs!"
        }
      />
    </div>
  );
}
export default EducationPage;
