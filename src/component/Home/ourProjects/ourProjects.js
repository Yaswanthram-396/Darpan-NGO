// import Card from "./ourProjectCards/cards";
import "./ourProjects.css";

// const cards = [
//   {
//     id: "1",
//     imgUrl: "Education.svg",
//     className: "card-1 padding-card",
//     heading: "Education",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
//   },

//   {
//     id: "2",
//     imgUrl: "Environment.svg",
//     className: "card-1 padding-card",
//     heading: "Environment",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
//   },

//   {
//     id: "3",
//     imgUrl: "H-and-F-welfare.svg",
//     className: "card-1",
//     heading: "Health and Family Welfare",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
//   },
//   {
//     id: "4",
//     imgUrl: "Tribal Affairs.svg",
//     className: "card-1 padding-card",
//     heading: "Tribal Affairs",
//     paragraph:
//       "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
//   },
// ];

// function PageCards() {
//   return (
// <div className="pageCards">
//   <div class="box">
//     <div>
//       <h1>
//         We Believe that we can Eradicate <span>Poverty</span> with you
//       </h1>
//     </div>

//     <div className="card-align">
//       <Card key="1" array={cards[0]} />
//       <div className="line-1-div">
//         {" "}
//         <img src="Line.svg" alt="Reload" className="Line-1"></img>
//       </div>
//       <Card key="2" array={cards[1]} />
//       <div className="line-2-div">
//         {" "}
//         <img src="Line.svg" alt="Reload" className="Line-2"></img>
//       </div>
//       <Card key="3" array={cards[2]} />
//       <div className="line-3-div">
//         {" "}
//         <img src="Line.svg" alt="Reload" className="Line-3"></img>
//       </div>
//       <Card key="4" array={cards[3]} />
//     </div>
//   </div>
// </div>
//   );
// }

// export default PageCards;

const PageCards = () => {
  return (
    <>
      <div>
        <div className="pageCards">
          <div class="box">
            <div>
              <h1>
                We Believe that we can Eradicate <span>Poverty</span> with you
              </h1>
            </div>

            <div className="card-align">
              <div className="ourproject-card">
                <img src="Education.svg" alt="Reload" />
                <h2 className="ourproject-heading">Education</h2>
                <p className="ourproject-paragraph">
                  Our goal is to make sure everyone has a chance to learn, no
                  matter where they come from.
                </p>
              </div>
              <div className="line-1-div">
                {" "}
                <img src="Line.svg" alt="Reload" className="Line-1"></img>
              </div>
              <div className="ourproject-card">
                <img src="Environment.svg" alt="Reload" />
                <h2 className="ourproject-heading">Environment</h2>
                <p className="ourproject-paragraph">
                  We are dedicated on conserving the environment and forests.
                </p>
              </div>
              <div className="line-2-div">
                {" "}
                <img src="Line.svg" alt="Reload" className="Line-2"></img>
              </div>
              <div className="ourproject-card">
                <img src="H-and-F-welfare.svg" alt="Reload" />
                <h2>Health and Family Welfare</h2>
                <p>
                  Ensuring essential healthcare for all, especially in rural and
                  underserved areas.
                </p>
              </div>
              <div className="line-3-div">
                {" "}
                <img src="Line.svg" alt="Reload" className="Line-3"></img>
              </div>
              <div className="ourproject-card">
                <img src="Tribal Affairs.svg" alt="Reload" />
                <h2 className="ourproject-heading">Tribal Affairs</h2>
                <p className="ourproject-paragraph">
                  Supporting tribal development and preserving cultural
                  heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCards;
