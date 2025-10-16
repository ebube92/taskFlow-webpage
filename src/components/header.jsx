import taskImage from "../assets/task-image.jpg";

export default function Header() {
  return (
    <div className="bg-gray-50 min-h-[80vh] flex flex-col lg:flex-row">
      <div className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 border-1 ">
        <p className="font-logo text-2xl">taskFlow</p>
      </div>

      <div className="mt-16 w-full max-w-7xl mx-auto flex flex-col-reverse gap-4 lg:flex-row items-center px-10 md:px-16">
        <div className="flex flex-col items-start justify-start space-y-6 w-full lg:w-1/2">
          <h2 className=" text-4xl lg:text-6xl w-full lg:w-[80%] font-outfit font-bold">
            Organize your tasks with ease and clarity
          </h2>
          <p className="font-outfit text-lg w-full lg:w-[80%] text-gray-700">
            Simplify the way you manage work. taskFlow gives you a clear
            overview of your projects, deadlines, and priorities so your team
            stays focused and productive.
          </p>
          <button className="bg-button font-outfit text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-400">
            Get Started
          </button>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center rounded-lg overflow-hidden">
          <img
            src={taskImage}
            alt="Header Image"
            className="w-full rounded-lg h-70 lg:h-auto"
          ></img>
        </div>
      </div>
    </div>
  );
}
