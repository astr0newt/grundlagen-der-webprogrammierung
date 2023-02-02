import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div class="mb-8">
      <h1 class="text-2xl text-center">
        {greeting} visitor! Thank you for visiting!
      </h1>
      <button
        class="h-10 w-32 text-base outline outline-2 outline-amber-200 p-1.5 hover:bg-amber-100 rounded-lg"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
