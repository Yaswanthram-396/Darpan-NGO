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
        <a href="https://www.instagram.com/janaraksha_official?igsh=azBsM2pwM2YzNGVp&utm_source=qr">
          <img src="insta.svg" className="fimgs" alt="insta" />
        </a>
        <a href="https://www.youtube.com/watch?v=VUmz7xVMqOc">
          <img src="youtube.svg" className="fimgs" alt="reload" />
        </a>
        <a href="https://www.threads.net/@janaraksha_official">
          <img src="threads.png" className="threads" alt="reload" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=919676463605&text&type=phone_number&app_absent=0">
          <img src="whatsapp.svg" className="fimgs" alt="reload" />
        </a>
      </div>
    </div>
  );
}
function Card3() {
  return (
    <div className="card3">
      <h2 className="h2">Contact Us</h2>
      <div className="contactInfo">
        <a href="https://www.google.com/maps/place/JANA+RAKSHA+SWACHANDA+SEVA+SAMSTHA/@16.8682339,82.1124237,18.94z/data=!4m6!3m5!1s0x3a378f0726176b57:0x994f7be69514b740!8m2!3d16.8684492!4d82.1125788!16s%2Fg%2F11vq6g7_zn?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D">
          <div className="image-text2">
            <img src="GPS.svg" className="fimgs" alt="reload" />
            <p className="p1">Velangi, Karapa Mandal, Andhra Pradesh, 533260</p>
          </div>
        </a>
        <a href="mailto:janaraksha.info@gmail.com">
          <div class="image-text2">
            <img src="message.svg" class="fimgs" alt="reload" />
            <p class="p1">janarakshango7@gmail.com</p>
          </div>
        </a>
        <div className="image-text2">
          <img src="call.svg" className="fimgs" alt="reload" />
          <p className="p1">+91 96764 63605</p>
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
