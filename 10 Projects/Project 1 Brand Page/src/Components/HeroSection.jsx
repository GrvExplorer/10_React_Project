function HeroSection() {
  return <>
    <section className='heroSection'>
      <div className='first'>
        <p className='title'>your feet deserve the best</p>
        <p className='discription'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='heroButtons'>
          <button>Shop Now</button>
          <button className='differentBtn'>Category</button>
        </div>
        <div className='brand' >
          <p className='lastSen'>Also Available On</p>
          <div className='heroImages'>
            <img src='./flipkart.png' ></img>
            <img src='./amazon.png ' ></img>
          </div>
        </div>
      </div>
      <div className='shoe'>
        <img src='./shoe_image.png' ></img>

      </div>
    </section>
  </>
}

export default HeroSection;