const Filter = ({ onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mt-5 mb-4">
        Filter contacts
      </h2>

      <input
        type="text"
        name="filter"
        onChange={onChange}
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
