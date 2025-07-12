import { Mail, Phone, Clock, MapPin, User } from "lucide-react";

const ContactSection = () => {
  const volunteers = [
    {
      date: "July 24-25, 2025",
      name: "Arjun Sharma",
      phone: "+91 9876543210",
      role: "Lead Coordinator",
    },
    {
      date: "July 24-25, 2025",
      name: "Priya Patel",
      phone: "+91 9876543211",
      role: "Registration Desk",
    },
    {
      date: "July 25, 2025",
      name: "Rahul Kumar",
      phone: "+91 9876543212",
      role: "Campus Tour Guide",
    },
    {
      date: "July 25, 2025",
      name: "Sneha Gupta",
      phone: "+91 9876543213",
      role: "Technical Support",
    },
  ];

  const officials = [
    {
      title: "General Secretary (Male), Student Welfare",
      name: "Tanush Agarwal",
      email: "gs.welfare@iitkgp.ac.in",
      phone: "+91 9876543221",
    },
    {
      title: "General Secretary (Female), Student Welfare",
      name: "Dnyaneshwari Ghare",
      email: "gs.welfare@iitkgp.ac.in",
      phone: "+91 3222 282020",
    },
    {
      title: "Vice President, Technology Students' Gymkhana",
      name: "Sudhagani Praneeth Kumar",
      email: "vptsg@iitkgp.ac.in",
      phone: "+91 9876543220",
    },
  ];

  return (
    <section id='contact' className='py-16 bg-soft-blue'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6'>Contact Information</h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto'>
              Get in touch with our team for any questions or assistance regarding the induction program.
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Help Desk */}
            <div className='iit-card p-8 border-l-4 border-iit-blue'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-iit-blue/10 rounded-full flex items-center justify-center mr-4'>
                  <Mail className='w-6 h-6 text-iit-gold' />
                </div>
                <h3 className='text-2xl font-heading font-bold text-iit-blue'>Help Desk</h3>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Mail className='w-4 h-4 text-iit-gold mr-3' />
                  <span className='text-iit-blue/80'>induction2025@iitkgp.ac.in</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='w-4 h-4 text-iit-gold mr-3' />
                  <span className='text-iit-blue/80'>+91 3222 282030</span>
                </div>
                <div className='flex items-start'>
                  <Clock className='w-4 h-4 text-iit-gold mr-3 mt-1' />
                  <div className='text-iit-blue/80'>
                    <p>24th July: 8:00 AM - 8:00 PM</p>
                    <p>25th July: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <MapPin className='w-4 h-4 text-iit-gold mr-3' />
                  <span className='text-iit-blue/80'>Netaji Auditorium Foyer</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className='iit-card p-8 border-l-4 border-red-500'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4'>
                  <Phone className='w-6 h-6 text-red-600' />
                </div>
                <h3 className='text-2xl font-heading font-bold text-iit-blue'>Emergency Contact</h3>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Phone className='w-4 h-4 text-red-500 mr-3' />
                  <span className='text-iit-blue/80 font-semibold'>+91 3222 255221</span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='w-4 h-4 text-red-500 mr-3' />
                  <span className='text-iit-blue/80'>Security Office, Main Gate</span>
                </div>
                <div className='bg-red-50 p-4 rounded-lg'>
                  <p className='text-red-700 text-sm'>
                    <strong>24/7 Emergency Services:</strong>
                    <br />
                    Medical emergencies, security concerns, or any urgent assistance needed during the induction
                    program.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Contacts */}
          <div className='mb-12'>
            <h3 className='text-2xl font-heading font-bold text-iit-blue mb-6 text-center'>Volunteer Contacts</h3>

            {/* Desktop Table */}
            <div className='hidden md:block overflow-x-auto'>
              <table className='w-full bg-white rounded-xl shadow-lg overflow-hidden'>
                <thead className='bg-iit-blue text-white'>
                  <tr>
                    <th className='px-6 py-4 text-left font-heading font-bold'>Date/Time</th>
                    <th className='px-6 py-4 text-left font-heading font-bold'>Name</th>
                    <th className='px-6 py-4 text-left font-heading font-bold'>Phone</th>
                    <th className='px-6 py-4 text-left font-heading font-bold'>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map((volunteer, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-light-blue/30 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      }`}>
                      <td className='px-6 py-4 text-iit-blue/80'>{volunteer.date}</td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <User className='w-4 h-4 text-iit-gold mr-2' />
                          <span className='font-semibold text-iit-blue'>{volunteer.name}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <Phone className='w-4 h-4 text-iit-gold mr-2' />
                          <span className='text-iit-blue/80'>{volunteer.phone}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-iit-blue/80'>{volunteer.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className='md:hidden space-y-4'>
              {volunteers.map((volunteer, index) => (
                <div key={index} className='iit-card p-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='font-semibold text-iit-blue'>{volunteer.name}</span>
                    <span className='text-xs text-iit-blue/60'>{volunteer.role}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-iit-blue/80'>{volunteer.date}</span>
                    <span className='text-sm text-iit-blue/80'>{volunteer.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Officials Contact */}
          <div>
            <h3 className='text-2xl font-heading font-bold text-iit-blue mb-6 text-center'>Key Officials</h3>

            <div className='grid md:grid-cols-3 gap-6'>
              {officials.map((official, index) => (
                <div key={index} className='iit-card p-6 text-center'>
                  <div className='w-16 h-16 bg-iit-blue/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <User className='w-8 h-8 text-iit-gold' />
                  </div>

                  <h4 className='font-heading font-bold text-iit-blue mb-2'>{official.name}</h4>
                  <p className='text-sm text-iit-blue/70 mb-4'>{official.title}</p>

                  <div className='space-y-2 text-sm'>
                    <div className='flex items-center justify-center'>
                      <Mail className='w-3 h-3 text-iit-gold mr-2' />
                      <span className='text-iit-blue/80'>{official.email}</span>
                    </div>
                    <div className='flex items-center justify-center'>
                      <Phone className='w-3 h-3 text-iit-gold mr-2' />
                      <span className='text-iit-blue/80'>{official.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
