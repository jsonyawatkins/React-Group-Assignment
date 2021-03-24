import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

// this is required for flip
import ReactCardFlip from 'react-card-flip';

const ProductsInfo = () => {

  const cardInfo = [
    {
      id: "1",
      name: "Leslie",
      price: "$10,000",
      description: "A social butterfly who enjoys getting her beauty sleep. Leslie sleeps up to 20hrs daily. Not big on drinking, but loves to eat. Feed her daily or else.",
      image: "https://images.unsplash.com/photo-1567732310772-bb589efdbb03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
      show: false
    },
    {
      id: "2",
      name: "Tony Jr",
      price: "$10,000",
      description: "Son of famous advertising mascot. Enjoys living a luxurious life and posing for the camera. May weigh up to 670 pounds as an adult. If you don't have money, Tony is not the tiger for you.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG",
      show: false
    },
    {
      id: "3",
      name: "Sammy",
      price: "$1,500",
      description: "Catch Sammy while you can. No limbs, no problem- Sammy can move amazingly fast up to 3.6 miles per hour.",
      image: "https://images.unsplash.com/photo-1550172268-9a48af98ac5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      show: false
    },
    {
      id: "4",
      name: "Zoe",
      price: "$4,500",
      description: "Keep your eye on Zoe, she loves to stay on the move searching for food and water. Zoe loves to make a variety of sounds, she's known to bark. Yes, bark, Zoe can bark!",
      image: "https://images.unsplash.com/photo-1509870796364-6959d105b09c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      show: false
    },
    {
      id: "5",
      name: "Oscar",
      price: "$8,000",
      description: "Known amongst his friends as Salt Bae, Oscar thrives in salt water. Hailing from a family of scholars, he is considered one of the most intelligent of all invertebrates.",
      image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      show: false
    },
    {
      id: "6",
      name: "Jerry the Jellyfish",
      price: "$1,400",
      description: "A true low-maintenance OG, Jerry is amongst the oldest multicellular animals on the planet. He’s a heartless guy, he doesn’t have lungs or a brain either! Don’t worry about his long tentacles, they never get tangled. ",
      image: "https://images.unsplash.com/photo-1501561942-ec1065e470aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      show: false
    },
    {
      id: "7",
      name: "Paige the Panda",
      price: "$7,500",
      description: "One thing about Paige, homegirl loves to eat! An unlimited supply of bamboo is essential to keeping Paige happy. When she’s not eating, Paige can be found climbing and exploring.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      show: false
    },
    {
      id: "8",
      name: "Stingy the Ray",
      price: "$3,000",
      description: "If flexibility is your thing, Stingy is perfect for you. Stingy has no bones in his body, his skeleton is made up of flexible cartilage. A true introvert, Stingy enjoys living alone. ",
      image: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RpbmclMjByYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      show: false
    },
    {
      id: "9",
      name: "Phineas the Parrot",
      price: "$1,200",
      description: "Phineas the Parrot - Known for his bright colored feathers, Phineas likes to be seen when on the scene! Phineas is the life of the party and enjoys imitating human voices.",
      image: "https://thumbs-prod.si-cdn.com/g-KDLxcm1UG30jZJuqmbTmIGhgQ=/fit-in/1600x0/https://public-media.si-cdn.com/filer/81/19/81199c94-e8aa-4438-9db5-0d76b77ec2ee/istock_000014986932_medium.jpg",
      show: false
    },
  ];

  // isFlipped array to store flip status for each card,every card is display-false
  const [isFlipped, setFlip] = useState([false, false, false, false, false, false, false, false, false]);

  const handleClickFlip = (i) => {
    let newArr = [...isFlipped];
    newArr[i] = true;
    setFlip(newArr);
  }

  const handleClickUnFlip = (i) => {
    setFlip(false);
    let newArr = [...isFlipped];
    newArr[i] = false;
    setFlip(newArr);
  }


  const renderCard = (card, index) => {
    return (
      // isFlipped is a parameter which will decide which div to be display 
      <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">

        {/* div without flip */}
        <div className="cards front-cards">
          <Card style={{ width: '24rem' }}   >
            <Card.Img variant="top" src={card.image} />
          </Card>
          <button className="descButton" onClick={() => handleClickFlip(index)}>Details</button>
        </div>

        {/* div with unflip */}

        <div className="cards back-cards">
          <Card style={{ width: '24rem' }}   >
            <Card.Body >
              <Card.Title style={{ display: 'block' }}  >{card.name} - {card.price}</Card.Title>
              <Card.Text>
                {card.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <button className="descButton" onClick={() => handleClickUnFlip(index)}>Show {card.name}</button>
        </div>
      </ReactCardFlip>
    );
  };
  return <div><div className="ProductHeader">Available Animals</div><div className="grid">{cardInfo.map(renderCard)}</div></div>;
};

export default ProductsInfo;