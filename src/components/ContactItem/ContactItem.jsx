// ContactItem.jsx
const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li
      className="
        flex justify-between items-center
        bg-white 
        rounded-lg
        px-4 py-3
        shadow-sm
        border border-gray-200
        hover:shadow-md
        transition
      "
    >
      <span className="text-gray-900 font-medium">
        {name}: {number}
      </span>
      <button
        className="
          bg-red-600 text-white 
          px-3 py-1.5 
          rounded-md text-sm font-medium
          hover:bg-red-700 
          active:scale-[0.97]
          transition
        "
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
