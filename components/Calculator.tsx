import React from "react";

export default function Calculator() {

  const dice=[1,2,3,4]

  const [state, setState] = React.useState({
    "hit1": 0,
    "hit2": 0,
    "hit3": 0,
    "hit4": 0,
    "result": 0
  });
  

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let hits = 0;
    dice.forEach((e) => {
      hits += e/6*state["hit"+e];  
    })

    setState({
      ...state,
      "result": hits
    });
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          {dice.map ((e) => (
          <div>
            <label>
                {"hit"+e}
                <input
                  type="number"
                  name={"hit"+e}
                  value={state["hit"+e]}
                  onChange={handleChange}
                />
            </label>
          </div>
          ))}
          <input type="submit" value="Submit" />
        </form>
        {!!state.result && <div>Number of Hits: {state.result}</div>}
    </>
  );
}
