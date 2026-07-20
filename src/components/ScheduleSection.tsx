import { Clock, MapPin, Calendar } from "lucide-react";

const ScheduleSection = () => {
 const schedule = [
  // --- DAY 1: 24-07-2026 ---
  {
    date: "24-07-2026",
    time: "4:00 pm - 5:00 pm",
    activity: "Welcome address by the Director",
    venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
    description: "Prof. Suman Chakraborty"
  },
  {
    date: "24-07-2026",
    time: "5:15 pm - 6:30 pm",
    activity: "Director’s Address to the Parents and Interactions",
    venue: "Kalidas Auditorium (Parents)",
    description: "Director, Dean SA, Dean SWB, Dean HM, President TSG"
  },

  // --- DAY 2: 25-07-2026 ---
  {
    date:"25-07-2026", time:"09:00 am - 09:15 am",
    activity:"Invitation of Dignitaries to the Dias",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Lighting the Lamp"
  },
  {
    date:"25-07-2026", time:"09:15 am - 09:20 am",
    activity:"Setting the Context of the Induction Program",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Prof. Debarghya Chakraborty"
  },
  {
    date:"25-07-2026", time:"09:20 am - 09:35 am",
    activity:"Address by Deputy Director",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Prof. Rintu Banerjee"
  },
  {
    date:"25-07-2026", time:"09:35 am - 09:50 am",
    activity:"Address by Dean Administration",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Prof. Kamal Lochan Panigrahi"
  },
  {
    date:"25-07-2026", time:"09:50 am - 09:55 am",
    activity:"Vote of Thanks",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Prof. Arun Singh"
  },
  {
    date:"25-07-2026", time:"09:55 am - 10:00 am",
    activity:"National Anthem",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:""
  },
  {
    date:"25-07-2026", time:"10:00 am - 10:20 am",
    activity:'"Birth of IIT system, IIT Kharagpur" - Film Show, IIT Today - Film Show',
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"About the Heritage of IIT Kharagpur"
  },
  {
    date:"25-07-2026", time:"10:20 am - 11:00 am",
    activity:"Library, CIC, ERP, Security and other necessary facilities",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Dean Student Affairs"
  },
  {
    date:"25-07-2026", time:"11:00 am - 11:30 am",
    activity:"Wellbeing Activities on campus",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Dean Student Wellbeing"
  },
  {
    date:"25-07-2026", time:"11:30 am - 11:45 am",
    activity:"Know your halls and Wardens",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Dean Hall Management"
  },
  {
    date:"25-07-2026", time:"11:45 am - 12:00 pm",
    activity:"Address by VP, TSG",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:"Vice President, TSG"
  },
  {
    date:"25-07-2026", time:"12:00 pm - 12:45 pm",
    activity:"Cultural Performance",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:""
  },
  {
    date:"25-07-2026", time:"1:15 pm - 3:00 pm",
    activity:"Lunch Break",
    venue:"Respective Halls for students",
    description:""
  },
  {
    date:"25-07-2026", time:"3:00 pm - 5:00 pm",
    activity:"Visit to Department/School/Centres",
    venue:"Respective Department buildings",
    description:"Coordinated by Faculty advisors and Department Heads"
  },
  {
    date:"25-07-2026", time:"7:30 pm - 10:00 pm",
    activity:"Welcome Dinner for the New UG students",
    venue:"Gymkhana",
    description:"Hosted by Honourable Director"
  },

  // --- DAY 3: 26-07-2026 ---
  {
    date:"26-07-2026", time:"9:30 am - 10:15 am",
    activity:"Deans – Introduction to academic activity",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Coordinating Dean"
  },
  {
    date:"26-07-2026", time:"10:15 am - 10:35 am",
    activity:"Career Development Centre",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Prof. Sanjay Gupta"
  },
  {
    date:"26-07-2026", time:"10:35 am - 10:50 am",
    activity:"BCRTH and SPSMH Facilities",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Dr. I. Banerjee"
  },
  {
    date:"26-07-2026", time:"10:50 am - 11:20 am",
    activity:"Introduction to SETU and THRIVE",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Prof. Uday Shankar / Prof. Amita (Pathak) Mahanty"
  },
  {
    date:"26-07-2026", time:"11:20 am - 11:35 am",
    activity:"Introduction to SETU- Counselling Centre",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Mrs. Juliet Karmakar Mondol"
  },
  {
    date:"26-07-2026", time:"11:35 am - 11:50 am",
    activity:"Introduction to ICC and Gender cell",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Prof. Amita (Pathak) Mahanty"
  },
  {
    date:"26-07-2026", time:"11:50 am - 12:00 pm",
    activity:"Rajbhasha",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Dr. Rajeev Kumar Rawat"
  },
  {
    date:"26-07-2026", time:"12:00 pm - 12:05 pm",
    activity:"Animal Welfare",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Prof. Sudeshna Kolay"
  },
  {
    date:"26-07-2026", time:"12:05 pm - 2:00 pm",
    activity:"Lunch Break",
    venue:"Respective Halls for students",
    description:""
  },
  {
    date:"26-07-2026", time:"2:00 pm - 3:00 pm",
    activity:"Gymkhana and facilities- Student Activities, Welfare Societies, Sports and Games Societies, Technology Societies",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"President, TSG"
  },
  {
    date:"26-07-2026", time:"3:00 pm - 4:00 pm",
    activity:"Inspirational talk by Alumnus",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Invited Alumnus"
  },
  {
    date:"26-07-2026", time:"4:00 pm - 5:00 pm",
    activity:"Gymkhana and facilities- Student Activities, Welfare Societies, Sports and Games Societies, Technology Societies",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"President, TSG"
  },
  {
    date:"26-07-2026", time:"5:00 pm - 7:00 pm",
    activity:"Introduction to Cultural Societies & Cultural Program",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums",
    description:"Technology Students' Gymkhana"
  },

  // --- DAY 4: 27-07-2026 ---
  {
    date:"27-07-2026", time:"7:00 am - 7:15 am",
    activity:"Yoga and Wellness Performance",
    venue:"Swami Vivekananda Wellness Centre",
    description:"Prof. Seema Singh & Prof. Richa Chopra"
  },
  {
    date:"27-07-2026", time:"10:00 am - 11:30 am",
    activity:"Motivational speaker",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:""
  },
  {
    date:"27-07-2026", time:"11:30 am - 12:30 pm",
    activity:"Motivational speaker",
    venue:"Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
    description:""
  },
  {
    date:"27-07-2026", time:"02:30 pm - 4:30 pm",
    activity:"Campus Tour- academic area",
    venue:"",
    description:"Student Welfare Group"
  }
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
              4-day schedule for the Induction Program - July 24-27, 2026
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
                  <th className='px-6 py-4 text-left font-bold'>Description</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-light-blue/30 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center text-iit-blue font-medium'>
                        <Calendar className='w-4 h-4 mr-2 text-iit-gold' />
                        {item.date}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
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
                    <td className='px-6 py-4 text-sm text-iit-blue/80'>
                      {item.description}
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

                {item.description && (
                  <p className='text-iit-blue/80 text-sm border-t border-gray-100 pt-2 mt-2'>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;