import './SearchBox.css';

interface SearchBoxProps {
    onInputChange: (InputValue: string) => void;
}

const SearchBox = ({onInputChange}: SearchBoxProps) => {
    return (
        <input onChange={(e) => {
            onInputChange(e.target.value)
        }} className='search' type="search" placeholder='Search Pokemon' />
    );
};

export default SearchBox;