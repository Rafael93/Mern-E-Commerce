"use client";
const people = [
  {
    name: "Leslie Alexander",
    role: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Piercie Jackson",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Aaron Paul",
    role: "CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Jackson",
    role: "Warehouse Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Laura Rodriguez",
    role: "Logistic Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Chris Pattinson",
    role: "Administration Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <div className="flex flex-col mx-auto max-w-7xl my-[2rem] lg:flex-row ">
        <div className="max-w-[30rem] flex-1 mx-8 lg:m-[5rem]">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Conocé a nuestro equipo
          </h2>
          <p className="mt-6 text-md text-gray-600">
            Mollit fugiat eu cillum labore deserunt incididunt aliquip anim
            irure velit. Nostrud eu aliqua deserunt labore. Sit ad labore esse
            aliqua. Dolore officia ullamco excepteur aute ad laboris nulla.
            Laboris dolor dolor culpa fugiat aliqua laborum proident cupidatat
            id elit..
          </p>
        </div>
        <ul
          role="list"
          className="flex flex-col my-[2.5rem] gap-5 justify-start mx-auto"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-10 rounded-full mx-4"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
