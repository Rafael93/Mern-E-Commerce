const Label = ({ text, htmlfor }) => {
  return (
    <>
      <label
        htmlFor={htmlfor}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {text}
      </label>
    </>
  );
};

export default Label;
