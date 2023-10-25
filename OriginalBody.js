import ResturantCard from "./ResturantCard";
import ResturantList from "./config";
import ResturantList from "./config";
import { useState, useEffect } from "react";

function filteredData(searchText, resturants) {
  if (searchText === undefined || searchText === "") {
    return resturants;
  }
  return resturants.filter((resturant) =>
    resturant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [resturants, setResturants] = useState(ResturantList);
  const [searchText, setSearchText] = useState();


  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search your food.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // const data = filteredData(searchText, allResturants);
            // setFilteredResturants(data);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter data
            const data = filteredData(searchText, resturants);
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant?.data} key={resturant?.data?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
