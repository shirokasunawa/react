export const addOne = () => ({
    type: 'ADD_ONE'
})
export const addX = x => ({
    type: 'ADD_X',
    payload: x
})

export const allStudents = students => ({
    type: 'GET_STUDENTS',
    payload: students
})