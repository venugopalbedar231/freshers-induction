import { Clock, MapPin, Calendar } from 'lucide-react';

const ScheduleSection = () => {
  const schedule = [
    {
      time: "8:30 AM - 9:00 AM",
      activity: "Registration & Check-in",
      venue: "Netaji Auditorium Foyer",
      description: "Collect welcome kits, ID cards, and program materials"
    },
    {
      time: "9:00 AM - 9:30 AM",
      activity: "Welcome Address",
      venue: "Netaji Auditorium",
      description: "Opening ceremony with Director's welcome message"
    },
    {
      time: "9:30 AM - 10:30 AM",
      activity: "Institute Overview",
      venue: "Netaji Auditorium",
      description: "History, vision, and academic excellence of IIT Kharagpur"
    },
    {
      time: "10:30 AM - 11:00 AM",
      activity: "Tea Break",
      venue: "Auditorium Foyer",
      description: "Networking opportunity with refreshments"
    },
    {
      time: "11:00 AM - 12:00 PM",
      activity: "Department Orientation",
      venue: "Respective Departments",
      description: "Meet your department faculty and academic coordinators"
    },
    {
      time: "12:00 PM - 1:00 PM",
      activity: "Academic Procedures",
      venue: "Departmental Halls",
      description: "Course registration, timetables, and academic policies"
    },
    {
      time: "1:00 PM - 2:00 PM",
      activity: "Lunch Break",
      venue: "Student Mess",
      description: "Experience campus dining with fellow students"
    },
    {
      time: "2:00 PM - 4:00 PM",
      activity: "Campus Tour",
      venue: "Campus Wide",
      description: "Guided tour of hostels, library, labs, and recreational facilities"
    },
    {
      time: "4:00 PM - 4:30 PM",
      activity: "Refreshment Break",
      venue: "Technology Students' Gymkhana",
      description: "Short break with snacks and beverages"
    },
    {
      time: "4:30 PM - 6:00 PM",
      activity: "Student Societies Showcase",
      venue: "Open Air Theatre",
      description: "Presentations by technical, cultural, and professional societies"
    },
    {
      time: "6:00 PM - 7:00 PM",
      activity: "Cultural Performances",
      venue: "Open Air Theatre",
      description: "Music, dance, and drama performances by student groups"
    },
    {
      time: "7:00 PM - 7:30 PM",
      activity: "Closing Ceremony",
      venue: "Open Air Theatre",
      description: "Vote of thanks and final announcements"
    }
  ];

  return (
    <section id="schedule" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
              Event Schedule
            </h2>
            <p className="text-lg text-iit-blue/70 max-w-3xl mx-auto mb-8">
              Detailed timeline for the Induction Program - July 25th, 2025
            </p>
            
            {/* Date Highlight */}
            <div className="bg-gradient-to-r from-iit-blue to-iit-gold text-white rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Friday</p>
                  <p className="text-lg font-bold">July 25, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-iit-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading font-bold">Time</th>
                  <th className="px-6 py-4 text-left font-heading font-bold">Activity</th>
                  <th className="px-6 py-4 text-left font-heading font-bold">Venue</th>
                  <th className="px-6 py-4 text-left font-heading font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-light-blue/30 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center text-iit-blue font-medium">
                        <Clock className="w-4 h-4 mr-2 text-iit-gold" />
                        {item.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-iit-blue">
                      {item.activity}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-iit-blue/70">
                        <MapPin className="w-4 h-4 mr-2 text-iit-gold" />
                        {item.venue}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-iit-blue/80">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="iit-card p-6 animate-slide-up">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-iit-blue font-medium">
                    <Clock className="w-4 h-4 mr-2 text-iit-gold" />
                    {item.time}
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-iit-blue text-lg mb-2">
                  {item.activity}
                </h3>
                
                <div className="flex items-center text-iit-blue/70 mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-iit-gold" />
                  {item.venue}
                </div>
                
                <p className="text-iit-blue/80 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-gradient-to-r from-iit-gold/10 to-iit-copper/10 rounded-xl p-8 border border-iit-gold/20">
            <h3 className="text-xl font-heading font-bold text-iit-blue mb-4">
              Schedule Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-iit-blue/80">
              <div>
                <h4 className="font-semibold mb-2">Important Reminders:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Arrive 15 minutes before each session</li>
                  <li>• Carry your admission documents and ID</li>
                  <li>• Wear comfortable shoes for campus tour</li>
                  <li>• Stay hydrated throughout the day</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Schedule Updates:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Check notice boards for any changes</li>
                  <li>• Follow volunteer instructions</li>
                  <li>• Contact help desk for assistance</li>
                  <li>• Keep emergency contacts handy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;