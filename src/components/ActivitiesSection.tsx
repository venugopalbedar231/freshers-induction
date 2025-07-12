import { Clock, MapPin, Users, Mic } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: Mic,
      title: "Welcome Ceremony",
      venue: "Netaji Auditorium",
      description:
        "Official welcome by the Director and Department Heads. Introduction to IIT KGP's vision and values.",
      gradient: "bg-iit-blue",
    },
    {
      icon: Users,
      title: "Meet the Faculty",
      venue: "Department Buildings",
      description: "Interactive sessions with faculty members and academic coordinators.",
      gradient: "bg-iit-blue",
    },
    {
      icon: MapPin,
      title: "Campus Tour",
      venue: "Campus Wide",
      description: "Guided tour of academic buildings, hostels, libraries, and recreational facilities.",
      gradient: "bg-iit-blue",
    },
    {
      icon: Users,
      title: "Society Performances",
      venue: "Netaji Auditorium",
      description: "Cultural performances and presentations by various student societies and clubs.",
      gradient: "bg-iit-blue",
    },
  ];

  return (
    <section id='activities' className='py-16 bg-soft-blue'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
              Induction Program Activities
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto'>
              Experience a full day of engaging activities designed to introduce you to the vibrant academic and
              cultural life at Indian Institute of Technology Kharagpur.
            </p>
          </div>

          {/* Activities Grid */}
          <div className='grid md:grid-cols-2 gap-8'>
            {activities.map((activity, index) => (
              <div
                key={index}
                className='iit-card p-6 group animate-slide-up border-l-4 border-iit-blue'
                style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Header with Icon */}
                <div className='flex items-center space-x-4 mb-4'>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className='w-6 h-6 text-white' />
                  </div>
                  <h3 className='text-xl font-heading font-bold text-iit-blue'>{activity.title}</h3>
                </div>

                {/* Activity Details */}
                <div className='space-y-3 mb-4'>
                  <div className='flex items-center text-iit-blue/70'>
                    <MapPin className='w-4 h-4 mr-2 text-iit-gold' />
                    <span className='font-medium'>{activity.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-iit-blue/80 leading-relaxed'>{activity.description}</p>

                {/* Hover Effect Border */}
                <div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-iit-gold/30 transition-colors duration-300'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
