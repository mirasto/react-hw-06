


const ContactForm = ({ name, number, onChange, onSubmit }) => {
  return (
    <form className="flex flex-col items-center gap-6 text-gray-900" onSubmit={onSubmit}>
      <h1 className="text-center text-3xl font-bold text-gray-900 tracking-tight mt-3">
        PhoneBook
      </h1>
      {/* Name */}
      <div className="flex flex-col items-start gap-1 w-full max-w-sm">
        <label className="text-lg font-semibold text-gray-800">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
          placeholder="Enter name"
          className="
        w-full px-4 py-2
        border border-gray-300 rounded-lg
        bg-white
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
        />
      </div>

      {/* Number */}
      <div className="flex flex-col items-start gap-1 w-full max-w-sm">
        <label className="text-lg font-semibold text-gray-800">Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          required
          placeholder="Enter number"
          className="
        w-full px-4 py-2
        border border-gray-300 rounded-lg
        bg-white
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
      bg-blue-600 text-white font-semibold 
      px-6 py-2.5 rounded-lg 
      shadow-md
      hover:bg-blue-700 
      hover:shadow-lg
      active:scale-[0.97]
      transition-all duration-200
    "
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
