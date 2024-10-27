import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center bg-no-repeat bg-white dark:bg-black min-h-screen"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="py-12 px-6 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            SkillForge ~ AI Mock Interview
          </h1>
          <p className="mb-10 text-lg font-light text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered interview prep
          </p>
          <div className="flex justify-center mb-10">
            <a
              href="/dashboard"
              className="inline-flex items-center py-3 px-8 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          {/* Testimonials Section */}
          <div className="px-6 mx-auto text-center max-w-screen-md lg:max-w-screen-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What Our Users Are Saying
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  text: "This tool helped me secure my dream job! The AI-generated questions were spot-on.",
                  name: "Reddy Shetty Abhinay, Software Engineer",
                },
                {
                  text: "I felt more confident and prepared for my interviews. It’s a game-changer!",
                  name: "Avireddy Rushikesh, Data Analyst",
                },
                {
                  text: "A fantastic resource! It doubled my interview performance and readiness.",
                  name: "Rushika Suram, Product Manager",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
                >
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    "{testimonial.text}"
                  </p>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
