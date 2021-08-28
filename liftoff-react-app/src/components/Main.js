import React, { useState, useEffect } from "react";
import ProductBox from "./ProductBox";
import { sortProducts } from "../helpers/MainHelper";

export default function Main(props) {
  const products = props.products;
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("abc");

  useEffect(() => {
    const sortArray = (type) => {
      setData(sortProducts(products, type));
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="main">
      <div className="window">Hello, World!</div>

      <div className="sort">
        <label for="sort">Sort by:</label>
        <select onChange={(e) => setSortType(e.target.value)} id="sort" name="sort-ops">
          <option value="abc">Alphabetical</option>
          <option value="PriceL2H">Price (Low to High)</option>
          <option value="PriceH2L">Price (High to Low)</option>
        </select>
      </div>

      <div className="grid" id="grid">
        {data.map((product, i) => (
          <ProductBox data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
