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
    <footer className='bg-avon-black text-avon-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Contact Information */}
          <div>
            <h3 className='text-avon-yellow font-bold text-lg mb-4'>Contact</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <FaMapMarkerAlt className='text-avon-yellow mt-1 mr-3 flex-shrink-0' />
                <span>
                  AVON Heerlen
                  <br />
                  Sportpark De Dem
                  <br />
                  6419 XC Heerlen
                </span>
              </li>
              <li className='flex items-center'>
                <FaPhone className='text-avon-yellow mr-3 flex-shrink-0' />
                <span>045-1234567</span>
              </li>
              <li className='flex items-center'>
                <FaEnvelope className='text-avon-yellow mr-3 flex-shrink-0' />
                <span>info@avonheerlen.nl</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-avon-yellow font-bold text-lg mb-4'>Menu</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/wedstrijden'
                  className='hover:text-avon-yellow transition-colors'
                >
                  Wedstrijden
                </Link>
              </li>
              <li>
                <Link
                  href='/leden'
                  className='hover:text-avon-yellow transition-colors'
                >
                  Leden
                </Link>
              </li>
              <li>
                <Link
                  href='/nieuws'
                  className='hover:text-avon-yellow transition-colors'
                >
                  Nieuws
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-avon-yellow transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Times */}
          <div>
            <h3 className='text-avon-yellow font-bold text-lg mb-4'>Trainingstijden</h3>
            <ul className='space-y-2'>
              <li>
                <span className='font-medium'>Maandag:</span> 18:00 - 21:00
              </li>
              <li>
                <span className='font-medium'>Woensdag:</span> 18:00 - 21:00
              </li>
              <li>
                <span className='font-medium'>Vrijdag:</span> 18:00 - 21:00
              </li>
              <li>
                <span className='font-medium'>Zaterdag:</span> 09:00 - 12:00
              </li>
              <li>
                <span className='font-medium'>Zondag:</span> 10:00 - 12:00
              </li>
            </ul>
          </div>

          {/* Social Media & Word lid */}
          <div>
            <h3 className='text-avon-yellow font-bold text-lg mb-4'>Volg ons</h3>
            <div className='flex space-x-4 mb-6'>
              <a
                href='https://facebook.com/avonheerlen'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-avon-yellow transition-colors'
              >
                <FaFacebook />
              </a>
              <a
                href='https://instagram.com/avonheerlen'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-avon-yellow transition-colors'
              >
                <FaInstagram />
              </a>
              <a
                href='https://twitter.com/avonheerlen'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-avon-yellow transition-colors'
              >
                <FaTwitter />
              </a>
            </div>
            <div className='mt-4'>
              <h3 className='text-avon-yellow font-bold mb-2'>Word lid</h3>
              <p className='mb-4'>
                Interesse in atletiek? Word lid van AVON Heerlen en ontdek wat
                atletiek voor jou kan betekenen.
              </p>
              <Link
                href='/contact#aanmelden'
                className='bg-avon-yellow text-avon-black px-4 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors inline-block'
              >
                Aanmelden
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-700 text-center'>
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} AVON Heerlen. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
