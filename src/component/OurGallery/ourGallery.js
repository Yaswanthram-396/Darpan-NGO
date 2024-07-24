import "./ourGallery.css";
const Array = [
  {
    id: 1,
    img: "unicefkate_holt.png",
  },
  {
    id: 2,
    img: "unicefkate_holt.png",
  },
  {
    id: 3,
    img: "unicefkate_holt.png",
  },
  {
    id: 4,
    img: "unicefkate_holt.png",
  },
  {
    id: 5,
    img: "unicefkate_holt.png",
  },
  {
    id: 6,
    img: "unicefkate_holt.png",
  },
  {
    id: 7,
    img: "unicefkate_holt.png",
  },
  {
    id: 8,
    img: "unicefkate_holt.png",
  },
];

function OurGllery() {
  return (
    <div className="OurGllery">
      <h1>Our Gallery</h1>
      <div className="OurGlleryPhotos">
        {Array.map((item) => {
          return (
            <>
              <div key={item.id}>
                <img src={item.img} alt="reload" />
              </div>
            </>
          );
        })}
      </div>
      <button className="viewMoreButton">View More</button>
    </div>
  );
}
export default OurGllery;
