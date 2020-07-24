import React from "react";

import "./styles/filter.scss";

function Filter(props) {
  function handleChange() {
    const arrayOfCheckboxes = [];
    const elements = document.getElementsByClassName("checkbox");
    Array.from(elements).forEach((elem) => {
      arrayOfCheckboxes.push({ id: elem.id, checked: elem.checked });
    });
    console.log(arrayOfCheckboxes);

    props.setShowSkills(arrayOfCheckboxes);
  }

  function resetFilters(e) {
    e.preventDefault();
    const arrayOfCheckboxes = document.getElementsByClassName("checkbox");
    Array.from(arrayOfCheckboxes).forEach((elem) => {
      elem.checked = true;
    });
    handleChange();
  }

  function resetSearch(e) {
    e.preventDefault();
    resetFilters(e);
    props.setSkills([]);
  }

  function showFilters(e) {
    e.preventDefault();
    const filterDiv = document.getElementById("filter-div");
    filterDiv.classList.toggle("filter-show");
  }

  return (
    <>
      <button onClick={showFilters} className="filter-btn-show">
        Filter results | Clear search
      </button>

      <div className="filter" id="filter-div">
        <h3 className="filter-title">Filter results</h3>
        <form className="filter-form">
          <div>
            <input
              type="checkbox"
              id="language"
              name="language"
              className="checkbox"
              defaultChecked
              onChange={handleChange}
            />
            <label htmlFor="language">Language</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="style"
              name="style"
              defaultChecked
              onChange={handleChange}
            />
            <label htmlFor="style">Style</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="runtime"
              name="runtime"
              defaultChecked
              onChange={handleChange}
            />
            <label htmlFor="runtime">Runtime</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="database"
              name="database"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="database">Database</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="library"
              name="library"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="library">Library</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="tools"
              name="tools"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="tools">Tools</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="framework"
              name="framework"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="framework">Framework</label>
          </div>
        </form>
        <button className="filter-btn" onClick={resetFilters}>
          Reset Filters
        </button>
        <button className="filter-btn" onClick={resetSearch}>
          Clear Search
        </button>
      </div>
    </>
  );
}
export default Filter;
