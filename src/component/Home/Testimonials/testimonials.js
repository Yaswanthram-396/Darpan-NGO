import "./testimonials.css";

const TestimonialsArray = [
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe",
  },
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe2",
  },
  {
    name: "Fidelis Phoebe",
    role: "MD & CEO",
    about: "Lorem ipsum dolor sit amet consectetur Eu aliquet ultrices nunc.",
    class: "Fidelis-Phoebe",
  },
];

function Testimonials() {
  return (
    <>
      <div className="testimonials-our-core-team">
        <div className="heading">
          <h1>
            Our<span> Core </span>Team
          </h1>
        </div>
        <div className="Ellipses">
          <img className="Ellipse-3" src="Ellipse-Yellow.png" alt="reload" />
          <img className="Ellipse-4" src="Ellipse-Green.png" alt="reload" />
        </div>
        <div class="EllipsesAndButton">
          <div className="cardsAsTestimonials">
            {TestimonialsArray.map((eachPerson) => {
              return (
                <>
                  <div className={eachPerson.class}>
                    <img
                      src="Rectangle 411.png"
                      alt="Reload, <%= eachPerson.name %>!"
                    />
                    <h2>{eachPerson.name}</h2> <p>{eachPerson.role}</p>
                    <p>{eachPerson.about}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <button>View All Team</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
