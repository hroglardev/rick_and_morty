import style from './About.module.css';

const About = () => {
  return (
    <div>
      <div className={style.card}>
        <h1>Lucas Cubile</h1>
        <h2>Front-end developer</h2>
        <a
          href='https://www.linkedin.com/in/lucas-martin-cubile-47081b230/'
          target='_blank'
        >
          Hover then click me
        </a>
      </div>
    </div>
  );
};

export default About;
