const blocks = (state = [], action) => {

    switch (action.type) {

        case 'ADD_BLOCK':

            return [
                ...state,
                {
                    id: action.id,
                    blockType: action.blockType,
                    title: action.title,
                    body: action.body,
                    selectedProducts: action.selectedProducts,
                    editable: false
                }
            ]

        case 'EDIT_BLOCK':
            return state.map(function (block) {
                if (block.id === action.id) {
                    block = action;
                }
                return block;
            });

        case 'DELETE_BLOCK' :
            return state.filter(block => block.id !== action.id);

        case 'TOGGLE_EDIT':
            return state.map(function (block) {
                if (block.id === action.id) {
                    block.editable = !block.editable
                }
                return block;
            });
        default:
            return state
    }
}

export default blocks
