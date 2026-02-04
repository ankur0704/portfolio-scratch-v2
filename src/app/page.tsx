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

    </main>
  )
}