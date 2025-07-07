import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Header.css";

function Header() {
  const handleLogout = () => {
    signOut(auth).catch((err) => console.error(err));
  };

  return (
    <header className="header">
      <div className="logo">NETFLIX</div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
