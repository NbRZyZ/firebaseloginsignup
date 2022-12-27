import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"

export const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate('/');
                console.log('Signed out successfully');
            })
            .catch((error) => {
                // An error happened
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user)
                
                const uid = user.uid;
                console.log(uid);
            } else {
                console.log('user is logged out');
            }
        })
    }, []);
    return (
        <div>
            <h1> Welcome to Home page </h1>
            {user && <p>{user.email}</p>}
            <div>
              <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}