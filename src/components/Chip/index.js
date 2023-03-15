import './style.css';

function Chip({ title, checked, id, categories, setCategories }) {
    function handleCheckCategories() {
        const localCategories = [...categories];

        localCategories.forEach((categ) => {
            if (categ.id === id) {
                categ.checked = !categ.checked
            }
        });

        setCategories([...localCategories]);
    }

    return (
        <div
            onClick={handleCheckCategories}
            className={`${checked ? 'checked' : 'unchecked'} container-chip`}
        >
            <span>{title}</span>
            {checked ? 'x' : '+'}
        </div>
    )
}

export default Chip;