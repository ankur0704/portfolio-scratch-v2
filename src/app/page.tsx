export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-400 via-white to-gray-400">
      {/* {hero section} */}
      <section className=" flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className=" font-medium mb-1 text-lg text-gray-400">
          Hello i am Ankur !
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to my porfolio
        </p>

        {/* Role/title */}
        <h2 className="mt-4 text-2xl font-medium text-gray-400 md:text-3xl"> Engineer | Full stack Developer | AI/ML </h2>


        {/* description */}
        <p className="mt-6 text-center text-gray-700 max-w-xl">Passionate about building beautiful web applications and turing ideas into reality with code</p>

        {/* cta buttons */}
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-8 py-3 font-medium text-black transition-all hover:scale-110 hover:bg-gray-200"> View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gray-600 px-8 py-3 font-medium text-black transition-all hover:scale-110 hover:border-white">
            Contact Me

          </a>
        </div>


        {/* social links */}
        <div className="mt-12 flex gap-6">
          <a
            href="https://github.com/ankur0704"
            target="_blank"
            className="text-gray-400 transition-colors hover:text-white">
            Github

          </a>

          <a
            href="https://github.com/ankur0704"
            target="_blank"
            className="text-gray-400 transition-colors hover:text-white">
            LinkedIn

          </a>

          <a
            href="https://github.com/ankur0704"
            target="_blank"
            className="text-gray-400 transition-colors hover:text-white">
            Twitter

          </a>

        </div>

      </section>


      {/* about section */}
      <section id="about" className="min-h-screen bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
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
              <p className="mb-4 text-gray-700">
                Hi, I'm Ankur, Enginner by profession and a passionate developer who loves bilding things for the web.
              </p>
              <p className="mb-4 text-gray-700">
                I specialize in React, Node.js and creating beautiful user experiences. When I'm not coding, you can find me exploring new technologies.
              </p>
              <p className="text-gray-700 font-semibold">
                Currently focused on Full Stack Development and AI/ML.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* skill section */}
      <section id="skills" className="min-h-screen bg-gray-100 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          {/* title */}
          <h2 className=" mb-12 text-center text-3xl font-bold text-gray-900">
            Skills & Technologies
          </h2>

          {/* skills grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">React</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">Next.js</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">TailwindCSS</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">TypeScript</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">MongoDB</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">PostgreSQL</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">Node.js</p>
              </span>
            </div>

            <div className="flex felx-col items-center rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <span className="text-4xl">
                <p className=" mt-3 font-medium text-gray-800">Python</p>
              </span>
            </div>



          </div>
        </div>
      </section>

      {/* project section */}
      <section id="projects" className="min-h-screen bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl">

          {/* title */}
          <h2 className=" mb-4 text-center text-3xl font-bold text-gray-900">
            My Projects
          </h2>
          <p className="text-center mb-12 text-gray-600 font-bold">
            Here are some of my recent works
          </p>


          {/* projects grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* grid 1 */}
            <div className=" group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-all hover:shadow-xl">

              <div className="h-48 bg-gradient-to-br from bg-purple-100 to bg-pink-500">
                screenshot
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">Nike E-commerce Website</h3>
                <p className="mt-2 text-gray-600">A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.</p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TailwindCSS
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Zustand
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    PostgreSQL
                  </span>


                </div>
                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 hover:underline">
                    Live Demo
                  </a>
                  <a href=""
                    className="font-medium text-gray-900 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* grid 2 */}
            <div className=" group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-all hover:shadow-xl">

              <div className="h-48 bg-linear-to-br from bg-purple-100 to bg-pink-500">
                screenshot
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">Nike E-commerce Website</h3>
                <p className="mt-2 text-gray-600">A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.</p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TailwindCSS
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Zustand
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    PostgreSQL
                  </span>


                </div>
                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 hover:underline">
                    Live Demo
                  </a>
                  <a href=""
                    className="font-medium text-gray-900 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* grid 3 */}
            <div className=" group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-all hover:shadow-xl">

              <div className="h-48 bg-linear-to-br from bg-purple-100 to bg-pink-500">
                screenshot
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">Nike E-commerce Website</h3>
                <p className="mt-2 text-gray-600">A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.</p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TailwindCSS
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Zustand
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    PostgreSQL
                  </span>


                </div>
                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 hover:underline">
                    Live Demo
                  </a>
                  <a href=""
                    className="font-medium text-gray-900 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* grid 4 */}
            <div className=" group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-all hover:shadow-xl">

              <div className="h-48 bg-linear-to-br from bg-purple-100 to bg-pink-500">
                screenshot
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">Nike E-commerce Website</h3>
                <p className="mt-2 text-gray-600">A modern, full-stack e-commerce application built with Next.js 15, Postgres (Neon), Drizzle ORM, and Tailwind CSS.</p>

                {/* tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Next.js
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    TailwindCSS
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    Zustand
                  </span>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                    PostgreSQL
                  </span>


                </div>
                {/* links */}
                <div className="mt-6 flex gap-4">
                  <a href="" className="font-medium text-gray-900 hover:underline">
                    Live Demo
                  </a>
                  <a href=""
                    className="font-medium text-gray-900 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* contact section */}
      <section id="contact" className="min-h-screen bg-gray-100 px-4 py-20">
        <div className="mx-auto max-w-2xl">
          {/* title */}
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="mb-12 text-center text-gray-900">
            Have a project in mind? Let's work together!
          </p>

          {/* contact form */}
          <form className="space-y-6">
            <div>
              <label className="mb-2 block font-medium text-gray-700">Name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none " />
            </div>

            {/* email input */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">Email</label>
              <input type="email" placeholder="your@gmail.com" className="border border-gray-300 px-4 py-3 w-full rounded-lg focus:border-gray-900 focus:outline-none" />
            </div>
            {/* message area */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none resize-none"></textarea>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 py-4 font-medium text-white transition-all hover:bg-gray-800">
              Send Message
            </button>

          </form>

          {/* alternative contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">Or reach me directly at</p>
            <a href="mailto:sonavaneankur@gmail.com"
              className="mt-2 block font-medium text-gray-900 hover:underline">sonavaneankur@gmail.com
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}