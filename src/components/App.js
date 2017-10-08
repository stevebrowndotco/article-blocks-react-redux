import React from 'react'
import {connect} from 'react-redux'
import BlockList from './BlockList'
import 'whatwg-fetch';
import {addProduct} from '../actions'
import EditorColumn from './EditorColumn'

let App = ({dispatch}) => {

    fetch('data/product-data.json', {
        method: 'GET'
    }).then(response => response.json()).then(products => {
        products.map((product) => {
            dispatch(addProduct(product))
        })

    });

    return (
        <div className="sb-container">

            <h1>Article Block Demo by Steve Brown</h1>
            <BlockList/>
            <EditorColumn />

        </div>
    )

}

App = connect()(App)

export default App
