import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'filter':
        dispatch(filterValue(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mt-5 mb-4">Filter contacts</h2>

      <input
        type="text"
        name="filter"
        onChange={handleChangeInput}
        value={filter}
        placeholder="Search contacts..."
        className="
      w-full 
      text-lg
      px-4 py-2 
      border border-gray-300 
      rounded-lg 
      shadow-sm
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      transition
    "
      />
    </div>
  );
};

export default Filter;
