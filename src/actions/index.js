let id = 0

export const addEditBlock = (block) => {

    return {
        type: block && block.id >=0 ? 'EDIT_BLOCK' : 'ADD_BLOCK',
        id: block && block.id >=0 ? block.id : id++,
        title: block.title,
        body: block.body,
        blockType: block.type,
        selectedProducts: block.selectedProducts
    }

}

export const deleteBlock = (id) => {
    return {
        type: 'DELETE_BLOCK',
        id: id
    }
}

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        product
    }

}

export const toggleEdit = (id) => {

    return {
        type: 'TOGGLE_EDIT',
        id: id
    }
}
