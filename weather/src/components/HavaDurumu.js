const HavaDurumu = (props) => {
  const { weather } = props;

  if(!weather){
      return <p>Loading...</p>
  }

  return (
    <div className="container">
      <h2 className="title">Hava Durumu</h2>
      <h3 className="cityName">{weather.name}</h3>
      <p className="temp">{weather.main.temp} °C</p>
      <h4 className="weather">{weather.weather.map((data) => data.description).join(", ")}</h4>
      <p className="date">{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};
export default HavaDurumu;
