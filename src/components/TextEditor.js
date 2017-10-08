import React from 'react'
import {connect} from 'react-redux'
import {addEditBlock, deleteBlock} from '../actions'


let TextEditor = ({block, action, dispatch}) => {
    let title, body;
    const onClickDelete = function() {
        dispatch(deleteBlock(block.id))
    }
    return (
        <form onSubmit={e => {

            e.preventDefault()

            let updatedBlock = {
                type: 'text',
                title: title.value,
                body: body.value
            }

            if (action === 'Edit') {
                updatedBlock.id = block.id
            }

            dispatch(addEditBlock(updatedBlock))

        }}>

            <div>
                <p>
                    <input
                        type="text"
                        id="title"
                        defaultValue={block && block.title ? block.title : ''}
                        ref={input => title = input}/>
                </p>
                <p>
                    <textarea
                    type="text"
                    id="body"
                    defaultValue={block && block.body ? block.body : ''}
                    ref={input => body = input}/>
                </p>
                <p>
                    <button  type="submit">
                        {action === 'Create' ? action : 'Update'}
                    </button>
                </p>
                {action === 'Edit' ? <button onClick={onClickDelete}>Delete</button> : null}

            </div>

        </form>
    )
}

TextEditor = connect()(TextEditor)

export default TextEditor
