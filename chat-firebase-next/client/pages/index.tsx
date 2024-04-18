import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import Loading from "./Loading";
import ChatsPage from "./ChatsPage";
import { User } from "firebase/auth";
import { auth } from "@/firebase";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return unsubscribe;
  }, []);

  if (user === undefined) {
    return <Loading />;
  } else if (user === null) {
    return <AuthPage />;
  } else {
    return <ChatsPage user={user} />;
  }
}
