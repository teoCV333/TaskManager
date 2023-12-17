import './ModalIcon.css';

function ModalIcon({onClick}) {
  return (
    <span className="close-modal" onClick={onClick}>
        x
    </span>
  )
}

export { ModalIcon };