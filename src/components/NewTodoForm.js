import {useState} from "react";

export const NewTodoForm = ({onClickCreate}) => {

    const[inputValue,setInputValue] = useState("");

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Enter a New TODO!!"
            />

            <button onClick={() => {
                onClickCreate(inputValue)
                setInputValue("")
            }}>Create</button>

        </div>
    )
}