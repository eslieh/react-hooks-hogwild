import React from 'react';

const FilterSort = ({ greased, toggleGreased, handleSortChange }) => {
    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    checked={greased}
                    onChange={toggleGreased} 
                />
                Show Greased
            </label>
            <select onChange={(e) => handleSortChange(e.target.value)}>
                <option value="">Select Sorting</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    );
};

export default FilterSort;
