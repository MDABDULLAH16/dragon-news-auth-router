import   { use,   } from "react"; 
import { updateProfile, sendEmailVerification } from "firebase/auth";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      console.log(name, photoURL, email,password);
      
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    // if (password.length < 8) {
    //   toast.error("Password must be at least 8 characters long!");
    //   return;
    // } else if (!/[A-Z]/.test(password)) {
    //   toast.error("Password must contain at least one uppercase letter!");
    //   return;
    // } else if (!/[a-z]/.test(password)) {
    //   toast.error("Password must contain at least one lowercase letter!");
    //   return;
    // } else if (!/[0-9]/.test(password)) {
    //   toast.error("Password must contain at least one number!");
    //   return;
    // } else if (!/[@$!%*?&]/.test(password)) {
    //   toast.error(
    //     "Password must include at least one special character (@$!%*?&)"
    //   );
    //   return;
    // }
    createUser(email, password)
      .then((result) => {
          const user = result.user;
          console.log(user);
          
        updateProfile(user, { displayName: name, photoURL: photoURL })
          .then(() => {})
          .catch((err) => {
            toast.error(err.message);
          });
        sendEmailVerification(user)
          .then(() => {
            toast.success("Check Your email to verification");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
          toast.error(err.message);
          console.log(err);
          
      });
  };

  //create user with email and password;

  return (
    <div className="flex flex-col items-center space-y-4 py-8 min-h-screen bg-gray-100">
      <Navbar />
      <div className="bg-white shadow-lg border border-blue-500 rounded-xl w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create your account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL (optional)"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
            required
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already Have An Account?{" "}
          <Link to="/login" className="text-red-500 font-medium hover:underline cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
