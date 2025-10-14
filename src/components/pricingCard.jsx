export default function PricingCard({
  planName,
  price,
  description,
  features,
  highlight,
}) {
    return (
        <div className="bg-white flex flex-col font-outfit p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 shadow-gray-300 flex-1 border-2 border-transparent hover:border-blue-500 {highlight ? highlight : ''}">
            
        </div>
    )
}
