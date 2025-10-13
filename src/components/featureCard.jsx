export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white flex flex-col font-outfit p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer shadow-gray-300 flex-1">
      <div className="bg-gray-200 p-3 rounded-xl mb-4 w-max h-max">
        <img src={icon} alt={title + " icon"} className="w-10 h-10"></img>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-md text-gray-700 mbb-4">{description}</p>
    </div>
  );
}
