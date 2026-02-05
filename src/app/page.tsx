export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-gray-400 via-white to-gray-400 dark:from-black dark:via-neutral-900 dark:to-black">
      {/* {hero section} */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="font-medium mb-1 text-lg text-gray-400">
          Hello i am Ankur !
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Welcome to my porfolio
        </p>

        {/* Role/title */}
        <h2 className="mt-4 text-2xl font-medium text-gray-400 dark:text-gray-300 md:text-3xl">
          Engineer | Full stack Developer | AI/ML
        </h2>

        {/* description */}
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-xl">
          Passionate about building beautiful web applications and turing ideas into reality with code
        </p>

        {/* cta buttons */}
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white dark:bg-gray-800 px-8 py-3 font-medium text-black dark:text-white transition-all hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gray-600 dark:border-gray-400 px-8 py-3 font-medium text-black dark:text-white transition-all hover:scale-110 hover:border-white"
          >
            Contact Me
          </a>
        </div>

        {/* social links */}
        <div className="mt-12 flex gap-6">
          <a
            href="https://github.com/ankur0704"
            target="_blank"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/ankur-sonavane"
            target="_blank"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/Ankur77s"
            target="_blank"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            Twitter
          </a>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="min-h-screen bg-white dark:bg-black px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* image + text */}
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex justify-center">
              <div className="overflow-hidden animate-float rounded-full">
                {/* image here */}
                <img src="/logo.jpg" width={256} height={256} className="object-cover" />
              </div>
            </div>
            <div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Hi, I'm Ankur, Enginner by profession and a passionate developer who loves bilding things for the web.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                I specialize in React, Node.js and creating beautiful user experiences. When I'm not coding, you can find me exploring new technologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Currently focused on Full Stack Development and AI/ML.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* skill section */}
      <section id="skills" className="min-h-screen bg-gray-100 dark:bg-neutral-900 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          {/* title */}
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>

          {/* skills grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">React</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">Next.js</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">TailwindCSS</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">TypeScript</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">MongoDB</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">PostgreSQL</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">Node.js</p>
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className="mt-3 font-medium text-gray-800 dark:text-white">Python</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
      <section id="projects" className="min-h-screen bg-white dark:bg-black px-4 py-20">
        <div className="mx-auto max-w-3xl">
          {/* title */}
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-center mb-12 text-gray-600 dark:text-gray-400 font-bold">
            Here are some of my recent works
          </p>

          {/* projects grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* grid 1 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow-md transition-all hover:shadow-xl">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-500">
                screenshot
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nike E-commerce Website</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.
                </p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-neutral-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    TailwindCSS
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    Zustand
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    PostgreSQL
                  </span>
                </div>

                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    Live Demo
                  </a>
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* grid 2 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow-md transition-all hover:shadow-xl">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-500">
                screenshot
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Two</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.
                </p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    TailwindCSS
                  </span>
                </div>

                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    Live Demo
                  </a>
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* grid 3 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow-md transition-all hover:shadow-xl">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-500">
                screenshot
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Three</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.
                </p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    React
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    Node.js
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    MongoDB
                  </span>
                </div>

                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    Live Demo
                  </a>
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* grid 4 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-50 dark:bg-neutral-900 shadow-md transition-all hover:shadow-xl">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-500">
                screenshot
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Four</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.
                </p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    Python
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    TensorFlow
                  </span>
                  <span className="rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                    FastAPI
                  </span>
                </div>

                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    Live Demo
                  </a>
                  <a href="" className="font-medium text-gray-900 dark:text-white hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section id="contact" className="min-h-screen bg-gray-100 dark:bg-neutral-900 px-4 py-20">
        <div className="mx-auto max-w-2xl">
          {/* title */}
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mb-12 text-center text-gray-900 dark:text-gray-300">
            Have a project in mind? Let's work together!
          </p>

          {/* contact form */}
          <form className="space-y-6">
            <div>
              <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {/* email input */}
            <div>
              <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="w-full rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {/* message area */}
            <div>
              <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-gray-400 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 dark:bg-white py-4 font-medium text-white dark:text-gray-900 transition-all hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>

          {/* alternative contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">Or reach me directly at</p>
            <a
              href="mailto:sonavaneankur@gmail.com"
              className="mt-2 block font-medium text-gray-900 dark:text-white hover:underline"
            >
              sonavaneankur@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}