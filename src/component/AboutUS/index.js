import "./index.css";

function AboutUs() {
  return (
    <div className="EducationPage">
      <div className="innerContentOfEducationPage">
        <div className="EducationOurProject">
          <img className="LineOfOurProject" src="Line (1).svg" alt="reload" />
          <h4 className="OurProjectHeadingH4">OUR VISION AND MISSION</h4>
        </div>

        <div className="container">
          <p className="paragraph-intro">
            In 2020, we underwent a significant transformation, registering as a
            society in Andhra Pradesh and later as a trust in 2023. This
            evolution has allowed us to broaden our impact and develop a
            comprehensive approach to community service. Our organization is
            registered under NGO Darpan, ensuring transparency and
            accountability in our operations.
          </p>
          <p className="paragraph-intro">
            Our core values are centered on community empowerment, sustainable
            development, and inclusive growth. We believe in the power of
            collective action and the importance of addressing the unique needs
            of marginalized and vulnerable populations. By fostering
            partnerships and mobilizing resources, we aim to create lasting
            change and build resilient communities.
          </p>

          {/* <div className="program-list">
            
          </div> */}

          <img src="handsTogether.jpg" alt="reload" className="aboutUsImg" />
          <div className="program-list">
            <div className="program-item">
              <div className="program-content">
                <p className="paragraph-intro">
                  At Jana Raksha Swachanda Seva Samstha, our dedicated team of
                  volunteers and key members are at the heart of our efforts.
                  Their unwavering commitment and diverse expertise drive our
                  programs and initiatives, making a tangible difference in the
                  lives of those we serve. We offer various volunteer
                  opportunities, including lifetime and annual memberships, to
                  engage individuals who share our vision for a better future.
                </p>

                <p className="paragraph-intro">
                  Join us on our journey to make a meaningful impact. Together,
                  we can create a world where every individual has the
                  opportunity to thrive and contribute to the well-being of
                  society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
