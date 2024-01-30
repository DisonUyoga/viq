import "./index.scss";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import { useEffect } from "react";
import { getAunthentication } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../../redux/slices/loginSlice";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";

const AOuth = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const name = result.user.displayName;
      const email = result.user.email;

      const photo = result.user.photoURL;

      if (result) {
        dispatch(signInSuccess({ name, email, photo }));
        navigate("/checkout");
      }
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <>
      {currentUser?.photoURL ? (
        <Link
          to="/checkout"
          className="btn btn-primary rounded-lg text-white  hover:opacity-85"
        >
          CHECKOUT
        </Link>
      ) : (
        <button
          type="button"
          className="btn btn-danger rounded-lg text-white  hover:opacity-85"
          onClick={handleGoogleClick}
        >
          LOGIN WITH GOOGLE TO CHECKOUT
        </button>
      )}
    </>
  );
};

export default AOuth;
