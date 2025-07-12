import { Download, Calendar, AlertTriangle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnnouncementsSection = () => {
  const announcements = [
    {
      icon: Download,
      title: "Induction Handbook",
      description: "Download the complete guide for induction program activities and schedules",
      type: "download",
      urgent: false,
      link: "#"
    },
    {
      icon: Calendar,
      title: "Master Timetable",
      description: "Detailed schedule of all induction program events and timings",
      type: "schedule",
      urgent: false,
      link: "#"
    },
    {
      icon: AlertTriangle,
      title: "Important Notice",
      description: "All freshers must report to the registration desk by 8:30 AM on July 25th",
      type: "notice",
      urgent: true,
      link: "#"
    },
    {
      icon: Users,
      title: "Accommodation Guidelines",
      description: "Check hostel allocation and room assignment procedures",
      type: "info",
      urgent: false,
      link: "#"
    }
  ];

  const getCardStyle = (urgent: boolean) => {
    return urgent 
      ? "iit-card border-l-4 border-red-500 bg-red-50/50" 
      : "iit-card border-l-4 border-iit-blue";
  };

  const getIconColor = (urgent: boolean) => {
    return urgent ? "text-red-500" : "text-iit-gold";
  };

  return (
    <section id="announcements" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
              Announcements
            </h2>
            <p className="text-lg text-iit-blue/70 max-w-2xl mx-auto">
              Stay updated with the latest information and important notices for the induction program.
            </p>
          </div>

          {/* Announcements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {announcements.map((announcement, index) => (
              <div key={index} className={`${getCardStyle(announcement.urgent)} p-6 animate-slide-up`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-iit-blue/10 flex items-center justify-center flex-shrink-0`}>
                    <announcement.icon className={`w-6 h-6 ${getIconColor(announcement.urgent)}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-heading font-bold text-iit-blue">
                        {announcement.title}
                      </h3>
                      {announcement.urgent && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                          URGENT
                        </span>
                      )}
                    </div>
                    
                    <p className="text-iit-blue/80 mb-4 leading-relaxed">
                      {announcement.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="text-iit-blue border-iit-blue hover:bg-iit-blue hover:text-white"
                    >
                      {announcement.type === 'download' ? 'Download' : 'View Details'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-iit-blue/5 to-iit-gold/5 rounded-xl p-8 border border-iit-blue/10">
              <h3 className="text-xl font-heading font-bold text-iit-blue mb-4">
                Stay Connected
              </h3>
              <p className="text-iit-blue/70 mb-6">
                For the latest updates and announcements, follow our official channels and check this page regularly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-iit-primary">
                  Official Website
                </Button>
                <Button variant="outline" className="text-iit-blue border-iit-blue hover:bg-iit-blue hover:text-white">
                  Student Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;