export default function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c8a000]" />
      <svg width="40" height="16" viewBox="0 0 40 16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="8" r="3" fill="#c8a000" />
        <circle cx="10" cy="8" r="2" fill="#c8a000" opacity="0.6" />
        <circle cx="30" cy="8" r="2" fill="#c8a000" opacity="0.6" />
        <circle cx="4" cy="8" r="1" fill="#c8a000" opacity="0.3" />
        <circle cx="36" cy="8" r="1" fill="#c8a000" opacity="0.3" />
        <path d="M14 8 Q17 4 20 8 Q23 12 26 8" stroke="#c8a000" strokeWidth="1" fill="none" opacity="0.8" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c8a000]" />
    </div>
  );
}
