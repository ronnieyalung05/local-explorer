import React, { useState } from "react";
import "../css/SideBar.css";

function SideBar() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("5");
  const [filters, setFilters] = useState({ // filters change for api specific stuff
    restaurants: false,
    cafes: false,
    shops: false,
    parks: false,
    museums: false,
    entertainment: false,
  });

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setSelectedDistance(e.target.value);
  };

  const handleFilterChange = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Search Location Bar */}
        <div className="search-section">
          <label htmlFor="search" className="section-label">
            Search City
          </label>
          <input
            type="text"
            id="search"
            className="search-input"
            placeholder="Enter a city..."
            value={searchLocation}
            onChange={handleLocationChange}
          />
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <label htmlFor="search" className="section-label">
            Search Places
          </label>
          <input
            type="text"
            id="search"
            className="search-input"
            placeholder="Search for places..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>

        {/* Distance Dropdown */}
        <div className="distance-section">
          <label htmlFor="distance" className="section-label">
            Distance
          </label>
          <select
            id="distance"
            className="distance-select"
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            <option value="5">Within 5 miles</option>
            <option value="10">Within 10 miles</option>
            <option value="25">Within 25 miles</option>
            <option value="50">Within 50 miles</option>
          </select>
        </div>

        {/* Filter Checkboxes */}
        <div className="filters-section">
          <h3 className="section-label">Filters</h3>
          <div className="filters-grid">
            {Object.entries(filters).map(([filterName, isChecked]) => (
              <div key={filterName} className="filter-item">
                <input
                  type="checkbox"
                  id={filterName}
                  className="filter-checkbox"
                  checked={isChecked}
                  onChange={() => handleFilterChange(filterName)}
                />
                <label htmlFor={filterName} className="filter-label">
                  {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <div className="apply-section">
          <button className="apply-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
