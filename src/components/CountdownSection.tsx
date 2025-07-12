import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to July 25, 2025
    const targetDate = new Date('2025-07-25T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const CountdownCard = ({ value, label }: { value: number; label: string }) => (
    <div className="iit-card p-6 text-center animate-scale-in">
      <div className="text-4xl md:text-6xl font-heading font-bold text-iit-blue mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm md:text-lg font-medium text-iit-blue/70 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section id="countdown" className="py-16 bg-gradient-to-b from-background to-soft-blue">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
            Countdown to Induction
          </h2>
          <p className="text-lg text-iit-blue/70 max-w-2xl mx-auto">
            The countdown has begun! Get ready for an unforgettable experience at IIT Kharagpur.
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
          <CountdownCard value={timeLeft.days} label="Days" />
          <CountdownCard value={timeLeft.hours} label="Hours" />
          <CountdownCard value={timeLeft.minutes} label="Minutes" />
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-iit-blue mb-4">
              Save the Date
            </h3>
            <p className="text-xl text-iit-gold font-semibold">25th July 2025</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-iit-blue/10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-iit-blue" />
              </div>
              <div>
                <p className="font-semibold text-iit-blue">Date</p>
                <p className="text-iit-blue/70">Friday, July 25th</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-iit-blue/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-iit-blue" />
              </div>
              <div>
                <p className="font-semibold text-iit-blue">Time</p>
                <p className="text-iit-blue/70">9:00 AM Onwards</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-iit-blue/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-iit-blue" />
              </div>
              <div>
                <p className="font-semibold text-iit-blue">Venue</p>
                <p className="text-iit-blue/70">Netaji Auditorium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;