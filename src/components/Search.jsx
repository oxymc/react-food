const Search = ({submitHandler}) => {

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
        <div className="input-field">
          <input 
            placeholder="search" 
            id="search" 
            type="text" 
            className="validate" />
          <button type="submit" className="btn" >Search</button>
        </div>
    </form>
  );
}

export {Search};