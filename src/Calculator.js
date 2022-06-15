import { CalcBtn } from './components/Calc-buttons.js'
import React, { useState, useEffect } from 'react'


export const Calculator = ()=>{
    let [displayValue, setDisplayValue] = useState('')

    let evaluateExpression = () => {
        let expression = displayValue
        // eslint-disable-next-line no-eval
        let result = eval(expression)


        setDisplayValue('' + result)
    }
    let clearInput = () => { setDisplayValue('') }
    let addOperatorToExpression = (operator) => {
        let doesOperatorExist = operators.map(({ content }) => {
            if (displayValue.slice(-1) === content) {
                return true
            } else { return false }
        })
        if (!doesOperatorExist.includes(true)) {
            setDisplayValue('' + displayValue + operator)
        }
    }
    let addNumberToInput = (e) => {
        setDisplayValue('' + displayValue + e.target.textContent)
    }

    useEffect(() => {
        if (displayValue.includes('NaN') | displayValue.includes('undefined') | displayValue.includes('Infinity')) {
            console.log("Invalid input")
            setDisplayValue('')
        }
    }, [displayValue])

    let numericBtns = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    let operators = [
        { 'content': '+', 'onClick': () => addOperatorToExpression('+'), 'className': '' },
        { 'content': '-', 'onClick': () => addOperatorToExpression('-'), 'className': '' },
        { 'content': '*', 'onClick': () => addOperatorToExpression('*'), 'className': '' },
        { 'content': '/', 'onClick': () => addOperatorToExpression('/'), 'className': '' },
        { 'content': 'Clear', 'onClick': clearInput, 'className': '' },
        { 'content': '=', 'onClick': () => evaluateExpression(), 'className': '' }]


        return (
            <main className="major-wrapper  ">
                <article className='calc-body ' >
                    <input className='calc-body__calc-display '
                        type="text"
                        placeholder='Enter Number'
                        value={displayValue}
                        onChange={(e) => (setDisplayValue(e.target.value))}
                    ></input>
                    <div className='numeric-btns'>
                        {
                            numericBtns.map((btn) => (
                                <CalcBtn content={btn}
                                    className={'numeric-btns__btns'}
                                    onClick={addNumberToInput}
                                />
                            ))
                        }
                    </div>
                    <div className='non-numeric-btns'>
                        {
                            operators.map((operator) => (
                                <CalcBtn content={operator.content}
                                    className={'non-numeric-btns__btn' + operator.className}
                                    onClick={operator.onClick}
                                />
                            ))
                        }
                    </div>
                </article> 
            </main>
        )
}