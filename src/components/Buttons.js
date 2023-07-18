import satData from "./satData";


const Buttons = (filterByType, setSat, displaySats) => {
  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })}
  return (
    <button onClick = { () => setSat(satData)} />
  )
  }

export default Buttons;