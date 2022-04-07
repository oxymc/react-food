import { BackBtn } from '../components/BackBtn';

const About = () => {
  return (
    <>
      <div className="row center">
        <h1>About</h1>
        <p className="flow-text">
          The project was created in the process of learning to work with React Routes. The recipes are real, you can use them and share your impressions! 
        </p>
      </div>
      <BackBtn />
    </>
  );
}

export {About};