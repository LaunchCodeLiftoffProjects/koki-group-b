
  import React from "react";
  import Main from "./components/Main"


  export default class API extends React.Component {
    props = this.props;
    state = {
      loading: true,
      products: null,
      cartItems: null,
    };

    componentDidMount() {
          const fetchProducts = async () => {
          const response = await fetch("http://localhost:3005/products");
          const product = await response.json();


          this.setState({
            products: product,
            loading: false
          });
        };
        fetchProducts();

      }

    handleCallback = (childData) => {
        this.setState({cartItems: childData});
    }

    render() {
      if (this.state.loading) {
        return <div>loading products...</div>;
      }

      if (!this.state.products) {
        return <div>No products</div>;
      }

      return (
        <div className="api" id="api">
            <Main
            products={this.state.products}
            dataCallback = {this.handleCallback}
            appCallback = {this.props.appCallback}
            />
        </div>
      );
    }
  }

