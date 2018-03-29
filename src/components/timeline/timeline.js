import React from "react";
import {Post} from '../post';
import './timeline.css';


export const posts=[
  {
  owner: "Rachel",
  location:"Toronto",
  imageUrl:"http://chinchilla.co/wp-content/uploads/2013/09/baby-chinchilla.jpg",
  comments:[{
    name:"Name: Cody ",
    text:" Type: chinchilla ",
    color:" Color: Grey ",
    age:" Age: 8 months "
  }]
},
{
owner: "Adam",
location:"Toronto",
imageUrl:"https://fthmb.tqn.com/vuQ8XWkWXglHV4d3gSdjfaEeZzE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/95937341-56a2bce63df78cf7727960e5.jpg",
comments:[{
    name:"Name: Tweakers ",
    text:" Type: chinchilla ",
    color:" Color: Grey ",
    age:" Age: 4 years "
}]
},
{
owner: "Samantha",
location:"Toronto",
imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEiqFigVCyqO3ktZig5PhbTQMhX0HZrESXP4YW5srbhf_nJ5vAA",
comments:[{
  name:"Name: Hades ",
  text:" Type: Huskey Mix ",
  color:" Color: Grey and White ",
  age:" Age: 1 years "
}]
},
{
  owner: "Randi",
  location:"Oakville",
  imageUrl:"https://vetstreet.brightspotcdn.com/dims4/default/740c4fa/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F90%2F47d4c0a74a11e0a0d50050568d634f%2Ffile%2FGerman-Shepherd-4-645mk062411.jpg",
  comments:[{
    name:"Name: Spice ",
    text:" Type: German Shepard ",
    color:" Color: Grey and White ",
    age:" Age: 1 years "
}]
},
{
  owner: "Shane",
  location:"Brampton",
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RdO8GFIMrjSQZnrzl1K63skoWTl_dW_TeSlqExmjhFqSjMVP",
  comments:[{
    name:"Name: Giggles ",
    text:" Type: Guinea Pig ",
    color:" Color: Tan and White ",
    age:" Age: 5 years ",
}]
},
{
  owner: "Betty",
  location:"Toronto",
  imageUrl:"https://www.parakeethome.com/wp-content/uploads/2017/08/Fotolia_128062407_M-1.jpg",
  comments:[{
    name:"Name: Tony (right) ",
    text:" Type: Parakeet ",
    color:" Color: Dark Blue and White ",
    age:" Age: 1 years ",
}]
},
{
  owner: "Betty",
  location:"Toronto",
  imageUrl:"https://www.parakeethome.com/wp-content/uploads/2017/08/Fotolia_128062407_M-1.jpg",
  comments:[{
    name:"Name: Sophie (middle) ",
    text:" Type: Parakeet ",
    color:" Color: Light Blue and White ",
    age:" Age: 2 years ",
}]
},
{
  owner: "Betty",
  location:"Toronto",
  imageUrl:"https://www.parakeethome.com/wp-content/uploads/2017/08/Fotolia_128062407_M-1.jpg",
  comments:[{
    name:"Name: Aurelie (left) ",
    text:" Type: Parakeet ",
    color:" Color: Yellow ",
    age:" Age: 1.5 years ",
}]
},
{
  owner: "Vanessa",
  location:"Toronto",
  imageUrl:"http://rabbitbreeders.us/wp-content/uploads/IMG_20140531_190019_280.jpg",
  comments:[{
    name:"Name: Faye Faye ",
    text:" Type: Rabbit ",
    color:" Color: Black ",
    age:" Age: 8 years ",
}]
}
]


export const Timeline = () => (

  <div className="timeline">
<div className="banner">
<h1> Toronto Animal Adoption Center</h1>
  <div className="banner__image">
  </div>
  </div>
  <div className="timeline__post-container">
    {posts.map(x => (
      <div className="timeline__post">
          <Post
           owner={x.owner}
           location={x.location}
           imageUrl={x.imageUrl}
           comments={x.comments}
         />
       </div>
    ))}
  </div>
</div>
);
