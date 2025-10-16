import organizeIcon from "../assets/clipboard.svg";
import reminderIcon from "../assets/alarm-clock.svg";
import collaborateIcon from "../assets/handshake.svg";
import FeatureCard from "./featureCard";

const features = [
  {
    icon: organizeIcon,
    title: "Organize tasks",
    description:
      "Easily create, assign, and track tasks to keep your projects on schedule.",
  },
  {
    icon: reminderIcon,
    title: "Set reminders",
    description:
      "Never miss a deadline with customizable reminders and notifications.",
  },
  {
    icon: collaborateIcon,
    title: "Collaborate easily",
    description:
      "Share tasks and updates with your team to enhance communication and productivity.",
  },
];

export default function Features() {
  return (
    <div className="w-full bg-gray-50" id="features">
      <section className="min-h-[60vh] px-4 lg:px-16 w-full lg:w-[70%] mx-auto py-10 font-outfit flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">Why choose taskFlow?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch mt-6 px-4 md:px-16">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
