const HeroSection = () => {
  return (
    <div className="hero-section">

      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="hero-btns">
          <button className="shop-now-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div>
        <p className="available-on-text">Also Available On</p>
        <div className="hero-icons">
          <img src="./images/flipkart.png" alt="flipkart-logo-img"/>
          <img src="./images/amazon.png" alt="amazon-logo-img"/>
        </div>
        </div>
      </div>

      <div className="hero-img">
          <img src="./images/shoe_image.png" />
      </div>
    </div>
  );
}

export default HeroSection;