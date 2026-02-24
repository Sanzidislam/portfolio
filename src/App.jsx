function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* Navbar */}

      <nav className="p-6 flex justify-between">
        <h1 className="text-2xl font-bold">
          Sanzid
        </h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero */}

      <section className="text-center mt-32">

        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Sanzid
        </h1>

        <p className="text-xl text-gray-400">
          Software Engineer | Full Stack Developer
        </p>

      </section>


      {/* About */}

      <section id="about" className="mt-40 max-w-3xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-7">

          I am a Computer Science student at University of Chittagong.
          I build full-stack applications using React, Node.js and MySQL.
          Currently working on Computer Vision and OCR systems.

        </p>

      </section>


      {/* Projects */}

      <section id="projects" className="mt-40 max-w-5xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Event Management System
            </h3>

            <p className="text-gray-400 mt-3">
              React + Node.js + MySQL event platform
            </p>
          </div>


          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Flutter eCommerce App
            </h3>

            <p className="text-gray-400 mt-3">
              Mobile shopping app with Firebase Auth
            </p>
          </div>


          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Book Sharing Platform
            </h3>

            <p className="text-gray-400 mt-3">
              Full stack book exchange platform
            </p>
          </div>


          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              OCR Research Project
            </h3>

            <p className="text-gray-400 mt-3">
              TrOCR based OCR for low quality images
            </p>
          </div>

        </div>

      </section>


      {/* Contact */}

      <section id="contact" className="mt-40 text-center pb-20">

        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400">
          sanzid@email.com
        </p>

      </section>


    </div>
  )
}

export default App
