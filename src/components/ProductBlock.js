import React from 'react'
import {connect} from 'react-redux'

let ProductBlock = ({products, onClick, selectedProducts}) => {

    let imageStyle = (image) => {
        return {
            backgroundImage: 'url(' + image + ')'
        }
    }

    let productList = products.map(item => {

            if (selectedProducts.indexOf(item.id) > -1) {
                return (
                    <li key={item.id}>
                        <div className="sb-block__image" style={imageStyle(item.image)}>
                        </div>
                        <h3>{item.retailer}</h3>
                        <p>£ {item.price}</p>
                    </li>
                )
            }
        }
    );

    return (
        <div className="sb-block sb-block--products">

            <ul className="sb-block__product-list">
                {productList}
            </ul>
            <button onClick={onClick}>Edit</button>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

ProductBlock = connect(mapStateToProps)(ProductBlock)

export default ProductBlock
