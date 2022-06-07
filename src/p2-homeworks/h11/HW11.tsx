import React, {useState} from 'react'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import SuperRange from "./common/c7-SuperRange/SuperRange";


function HW11() {
    const [value1, setValue1] = useState<number>(20)
    const [value2, setValue2] = useState<number[]>([20, 50]);

    const onChangeSuperRange = (value1: number, value2: number | number[]) => {
        setValue1(value1)
        console.log(value2)
        //let newValues = value2
        //const newValue = [value1, props.value2[1]]
       // newValues[0] = (value2 as number)
        setValue2(value2 as number[])
    }
    const onChangeSuperDoubleRange = (event: Event, value: number | number[]) => {
        console.log('VALUE2', value)
        setValue1((value as number[])[0])
        setValue2(value as number[]);
    };

    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div>
                <SuperRange
                    value2={value2}
                    value1={value1}
                    onChangeSuperRange={onChangeSuperRange}/>
            </div>

            <div>
                <SuperDoubleRange
                    value1={value1}
                    value2={value2}
                    onChangeSuperDoubleRange={onChangeSuperDoubleRange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
