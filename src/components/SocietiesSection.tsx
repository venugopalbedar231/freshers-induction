import { Code, Music, Palette, Briefcase, Cpu, Globe } from 'lucide-react';

const SocietiesSection = () => {
  const societies = [
    {
      name: "Kharagpur Open Source Society",
      category: "Technical",
      icon: Code,
      description: "Promoting open source culture and software development",
      color: "bg-blue-500"
    },
    {
      name: "Music Society",
      category: "Cultural",
      icon: Music,
      description: "Celebrating musical diversity and talent",
      color: "bg-purple-500"
    },
    {
      name: "Fine Arts Society",
      category: "Creative",
      icon: Palette,
      description: "Fostering creativity through visual arts",
      color: "bg-pink-500"
    },
    {
      name: "Entrepreneurship Cell",
      category: "Professional",
      icon: Briefcase,
      description: "Nurturing entrepreneurial spirit and innovation",
      color: "bg-green-500"
    },
    {
      name: "Robotics Society",
      category: "Technical",
      icon: Cpu,
      description: "Advancing robotics and automation technology",
      color: "bg-orange-500"
    },
    {
      name: "Debate Society",
      category: "Academic",
      icon: Globe,
      description: "Developing critical thinking and oratory skills",
      color: "bg-indigo-500"
    },
    {
      name: "Photography Society",
      category: "Creative",
      icon: Palette,
      description: "Capturing moments and telling stories through lens",
      color: "bg-teal-500"
    },
    {
      name: "Literary Society",
      category: "Cultural",
      icon: Globe,
      description: "Celebrating literature, poetry, and creative writing",
      color: "bg-red-500"
    },
    {
      name: "Technology Consulting Group",
      category: "Professional",
      icon: Briefcase,
      description: "Bridging technology and business solutions",
      color: "bg-yellow-500"
    },
    {
      name: "Dramatics Society",
      category: "Cultural",
      icon: Music,
      description: "Exploring theatrical arts and dramatic performances",
      color: "bg-violet-500"
    },
    {
      name: "Cyber Security Group",
      category: "Technical",
      icon: Code,
      description: "Advancing cybersecurity awareness and research",
      color: "bg-gray-700"
    },
    {
      name: "Dance Society",
      category: "Cultural",
      icon: Music,
      description: "Expressing culture through classical and modern dance",
      color: "bg-rose-500"
    }
  ];

  const categories = {
    "Technical": "bg-blue-100 text-blue-800",
    "Cultural": "bg-purple-100 text-purple-800",
    "Creative": "bg-pink-100 text-pink-800",
    "Professional": "bg-green-100 text-green-800",
    "Academic": "bg-indigo-100 text-indigo-800"
  };

  return (
    <section id="participating-societies" className="py-16 bg-soft-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
              Participating Societies
            </h2>
            <p className="text-lg text-iit-blue/70 max-w-3xl mx-auto">
              Discover the vibrant community of student societies at IIT Kharagpur. From technical 
              innovation to cultural excellence, find your passion and make lasting connections.
            </p>
          </div>

          {/* Societies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {societies.map((society, index) => (
              <div 
                key={index} 
                className="iit-card p-6 group cursor-pointer animate-slide-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Society Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${society.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <society.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categories[society.category as keyof typeof categories]}`}>
                    {society.category}
                  </span>
                </div>

                {/* Society Name */}
                <h3 className="text-lg font-heading font-bold text-iit-blue mb-3 group-hover:text-iit-gold transition-colors duration-300">
                  {society.name}
                </h3>

                {/* Description */}
                <p className="text-iit-blue/70 text-sm leading-relaxed">
                  {society.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-iit-gold/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Category Legend */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-heading font-bold text-iit-blue mb-6">
              Society Categories
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(categories).map(([category, className]) => (
                <span 
                  key={category}
                  className={`px-4 py-2 rounded-full font-medium ${className}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-heading font-bold text-iit-blue mb-4">
              Join the Community
            </h3>
            <p className="text-iit-blue/70 mb-6 max-w-2xl mx-auto">
              These societies will have interactive stalls during the induction program. 
              Visit them to learn more about their activities and how you can get involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-iit-blue/5 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-iit-blue">12+</p>
                <p className="text-sm text-iit-blue/70">Active Societies</p>
              </div>
              <div className="bg-iit-blue/5 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-iit-blue">500+</p>
                <p className="text-sm text-iit-blue/70">Events per Year</p>
              </div>
              <div className="bg-iit-blue/5 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-iit-blue">5000+</p>
                <p className="text-sm text-iit-blue/70">Active Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;