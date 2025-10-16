import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10 mt-10 font-outfit border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold font-logo mb-2 text-black">taskFlow</h3>
          <p className="text-sm text-gray-500">Organize. Focus. Achieve.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#features" className="hover:text-black transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-black transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-2">
            {/* Replace # with your social links and add SVGs or images as needed */}
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-black transition"
            >
              <img src={twitter} className='w-7 h-7'></img>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-black transition"
            >
              <img src={linkedin} className='w-7 h-7'></img>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-black transition"
            >
              <img src={instagram} className='w-7 h-7'></img>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        <p>© 2025 taskFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
