import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* SVG Icon: magnifying glass with growth arrow */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-600 group-hover:text-primary-700 transition-colors"
      >
        <circle
          cx="15"
          cy="15"
          r="10"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="22.5"
          y1="22.5"
          x2="32"
          y2="32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <polyline
          points="10,20 14,14 18,16 22,10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <polyline
          points="19,10 22,10 22,13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">
        Viral<span className="text-primary-600">Search</span>
      </span>
    </Link>
  );
}
