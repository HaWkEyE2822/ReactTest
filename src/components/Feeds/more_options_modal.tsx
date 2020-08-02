
import * as React from 'react';

const { useState } = React;

import Modal from '../../common/Modal';
import { MoreIcon } from '../../atoms/icons/moreIcon';

const MoreOptionsModal = () => {
    const [ isShowing, setIsShowing ] = useState(false);

    const openModalHandler = () => {
        setIsShowing(true)
    }

    const closeModalHandler = () => {
        setIsShowing(false)
    }

    return (
        <div>
            <div onClick={openModalHandler}> 
                <MoreIcon width="2.4rem" height="2.4rem" />
            </div>
            <Modal
                className="modal"
                show={isShowing}
                close={closeModalHandler}>
               <div className="feeds_options_modal">
                   <div>Report...</div>
                   <div>Turn on post notifications</div>
                   <div>Copy link</div>
                   <div>share to...</div>
                   <div>Unfollow</div>
                   <div>Mute</div>
               </div>
                </Modal>
        </div>
    );
}

export default MoreOptionsModal;