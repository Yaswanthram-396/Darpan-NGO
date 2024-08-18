import "./impactOnH&F.css";

function ImpactOfHandF({ heading, paragraph, image }) {
  return (
    <>
      <div className="others">
        <img className="impactLeftTop" src={image} alt="Reload" />
        <ul>
          <li className="headingLeftTop">
            <h2>{heading}</h2>
          </li>
          <li className="paraLeftTop">
            <p>{paragraph}</p>
          </li>
        </ul>
      </div>
      <div className="others">
        <img className="impactLeftTop" src={image} alt="Reload" />
        <ul>
          <li className="headingLeftTop">
            <h2>{heading}</h2>
          </li>
          <li className="paraLeftTop">
            <p>{paragraph}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ImpactOfHandF;
