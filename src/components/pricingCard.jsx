export default function PricingCard({
  planName,
  price,
  description,
  features,
  highlight,
}) {
    return (
        <div className="bg-white flex flex-col font-outfit p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 shadow-gray-300 flex-1 border-2 border-transparent hover:border-blue-500 {highlight ? highlight : ''}">
            <h3 className="text-lg bg-gray-200 py-1 px-3 rounded-lg w-max">{planName}</h3>
            <p className="text-3xl font-bold my-3">{price}</p>
            <p className="text-gray-800 mb-3">{description}</p>
            <ul>
                {features.map((feature) => (
                    <li key={feature} className="text-gray-700 text-md">✅ {feature}</li>
                ))}
            </ul>
            <button>Choose Plan</button>
        </div>
    )
}
