import { useEffect, useState } from 'react';
import './style.css'

function Notify({ success, text, open, handleClose }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (open) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
                handleClose();
            }, 1500);
        }

    }, [open, handleClose])


    return (
        <>
            {show &&
                <div className={`${success ? 'success' : 'fail'} container-notify`}>
                    <strong>{text}</strong>
                </div>
            }
        </>
    )
}

export default Notify;