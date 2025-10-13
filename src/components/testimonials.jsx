import TestimonialCard from "./testimonialCard";

const testimonials = [
    {
        quote: "This product has transformed the way our team works. It's intuitive and efficient!",
        name: "Jane Doe",
        role: "Project Manager"
    }, 
    {
        quote: "I can't imagine going back to how we managed tasks before. This tool is a game-changer.",
        name: "John Smith",
        role: "Software Engineer"
    },
    {
        quote: "The collaboration features have significantly improved our team's productivity.",
        name: "Emily Johnson",
        role: "UX Designer"
    },
    {
        quote: "Setting reminders has helped me stay on top of my deadlines like never before.",
        name: "Michael Brown",
        role: "Marketing Specialist"
    }
]

export default function Testimonials() {
    return (
        <div className="w-full bg-gray-50">
            <section className="min-h-[50vh] px-6 lg:px-16 w-full lg:w-[70%] mx-auto py-10 font-outfit flex flex-col items-center">
                <h2 className="text-4xl font-bold text-center">What our users say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-stretch mt-6 px-4 w-full">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </div>
    )
}