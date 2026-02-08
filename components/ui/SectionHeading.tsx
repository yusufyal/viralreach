type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {label && (
        <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
