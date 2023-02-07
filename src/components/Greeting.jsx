import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div class="mb-12 text-center">
      <h1 class="text-2xl mb-2">{greeting}!</h1>
      <h2 class="text-lg mb-4">Danke für deinen Besuch!</h2>
      <button
        class="h-10 w-32 text-base outline outline-2 outline-amber-200 p-1.5 hover:bg-amber-100 rounded-lg"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
