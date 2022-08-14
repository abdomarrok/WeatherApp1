import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, geoApiOptions } from "../../api";
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
            geoApiOptions,
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response.data);
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            lable: `${city.city}, ${city.contryCode}`,
                        };
                    }),
                };
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleOnChange = (s) => {
        setSearch(s);
        onSearchChange(s);
    };
    return (
        <AsyncPaginate
            placeholder='search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;
