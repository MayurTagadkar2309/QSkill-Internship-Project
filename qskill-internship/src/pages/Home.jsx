import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Hero Section */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-extrabold mb-4">
            QSkill Internship Project
          </h1>

          <p className="text-gray-300 text-1xl">
            Professional React + Tailwind Utility Suite
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Translator */}

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all duration-300">

            <h2 className="text-4xl font-bold mb-4">
              🌍 Text Translator
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Translate text into multiple languages instantly with
              real-time translation support.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm">
                  Languages
                </h4>

                <p className="text-1xl font-bold">
                  5+
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm">
                  Accuracy
                </h4>

                <p className="text-1xl font-bold">
                  99%
                </p>
              </div>

            </div>

            <Link to="/translator">

             <div className="text-center">
  <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl text-lg font-semibold">
    Launch Translator
  </button>
</div>

            </Link>

          </div>

          {/* Generator */}

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-all duration-300">

            <h2 className="text-4xl font-bold mb-4">
              🔐 String Generator
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Generate secure random strings for passwords,
              tokens and unique IDs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm">
                  Security
                </h4>

                <p className="text-1xl font-bold">
                  High
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm">
                  Speed
                </h4>

                <p className="text-1xl font-bold">
                  Instant
                </p>
              </div>

            </div>

            <Link to="/generator">

             <div className="text-center">
  <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl text-lg font-semibold">
    Start Generating
  </button>
</div>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;