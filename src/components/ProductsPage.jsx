import React from 'react';
import Navigator from './Navigator';
import SectionCreator from './SectionCreator';
import './productsPage.css';

const ProductsPage = (props) => {
    return(
        <>
            <Navigator handleNav={props.handleNav} />
            <div className="products-container">
                <SectionCreator />
            </div>
        </>
    )
}

export default ProductsPage;