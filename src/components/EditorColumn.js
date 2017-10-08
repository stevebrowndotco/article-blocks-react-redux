import React from 'react'
import AddEditBlock from '../containers/AddBlock'

let EditorColumn = () => {

    return (

        <div className="col col-4">
            <div className="m2">
                <h2>Add Content</h2>
                <p>Add either a text or product block below</p>
            </div>
            <AddEditBlock blockType="text" action="Create"/>
            <AddEditBlock blockType="product" action="Create"/>
        </div>

    )
}


export default EditorColumn


