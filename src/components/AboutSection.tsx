import { GraduationCap, Target, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const objectives = [
    "Familiarize students with campus facilities and academic procedures",
    "Introduce the rich culture and traditions of Indian Institute of Technology Kharagpur",
    "Help students build connections and friendships",
    "Provide guidance for academic and personal success",
  ];

  const activities = [
    "Welcome ceremony with Director and Department Heads",
    "Campus tour including hostels, academic buildings, and recreational facilities",
    "Interactive sessions with student societies and clubs",
    "Cultural performances showcasing IIT KGP's vibrant community",
  ];

  return (
    <section id='about' className='py-16 bg-soft-blue'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
              About the Induction Program
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto'>
              Welcome to Indian Institute of Technology Kharagpur! Our comprehensive induction program is designed to
              help you transition smoothly into academic life at one of India's premier institutions.
            </p>
          </div>

          {/* Main Content Card */}
          <div className='iit-card p-8 md:p-12 mb-12 border-l-4 border-iit-blue'>
            <div className='mb-8'>
              <h3 className='text-2xl font-heading font-bold text-iit-blue mb-4 flex items-center'>
                <GraduationCap className='w-8 h-8 mr-3 text-iit-gold' />
                Why the Induction Program?
              </h3>
              <p className='text-iit-blue/80 leading-relaxed text-lg'>
                The transition from school to a premier technical institute like Indian Institute of Technology
                Kharagpur can be overwhelming. Our induction program serves as a bridge, helping you understand the
                academic culture, explore opportunities, and build lasting relationships that will define your journey
                at IIT KGP.
              </p>
            </div>

            {/* Grid Layout for Objectives and Activities */}
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Objectives */}
              <div>
                <h4 className='text-xl font-heading font-bold text-iit-blue mb-6 flex items-center'>
                  <Target className='w-6 h-6 mr-3 text-iit-gold' />
                  Program Objectives
                </h4>
                <ul className='space-y-4'>
                  {objectives.map((objective, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-2 h-2 bg-iit-gold rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span className='text-iit-blue/80'>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h4 className='text-xl font-heading font-bold text-iit-blue mb-6 flex items-center'>
                  <Users className='w-6 h-6 mr-3 text-iit-gold' />
                  Key Activities
                </h4>
                <ul className='space-y-4'>
                  {activities.map((activity, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-2 h-2 bg-iit-gold rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span className='text-iit-blue/80'>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
