import { ReDirect } from "../Health&familypage";
import { InnerBanner } from "../Health&familypage";
import ImpactOfHandF from "../Health&familypage/impactOnH&F/impactOnH&F";
import donateImage from "../images/Donate.svg";
import "./index.css";
const volunteerDonatePartner = [
  {
    heading: "Education",
    paragraph:
      "Our goal is to make sure everyone has a chance to learn, no matter where they come from.",
    background: "educationFigma.svg",
    buttonText: "Learn more",
    link: "/Education",
  },
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
];

function TribalPage() {
  const programs = [
    {
      title: "Education",
      details: [
        "We set up schools in tribal areas where children can learn",
        "Our teachers use methods that respect tribal culture",
        "We provide books and supplies in local languages",
      ],
    },
    {
      title: "Health Care",
      details: [
        "We bring doctors to tribal villages for check-ups",
        "Our team teaches about good health habits",
        "We help tribal people get the medicine they need",
      ],
    },
    {
      title: "Job Skills",
      details: [
        "We teach useful skills like farming, crafts, and computer use",
        "Our programs help tribal youth find good jobs",
        "We support tribal artists in selling their traditional art",
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
            <div className="Health&FamilyWelfare">
              <h1>Tribal Communities:</h1>
            </div>
          </div>
          <div className="container">
            <p>Supporting Tribal Communities</p>
            <p>
              We work with tribal groups to help them grow while keeping their
              special traditions alive. Here's what we do:
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

            <img
              src="tribalThumb.jpg"
              alt="reload"
              className="environmentImgDup"
            />
            <div className="programGoalList">
              <div className="program-item">
                <div className="program-content">
                  <li className="EnvironmentListsOfGoals">
                    {" "}
                    <p>
                      Our goal is to help tribal communities have better lives
                      while keeping their unique way of life. We believe that
                      tribal knowledge is valuable and should be protected.
                    </p>
                  </li>
                  <li className="EnvironmentListsOfGoals">
                    {" "}
                    <p>
                      We also work to make sure tribal voices are heard. We help
                      tribal leaders talk to government officials about their
                      community's needs. Our team collects stories and songs
                      from tribal elders to save them for future generations. By
                      working together, we can create a future where tribal
                      communities thrive and their cultures are respected by
                      all.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="xdcfghj overRidePositioning"
        style={{
          background: "linear-gradient(to right, #a7f3d0 0%, #ffffff 100%)",
        }}
      >
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
            heading={" 800 Students Empowered in 1 Month"}
            heading1={"1,200 Learners Supported in 1 Month"}
            paragraph={
              "Through digital literacy programs, enabling access to online educational resources and skill development platforms."
            }
            paragraph1={
              "Focused on rural education, distributing learning materials and organizing virtual classes for underserved areas."
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
        heading={"Empowering Tribes, Preserving Traditions, Building Futures."}
      />
    </div>
  );
}
export default TribalPage;
