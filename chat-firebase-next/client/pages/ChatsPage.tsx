import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatProps {
  user: User | null; // Allow user to be null
}

export default function ChatPage(props: ChatProps) {
  // Use props.user?.email to safely access email if user is not null
  const username = props.user?.email || "Guest";

  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#10a37f",
          border: "none",
          padding: ".5rem .75rem",
          color: "white",
          fontSize: ".875rem",
          borderRadius: ".25rem",
          cursor: "pointer",
          marginRight: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="32b58e76-3902-4cfe-a8cb-d6ddc210b648"
        username={username}
        secret={props.user?.uid || ""}
        style={{ height: "100%" }}
      />
    </div>
  );
}
