import React from "react";
import hero from "../images/heros.png";
export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="Heros" className="hero-photo" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi enim
        voluptatem assumenda delectus necessitatibus tempora, aliquam modi
        numquam ducimus voluptates iste a illo amet quos neque quae totam sed.
        Sed!
      </p>
    </section>
  );
}
