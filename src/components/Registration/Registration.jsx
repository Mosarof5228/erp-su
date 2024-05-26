
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";



const Signup = () => {


    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        // const name = form.name.value;
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);

        })
        .catch(error=>{
            console.error(error);
        })
        

    }
    return (

        <form onSubmit={handleSignUp} className="my-8 rounded-xl">
            <div style={{ boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)", }} className="px-10 py-14  border  w-11/12 mx-auto rounded-lg" >
                <div className="flex flex-col items-center leading-[50px] justify-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                        </div>
                    </div>
                    <h2 className="text-4xl text-center font-bold text-[#0060af] mt-4">Hey, Good to see you again!</h2>
                    <p>SignUp to get going with our recruitment process! </p>
                </div>
                <hr className="my-4 border-t-4 border-black border" />
                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold">Name</h2>
                    <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered  input-lg w-full " />
                    <h2 className="text-2xl font-semibold">Email Address</h2>
                    <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered  input-lg w-full " />
                    <h2 className="text-2xl font-semibold">Password</h2>
                    <input type="password" placeholder="Enter Your Password" name="pass" className="input input-bordered input-lg w-full " />
                </div>


                <input className="color-[#fff] text-2xl text-white w-full mt-4 bg-[#0060AF] h-14 text-center rounded-md" type="submit" value="SignUp" />

                <h2 className="text-center font-serif text-xs my-4">Already have an account <Link className="text-red-400" to='/login'>Please Login</Link></h2>
            </div>

        </form>

    );
};

export default Signup;