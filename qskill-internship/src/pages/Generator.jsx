import { useState } from "react";

function Generator() {
  const [length, setLength] = useState(16);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generateString = () => {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-={}[]<>?/";

    if (!chars) {
      alert("Select at least one option");
      return;
    }

    let output = "";

    for (let i = 0; i < length; i++) {
      output += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setResult(output);
  };

  const clearResult = () => {
    setResult("");
    setCopied(false);
  };

  const copyResult = () => {
    if (!result) return;

    navigator.clipboard.writeText(result);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-8 text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

        {/* LEFT PANEL */}

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 max-w-[700px] mx-auto mt-8 w-full">

          <h1 className="text-3xl font-bold mb-3">
            Random String Generator
          </h1>

          <p className="text-gray-300 mb-6 text-sm">
            Configure your parameters to create secure random strings for passwords or identifiers.
          </p>

          <div className="mb-8">

            <div className="flex justify-between mb-3">
              <span>String Length</span>

              <span className="text-3xl font-bold text-indigo-400">
                {length}
              </span>
            </div>

            <input
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
               
             <div className="mt-4">
  <div className="flex justify-between mb-2">
    <span>Password Strength</span>

    <span className="font-bold text-indigo-300">
      {length < 12
        ? "Weak"
        : length < 20
        ? "Medium"
        : length < 32
        ? "Strong"
        : "Very Strong"}
    </span>
  </div>

  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
    <div
      className={`h-3 transition-all duration-500 ${
        length < 12
          ? "bg-red-500"
          : length < 20
          ? "bg-yellow-500"
          : length < 32
          ? "bg-green-500"
          : "bg-emerald-600"
      }`}
      style={{
        width:
          length < 12
            ? "25%"
            : length < 20
            ? "50%"
            : length < 32
            ? "75%"
            : "100%",
      }}
    />
  </div>
</div>

          </div>

          <h3 className="uppercase text-sm font-bold text-gray-300 mb-4">
            Character Types
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-8">

            <label className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
              />
              Uppercase
            </label>

            <label className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
              />
              Lowercase
            </label>

            <label className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
              />
              Numbers
            </label>

            <label className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <input
                type="checkbox"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
              />
              Symbols
            </label>

          </div>

          <button
            onClick={generateString}
            className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 py-2 rounded-xl font-semibold"
          >
            🔄 Generate String
          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 max-w-[700px] mx-auto mt-8 w-full">

          <div className="flex justify-between items-center mb-6">

            <h2 className="font-bold uppercase">
              Generated Result
            </h2>

            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
              High Precision
            </span>

          </div>

          <div className="bg-white/10 rounded-2xl p-6 min-h-[180px] flex items-center justify-center">

            <p className="text-2xl font-bold break-all text-center">
              {result || "Generate a string"}
            </p>

          </div>

         <div className="flex justify-between items-center mt-10">

  <div className="bg-white/10 px-4 py-1 rounded-full">
    {result.length} Characters
  </div>

  <div className="flex gap-3">

    <button
  onClick={copyResult}
  className="text-green-400 border border-green-400 px-4 py-1 rounded-full hover:bg-green-400 hover:text-white transition-all duration-300"
>
  Copy String
</button>
      
    <button
      onClick={clearResult}
      className="text-red-400 border border-red-400 px-4 py-1 rounded-full hover:bg-red-400 hover:text-white transition-all duration-300"
    >
      Clear
    </button>

  </div>

</div>

          {copied && (
            <p className="text-green-400 text-center mt-4 font-medium">
              ✅ String Copied Successfully!
            </p>
          )}

          <div className="mt-6 bg-indigo-900/50 rounded-2xl p-5 text-center">

            <h3 className="text-2xl font-bold">
              Secure Utility
            </h3>

            <p className="text-gray-300 mt-2">
              Generate passwords, tokens and IDs instantly.
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM CARD */}

      <div className="max-w-5xl mx-auto mt-8">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 text-green-300">
          🛡️ Local generation: Your strings are created on your device and are never sent to servers.
        </div>

      </div>

    </div>
  );
}

export default Generator;