import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Tabib Al Arabia
              </h3>
              <p className="text-white/90 leading-relaxed text-base">
                Leading environmental services and scrap metal export company in Saudi Arabia, committed to sustainable practices and excellence.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#metals", label: "Materials" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-blue-400 flex items-center space-x-2 group transition-all duration-300 text-base"
                  >
                    <span className="h-px w-0 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: "Dammam, Saudi Arabia", href: "#" },
                { Icon: Phone, text: "+966 53 435 8144", href: "tel:+966534358144" },
                { Icon: Mail, text: "sales@tabibalarabia.com", href: "mailto:sales@tabibalarabia.com" },
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-white/80 hover:text-blue-400 group p-3 rounded-lg hover:bg-white/5 transition-all duration-300 text-base"
                >
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <item.Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-base">
              &copy; {new Date().getFullYear()} Tabib Al Arabia. All rights reserved.
            </p>
            <div className="flex space-x-6 text-base text-white/70">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

