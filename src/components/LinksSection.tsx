import { FileText, Bus, Map, Globe, Users, BookOpen, Heart, ExternalLink } from 'lucide-react';

const LinksSection = () => {
  const links = [
    {
      icon: FileText,
      title: "Induction Handbook",
      description: "Complete guide with all information about the induction program",
      url: "#",
      color: "bg-blue-500"
    },
    {
      icon: Bus,
      title: "Bus Schedule",
      description: "Transportation timetables and routes within campus",
      url: "#",
      color: "bg-green-500"
    },
    {
      icon: Map,
      title: "Campus Map",
      description: "Interactive map of IIT Kharagpur campus with all locations",
      url: "#",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "IIT KGP Website",
      description: "Official website of Indian Institute of Technology Kharagpur",
      url: "https://www.iitkgp.ac.in",
      color: "bg-indigo-500"
    },
    {
      icon: Users,
      title: "Students' Gymkhana",
      description: "Technology Students' Gymkhana official portal",
      url: "#",
      color: "bg-orange-500"
    },
    {
      icon: BookOpen,
      title: "ERP Portal",
      description: "Academic ERP system for course registration and grades",
      url: "#",
      color: "bg-red-500"
    },
    {
      icon: Heart,
      title: "Counselling Center",
      description: "Mental health and counselling services for students",
      url: "#",
      color: "bg-pink-500"
    },
    {
      icon: FileText,
      title: "Academic Calendar",
      description: "Important academic dates and examination schedules",
      url: "#",
      color: "bg-teal-500"
    },
    {
      icon: Globe,
      title: "Library Portal",
      description: "Central Library resources and digital collections",
      url: "#",
      color: "bg-cyan-500"
    }
  ];

  return (
    <section id="links" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
              Quick Links
            </h2>
            <p className="text-lg text-iit-blue/70 max-w-3xl mx-auto">
              Essential resources and important links to help you navigate your journey at IIT Kharagpur.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="iit-card p-6 group cursor-pointer animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon and External Link Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  {link.url.startsWith('http') && (
                    <ExternalLink className="w-4 h-4 text-iit-blue/40 group-hover:text-iit-gold transition-colors duration-300" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-iit-blue mb-3 group-hover:text-iit-gold transition-colors duration-300">
                  {link.title}
                </h3>

                {/* Description */}
                <p className="text-iit-blue/70 text-sm leading-relaxed">
                  {link.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-iit-gold/40 transition-colors duration-300"></div>
              </a>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-gradient-to-r from-iit-gold/10 to-iit-copper/10 rounded-xl p-8 border border-iit-gold/20">
            <div className="text-center">
              <h3 className="text-xl font-heading font-bold text-iit-blue mb-4">
                Access Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-iit-blue mb-3">For New Students:</h4>
                  <ul className="space-y-2 text-iit-blue/80 text-sm">
                    <li>• ERP credentials will be provided during registration</li>
                    <li>• Campus WiFi access available with student ID</li>
                    <li>• Library card issued after document verification</li>
                    <li>• Hostel internet setup during room allocation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-iit-blue mb-3">Need Help?</h4>
                  <ul className="space-y-2 text-iit-blue/80 text-sm">
                    <li>• IT Help Desk: Available 24/7 in hostels</li>
                    <li>• Academic Section: Main Academic Building</li>
                    <li>• Student Welfare: TSG Office</li>
                    <li>• Emergency: Contact security at main gate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-iit-primary">
                Download All Resources
              </button>
              <button className="px-6 py-3 border-2 border-iit-blue text-iit-blue rounded-lg font-medium hover:bg-iit-blue hover:text-white transition-colors duration-300">
                Bookmark This Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;