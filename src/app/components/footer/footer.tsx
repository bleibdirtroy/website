import Link from "next/link";
import EmailReveal from "../email-reveal/email-reveal";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-700 to-primary-900 text-primary-50 px-4 py-12 mt-16 border-t-4 border-accent-500 shadow-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-3 lg:gap-16">
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4 text-accent-400 drop-shadow-sm md:text-2xl">Adrian Germeck</h3>
            <p className="text-primary-200">M.Sc. Software Engineer</p>
          </div>
          
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-4 text-primary-200 relative md:text-xl">
              Kontakt
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full md:left-0 md:transform-none"></span>
            </h4>
            <p><EmailReveal label="E-Mail" /></p>
          </div>
          
          <div className="p-4 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary-200 relative md:text-xl">
              Links
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full md:left-0 md:transform-none"></span>
            </h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <Link 
                href="/impressum" 
                className="text-primary-300 hover:text-accent-400 hover:bg-accent-50/10 px-4 py-2 rounded-md transition-all duration-300 border border-transparent hover:border-accent-500/30 transform hover:-translate-y-0.5"
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz" 
                className="text-primary-300 hover:text-accent-400 hover:bg-accent-50/10 px-4 py-2 rounded-md transition-all duration-300 border border-transparent hover:border-accent-500/30 transform hover:-translate-y-0.5"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-600 pt-6 mt-10 text-center bg-black/20 rounded-lg p-4">
          <p className="text-sm text-primary-400 md:text-base">
            &copy; {new Date().getFullYear()} Adrian Germeck. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;