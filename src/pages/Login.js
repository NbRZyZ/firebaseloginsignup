import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =  (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    return (
        <main>
            <section>
                <div>
                    <div>
                        <h1> Login </h1>
                        <form>
                            <div>
                                <label htmlFor="email-address">Email address</label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>


                            <button type="submit" onClick={onSubmit}>
                                Login
                            </button>
                        </form>

                        {/* <p>
                            Already have an account? <NavLink to="/login">Sign in</NavLink>
                        </p> */}
                    </div>
                </div>
            </section>
        </main>
    )
}