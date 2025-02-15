import React from 'react';

const FilterBar = ({ onFilter }) => {
  const skills = ['all', 'plumber', 'electrician', 'laborer'];

  return (
    <div className="filter-bar">
      <label htmlFor="skill-filter">Filter by Skill:</label>
      <select
        id="skill-filter"
        onChange={(e) => onFilter(e.target.value)}
      >
        {skills.map((skill) => (
          <option key={skill} value={skill}>
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;