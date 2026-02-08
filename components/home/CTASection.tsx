import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Let our team of digital marketing experts create a customized strategy
          that helps your business reach its full potential. Get started with a
          free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="secondary" size="lg">
            Schedule a Consultation
          </Button>
          <Button href="/packages" variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
            View Our Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
