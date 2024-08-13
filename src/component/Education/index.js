import { ReDirect } from "../Health&familypage";
import { InnerBanner } from "../Health&familypage";
import ImpactOfHandF from "../Health&familypage/impactOnH&F/impactOnH&F";
import donateImage from "../images/Donate.svg";
import "./index.css";
const volunteerDonatePartner = [
  {
    heading: "Environment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "Project.png",
    buttonText: "Learn more",
    link: "/Environment",
  },
  {
    heading: "Health and Family Welfare",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "numvhg.svg",
    buttonText: "Learn more",
    link: "/HealthandFamilyWelfare",
  },
  {
    heading: "Tribal Effairs",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "JHHDCTVUY.svg",
    buttonText: "Learn more",
    link: "/Tribal-effairs",
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
            <p className="paragraph-intro">
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

            <p className="paragraph-intro">
              Our goal is to make sure everyone has a chance to learn, no matter
              where they come from. We believe education can change lives and
              make our community stronger!
            </p>
            <img src="education.jpg" alt="reload" className="educationImg" />
            <div className="program-list">
              <div className="program-item">
                <div className="program-content">
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
            heading={"20+ orphanage visit in 2 months"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
            image={"Edit Square.svg"}
          />
        </div>
        <div className="impactOnOtherCards">
          <ImpactOfHandF
            heading={"20+ orphanage visit in 2 months"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
            image={"Edit Square.svg"}
          />
        </div>
      </div>
      {<ReDirect arrayOfElements={volunteerDonatePartner} />}
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
