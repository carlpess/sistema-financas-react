import './style.css';

function Chip({ title, checked }) {
    return (
        <div className={`${checked ? 'checked' : 'unchecked'} container-chip`}>
            <span>{title}</span>
            {checked ? 'x' : '+'}
        </div>
    )
}

export default Chip;