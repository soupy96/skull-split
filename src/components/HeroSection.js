import classes from './HeroSection.module.css';

function HeroSection() {
  return (
    // TODO: put in main bg img
    <div>
      <div className={classes.middleText}>
        <p>Lorem Ipsum</p>
        <h1>SKULL SPLIT</h1>
        <button className={classes.mainButt}>Play Now</button>
      </div>
    </div>
  );
}

export default HeroSection;
