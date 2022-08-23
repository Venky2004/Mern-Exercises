import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';

const Calculator = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, - 1));
    }
    const cal = () => {
        try {
            setResult(eval(result).toString());
        }
        catch (err) {
            setResult("Error");
        }
    }
    return (
        <center>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>

                <div className='keypad'>
                    <Button variant='contained' color='error' onClick={clear} id="clear">Clear</Button>
                    <Button variant='contained' onClick={backspace} id="backspace">C</Button>
                    <Button name="/" variant='contained' onClick={handleClick}>&divide;</Button>
                    <Button name="7" variant='contained' onClick={handleClick}>7</Button>
                    <Button name="8" variant='contained' onClick={handleClick}>8</Button>
                    <Button name="9" variant='contained' onClick={handleClick}>9</Button>
                    <Button name="*" variant='contained' onClick={handleClick}>&times;</Button>
                    <Button name="4" variant='contained' onClick={handleClick}>4</Button>
                    <Button name="5" variant='contained' onClick={handleClick}>5</Button>
                    <Button name="6" variant='contained' onClick={handleClick}>6</Button>
                    <Button name="-" variant='contained' onClick={handleClick}>&ndash;</Button>
                    <Button name="1" variant='contained' onClick={handleClick}>1</Button>
                    <Button name="2" variant='contained' onClick={handleClick}>2</Button>
                    <Button name="3" variant='contained' onClick={handleClick}>3</Button>
                    <Button name="+" variant='contained' onClick={handleClick}>+</Button>
                    <Button name="0" variant='contained' onClick={handleClick}>0</Button>
                    <Button name="." variant='contained' onClick={handleClick}>.</Button>
                    <Button variant='contained' color='success' onClick={cal} id="result">=</Button>
                </div>
            </div>
        </center>
    )
}

export default Calculator