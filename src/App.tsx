import React from "react";
import "./App.css";
import Luciano from "./Luciano";
import LucianoCoverLetter from "./LucianoCoverLetter";
import LucianoEnglish from "./LucianoEnglish";

// Select the document with `?doc=<key>` (used by `yarn pdf`).
const documents: Record<string, React.FC> = {
  "luciano-en": LucianoEnglish,
  luciano: Luciano,
  "cover-letter": LucianoCoverLetter,
};

const defaultDocument = "luciano-en";

function App() {
  const key = new URLSearchParams(window.location.search).get("doc");
  const Document = documents[key ?? defaultDocument] ?? documents[defaultDocument];

  return (
    <div className="flex-1 w-full">
      <Document />
    </div>
  );
}

export default App;
