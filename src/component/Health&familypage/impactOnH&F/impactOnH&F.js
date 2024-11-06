import "./impactOnH&F.css";

function ImpactOfHandF({
  heading,
  heading1,
  paragraph,
  paragraph1,
  image,
  image1,
}) {
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
        <img className="impactLeftTop" src={image1} alt="Reload" />
        <ul>
          <li className="headingLeftTop">
            <h2>{heading1}</h2>
          </li>
          <li className="paraLeftTop">
            <p>{paragraph1}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ImpactOfHandF;
