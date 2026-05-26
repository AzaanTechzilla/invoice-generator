export default function Taxi6Logo({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="white" stroke="#1a5c2a" strokeWidth="3" />
      
      {/* German flag arc segments */}
      <path d="M 50 4 A 46 46 0 0 1 96 50 L 50 50 Z" fill="#333" />
      <path d="M 96 50 A 46 46 0 0 1 50 96 L 50 50 Z" fill="#c8a000" />
      <path d="M 50 96 A 46 46 0 0 1 4 50 L 50 50 Z" fill="#cc0000" />
      <path d="M 4 50 A 46 46 0 0 1 50 4 L 50 50 Z" fill="#333" />
      
      {/* White inner circle */}
      <circle cx="50" cy="50" r="34" fill="white" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#1a5c2a" strokeWidth="2" />
      
      {/* Taxi car */}
      <rect x="28" y="44" width="44" height="14" rx="3" fill="#c8a000" />
      <rect x="32" y="37" width="30" height="11" rx="2" fill="#c8a000" />
      <rect x="34" y="39" width="11" height="7" rx="1" fill="#87CEEB" />
      <rect x="48" y="39" width="11" height="7" rx="1" fill="#87CEEB" />
      <circle cx="37" cy="59" r="4" fill="#333" />
      <circle cx="37" cy="59" r="2" fill="#999" />
      <circle cx="63" cy="59" r="4" fill="#333" />
      <circle cx="63" cy="59" r="2" fill="#999" />
      
      {/* TAXI6 text */}
      <text x="50" y="74" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a5c2a" fontFamily="Arial">TAXI6</text>
      <text x="50" y="82" textAnchor="middle" fontSize="6" fill="#1a5c2a" fontFamily="Arial">SCHWABACH</text>
    </svg>
  );
}
