import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    { code: "hi", name: "Hindi" },
    { code: "mr", name: "Marathi" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "zh-cn", name: "Chinese" },
  ];

  const translateText = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/translate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            target: language,
          }),
        }
      );

      const data = await response.json();
      setTranslated(data.translatedText);
    } catch (error) {
      console.log(error);
      setTranslated("Translation Failed");
    } finally {
      setLoading(false);
    }
  };

  const clearText = () => {
    setText("");
    setTranslated("");
    setCopied(false);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const copyTranslation = () => {
    navigator.clipboard.writeText(translated);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-8 text-white">

      {/* Header */}

      <div className="max-w-5xl mx-auto mb-10">

        <h1 className="text-4xl font-bold flex items-center gap-3">
          🌍 Text Translator
        </h1>

        <p className="text-gray-300 mt-3">
          Translate English text into multiple languages instantly.
        </p>

      </div>

      {/* Main Section */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        

        {/* Left Box */}

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden">

          <div className="p-5 flex justify-between">

            <span className="font-semibold text-gray-300 uppercase">
              Source: English
            </span>

            <div className="flex gap-4 text-xl">

              <button
                onClick={copyText}
                className="hover:scale-110 transition"
              >
                ⎘
              </button>

              <button
                onClick={clearText}
                className="hover:scale-110 transition"
              >
                🗑️
              </button>

            </div>

          </div>

          <textarea
            rows="10"
            className="w-full bg-transparent outline-none resize-none px-5 text-lg text-white"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <p className="text-right text-gray-400 px-5 pb-2">
            {text.length} Characters
          </p>

          <div className="p-5 flex gap-4">

            {/* Custom Dropdown */}

            <div className="relative flex-1">

              <button
                onClick={() =>
                  setShowLanguages(!showLanguages)
                }
                className="w-full bg-white/10 border border-white/20 rounded-xl p-3 flex justify-between items-center hover:border-indigo-400 transition-all duration-300"
              >
                <span>
                  {
                    languages.find(
                      (lang) =>
                        lang.code === language
                    )?.name
                  }
                </span>

                <span>
                  {showLanguages ? "▲" : "▼"}
                </span>

              </button>

              {showLanguages && (

                <div className="absolute bottom-full mb-2 left-0 w-full bg-slate-900 border border-white/20 rounded-xl overflow-hidden z-50 shadow-2xl">

                  {languages.map((lang) => (

                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguages(false);
                      }}
                      className={`w-full text-left px-4 py-3 transition-all duration-300 hover:bg-indigo-600 ${
                        language === lang.code
                          ? "bg-indigo-600"
                          : ""
                      }`}
                    >
                      {lang.name}
                    </button>

                  ))}

                </div>

              )}

            </div>

            <button
              onClick={translateText}
              className="bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 px-8 rounded-xl font-semibold"
            >
              Translate
            </button>

          </div>

        </div>

       {/* Right Box */}

<div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden">

  <div className="bg-white/5 border-b border-white/10 p-5 font-semibold text-2xl">
    Translated Result
  </div>

  <div className="h-[350px] p-6">

```
{loading ? (

  <div className="h-full flex items-center justify-center">

    <div className="text-center">

      <div className="text-5xl animate-spin">
        ⏳
      </div>

      <p className="mt-4 text-lg">
        Translating...
      </p>

    </div>

  </div>

) : translated ? (

  <div className="w-full h-full flex flex-col">

    <div className="mb-4 bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-3 rounded-xl">
      ✅ Translation Successful
    </div>

    <div className="bg-white/5 border border-white/10 rounded-xl p-5 h-[190px] overflow-y-auto">

      <p className="text-2xl text-white break-words whitespace-pre-wrap">
        {translated}
      </p>

    </div>

    <div className="flex justify-between items-center mt-4">

      <span className="text-gray-300">
        {translated.length} Characters
      </span>

      <button
        onClick={copyTranslation}
        className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg"
      >
        Copy Translation
      </button>

    </div>

    {copied && (
      <p className="text-green-400 text-center mt-3">
        ✅ Translation Copied Successfully!
      </p>
    )}

  </div>

) : (

  <div className="h-full flex items-center justify-center">

    <div className="text-center">

      <div className="text-5xl mb-4">
        ✨
      </div>

      <h3 className="font-semibold text-2xl">
        Ready to Translate
      </h3>

      <p className="text-gray-300 mt-2">
        Translation results will appear here
      </p>

    </div>

  </div>

)}
```

  </div>

</div>
</div>

      {/* Stats */}

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-10">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-gray-300">
            Supported Languages
          </h3>
          <p className="text-2xl font-bold mt-3">
            5+
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-gray-300">
            Translation Speed
          </h3>
          <p className="text-2xl font-bold mt-3">
            Instant
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-gray-300">
            Accuracy
          </h3>
          <p className="text-2xl font-bold mt-3">
            High
          </p>
        </div>

      </div>

    </div>
  );
}

export default Translator;