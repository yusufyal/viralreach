import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/20",
  secondary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-sm shadow-accent-500/20",
  outline:
    "bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
