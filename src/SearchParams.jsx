import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];
const SearchParams = () => {
  //const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(ev) => {
              setLocation(ev.target.value);
            }}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(ev) => {
              setAnimal(ev.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={BREEDS.length === 0}
            onChange={(ev) => setBreed(ev.target.value)}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
