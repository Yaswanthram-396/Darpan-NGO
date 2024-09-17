import "./footer.css";
function Card1() {
  return (
    <div className="card1">
      {/* <h1 className="h1">Darpan</h1> */}
      <img src="Frame 532 (1).svg" alt="reload" className="logoFooter" />
      <h2 className="h2">Get Connected</h2>
      <p className="p1">
        Join the conversation on social, and stay connected with our latest
        events and partners around the world.
      </p>

      <div className="image-text1">
        <img src="twitter.svg" className="fimgs" alt="reload" />
        <img src="facebook.svg" className="fimgs" alt="reload" />
        <img src="insta.svg" className="fimgs" alt="reload" />
        <img src="youtube.svg" className="fimgs" alt="reload" />
      </div>
    </div>
  );
}
function Card3() {
  return (
    <div className="card3">
      <h2 className="h2">Contact Us</h2>
      <div className="contactInfo">
        <div className="image-text2">
          <img src="GPS.svg" className="fimgs" alt="reload" />
          <p className="p1">Ojay Street, Kreg Ave, Lagos, Nigeria</p>
        </div>
        <div className="image-text2">
          <img src="message.svg" className="fimgs" alt="reload" />
          <p className="p1">janarakshango7@gmail.com</p>
        </div>
        <div className="image-text2">
          <img src="call.svg" className="fimgs" alt="reload" />

          <p className="p1">+91 6302406660</p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card2">
      <p className="p1">
        Jana Raksha Swachanda Seva Samstha is dedicated to creating a positive
        impact on society, and we invite individuals, corporations, and other
        stakeholders to join us in our journey towards a better, more
        sustainable future.
      </p>
    </div>
  );
}

export default function Footerpage() {
  return (
    <div className="footerpage" id="ContactUs">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}
