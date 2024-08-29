import Background from "../../assets/Login/background.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Email = "Sazzadul";
  const Password = "Pritom1205";

  const handleLogin = () => {
    if (email === Email && password === Password) {
      console.log("Login successful");
      navigate("/Dashboard");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="hero min-h-screen text-black flex items-center justify-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-[400px] p-10 rounded-lg shadow-lg">
        <h1 className="text-center font-bold text-3xl">SazzVert</h1>
        <p className="bg-red-500 text-xl text-center text-white">
          Admin Only Login
        </p>
        <div className="pt-5">
          <p className="text-xl pt-2 pb-2">Name :</p>
          <input
            type="text"
            placeholder="Type your Name here"
            className="input input-bordered w-full bg-red-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pt-5">
          <p className="text-xl pt-2 pb-2">Password :</p>
          <input
            type="password"
            placeholder="Type your password here"
            className="input input-bordered w-full bg-red-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-blue-500 text-white text-xl py-2 px-4 rounded w-1/2 mx-auto hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
