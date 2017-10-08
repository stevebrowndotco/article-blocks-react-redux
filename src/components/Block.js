import React from 'react'
import AddEditBlock from '../containers/AddBlock'
import {connect} from 'react-redux'
import {toggleEdit} from '../actions'
import {TextBlock} from './TextBlock'
import ProductBlock from './ProductBlock'

let Block = ({dispatch, title, body, blockType, id, editable, selectedProducts}) => {

    const handleClick = () => {
        dispatch(toggleEdit(id))
    }

    return (

        <li>
            {!editable && blockType === 'text' ? <TextBlock title={title} body={body} onClick={handleClick}/> : null }
            {!editable && blockType === 'product' ? <ProductBlock selectedProducts={selectedProducts} onClick={handleClick} /> : null }
            {editable ? <AddEditBlock block={{title: title, body: body, id: id, selectedProducts: selectedProducts}} blockType={blockType} action="Edit"/> : null }
        </li>

    )
}

Block = connect()(Block)

export default Block
