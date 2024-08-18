import { Link } from "react-router-dom";
import "./ourProjects.css";

const PageCards = () => {
  return (
    <>
      <div id="ourProjects1">
        <div className="pageCards">
          <div class="box">
            <div>
              <h1>
                We Believe that we can Eradicate <span>Poverty</span> with you
              </h1>
            </div>

            <div className="card-align">
              <Link to="/Education" className="linked">
                <div className="ourproject-card">
                  <img src="Education.svg" alt="Reload" />
                  <h2 className="ourproject-heading">Education</h2>
                  <p className="ourproject-paragraph">
                    Our goal is to make sure everyone has a chance to learn, no
                    matter where they come from.
                  </p>
                </div>
              </Link>
              <div className="line-1-div">
                {" "}
                <img src="Line.svg" alt="Reload" className="Line-1"></img>
              </div>
              <Link to="/Environment" className="linked">
                <div className="ourproject-card">
                  <img src="Environment.svg" alt="Reload" />
                  <h2 className="ourproject-heading">Environment</h2>
                  <p className="ourproject-paragraph">
                    We are dedicated on conserving the environment and forests.
                  </p>
                </div>
              </Link>
              <div className="line-2-div">
                {" "}
                <img src="Line.svg" alt="Reload" className="Line-2"></img>
              </div>
              <Link to="/Health&Familypage" className="linked">
                <div className="ourproject-card">
                  <img src="H-and-F-welfare.svg" alt="Reload" />
                  <h2 className="ourprojectHeadingForHAndF">
                    Health and Family Welfare
                  </h2>
                  <p>
                    Ensuring essential healthcare for all, especially in rural
                    and underserved areas.
                  </p>
                </div>
              </Link>
              <div className="line-3-div">
                {" "}
                <img src="Line.svg" alt="Reload" className="Line-3"></img>
              </div>
              <Link to="/TribalCommunities" className="linked">
                <div className="ourproject-card">
                  <img src="Tribal Affairs.svg" alt="Reload" />
                  <h2 className="ourproject-heading">Tribal Affairs</h2>
                  <p className="ourproject-paragraph">
                    Supporting tribal development and preserving cultural
                    heritage.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCards;
