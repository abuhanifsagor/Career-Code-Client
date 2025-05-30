import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, setUser, googleLogin  } = use(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successfully");
        form.reset();
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setError("Invalid Email or Password");
          toast.warning("login failed");
        }
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex px-5 min-h-screen items-center justify-center gap-5">
      <div
        className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 "
        bis_skin_checked="1"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm" bis_skin_checked="1">
            <label htmlFor="email" className="block  ">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="Enter Your Email"
              className="w-full bg-base-100  px-4 py-3 rounded-md   "
            />
          </div>
          <div className="space-y-1 text-sm" bis_skin_checked="1">
            <label htmlFor="password" className="block   ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Your Password"
              className="w-full bg-base-100  px-4 py-3 rounded-md"
            />
          </div>
          <p className="text-xs text-center text-red-400">{error}</p>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-green-600">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
          <div
            className="flex-1 h-px sm:w-16 dark:bg-gray-300"
            bis_skin_checked="1"
          ></div>
          <p className="px-3 text-sm  flex items-center gap-2  ">
            Login with{" "}
            <span onClick={handleGoogleLogin} className="cursor-pointer">
              <FcGoogle size={25} />
            </span>
            accounts
          </p>
          <div
            className="flex-1 h-px sm:w-16 dark:bg-gray-300"
            bis_skin_checked="1"
          ></div>
        </div>

        <p className="text-xs text-center sm:px-6   ">
          Don't have an account?
          <Link
            to={"/register"}
            rel="noopener noreferrer"
            href="#"
            className="underline ml-1 text-secondary"
          >
            Register
          </Link>
        </p>
      </div>

      <div className="w-1/2 hidden md:block pointer-events-none">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Login;
