import React, { useState,useContext } from 'react'
import classes from './SignUp.module.css'
import { Link ,useNavigate,useLocation } from 'react-router-dom'
import { auth } from "../../Utility/firebase"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
import { ClipLoader} from "react-spinners";


const Auth = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const [{ user }, dispatch] = useContext(DataContext)
  const [loading, setLoading] = useState({
    sign: false,
    signUp:false
  })
  const navigate = useNavigate()
  const navStateData=useLocation()
  // console.log(user)
  // console.log(navStateData)
  


  const authHandler = async(e) => {
    e.preventDefault();

    if (e.target.name === "signIn") {
      //firebase auth
      setLoading({...loading,signIn:true})
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
         
              dispatch({
                type: Type.SET_USER,
                user: userInfo.user,
              });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/")
    
        }).catch((err) => {
          setError(err.message)

          setLoading({ ...loading, signIn: false });
          
         })

    } else {
        setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
   
              dispatch({
                type: Type.SET_USER,
                user: userInfo.user,
              });
           setLoading({ ...loading, sigUp: false });
           navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
           setLoading({ ...loading, sigUp: false });
        });
       }
  }



  // console.log(password,email)
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>

        {navStateData?.state?.msg && <small style={{
          padding: "5px",
          textAlign: "center",
          color: "red",
          fontWeight: "bold"
        }}>{navStateData?.state?.msg}</small>}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={classes.login__signINButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        {/* Agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use and
          sale.Please see our privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice
        </p>
        {/* Create account button */}
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "  Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  ); 
}

export default Auth;