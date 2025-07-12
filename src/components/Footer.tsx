import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Home',
    'About',
    'Schedule',
    'Activities',
    'Contact'
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://facebook.com/iitkgp',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      url: 'https://instagram.com/iitkgp',
      label: 'Instagram'
    },
    {
      icon: Youtube,
      url: 'https://youtube.com/iitkgp',
      label: 'YouTube'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/school/iitkgp',
      label: 'LinkedIn'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-iit-blue to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-iit-blue font-bold text-xl">IIT</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">IIT Kharagpur</h3>
                <p className="text-iit-gold">Induction Program 2025</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Indian Institute of Technology Kharagpur is committed to excellence in education, 
              research, and innovation. Join us for an exciting journey into one of India's 
              premier technological institutes.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-iit-gold" />
                <span>Kharagpur, West Bengal 721302, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-iit-gold" />
                <span>+91 3222 282020</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-iit-gold" />
                <span>induction2025@iitkgp.ac.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block text-white/80 hover:text-iit-gold transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://www.iitkgp.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-iit-gold transition-colors duration-300"
              >
                Official Website
              </a>
            </nav>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6">Important Dates</h4>
            <div className="space-y-4">
              <div>
                <p className="text-iit-gold font-semibold">Induction Program</p>
                <p className="text-white/80 text-sm">July 25, 2025</p>
              </div>
              <div>
                <p className="text-iit-gold font-semibold">Registration Opens</p>
                <p className="text-white/80 text-sm">8:30 AM</p>
              </div>
              <div>
                <p className="text-iit-gold font-semibold">Program Venue</p>
                <p className="text-white/80 text-sm">Netaji Auditorium</p>
              </div>
              <div>
                <p className="text-iit-gold font-semibold">Help Desk</p>
                <p className="text-white/80 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-white/80 font-medium">Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-iit-gold hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-white/60 text-sm">
              <p>&copy; 2025 Indian Institute of Technology Kharagpur</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Additional Logos */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-center">
              <p className="text-xs text-white/60">Technology Students' Gymkhana</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/60">Students' Welfare</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/60">Academic Section</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/40 text-xs">
            Designed with ❤️ for the IIT Kharagpur Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;