import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Digital Marketing Agency
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Strategic Digital Marketing That Drives{" "}
            <span className="text-primary-600">Real Growth</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            We help businesses strengthen their online presence through
            data-driven SEO, compelling content, and targeted promotional
            campaigns. Let us build a marketing strategy tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" size="lg">
              View Our Services
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get a Free Consultation
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">150+</p>
              <p className="text-sm text-slate-500 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-500 mt-1">Active Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">5+</p>
              <p className="text-sm text-slate-500 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">95%</p>
              <p className="text-sm text-slate-500 mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
