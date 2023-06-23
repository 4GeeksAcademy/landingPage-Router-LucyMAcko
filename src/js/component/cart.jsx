import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle} from "./actions.js";

const Cart = () => {

    const state = useSelector((state) =>state);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div>{state.pageTitle}</div>
            <input 
				type="text" 
				onChange={(e) => setNewTask(e.target.value)}                 
				value={newTask}
				onKeyDown={(e) =>{
				if (e.key === 'Enter'){
				    updateTasks({label:newTask, done:false});
				    setNewTask("");
				}
				}}
				placeholder="Give us a new title😎">								
			</input>
			<button onClick={()=> dispatch(changeTitle('New Title From Me'))}></button>
        </div>
    )
}

export default Cart


