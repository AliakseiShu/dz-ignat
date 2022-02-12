import React from 'react'
import { AffairType } from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id);
    }

    return (
        <div>
            <button onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
