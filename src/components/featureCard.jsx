export default function FeatureCard({ icon, title, description}) {
    return (
        <div className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-120">
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}