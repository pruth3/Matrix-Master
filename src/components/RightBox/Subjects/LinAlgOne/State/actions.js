import {

    CREATE_MATRIX

} from './constants.js'

export const setCreateMatrix = (rows, cols) => {
  return {
    type: CREATE_MATRIX, 
    payload: [rows, cols]
  }
}
