import { signInWithRedirect, GoogleAuthProvider } from "@/firebase";

export default function SignInPage() {
  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
}
