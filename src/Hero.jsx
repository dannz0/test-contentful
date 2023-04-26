import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed
            molestias totam quasi quos dolores laudantium voluptate unde
            pariatur vel delectus repellat consequuntur perspiciatis, iure
            aliquam porro beatae voluptas. Facilis.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
