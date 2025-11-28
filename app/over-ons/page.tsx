"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHistory, FaTrophy, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

export default function OverOns() {
  return (
    <div className='min-h-screen bg-avon-white'>
      {/* Hero Section */}
      <section className='relative h-[50vh] bg-avon-black'>
        <div className='absolute inset-0'>
          <Image
            src='/images/entrance_emma.jpg'
            alt='AVON Heerlen Entree'
            fill
            className='object-cover opacity-60'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-avon-black to-transparent'></div>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center'>
          <div className='text-center md:text-left max-w-2xl'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl md:text-5xl font-bold text-avon-white mb-4'
            >
              Over AVON Heerlen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl md:text-2xl text-avon-yellow'
            >
              De oudste atletiekvereniging van Limburg – sinds 1924
            </motion.p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className='flex items-center mb-4'>
                <FaHistory className='text-avon-yellow text-3xl mr-3' />
                <h2 className='text-3xl font-bold text-avon-black'>
                  Onze Geschiedenis
                </h2>
              </div>
              <p className='text-lg mb-4'>
                AVON Heerlen werd opgericht in 1924 en is daarmee de oudste
                atletiekvereniging van Limburg. Al bijna een eeuw lang zijn wij
                een thuis voor atleten van alle niveaus.
              </p>
              <p className='text-lg mb-4'>
                In de loop der jaren hebben wij vele successen behaald en hebben
                wij een belangrijke rol gespeeld in de ontwikkeling van atletiek
                in Limburg. Onze vereniging heeft talloze talenten voortgebracht
                die op nationaal en internationaal niveau hebben gepresteerd.
              </p>
              <p className='text-lg'>
                Vandaag de dag zijn wij nog steeds een bloeiende vereniging met
                een rijke geschiedenis en een heldere toekomst. Wij zijn trots
                op onze traditie en kijken uit naar de komende jaren waarin wij
                onze missie voortzetten: het bevorderen van atletiek en het
                creëren van een thuis voor atleten van alle leeftijden en
                niveaus.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='relative h-96 rounded-lg overflow-hidden shadow-xl'
            >
              <Image
                src='/images/team_pic_above.jpg'
                alt='AVON Heerlen Team'
                fill
                className='object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className='py-16 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-avon-black mb-4'>
              Onze Faciliteiten
            </h2>
            <p className='text-lg max-w-3xl mx-auto'>
              AVON Heerlen beschikt over moderne faciliteiten die geschikt zijn
              voor alle atletiekdisciplines.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='bg-avon-white rounded-lg overflow-hidden shadow-lg'
            >
              <div className='relative h-64'>
                <Image
                  src='/images/track.jpeg'
                  alt='Atletiekbaan'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-avon-black mb-2'>
                  Atletiekbaan
                </h3>
                <p className='text-gray-700'>
                  Onze atletiekbaan is een moderne, 400-meter baan met 8 banen,
                  uitgerust met alle benodigde faciliteiten voor sprint, horden,
                  midden- en lange afstand.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-avon-white rounded-lg overflow-hidden shadow-lg'
            >
              <div className='relative h-64'>
                <Image
                  src='/images/trainig_pic.jpg'
                  alt='Trainingsfaciliteiten'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-avon-black mb-2'>
                  Trainingsfaciliteiten
                </h3>
                <p className='text-gray-700'>
                  Naast de atletiekbaan beschikken wij over faciliteiten voor
                  technische nummers zoals verspringen, hink-stap-springen,
                  hoogspringen, polsstokhoogspringen, kogelstoten, discuswerpen,
                  speerwerpen en kogelslingeren.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-avon-black mb-4'>
              Ons Team
            </h2>
            <p className='text-lg max-w-3xl mx-auto'>
              AVON Heerlen wordt gerund door een team van ervaren trainers,
              bestuursleden en vrijwilligers die zich inzetten voor de
              vereniging en haar leden.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='bg-avon-black rounded-lg overflow-hidden shadow-lg text-center'
            >
              <div className='p-6'>
                <div className='flex justify-center mb-4'>
                  <FaUsers className='text-avon-yellow text-4xl' />
                </div>
                <h3 className='text-xl font-bold text-avon-yellow mb-2'>
                  Trainers
                </h3>
                <p className='text-avon-white'>
                  Onze trainers zijn ervaren professionals die onze leden helpen
                  hun doelen te bereiken, of dat nu is om fit te blijven, om te
                  concurreren op hoog niveau, of om gewoon plezier te hebben in
                  atletiek.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-avon-black rounded-lg overflow-hidden shadow-lg text-center'
            >
              <div className='p-6'>
                <div className='flex justify-center mb-4'>
                  <FaTrophy className='text-avon-yellow text-4xl' />
                </div>
                <h3 className='text-xl font-bold text-avon-yellow mb-2'>
                  Bestuur
                </h3>
                <p className='text-avon-white'>
                  Ons bestuur bestaat uit toegewijde vrijwilligers die de
                  vereniging besturen en ervoor zorgen dat alles soepel
                  verloopt. Zij zetten zich in voor de toekomst van AVON
                  Heerlen.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className='bg-avon-black rounded-lg overflow-hidden shadow-lg text-center'
            >
              <div className='p-6'>
                <div className='flex justify-center mb-4'>
                  <FaMapMarkerAlt className='text-avon-yellow text-4xl' />
                </div>
                <h3 className='text-xl font-bold text-avon-yellow mb-2'>
                  Locatie
                </h3>
                <p className='text-avon-white'>
                  AVON Heerlen is gevestigd op Sportpark De Dem in Heerlen. Onze
                  faciliteiten zijn gemakkelijk bereikbaar en bieden een
                  perfecte omgeving voor atletiek.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
