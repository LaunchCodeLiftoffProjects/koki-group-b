// const axios = require('axios');

  import React from "react";
  import ProductBox from "./components/ProductBox";

  
  export default class API extends React.Component {
    state = {
      loading: true,
      products: null,
    };
  
    componentDidMount() {
        const fetchProducts = async () => {
          const response = await fetch("http://localhost:3005/products");
          const product = await response.json();
          console.log(product)
  

          this.setState({
            products: product,
            loading: false
          });
        };
        fetchProducts();
        
      }


    render() {
      if (this.state.loading) {
        return <div>loading products...</div>;
      }
  
      if (!this.state.products) {
        return <div>No products</div>;
      }
      
  
      return (
        <div className="grid" id="grid">

           {this.state.products.map((product,i) => (
                
                <ProductBox data={this.state.products[i]} key={this.state.id} />
            ))}
        </div>
      );
    }
  }


// TESTING

// const data = {
//     products: [
//       {
//         id: '1',
//         name: 'MacBook',
//         price: 1400,
//         image: 'https://picsum.photos/id/180/2400/1600',
//       },
//       {
//         id: '2',
//         name: 'Old Car',
//         price: 2400,
//         image: 'https://picsum.photos/id/111/4400/2656',
//       },
//       {
//         id: '3',
//         name: 'W Shoes',
//         price: 1000,
//         image: 'https://picsum.photos/id/21/3008/2008',
//       },
//     ],
//   };

//   var obj;

//   fetch('http://localhost:3005/products')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() => console.log(obj))
  
// // const info = async () => {
// //     await fetch('http://localhost:3005/products')
// //     .then(res => res.json())
// //     .then(data => obj = data)
// //     .then(() => console.log(obj))

// //         return obj

// // } 

// const products = 'http://localhost:3005/products';

// const getProducts = async () => {
//     const result = await axios(products)
//     return result
// }

// var promise = Promise.resolve(getProducts())
// let test;
// promise.then(function(val) {
//     console.log("val:")
//     console.log(val.data)
//     test = val.data
// })





// //   console.log("outside fetch:")
// //   console.log(obj)
// //   console.log("info:")
// //   console.log(info)
// console.log("test:")
// console.log(test)
// //   console.log(data)
  

//   export default data;