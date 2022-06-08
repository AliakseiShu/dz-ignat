import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangeType = {
    value1: number
    value2: number[]
    onChangeSuperDoubleRange: (event: Event, value: number | number[]) => void
    }

export default function SuperDoubleRange(props: SuperDoubleRangeType) {

    return (
        <Box sx={{width: 400}}>
            <span>{props.value2[0]}</span>
            <Slider value={props.value2} onChange={props.onChangeSuperDoubleRange}/>
            <span>{props.value2[1]}</span>
        </Box>


    );
}
