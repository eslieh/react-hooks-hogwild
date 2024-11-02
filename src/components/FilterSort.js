import React from 'react';

const FilterSort = ({ setGreased, setSortOption }) => {
    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => setGreased(e.target.checked)} 
                />
                Show Greased
            </label>
            <select onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Select Sorting</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    );
};

export default FilterSort;
