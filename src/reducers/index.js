import { combineReducers } from 'redux'
import blocks from './blocks'
import products from './products'

const articleBlockApp = combineReducers({
  blocks,
  products
})

export default articleBlockApp
