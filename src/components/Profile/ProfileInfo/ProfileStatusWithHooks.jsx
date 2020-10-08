import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [ editMode, setEditMode ] = useState(false);
    let [ status, setStatus ] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    useEffect(() => {
       setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {status || "No status"} </span>
            </div>
            }
            { editMode &&
            <div>
                <input onBlur={deactivateEditMode}
                       value={status}
                       onFocus={true}
                       onChange={onStatusChange}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;