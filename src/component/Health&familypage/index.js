import "./index.css";
import ImpactOfHandF from "./impactOnH&F/impactOnH&F";
import donateImage from "../images/Donate.svg";
// import childrenImage from "../images/Project.png";
// import dean from "../images/Project(1).png";
// import different from "../images/Project(2).png";
import React from "react";
import { Link } from "react-router-dom";

const volunteerDonatePartner = [
  {
    heading: "Education",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "Project.png",
    buttonText: "Learn more",
    link: "/Education",
  },
  {
    heading: "Environment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "numvhg.svg",
    buttonText: "Learn more",
    link: "/Environment",
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

export function ReDirect({ arrayOfElements }) {
  return (
    <div className="MoveWithUsdiv">
      {arrayOfElements.map((innerValue) => {
        const containerStyle = {
          height: "364px",
          backgroundImage: `url(${innerValue.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          overflow: "hidden",
        };

        return (
          <div className="parent">
            <div style={containerStyle} className="background"></div>
            <Link to={innerValue.link}>
              <button>{innerValue.buttonText}</button>
            </Link>
            <div className="child">
              <h2>{innerValue.heading}</h2>
              <p>{innerValue.paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// export default ReDirect;

export function InnerBanner({ image, heading }) {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "81vw",
    borderRadius: "32px",
    minHeight: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="outerToConnectWithUs">
      <div style={divStyle}>
        <div className="fullText">
          <h1>{heading}</h1>
          <div className="buttons">
            <button className="Join-as-a-volunteer">Join as a volunteer</button>
            <button className="HealthAndFamilyButton">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthAndfamily() {
  return (
    <>
      <div className="lineComesOurProject">
        <div>
          <div className="OurProject">
            <img
              className="line-Health&Family"
              src="Line (1).svg"
              alt="reload"
            />
            <h4 className="OurProjectHeadingH4">OUR PROJECT</h4>
          </div>
          <div className="Health&FamilyContent">
            <div className="Health&FamilyHeading">
              <h1 className="Health&FamilyWelfare">Health & Family Welfare.</h1>
            </div>
            <div className="ListOfelements">
              <div className="BloodDonationInitiativeslistComeHead">
                <div>
                  <h3 className="BloodDonationInitiatives">
                    Blood Donation Initiatives:
                  </h3>
                </div>
                <div className="BloodDonationParaImage">
                  <div className="BloodDonationInitiativesPara orderedPara1">
                    <li>
                      Jana Raksha Charitable Trust (JRCT) is making a big
                      difference in our community through our blood donation
                      camps. We're committed to saving lives and helping people
                      stay healthy.
                    </li>
                    <li>
                      So far, 485 kind people have donated blood at our camps.
                      We're amazed by how generous and caring our community is!
                    </li>
                    <li>
                      We plan our blood donation camps carefully to keep
                      everyone safe and comfortable. We follow all health rules
                      and work with local hospitals to make sure the blood goes
                      to people who need it most.
                    </li>
                    <li>
                      The great response from our community shows how much
                      people care about helping others. We'll keep organizing
                      these camps because they're so important for saving lives.
                      We also want to teach more people about why donating blood
                      regularly matters.
                    </li>
                    <li>
                      By doing this work, we're showing our dedication to
                      helping people and making our community healthier. We want
                      to say a big thank you to everyone who has donated blood.
                      We also invite more people to join us in this important
                      mission to save lives.
                    </li>
                  </div>
                  <img
                    src="DeWatermark.ai_1722620739345.png"
                    className="bloodDonateImg orderedimg1"
                    alt="reload"
                  />
                </div>
              </div>
              <div className="BloodDonationInitiativeslistComeHead">
                <div>
                  <h3 className="BloodDonationInitiatives">
                    Free Eye and Dental Camp:
                  </h3>
                </div>
                <div className="BloodDonationParaImage">
                  <div className="BloodDonationInitiativesPara orderedPara2">
                    <li>
                      On December 23, 2023, Jana Raksha Charitable Trust held a
                      free eye and dental camp for our community. We're happy to
                      report that 159 people came to get help!
                    </li>
                    <li>
                      Our team of eye doctors and dentists worked hard to take
                      care of everyone. We even did 35 free eye surgeries for
                      people who needed them.
                    </li>
                    <li>
                      This camp is part of our work to help people who might not
                      be able to afford healthcare. We want everyone to be
                      healthy and see well.
                    </li>
                    <li>
                      TWe're thankful to all the doctors and helpers who made
                      this camp possible. We'll keep working to make our
                      community healthier.
                    </li>
                  </div>
                  <img
                    src="DeWatermark.ai_1722620739345.png"
                    className="bloodDonateImg orderedimg2"
                    alt="reload"
                  />
                </div>
              </div>
              <div className="BloodDonationInitiativeslistComeHead">
                <div>
                  <h3 className="BloodDonationInitiatives">
                    Blood Donation Initiatives:
                  </h3>
                </div>
                <div className="BloodDonationParaImage">
                  <div className="BloodDonationInitiativesPara orderedPara3">
                    <li>
                      On August 11, 2023, Jana Raksha Charitable Trust held an
                      important organ donation camp at Government Junior
                      College, Velangi. We wanted to teach people about organ
                      donation and why it's so important.
                    </li>
                    <li>
                      Many students, teachers, and local people came to learn
                      how they could help save lives by donating organs.
                    </li>
                    <li>
                      We were honored to have Mr. Badam Balakrishna from the
                      Badam Balakrishna Trust as our special guest. He gave an
                      inspiring talk about why we need organ donors and how
                      donation can change lives.
                    </li>
                    <li>
                      Doctors were there to explain how organ donation works and
                      answer questions. We also helped people sign up to be
                      organ donors if they wanted to.
                    </li>
                    <li>
                      The camp was a big success! We're proud to keep working on
                      making our community healthier and more caring. We're very
                      thankful to Mr. Badam Balakrishna for supporting our event
                      and helping make it so effective.
                    </li>
                  </div>
                  <img
                    src="DeWatermark.ai_1722620739345.png"
                    className="bloodDonateImg orderedimg3"
                    alt="reload"
                  />
                </div>
              </div>
            </div>
            <div className="xdcfghj">
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
            <div className="qrvqer">
              <div className="OurProject">
                <img
                  className="line-Health&Family"
                  src="Line (1).svg"
                  alt="reload"
                />
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
        </div>
      </div>
    </>
  );
}
export default HealthAndfamily;