import Card from "./cards";

const cards =[ 
    {id:"1",
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
    heading:"Education",
    paragraph:"Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc."}
  
    ,{id:"2",
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
      className: 'card-1',
      heading:"Environment",
      paragraph:"Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc."},
  
      {id:"3",
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
        className: 'card-2',
        heading:"Health and Family Welfare",
        paragraph:"Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc."},
        {id:"4",
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
          className: 'card-1',
          heading:"Tribal Affairs",
          paragraph:"Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc."}]
  
    
  function PageCards() {
    return (
      <div className="pageCards">
        <div class="box">
        <div>
              <h1>We Believe that we can Eradicate <span>Poverty</span> with you</h1> 
              </div>
       
        <div className='card-align'>
        <Card array={cards}/>
        </div>
        </div>
      </div>
    );
  }
  
  export default PageCards;
  