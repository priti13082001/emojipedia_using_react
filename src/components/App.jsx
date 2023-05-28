import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(oneEntry) {
  return (
    <Entry
      key={oneEntry.id}
      id={oneEntry.id}
      emoji={oneEntry.emoji}
      name={oneEntry.name}
      meaning={oneEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
