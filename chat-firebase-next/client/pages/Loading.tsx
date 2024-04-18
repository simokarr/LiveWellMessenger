
import Image from 'next/image';

import logoImage from './livewell-logo-black.svg';

export default function Loading() {
    return (
      <div className="page">
        {/* Use the imported logo image */}
        <Image src={logoImage} alt="Logo" className="logo" />        
        <div className="text">Loading your info...</div>
      </div>
    );
  }