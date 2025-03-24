export default function Tag({ text }) {
  return (
    <>
      <div>
        <h1 className="text-lg text-center text-white bg-[--secondary-color] mx-auto py-2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 md: w-[75%] ">
          {text}
        </h1>
      </div>
    </>
  );
}
