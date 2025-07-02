import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 text-center md:text-left">
        {/* Left Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl text-gray-900">
            Build online forms easier than ever
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Create forms without coding, collect data, and provide an
            exceptional experience to your users.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button className="text-base px-6 py-3">Get Started</Button>
            <Button
              variant="outline"
              className="text-base px-6 py-3 flex items-center gap-2"
            >
              View Demo <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative">
          <img
            src="form.png"
            alt="Form preview"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-gray-200"
          />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
