import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestApi} from "./RequestAPI";

export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [data, setData] = useState('')

    const sendRequest = () => {
        RequestApi.createRequest(checked)
            .then(response => {
                console.log(response)
                setData(response.data.errorText)
            })
            .catch(error => {
                setData(error.response ? error.response.data.errorText : error.message)
            })
    }
    return (
        <div>
            <div>
            <SuperButton onClick={sendRequest}>
                BUTTON
            </SuperButton>
            </div>
            <SuperCheckbox
                onChangeChecked={setChecked}>
                Onclick my please
            </SuperCheckbox>
            <div>
                {data}
            </div>
        </div>
    )
}

