/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Guests from "./components/Guests";
import VideoSection from "./components/VideoSection";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Sponsorship from "./components/Sponsorship";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-brand-dark text-white/90">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <VideoSection />
        <Team />
        <Partners />
        <Guests />
        <Sponsorship />
        <Episodes />
      </main>
      <Footer />
    </div>
  );
}



