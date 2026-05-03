import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("locationConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("locationConsent", "accepted");
    window.dispatchEvent(new Event("consentResponded"));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("locationConsent", "declined");
    window.dispatchEvent(new Event("consentResponded"));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] flex items-center justify-center pb-4">
      <div className="bg-white/80 backdrop-blur rounded-xl shadow-2xl border border-gray-200 p-4 max-w-lg">
        <p className="text-gray-800 font-sf-pro text-sm leading-relaxed mb-2">
          By clicking Yes, I confirm that I am neither a resident nor a national of the United States or Canada.
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleAccept}
            className="px-2 py-1 bg-[#052a82] hover:bg-[#052a82]/90 text-white font-sf-pro text-xs font-medium rounded transition-colors duration-300"
          >
            Yes
          </button>
          <button
            onClick={handleDecline}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-sf-pro text-xs font-medium rounded transition-colors duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
