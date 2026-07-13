import { Clock, MapPin, Calendar } from "lucide-react";
//----------------to be updated----------------------- 
const ScheduleSection = () => {
  const schedule = [
    // Day 1 - July 25, 2025
    
  ];

  return (
    <section id='schedule' className='py-16 bg-soft-blue'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
              Induction Schedule
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto mb-8'>
              3-day schedule for the Induction Program - July 25-27, 2026
            </p>
          </div>

          {/* Desktop Table View */}
          <div className='hidden md:block overflow-x-auto'>
            <table className='w-full bg-white rounded-xl shadow-lg overflow-hidden'>
              <thead className='bg-iit-blue text-white'>
                <tr>
                  <th className='px-6 py-4 text-left font-bold'>Date</th>
                  <th className='px-6 py-4 text-left font-bold'>Time</th>
                  <th className='px-6 py-4 text-left font-bold'>Activity</th>
                  <th className='px-6 py-4 text-left font-bold'>Venue</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-light-blue/30 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}>
                    <td className='px-6 py-4'>
                      <div className='flex items-center text-iit-blue font-medium'>
                        <Calendar className='w-4 h-4 mr-2 text-iit-gold' />
                        {item.date}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center text-iit-blue font-medium'>
                        <Clock className='w-4 h-4 mr-2 text-iit-gold' />
                        {item.time}
                      </div>
                    </td>
                    <td className='px-6 py-4 font-semibold text-iit-blue'>{item.activity}</td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center text-iit-blue/70'>
                        <MapPin className='w-4 h-4 min-h-4 min-w-4 mr-2 text-iit-gold' />
                        {item.venue}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className='md:hidden space-y-4'>
            {schedule.map((item, index) => (
              <div key={index} className='iit-card p-6 animate-slide-up'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center text-iit-blue font-medium text-xs'>
                    <Calendar className='w-4 h-4 mr-2 text-iit-gold' />
                    {item.date}
                  </div>
                  <div className='flex items-center text-iit-blue font-medium text-xs'>
                    <Clock className='w-4 h-4 mr-2 text-iit-gold' />
                    {item.time}
                  </div>
                </div>

                <h3 className='font-bold text-iit-blue text-lg mb-2'>{item.activity}</h3>

                <div className='flex items-start text-iit-blue/70 mb-3'>
                  <MapPin className='w-4 h-4 mr-2 text-iit-gold mt-1 flex-shrink-0' />
                  <span className='text-sm'>{item.venue}</span>
                </div>

                <p className='text-iit-blue/80 text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
