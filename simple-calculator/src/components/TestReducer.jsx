import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    CLEAR: "clear",
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: state.count + 1
            }
        case ACTIONS.DECREMENT:
            return {
                count: state.count - 1
            }
        case ACTIONS.CLEAR:
            return {
                count: 0
            }
        default:
            return state
    }

}
const TestReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div className="w-full flex items-center justify-center">
            <div className='px-4 flex items-center flex-col shadow rounded-md p-2 w-fit'>
                <h1 className='font-bold text-8xl text-transparent bg-gradient-to-r from-teal-500 via-teal-300 to-teal-700 bg-clip-text'>{state.count}</h1>

                <div className="flex justify-around items-center space-x-2">
                    <button className='border border-teal-500 border-1 rounded shadow-md font-bold text-black p-2 hover:bg-teal-500 hover:text-white transition-all duration-300' onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>Increment</button>
                    <button className='border border-teal-500 border-1 rounded shadow-md font-bold text-black p-2 hover:bg-teal-500 hover:text-white transition-all duration-300' onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>Decrement</button>
                    <button className='border border-teal-500 border-1 rounded shadow-md font-bold text-black p-2 hover:bg-teal-500 hover:text-white transition-all duration-300' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default TestReducer