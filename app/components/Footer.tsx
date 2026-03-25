import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-ink text-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8'>
        {/* Top row: brand + CTA */}
        <div className='flex flex-col sm:flex-row justify-between items-start gap-6 pb-12 border-b border-white/10'>
          <div>
            <div
              className='font-bold text-white uppercase leading-none mb-2'
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontSize: "3.5rem",
              }}
            >
              AVON
            </div>
            <div
              className='text-gold text-xs uppercase tracking-[0.3em] font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Heerlen · Sinds 1924
            </div>
          </div>
          <Link href='/contact#aanmelden' className='btn-primary self-start mt-1'>
            Word Lid
          </Link>
        </div>

        {/* Main grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10'>
          {/* Contact */}
          <div>
            <h4
              className='text-gold text-xs uppercase tracking-[0.25em] mb-5 font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Contact
            </h4>
            <ul className='space-y-3 text-white/55 text-sm'>
              <li className='flex items-start gap-3'>
                <FaMapMarkerAlt className='text-gold mt-1 flex-shrink-0' />
                <span>
                  AVON Heerlen
                  <br />
                  Sportpark De Dem
                  <br />
                  6419 XC Heerlen
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <FaPhone className='text-gold flex-shrink-0' />
                <span>045-1234567</span>
              </li>
              <li className='flex items-center gap-3'>
                <FaEnvelope className='text-gold flex-shrink-0' />
                <span>info@avonheerlen.nl</span>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4
              className='text-gold text-xs uppercase tracking-[0.25em] mb-5 font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Menu
            </h4>
            <ul className='space-y-2 text-white/55 text-sm'>
              {[
                { label: "Wedstrijden", href: "/wedstrijden" },
                { label: "Leden", href: "/leden" },
                { label: "Nieuws", href: "/nieuws" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className='hover:text-gold transition-colors'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training times */}
          <div>
            <h4
              className='text-gold text-xs uppercase tracking-[0.25em] mb-5 font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Trainingstijden
            </h4>
            <ul className='space-y-2 text-white/55 text-sm'>
              {[
                { day: "Maandag", time: "18:00 – 21:00" },
                { day: "Woensdag", time: "18:00 – 21:00" },
                { day: "Vrijdag", time: "18:00 – 21:00" },
                { day: "Zaterdag", time: "09:00 – 12:00" },
                { day: "Zondag", time: "10:00 – 12:00" },
              ].map((t) => (
                <li key={t.day} className='flex gap-3'>
                  <span className='text-white/35 w-22 flex-shrink-0'>{t.day}</span>
                  <span>{t.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className='text-gold text-xs uppercase tracking-[0.25em] mb-5 font-semibold'
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Volg ons
            </h4>
            <div className='flex gap-4'>
              <a
                href='https://facebook.com/avonheerlen'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/55 hover:text-gold transition-colors text-xl'
              >
                <FaFacebook />
              </a>
              <a
                href='https://instagram.com/avonheerlen'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/55 hover:text-gold transition-colors text-xl'
              >
                <FaInstagram />
              </a>
              <a
                href='https://twitter.com/avonheerlen'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/55 hover:text-gold transition-colors text-xl'
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/25 text-xs'>
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} AVON Heerlen. Alle rechten
            voorbehouden.
          </p>
          <p
            className='uppercase tracking-widest'
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Atletiekvereniging Heerlen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
