export default function Tag({ text }) {
  return (
    <>
      <div>
        <h1 className="text-lg text-center text-white bg-[--secondary-color] mx-auto py-2 rounded-lg md: w-[75%] ">
          {text}
        </h1>
      </div>
    </>
  );
}
