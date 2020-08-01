import { sendIcon } from '../../atoms/icons/sendIcon';

interface IButtonProps {
    id: string | number,
    type: string,
    icon: any
}

const HEADER_BUTTONS: Array<IButtonProps> = [
    {
        id: 'sendIcon',
        type: "svg",
        icon: sendIcon
    }
]

export {
    HEADER_BUTTONS
}