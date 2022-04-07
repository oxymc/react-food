import { BackBtn } from "../components/BackBtn";

const NoResults = () => {
  return (
    <>
      <div className="row center">
        <h1>No results</h1> 
        <p className="flow-text">Change your request, please, or...</p>
      </div>
      <div className="row center">
        <BackBtn />
      </div>
    </>
  );
}

export {NoResults};