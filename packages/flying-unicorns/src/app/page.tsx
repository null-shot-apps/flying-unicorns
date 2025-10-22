'use client';

import { useState } from "react";

export default function Home() {
  const [isFlying, setIsFlying] = useState(false);

  const triggerUnicornFlight = () => {
    setIsFlying(true);
    // Reset animation after it completes
    setTimeout(() => setIsFlying(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
      {/* Vibrant animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 bg-green-400 rounded-full opacity-35 animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-pink-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-indigo-400 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Flying Unicorn - hidden initially, flies from bottom-left to top-right */}
      {isFlying && (
        <div className="flying-unicorn-diagonal">
          🦄
          <span className="sparkle">✨</span>
          <span className="sparkle">⭐</span>
          <span className="sparkle">✨</span>
        </div>
      )}

      {/* Main Content - Just the button */}
      <div className="z-10">
        <button
          onClick={triggerUnicornFlight}
          disabled={isFlying}
          className="magical-button text-2xl px-12 py-6"
        >
          {isFlying ? '🌟 Flying...' : '🦄 Make Unicorn Fly!'}
        </button>
      </div>
    </main>
  );
}




