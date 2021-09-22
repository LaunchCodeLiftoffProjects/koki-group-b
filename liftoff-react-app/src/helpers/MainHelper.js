export function sortProducts(products, type) {
  const types = {
    abc: "abc",
    PriceL2H: "PriceL2H",
    PriceH2L: "PriceH2L",
  };
  const sortProperty = types[type];

  var sorted = products;
  if (sortProperty === types.abc) {
    sorted = [...products].sort((a, b) =>
      a.Product_Name.localeCompare(b.Product_Name)
    );
  } else if (sortProperty === types.PriceL2H) {
    sorted = [...products].sort((a, b) => a.Price - b.Price);
  } else if (sortProperty === types.PriceH2L) {
    sorted = [...products].sort((a, b) => b.Price - a.Price);
  }
  return sorted;
}

export function searchProducts(products, searchText) {
  var searched = [];

  if (searchText === "") {
        return products;
  }
  products.forEach(p => {
    if (p.Product_Name.toUpperCase().includes(searchText.toUpperCase())){
        searched.push(p)
    }
  })
  return searched;
}

