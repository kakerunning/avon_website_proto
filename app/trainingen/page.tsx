"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaUsers, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface TrainingSession {
  plaats: string;
  tijd: string;
  categorie: string;
  open?: string;
  sluiting?: string;
  opmerkingen?: string;
}

const Trainingen = () => {
  const [openDay, setOpenDay] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const fadeInElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeInElementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      fadeInElementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [mounted]);

  const trainingSchedule: Record<string, TrainingSession[]> = {
    "Zondag": [
      { plaats: "Schrieversheide", tijd: "10:00 - 11:30", categorie: "Junioren / Senioren", opmerkingen: "1 februari t/m 31 oktober (start 1e weekend februari)" },
      { plaats: "Schrieversheide", tijd: "10:15 - 11:45", categorie: "Junioren / Senioren", opmerkingen: "1 november t/m 30 januari (start 1e weekend november)" },
    ],
    "Maandag": [
      { plaats: "Emmastadion", tijd: "17:30 - 20:30", categorie: "Baantraining", open: "17:00", sluiting: "20:30" },
      { plaats: "Weg / Heide", tijd: "19:30 - 20:30", categorie: "Senioren" },
    ],
    "Dinsdag": [
      { plaats: "Emmastadion", tijd: "09:30 - 11:30", categorie: "Recreanten", open: "08:30", sluiting: "12:00" },
      { plaats: "Emmastadion", tijd: "18:00 - 19:00", categorie: "Pupillen", open: "17:30", sluiting: "21:30" },
      { plaats: "Emmastadion", tijd: "19:00 - 20:30", categorie: "Junioren", open: "18:30", sluiting: "21:30" },
      { plaats: "Emmastadion", tijd: "19:00 - 20:30", categorie: "Senioren", open: "18:30", sluiting: "21:30" },
    ],
    "Woensdag": [
      { plaats: "Emmastadion", tijd: "19:30 - 21:00", categorie: "Funrunners / Start to Run", open: "19:00", sluiting: "21:30" },
    ],
    "Donderdag": [
      { plaats: "Emmastadion", tijd: "09:30 - 11:30", categorie: "Recreanten", open: "09:00", sluiting: "12:30" },
      { plaats: "Emmastadion", tijd: "19:00 - 20:30", categorie: "Senioren", open: "18:30", sluiting: "21:30" },
    ],
    "Vrijdag": [
      { plaats: "Emmastadion", tijd: "19:00 - 20:30", categorie: "MILA atleten", open: "18:30", sluiting: "21:30" },
      { plaats: "Emmastadion", tijd: "19:00 - 20:30", categorie: "Parkstad-training", open: "18:30", sluiting: "21:30" },
    ],
    "Zaterdag": [
      { plaats: "Emmastadion", tijd: "10:00 - 11:30", categorie: "Technische training", open: "09:00", sluiting: "12:30" },
      { plaats: "Emmastadion", tijd: "10:00 - 11:30", categorie: "Pupillen", open: "09:00", sluiting: "12:30", opmerkingen: "Vanaf 1e weekend na carnaval tot 1e weekend na 1 november" },
      { plaats: "Schrieversheide", tijd: "10:00 - 11:30", categorie: "Pupillen", open: "09:00", sluiting: "12:30", opmerkingen: "vanaf 1e weekend na 1 november tot 1e weekend na carnaval" },
      { plaats: "Emmastadion", tijd: "10:00 - 11:30", categorie: "Junioren", open: "09:00", sluiting: "12:30", opmerkingen: "1 februari t/m 31 oktober (start 1e weekend februari)" },
      { plaats: "Schrieversheide", tijd: "10:00 - 11:30", categorie: "Junioren", open: "09:00", sluiting: "12:30", opmerkingen: "1 november t/m 30 januari (start 1e weekend november)" },
      { plaats: "Emmastadion", tijd: "09:30 - 11:00", categorie: "Funrunners / Start to Run", open: "09:00", sluiting: "12:30" },
    ],
  };

  const toggleDay = (day: string, e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenDay(openDay === day ? null : day);
  };

  const handleButtonClick = (day: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDay(day, e);
  };

  const handleButtonTouch = (day: string, e: React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDay(day, e);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-avon-black via-gray-900 to-avon-black overflow-hidden">
        <div className='absolute inset-0'>
          <Image
            src='/images/entrance_emma.jpg'
            alt='AVON Training'
            fill
            className='object-cover opacity-60'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-avon-black to-transparent'></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              className="mb-6"
          >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Trainingen
              </h1>
              <div className="w-24 h-1 bg-avon-yellow mx-auto mb-6 rounded-full"></div>
            </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-avon-yellow font-medium leading-relaxed"
          >
              Ontdek onze veelzijdige trainingsmethoden bij AVON Heerlen
          </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction Section */}
        <section
          ref={(el) => {
            fadeInElementsRef.current[0] = el;
          }}
          className={mounted ? "fade-in mb-16" : "mb-16"}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-avon-black mb-8 text-center px-2">
                  Onze Trainingsmethode
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Bij AVON bieden we trainingen die aansluiten op de unieke behoeften van iedere atleet. Of je nu sprint, lange afstanden loopt, springt of werpt – bij ons vind je altijd een passende aanpak.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  De relatie tussen atleet en trainer is gelijkwaardig en persoonlijk, waardoor we flexibel kunnen inspelen op jouw doelen en wensen. Van beginners tot nationale toppers, van eerste 5 km tot sub-3 marathonlopers: iedereen vindt bij AVON een inspirerende en professionele trainingsomgeving.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="text-avon-yellow" />
                    <span className="font-semibold">Alle niveaus</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-avon-yellow" />
                    <span className="font-semibold">Emmastadion & Schrieversheide</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-avon-yellow" />
                    <span className="font-semibold">7 dagen per week</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/trainig_pic.jpg"
                  alt="Training bij AVON"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Training Categories Grid */}
        <section
          ref={(el) => {
            fadeInElementsRef.current[1] = el;
          }}
          className={mounted ? "fade-in mb-16" : "mb-16"}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-avon-black mb-8 text-center px-2">
            Onze Trainingscategorieën
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Senioren / Junioren */}
            <div
              ref={(el) => {
                fadeInElementsRef.current[2] = el;
              }}
              className={mounted ? "fade-in relative bg-gradient-to-br from-avon-black to-gray-900 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all overflow-hidden min-h-[400px] flex flex-col" : "relative bg-gradient-to-br from-avon-black to-gray-900 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all overflow-hidden min-h-[400px] flex flex-col"}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/track.jpeg"
                  alt="Senioren/Junioren training"
                  fill
                  className="object-cover opacity-60"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-avon-black/70 via-gray-900/60 to-avon-black/70"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-avon-yellow rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-avon-black text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Senioren / Junioren</h3>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4 flex-1">
                  Hier dagen we je uit om sneller, hoger en verder te gaan dan ooit tevoren. Of je nu je persoonlijk record wilt verbeteren of droomt van een podiumplek op het NK – bij AVON train je met passie, expertise en plezier.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Ben jij klaar om samen met ons de grenzen van jouw atletiekwereld te verleggen? Jouw potentieel is groter dan je denkt. Ga samen met ons voor het allerhoogste!
                </p>
              </div>
            </div>

            {/* Pupillen */}
            <div
              ref={(el) => {
                fadeInElementsRef.current[3] = el;
              }}
              className={mounted ? "fade-in relative bg-gradient-to-br from-avon-yellow to-yellow-400 text-avon-black rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all overflow-hidden min-h-[400px] flex flex-col" : "relative bg-gradient-to-br from-avon-yellow to-yellow-400 text-avon-black rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all overflow-hidden min-h-[400px] flex flex-col"}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/AVON_kids_start.jpeg"
                  alt="Pupillen training"
                  fill
                  className="object-cover opacity-70"
                />
                {/* Light overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-avon-yellow/70 via-yellow-400/60 to-avon-yellow/70"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-avon-black rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-avon-yellow text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pupillen</h3>
                </div>
                <p className="text-avon-black/90 leading-relaxed mb-4 flex-1 font-medium">
                  Voor onze jongste atleten draait het om plezier, veelzijdige ontwikkeling en succeservaringen. In deze belangrijke jaren tot 10 jaar leggen we samen de basis voor motorische vaardigheden, coördinatie en zelfvertrouwen.
                </p>
                <p className="text-avon-black/90 leading-relaxed font-medium">
                  Door kleine overwinningen te vieren, groeit niet alleen het atletisch talent, maar ook het zelfbeeld. AVON biedt een veilige, stimulerende omgeving waarin elk kind zich kan ontwikkelen.
                </p>
              </div>
            </div>

            {/* Recreatief */}
            <div
              ref={(el) => {
                fadeInElementsRef.current[4] = el;
              }}
              className={mounted ? "fade-in relative bg-white border-2 border-avon-yellow rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all overflow-hidden min-h-[400px] flex flex-col" : "relative bg-white border-2 border-avon-yellow rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all overflow-hidden min-h-[400px] flex flex-col"}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/trainig_pic.jpg"
                  alt="Recreatief training"
                  fill
                  className="object-cover opacity-50"
                />
                {/* Light overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/85"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-avon-yellow rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-avon-black text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-avon-black">Recreatief</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 flex-1">
                  Hardlopen leuker maken – dat is het doel! Ook zonder sportervaring kun je bij AVON terecht. Onze trainingen zijn laagdrempelig, gezellig en afgestemd op jouw niveau en motivatie.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ontdek hoe fijn bewegen kan zijn, ontmoet nieuwe mensen en beleef samen het plezier van hardlopen. Start jouw running-avontuur bij AVON!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Schedule */}
        <section
          ref={(el) => {
            fadeInElementsRef.current[5] = el;
          }}
          className={mounted ? "fade-in mb-16" : "mb-16"}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-avon-black mb-8 text-center px-2">
              Trainingskalender
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Bekijk hieronder het volledige overzicht van alle trainingen per dag. Klik op een dag om de details te zien.
            </p>
            
            <div className="space-y-4">
              {Object.entries(trainingSchedule).map(([day, sessions]) => (
                <div 
                  key={day} 
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={(e) => handleButtonClick(day, e)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onTouchStart={(e) => handleButtonTouch(day, e)}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 bg-gradient-to-r from-avon-black to-gray-900 text-white hover:from-gray-900 hover:to-avon-black transition-all cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-bold">{day}</span>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="hidden md:inline text-sm text-gray-300">{sessions.length} training{sessions.length !== 1 ? 'en' : ''}</span>
                      {openDay === day ? (
                        <FaChevronUp className="text-avon-yellow text-xl sm:text-lg flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-avon-yellow text-xl sm:text-lg flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openDay === day && (
                    <div className="bg-gray-50 divide-y divide-gray-200">
                      {sessions.map((session, idx) => (
                        <div key={idx} className="p-6 hover:bg-white transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <FaMapMarkerAlt className="text-avon-yellow" />
                                <span className="font-semibold text-gray-900">{session.plaats}</span>
                              </div>
                              <div className="flex items-center gap-3 mb-2">
                                <FaClock className="text-avon-yellow" />
                                <span className="text-gray-700">{session.tijd}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <FaUsers className="text-avon-yellow" />
                                <span className="inline-block bg-avon-yellow text-avon-black px-3 py-1 rounded-full text-sm font-semibold">
                                  {session.categorie}
                                </span>
                              </div>
                              {session.open && session.sluiting && (
                                <div className="mt-2 text-sm text-gray-600">
                                  Stadion open: {session.open} - {session.sluiting}
                                </div>
                              )}
                              {session.opmerkingen && (
                                <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-avon-yellow rounded">
                                  <p className="text-sm text-gray-700">{session.opmerkingen}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={(el) => {
            fadeInElementsRef.current[7] = el;
          }}
          className={mounted ? "fade-in mb-16" : "mb-16"}
        >
          <div className="bg-gradient-to-r from-avon-black via-gray-900 to-avon-black rounded-2xl shadow-xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/track.jpeg"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Klaar om te beginnen?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kom langs bij een van onze trainingen of neem contact met ons op voor meer informatie. We helpen je graag op weg naar jouw atletiekdoelen!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-avon-yellow text-avon-black rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl"
                >
                  Neem contact op
                </a>
                <a
                  href="/over-ons"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-avon-yellow text-avon-yellow rounded-full font-bold text-lg hover:bg-avon-yellow hover:text-avon-black transition-colors"
                >
                  Meer over AVON
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Training Locations */}
        <section
          ref={(el) => {
            fadeInElementsRef.current[6] = el;
          }}
          className={mounted ? "fade-in mb-16" : "mb-16"}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-avon-black mb-8 text-center">
            Onze Trainingslocaties
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-avon-yellow text-2xl" />
                <h3 className="text-2xl font-bold text-avon-black">Emmastadion</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Onze hoofdlocatie waar de meeste trainingen plaatsvinden. Het Emmastadion beschikt over een professionele atletiekbaan en alle faciliteiten die nodig zijn voor optimale trainingen.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-avon-yellow text-2xl" />
                <h3 className="text-2xl font-bold text-avon-black">Schrieversheide</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Een prachtige natuurlijke omgeving voor trainingen in de winterperiode. Ideaal voor duurloop- en crosscountrytrainingen.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trainingen; 