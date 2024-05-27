import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.pass.value;
    const accepted = form.terms.checked;
    console.log(accepted);
    setRegisterError("");
    setRegisterSuccess("");
    if (password.length < 6) {
      setRegisterError("Password Should be at least six character or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password Should at least 1 Uppercase");
      return;
    } else if (!accepted) {
      setRegisterError("Please Accept Terms and condition");
      return;
    }
    //reset error

    // const name = form.name.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setRegisterSuccess("user Created Succesfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <form onSubmit={handleSignUp} className="my-8 rounded-xl">
      <div
        style={{ boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)" }}
        className="px-10 py-14  border  w-8/12 mx-auto rounded-lg"
      >
        <div className="flex flex-col items-center leading-[50px] justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
          </div>
          <h2 className="text-4xl text-center font-bold text-[#0060af] mt-4">
            Hey, Good to see you again!
          </h2>
          <p>SignUp to get going with our recruitment process! </p>
        </div>
        <hr className="my-4 border-t-4 border-black border" />
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Name</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="input input-bordered  input-lg w-full "
          />
          <h2 className="text-2xl font-semibold">Email Address</h2>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="input input-bordered  input-lg w-full "
          />
          <h2 className="text-2xl font-semibold">Password</h2>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            name="pass"
            className="input input-bordered input-lg w-full "
            required
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer "
          >
            <span className="text-3xl absolute mt-9 ml-[-50px]">
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </span>
        </div>

        <div className="mt-4 ">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept Terms and condition</label>
        </div>

        <input
          className="color-[#fff] text-2xl text-white w-full mt-4 bg-[#0060AF] h-14 text-center rounded-md"
          type="submit"
          value="SignUp"
          required
        />

        <h2 className="text-center font-serif text-xs my-4">
          Already have an account{" "}
          <Link className="text-red-400" to="/login">
            Please Login
          </Link>
        </h2>
        <div className="text-center font-bold">
          {registerError && <p className="text-red-500">{registerError}</p>}
        </div>
        <div className="text-center text-2xl">
          {registerSuccess && (
            <h2 className="text-green-400 font-bold">{registerSuccess}</h2>
          )}
        </div>
      </div>
    </form>
  );
};

export default Signup;
