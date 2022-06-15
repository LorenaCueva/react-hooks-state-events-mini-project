import React from "react";

function CategoryFilter({categories, onFilter, filter}) {

  const categoryButtons = categories.map(category =>
      <button className={category === filter ? "selected" : ""} key={category} onClick={() => onFilter(category)}>{category}</button>);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
