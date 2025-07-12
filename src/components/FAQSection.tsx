import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Induction Program?",
      answer: "The Induction Program is a comprehensive orientation designed to help new students transition smoothly into academic life at IIT Kharagpur. It includes welcome ceremonies, campus tours, academic orientation, and cultural activities to familiarize you with the institute's culture and facilities."
    },
    {
      question: "Is attendance mandatory for the Induction Program?",
      answer: "Yes, attendance is mandatory for all first-year students. The program contains essential information about academic procedures, campus facilities, and important administrative processes that are crucial for your successful journey at IIT KGP."
    },
    {
      question: "What should I bring to the Induction Program?",
      answer: "Please bring your admission documents, ID proof (Aadhar card or passport), passport-size photographs, and any medical documents if applicable. Wear comfortable clothing and shoes suitable for walking during campus tours."
    },
    {
      question: "Where is Netaji Auditorium located?",
      answer: "Netaji Auditorium is located in the heart of the IIT Kharagpur campus, near the main administrative building. Detailed campus maps will be provided during registration, and volunteers will be available to guide you to the venue."
    },
    {
      question: "Will food be provided during the program?",
      answer: "Yes, lunch and refreshments will be provided as part of the program. You'll experience the campus dining facilities and have the opportunity to interact with fellow students during meal times."
    },
    {
      question: "How can I contact volunteers or get help during the program?",
      answer: "Volunteers will be stationed at key locations throughout the campus wearing identification badges. You can also contact the help desk at the registration area or use the emergency contact numbers provided in your welcome kit."
    },
    {
      question: "What if I have special accommodation needs?",
      answer: "Please contact the Student Welfare office in advance if you have any special accommodation needs or accessibility requirements. We are committed to ensuring all students can fully participate in the induction program."
    },
    {
      question: "Can parents attend the Induction Program?",
      answer: "The induction program is specifically designed for students. While parents are welcome on campus, the activities are student-focused to encourage independence and peer interaction. Separate sessions for parents may be organized if announced."
    },
    {
      question: "What happens if I miss the Induction Program?",
      answer: "If you miss the program due to unavoidable circumstances, please contact the Academic Section immediately. Make-up sessions may be arranged, but it's important to attend as the program covers essential information for new students."
    },
    {
      question: "How do I access campus WiFi and other facilities?",
      answer: "Information about accessing campus WiFi, library services, ERP portal, and other facilities will be provided during the induction program. You'll receive login credentials and instructions during the registration process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-soft-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-iit-blue/70 max-w-2xl mx-auto">
              Find answers to common questions about the Induction Program. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-iit-blue/10 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-blue/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-heading font-semibold text-iit-blue pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-iit-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-iit-gold flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="border-t border-iit-blue/10 pt-4">
                      <p className="text-iit-blue/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-iit-blue/10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-iit-blue/10 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-iit-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-iit-blue mb-4">
                Still Have Questions?
              </h3>
              <p className="text-iit-blue/70 mb-6">
                Our support team is here to help. Reach out to us for any additional questions 
                or concerns about the induction program.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-iit-primary">
                  Contact Support
                </button>
                <button className="px-6 py-3 border-2 border-iit-blue text-iit-blue rounded-lg font-medium hover:bg-iit-blue hover:text-white transition-colors duration-300">
                  Email Us
                </button>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 bg-gradient-to-r from-iit-gold/10 to-iit-copper/10 rounded-xl p-6 border border-iit-gold/20">
            <h4 className="font-heading font-bold text-iit-blue mb-3">Quick Tips:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-iit-blue/80">
              <div>
                <p>• Arrive early to avoid rush and get oriented</p>
                <p>• Keep all important documents in one folder</p>
              </div>
              <div>
                <p>• Stay hydrated and take breaks when needed</p>
                <p>• Don't hesitate to ask volunteers for help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;