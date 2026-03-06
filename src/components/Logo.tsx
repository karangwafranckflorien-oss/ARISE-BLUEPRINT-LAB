import React from 'react';

export const Logo: React.FC<{ className?: string; showText?: boolean; light?: boolean }> = ({ 
  className = "h-12", 
  showText = true,
  light = false 
}) => {
  const color = light ? "white" : "#1e3a8a"; // dark-blue
  const accent = "#F27D26"; // accent-orange
  const textColor = light ? "white" : "#1e3a8a";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img 
        src="https://i.imgur.com/kW9NsF3.png" 
        alt="ARISE Logo" 
        className={`h-[125%] w-auto object-contain drop-shadow-xl ${light ? "brightness-0 invert" : ""} -my-2`}
        referrerPolicy="no-referrer"
      />
      
      {showText && (
        <div className="flex flex-col justify-center">
          <span 
            className="font-display font-black text-3xl tracking-tighter leading-none" 
            style={{ color: textColor }}
          >
            ARISE
          </span>
          <span 
            className="text-[10px] uppercase tracking-[0.2em] font-black leading-tight mt-1"
            style={{ color: textColor }}
          >
            Research Blueprint Lab
          </span>
        </div>
      )}
    </div>
  );
};
