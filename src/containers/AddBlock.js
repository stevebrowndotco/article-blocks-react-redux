import React from 'react'
import {connect} from 'react-redux'
import TextEditor from '../components/TextEditor'
import ProductEditor from '../components/ProductEditor'

let AddEditBlock = ({blockType, action, block }) => {

    return (

        <div className="sb-block">
            <h3>{action} {blockType} block</h3>

            {blockType === 'text' ? <TextEditor action={action} block={block}  /> : <ProductEditor action={action} block={block}/>}

        </div>
    )
}

const mapStateToProps = (products) => {
    return {
        products: products
    }
}

AddEditBlock = connect(mapStateToProps)(AddEditBlock)

export default AddEditBlock
