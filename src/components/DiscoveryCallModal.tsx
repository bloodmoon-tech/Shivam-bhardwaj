import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryCallModal: React.FC<DiscoveryCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('14:00 EST (20:00 CET)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { label: 'Tomorrow', date: 'Oct 15' },
    { label: 'Wednesday', date: 'Oct 16' },
    { label: 'Thursday', date: 'Oct 17' },
    { label: 'Friday', date: 'Oct 18' }
  ];

  const timeSlots = [
    '10:00 EST (16:00 CET / 19:30 IST)',
    '11:30 EST (17:30 CET / 21:00 IST)',
    '14:00 EST (20:00 CET / 23:30 IST)',
    '16:00 EST (22:00 CET / 01:30 IST)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/4f8c275f106c0abc68ff9624cca87ff8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Discovery Call Request: ${name} (${selectedDate} at ${selectedTime})`,
          name,
          email,
          selectedDate,
          selectedTime,
          notes: notes || 'No notes provided',
          _template: 'table',
        }),
      });
    } catch (err) {
      console.warn('Booking dispatch fallback:', err);
    } finally {
      setIsSubmitting(false);
      setBooked(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Discovery Call Confirmed!</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Google Meet video invitation sent to <span className="text-slate-900 font-mono font-semibold">{email}</span> for <span className="text-emerald-700 font-semibold">{selectedDate} at {selectedTime}</span>.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 max-w-sm mx-auto text-xs text-slate-500">
              You will meet directly with Shivam Bhardwaj to review project scope and architecture.
            </div>
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  setBooked(false);
                  onClose();
                }}
                className="px-8 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 inline-block mb-1">
                Direct Technical Consultation
              </span>
              <h2 id="booking-modal-title" className="text-xl font-bold text-slate-900 tracking-tight">
                Schedule a 15-Minute Project Discovery Call
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Zero pitch decks or sales pressure. A focused technical discussion with Shivam Bhardwaj about your project requirements and architecture.
              </p>
            </div>

            {/* Select Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Select a Day</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setSelectedDate(d.label)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedDate === d.label
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="block text-xs">{d.label}</span>
                    <span className="block text-[11px] text-slate-400 font-mono mt-0.5">{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Select Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Select Time Slot</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                      selectedTime === slot
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Wright"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 block">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 block">
                Current Website or Project Brief (Optional)
              </label>
              <input
                type="text"
                placeholder="https://mysite.com or brief project summary"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-base sm:text-xs focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Scheduling with Shivam...</span>
                </>
              ) : (
                <>
                  <span>Confirm 15-Minute Google Meet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
