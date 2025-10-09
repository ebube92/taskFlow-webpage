export default function Header() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 border-1 ">
        <p className="font-logo text-2xl">taskFlow</p>
      </div>

      <div className="mt-16 w-full flex flex-col md:flex-row items-center justify-center p-4">
        <div className="flex flex-col items-center text-center space-y-6 w-full md:w-1/2">
          <h2>Organize your tasks with ease and clarity</h2>
          <button>Get Started</button>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          
        </div>
      </div>
    </div>
  );
}
