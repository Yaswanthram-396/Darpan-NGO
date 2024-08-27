import { useEffect } from "react";
import { ReDirect } from "../Health&familypage";
import { InnerBanner } from "../Health&familypage";
import ImpactOfHandF from "../Health&familypage/impactOnH&F/impactOnH&F";
import donateImage from "../images/Donate.svg";
import React, { Component } from "react";
import "./index.css";
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
    heading: "Health and Family Welfare",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "numvhg.svg",
    buttonText: "Learn more",
    link: "/Health&Familypage",
  },
  {
    heading: "Tribal Effairs",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    background: "JHHDCTVUY.svg",
    buttonText: "Learn more",
    link: "/TribalCommunities",
  },
];

function Environment() {
  const programs = [
    {
      title: "Planting Trees",
      details: [
        "We organize big tree-planting events in cities and villages",
        " Our team teaches people how to care for young trees",
        "We focus on planting local trees that help wildlife",
      ],
    },
    {
      title: "Teaching About Nature",
      details: [
        "We visit schools to talk about why forests are important",
        "Our team makes fun posters and videos about saving the environment",
        "We show people easy ways to live that are good for nature",
      ],
    },
    {
      title: "Cleaning Up",
      details: [
        "We lead community clean-up days in parks and forests",
        "Our volunteers pick up trash from beaches and rivers",
        "We teach people how to reduce waste in their daily lives",
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
              <h1>Protecting Our Environment: </h1>
              <h1>Our Mission for a Greener Tomorrow </h1>
            </div>
          </div>
          <div className="container">
            <p>
              Our goal is to create a healthier, more sustainable planet for
              future generations. We aim to achieve this by:
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
              src="unsplash_3k3l2brxmwQ.svg"
              alt="reload"
              className="environmentImgDup"
            />
            <div className="programGoalList">
              <div className="program-item">
                <div className="program-content">
                  <li className="EnvironmentListsOfGoals">
                    {" "}
                    <p>
                      Our goal is to make the world a better place for everyone.
                      We believe that small actions can make a big difference.
                      When we all work together, we can keep our forests healthy
                      and our air clean.
                    </p>
                  </li>
                  <li className="EnvironmentListsOfGoals">
                    {" "}
                    <p>
                      We also work with local communities to protect their
                      natural areas. This includes helping farmers use methods
                      that are good for the land and teaching kids about the
                      plants and animals around them. By connecting people with
                      nature, we hope to create a world where everyone cares
                      about the environment.
                    </p>
                  </li>

                  <li className="EnvironmentListsOfGoals">
                    <p>
                      Join us in our mission to create a greener, cleaner planet
                      for today and tomorrow!
                    </p>
                  </li>
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

class EnvironmentPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <Environment />;
  }
}
export default EnvironmentPage;
