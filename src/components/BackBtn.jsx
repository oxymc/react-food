import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)
  
  return (
    <div className="row center back">
      <button className="btn" onClick={goBack}>Go back</button>
  </div>
  );
}
  
export {BackBtn};