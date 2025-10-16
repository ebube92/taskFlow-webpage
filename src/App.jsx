import Features from "./components/features.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Pricing from "./components/pricing.jsx";
import Testimonials from "./components/testimonials.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
}
