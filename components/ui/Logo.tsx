import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* SVG Icon: growth chart with upward arrow */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-600 group-hover:text-primary-700 transition-colors"
      >
        <rect
          x="3"
          y="3"
          width="30"
          height="30"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <polyline
          points="9,24 15,17 20,20 27,11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <polyline
          points="23,11 27,11 27,15"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">
        HNH <span className="text-primary-600">Media</span>
      </span>
    </Link>
  );
}
