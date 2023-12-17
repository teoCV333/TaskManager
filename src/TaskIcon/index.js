import { ReactComponent as CheckIcon } from './checkIcon.svg';
import { ReactComponent as DeleteIcon } from '../util/svg/deleteIcon.svg';

const iconTypes = {
  check: (color) => <CheckIcon className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteIcon className="Icon-svg" fill={color} />,
}

function TaskIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={ onClick }
        >
       { iconTypes[type](color) }
        </span>
    ) 
}

export { TaskIcon };