import React from 'react'
import { ACTIONS } from './Calculator'

const OperationButton = ({ operation, dispatch }) => {
    return (
        <button className="btn" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
    )
}

export default OperationButton