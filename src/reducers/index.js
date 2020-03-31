import { combineReducers } from 'redux'
import add from './add'
import students from './students'

const appReducer = combineReducers({
    add,
    students
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer