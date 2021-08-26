import React from 'react';
import ProductBox from './ProductBox';

export default function Main(props) {
    const {products} = props;
    return(
        <div className="main">

            <div className="window">Hello, World!</div>
        
                <div className="sort">
                    <label for="sort">Sort by:</label>
                    <select id="sort" name="sort-ops">
                        <option value="abc">Alphabetical</option>
                        <option value="priceL2H">Price (Low to High)</option>
                        <option value="priceH2L">Price (High to Low)</option>
                    </select>
                </div>

        </div>
    )
}