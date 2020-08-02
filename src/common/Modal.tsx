import React from 'react';

const Modal = ({ show, close, children }: any) => {
    return (
        <div>
            {show && <div onClick={close} className="back-drop"></div>}
            <div className="modal-wrapper"
                style={{
                    transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}>
                    <div className="modal-body">
                        {children}
                    </div>

            </div>
        </div>
    )
}

export default Modal;