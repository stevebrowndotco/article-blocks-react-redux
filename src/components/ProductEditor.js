import React from 'react'
import {connect} from 'react-redux'
import {addEditBlock, deleteBlock} from '../actions'

let ProductEditor = ({products, action, block, dispatch}) => {

    let selectedProducts = block && block.selectedProducts || [];

    const onClickDelete = function() {
        dispatch(deleteBlock(block.id))
    }

    const imageStyle = (image) => {
        return {
            backgroundImage: 'url(' + image + ')'
        }
    }

    const handleChange = (e) => {
        if(e.target.checked) {
            selectedProducts.push(parseInt(e.target.id))
        } else {
            const index = selectedProducts.indexOf(parseInt(e.target.id));
            selectedProducts.splice(index, 1);
        }
    }

    const productList = products.map(item =>
        <li key={item.id}>
            <input id={item.id} type="checkbox" defaultChecked={block && block.selectedProducts.indexOf(item.id) > -1} onChange={handleChange}/>
            <div className="sb-block__image" style={imageStyle(item.image)}>
            </div>
            <h3>{item.retailer}</h3>
            <p>£ {item.price}</p>
        </li>
    )

    return (
        <form className="sb-product-selector" onSubmit={e => {

            e.preventDefault()

            let updatedBlock = {
                type: 'product',
                selectedProducts : selectedProducts
            }

            if (action === 'Edit') {
                updatedBlock.id = block.id
            }

            dispatch(addEditBlock(updatedBlock))

        }}>
            <div>
                <ul>
                    {productList}
                </ul>
                <button type="submit">
                    {action === 'Create' ? action : 'Update'}
                </button>
                {action === 'Edit' ? <button onClick={onClickDelete}>Delete</button> : null}
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

ProductEditor = connect(mapStateToProps)(ProductEditor)

export default ProductEditor
