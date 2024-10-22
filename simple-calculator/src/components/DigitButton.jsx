import { ACTIONS } from "./Calculator"

const DigitButton = ({ digit, dispatch }) => {
    return (
        <button className="btn" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
    )
}

export default DigitButton