export default function TestimonialCard ({ name, role, quote }) {
    return (
        <div className="bg-white flex flex-col font-outfit p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 shadow-gray-300 flex-1">
            <p className="text-lg italic font-semibold">"{quote}"</p>
            <h4 className="text-md font-bold">- {name}, <span className="text-md text-gray-600">{role}</span></h4>
        </div>
    )
}