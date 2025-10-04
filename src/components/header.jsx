export default function Header() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 border-1 ">
        <p className="font-logo text-2xl">taskFlow</p>
      </div>

      <div className="mt-16 w-full flex ">
        <div className="flex flex-col">
          <h2>Organize your tasks with ease and clarity</h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
