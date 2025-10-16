import PricingCard from "./pricingCard";

const plans = [
  {
    planName: "Free",
    price: "$0/mo",
    description: "Basic tools to get started.",
    features: ["Unlimited tasks", "1 project", "Basic reminders"],
  },
  {
    planName: "Pro",
    price: "$9/mo",
    description: "For power users who want more control.",
    features: ["Unlimited tasks", "Unlimited projects", "Advanced analytics", "Priority support"],
    highlight: true,
  },
  {
    planName: "Team",
    price: "$20/mo",
    description: "For teams that need to collaborate efficiently.",
    features: ["Unlimited tasks", "Unlimited projects", "Team workspaces", "Shared dashboards", "Admin controls"],
  },
];

export default function Pricing() {
  return (
    <div className="w-full bg-gray-50" id="pricing">
      <section className="min-h-[60vh] px-6 lg:px-16 w-full lg:w-[70%] mx-auto py-10 font-outfit flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          Choose the plan that fits your needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between items-stretch mt-6 px-4 md:px-6 w-full">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
