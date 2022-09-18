import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        if (word === "danger") {
            word = "error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '30px' }}>
            {props.alert && <div className={`p-2 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"><div className='container'>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}</div>
            </div>}
        </div>
    )
}
export default Alert