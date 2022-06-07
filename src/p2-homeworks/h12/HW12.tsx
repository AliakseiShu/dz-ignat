import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemes, InitStateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const {theme} = useSelector<AppStoreType, InitStateType>((state) => state.theme)
    const dispatch = useDispatch()

    const ChangeThemes = (setting: string) => {
        dispatch(changeThemes(setting))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <div>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={ChangeThemes}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
