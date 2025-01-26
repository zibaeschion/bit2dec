import { Select, MenuItem } from '@mui/material';

const CategorySelector = ({ categories, selectedCategory, onChange }) => {
    //The Displayed Categories should not have the name of the variable
    const categoryDisplayNames = {
        highScoreFour: '4Bit',
        highScoreEight: '8Bit',
    };

    return (
        <Select
            value={selectedCategory}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            className="select-container"
        >
            {categories.map((category) => (
                <MenuItem key={category} value={category}>
                    {categoryDisplayNames[category] || category}{' '}
                    {/*If another category should be added, but there is no display name, display th category*/}
                </MenuItem>
            ))}
        </Select>
    );
};

export default CategorySelector;
