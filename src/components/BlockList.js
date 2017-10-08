import React from 'react'
import {connect} from 'react-redux'
import Block from './Block'

let BlockList = ({blocks}) => {
    return (

        <div className="sb-blocklist col col-8">
            {blocks.length === 0 ? <p>Add content by using the editor on the right to begin!</p> : null}
            <ul>
                {blocks.map(block =>
                    <Block
                        key={block.id}
                        {...block}
                    />
                )}
            </ul>
            <div className="sb-json-output">
                <h3>JSON Output</h3>
                <pre>{JSON.stringify(blocks)}</pre>
            </div>
            <p>&copy; Steve Brown 2017</p>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    }
}


BlockList = connect(
    mapStateToProps
)(BlockList)

export default BlockList
