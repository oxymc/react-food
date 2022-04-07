import { BackBtn } from "../components/BackBtn";

const NotFound = () => {
  return (
    <>
      <div className="row center">
        <h1>404</h1> 
        <p className="flow-text">The page was not found</p>
      </div>
      <div className="row center">
        <BackBtn />
      </div>
    </>
  );
}

export {NotFound};