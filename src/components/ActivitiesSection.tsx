import { Clock, MapPin, Users, Mic } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      icon: Mic,
      title: "Welcome Ceremony",
      time: "9:00 AM - 10:30 AM",
      venue: "Netaji Auditorium",
      description: "Official welcome by the Director and Department Heads. Introduction to IIT KGP's vision and values.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Meet the Faculty",
      time: "11:00 AM - 12:30 PM",
      venue: "Department Buildings",
      description: "Interactive sessions with faculty members and academic coordinators.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Campus Tour",
      time: "2:00 PM - 4:00 PM",
      venue: "Campus Wide",
      description: "Guided tour of academic buildings, hostels, libraries, and recreational facilities.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Society Performances",
      time: "5:00 PM - 7:00 PM",
      venue: "Open Air Theatre",
      description: "Cultural performances and presentations by various student societies and clubs.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="activities" className="py-16 bg-soft-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
              Induction Program Activities
            </h2>
            <p className="text-lg text-iit-blue/70 max-w-3xl mx-auto">
              Experience a full day of engaging activities designed to introduce you to the vibrant 
              academic and cultural life at IIT Kharagpur.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="iit-card p-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with Icon */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-iit-blue">
                    {activity.title}
                  </h3>
                </div>

                {/* Activity Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-iit-blue/70">
                    <Clock className="w-4 h-4 mr-2 text-iit-gold" />
                    <span className="font-medium">{activity.time}</span>
                  </div>
                  
                  <div className="flex items-center text-iit-blue/70">
                    <MapPin className="w-4 h-4 mr-2 text-iit-gold" />
                    <span className="font-medium">{activity.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-iit-blue/80 leading-relaxed">
                  {activity.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-iit-gold/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-iit-blue mb-4">
                What to Expect
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-iit-blue mb-2">Morning Session</h4>
                  <ul className="text-iit-blue/70 space-y-1">
                    <li>• Registration and welcome kit distribution</li>
                    <li>• Official welcome ceremony</li>
                    <li>• Introduction to academic programs</li>
                    <li>• Meet your department faculty</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-iit-blue mb-2">Evening Session</h4>
                  <ul className="text-iit-blue/70 space-y-1">
                    <li>• Comprehensive campus tour</li>
                    <li>• Student society showcases</li>
                    <li>• Cultural performances</li>
                    <li>• Networking and refreshments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;