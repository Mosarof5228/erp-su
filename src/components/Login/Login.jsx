import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [logedSuccess, setLogedSuccess] = useState("");
  const [logedError, setLogedError] = useState("");
  const emailRef = useRef(null);
  const auth = getAuth();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const user = form.user.value;
    const password = form.password.value;
    console.log(email, user, password);
    setLogedSuccess("");
    setLogedError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (result.user.emailVerified) {
          setLogedSuccess("User Logged Successfully");
        } else {
          alert("Please Verify your email address");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLogedError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      console.log("Please write a valid emial");
      return;
    }
    //send password
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log("Email", emailRef.current.value);
  };
  return (
    <form onSubmit={handleLogin} className="my-8 rounded-xl">
      <div
        style={{ boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)" }}
        className="px-10 py-14  border  w-8/12 mx-auto rounded-lg"
      >
        <div className="flex flex-col items-center justify-center my-11">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2F%40sonargaonuniversitysu2012&psig=AOvVaw3XIMFgl89QMMXVUbWs0v9f&ust=1716786640012000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCivODGqoYDFQAAAAAdAAAAABAJ" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-center ">
            <h2 className="font-bold text-4xl mt-3 text-[#0060af] ">
              Hey, Good to see you again!
            </h2>
            <p>SignUp to get going with our recruitment process!</p>
          </div>
        </div>
        <div>
          <hr className="border-t-4 border-black" />
          <h2 className="text-2xl font-semibold mt-4">Name:</h2>
          <label className="input  input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="user"
              className="grow "
              placeholder="Username"
            />
          </label>
          <h2 className=" text-2xl font-semibold mt-4">Email:</h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="grow "
              placeholder="Email"
            />
          </label>
          <h2 className="text-2xl font-semibold mt-4 ">Password:</h2>
          <div className="flex ">
            <label className="input input-bordered w-full flex items-center gap-2 ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="grow"
                placeholder="Password"
              />
            </label>

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer mt-4 ml-[-30px] text-xl"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        <div className="mt-2">
          <a
            onClick={handleForgetPassword}
            className="link link-hover link-primary"
            href="#"
          >
            Forget Password?
          </a>
        </div>
        <input
          className="color-[#fff] text-2xl text-white w-full mt-4 bg-[#0060AF] h-14 text-center rounded-md"
          type="submit"
          value="Log In"
        />
        <h2 className="text-center font-serif text-xs my-4">
          Already have an account{" "}
          <Link className="text-red-400" to="/registration">
            SignUp
          </Link>
        </h2>
        <div>
          {logedSuccess && (
            <h2 className="text-green-400 font-bold text-center">
              User Logged In Successfully
            </h2>
          )}
        </div>
        <div>
          {logedError && (
            <h2 className="text-red-500 font-bold text-center">{logedError}</h2>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
