function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>{process.env.Intro}</p>
    </div>
  );
}

export default About;
