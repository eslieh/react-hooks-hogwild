import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data";

function App() {
    const [hogs, setHogs] = useState(hogsData);
    const [isGreasedOnly, setIsGreasedOnly] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [hiddenHogs, setHiddenHogs] = useState(new Set()); // Set to track hidden hogs by name

    const filteredHogs = hogs.filter(hog => {
        if (isGreasedOnly && !hog.greased) {
            return false;
        }
        return !hiddenHogs.has(hog.name); // Exclude hidden hogs
    });

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'weight') {
            return a.weight - b.weight;
        }
        return 0;
    });

    // Function to add a new hog
    const addHog = (newHog) => {
        setHogs((prevHogs) => [...prevHogs, newHog]);
    };

    // Function to hide a hog
    const hideHog = (hogName) => {
        setHiddenHogs((prevHiddenHogs) => new Set(prevHiddenHogs).add(hogName));
    };

    return (
        <div className="App">
            <Nav />
            <AddHogForm addHog={addHog} />
            <FilterSort 
                setGreased={setIsGreasedOnly}
                setSortOption={setSortOption}
            />
            <div className="ui grid container">
                {sortedHogs.map((hog) => (
                    <div className="ui eight wide column" key={hog.name}>
                        <HogTile hog={hog} hideHog={hideHog} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
