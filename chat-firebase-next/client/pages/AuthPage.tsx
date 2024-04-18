import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import Image from 'next/image';

import logoImage from './livewell-logo-black.svg';


export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      {/* Use the imported logo image */}
      <Image src={logoImage} alt="Logo" className="logo" />
      <div className="text">Welcome to LiveWell Messenger</div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        Log in with your account to continue
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> 
      <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );
}