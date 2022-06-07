import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperRangeType = {
    value1: number
    value2: number | number[]
    onChangeSuperRange: (value1: number, value2: number | number[]) => void
}
export default function SuperRange(props:SuperRangeType) {

    const onValueChange = (event: Event, value: number | number[]) => {
        //@ts-ignore
        const value2 = [value, props.value2[1]]
        props.onChangeSuperRange(value as number, value2)
    }

    return (
        <Box sx={{width: 400}}>
            <span>{props.value1}</span>
            <Slider
                value={props.value1}
                defaultValue={20}
                onChange={onValueChange}

            />
        </Box>
    );
}