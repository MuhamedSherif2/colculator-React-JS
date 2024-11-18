import React, { useState} from "react";
import "../calc/App.css"

function Calc() {
    const[value, setValue] = useState('');

    return(
         <div className="content">
            <h1>Calculator</h1>
            <div className="calc">
                <form>
                    <div>
                        <input type="text" disabled value={value} className="input" placeholder=""/>
                    </div>

                    <div>
                        <input type="button" value="Ac" onClick={e => setValue("")}/>
                        <input type="button" value="De" onClick={e => setValue(value.slice(0, -1))}/>
                        <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
                    </div>

                    <div>
                        <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
                    </div>

                    <div>
                        <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
                    </div>

                    <div>
                        <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="=" onClick={e => setValue(eval(value))}/>
                    </div>
                </form>
            </div>
         </div>
    )

}


export default Calc;