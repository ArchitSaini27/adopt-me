import { useEffect, useState } from "react";
//import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  //const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-params">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          requestPets();
        }}
      >
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
            disabled={breeds.length === 0}
            onChange={(ev) => setBreed(ev.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />
      {/* {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        );
      })} */}
    </div>
  );
};
export default SearchParams;
