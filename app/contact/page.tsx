import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Aanmelden() {
  return (
    <section className="py-16 bg-avon-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-avon-black mb-8 text-center">Aanmelden</h1>
        <div className="bg-avon-black rounded-lg shadow-lg p-8 text-avon-white mb-8">
          <h2 className="text-avon-yellow text-2xl font-bold mb-4">Eerst gratis meetrainen!</h2>
          <p className="mb-4">
            De eerste vier weken mag je gratis op proef meetrainen. Als je daarna besluit lid te worden, kun je je via het onderstaande formulier aanmelden. De aanmelddatum geldt als startdatum van je lidmaatschap bij AVON.
          </p>
          <ul className="list-disc ml-6 mb-4 text-avon-yellow">
            <li>Bij aanvang van het lidmaatschap wordt €5,00 inschrijfgeld afgeschreven.</li>
            <li>De KNAU-bijdrage voor het lopende jaar wordt ook in rekening gebracht.</li>
            <li>Voor jeugdleden wordt altijd een wedstrijdlicentie aangevraagd.</li>
          </ul>
          <p className="mb-2 text-sm text-avon-white/80">
            Heb je vragen? Neem gerust contact met ons op!
          </p>
        </div>
        <form id="aanmelden" className="bg-avon-black rounded-lg shadow-lg p-8 text-avon-white mb-8 space-y-6">
          <h2 className="text-avon-yellow text-2xl font-bold mb-4">Aanmeld- en contactformulier</h2>
          <div>
            <label className="block mb-1 font-bold" htmlFor="name">Naam</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded text-avon-black" required />
          </div>
          <div>
            <label className="block mb-1 font-bold" htmlFor="email">E-mailadres</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded text-avon-black" required />
          </div>
          <div>
            <label className="block mb-1 font-bold" htmlFor="phone">Telefoonnummer</label>
            <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 rounded text-avon-black" />
          </div>
          <div>
            <label className="block mb-1 font-bold" htmlFor="age">Leeftijdscategorie</label>
            <select id="age" name="age" className="w-full px-3 py-2 rounded text-avon-black">
              <option value="">Maak een keuze</option>
              <option value="pupil">Pupillen</option>
              <option value="junior">Junioren</option>
              <option value="senior">Senioren</option>
              <option value="overig">Overig</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-bold" htmlFor="message">Bericht</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 rounded text-avon-black" placeholder="Heb je vragen of opmerkingen? Vul ze hier in."></textarea>
          </div>
          <button type="submit" className="bg-avon-yellow text-avon-black px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors w-full">Verzenden</button>
        </form>
        <div className="bg-avon-black rounded-lg shadow-lg p-8 text-avon-white">
          <h2 className="text-avon-yellow text-2xl font-bold mb-4">Contactgegevens</h2>
          <div className="mb-4 flex items-start">
            <FaMapMarkerAlt className="text-avon-yellow mt-1 mr-3 flex-shrink-0" />
            <span>
              AVON Heerlen<br />
              Sportpark De Dem<br />
              6419 XC Heerlen
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhone className="text-avon-yellow mr-3 flex-shrink-0" />
            <span>045-1234567</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-avon-yellow mr-3 flex-shrink-0" />
            <a href="mailto:info@avonheerlen.nl" className="underline hover:text-avon-yellow">info@avonheerlen.nl</a>
          </div>
        </div>
      </div>
    </section>
  );
} 