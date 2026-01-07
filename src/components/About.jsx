import office2 from "../assets/office2.png";
import about11 from "../assets/about11.png";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 via-red-100 to-yellow-50">
      <div className="m-auto max-w-7xl pt-16 pb-16 ">
        <div className="lg:mx-12 mx-4" id="about">
          <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
            <div className="sm:w-1/2">
              <img src={about11} alt="" className="w-full sm:w-11/12 " />
            </div>
            <div className="sm:w-1/2">
              <h2 className="md:text-5xl text-4xl text-headingcolor font-extrabold">
                About Me
              </h2>
              <p className="mt-8 md:pr-8 mb-8 text-gray-800 font-semibold text-lg font-mono">
                I am{" "}
<span className="text-black font-bold">Abhishek Singh</span>, a
software developer with hands-on experience in designing and
developing scalable web applications. I work extensively with{" "}
<span className="text-black font-bold">
  JavaScript, React.js, Next.js, Node.js, Express, MongoDB, and MySQL
</span>,
focusing on modular architecture, RESTful APIs, and performance
optimization across both frontend and backend systems.

<br /> <br />

I enjoy solving system-level problems, improving application
performance, and building reliable, maintainable software with a
strong emphasis on clean code and best engineering practices.

              </p>
              <a href={Resume} download="Abhishek_CV">
                <button
                  type="button"
                  class="px-4 py-3 bg-rose-600 rounded-md text-white outline-none focus:ring-4 focus:ring-rose-400 shadow-lg transform active:scale-x-75 transition-transform  inline-flex"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>

                  <span class="ml-2">Resume.pdf</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
