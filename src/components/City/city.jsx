import { cities } from '../../cz-cities.js';

export const City = () => {
  return (
    <>
      {cities.map(city => (
        <div key={city.name} className="city">
          <div class="info">
          <h2>{city.name}</h2>
          <p>Počet obyvatel: {city.population}</p>
          <p>Rozloha: {city.area} km²</p>
          <p>Okres: {city.district}</p>
          </div>

          <div class="photo">
          <img src={city.photo}></img>
          </div>
        </div>
      ))}
    </>
  );
};