import React, { useState } from 'react'

export default function SignIn() {

 const isMobile = window.innerWidth <= 576;

/*password validation */
   const [password, setPassword] = useState("");
   const [Passworderror, setpasswordError] = useState("");
   const [touched, setTouched] = useState(false);

   const handlepasswordvalidation= (pass)=>{
      pass = pass.trim()
     if(!pass){
       return "please enter a stong password";
     }else if(pass.length < 8){
      return "password must be 8 characters long";
     }else{
      return ""; 
     }
   }
   const handlepasswordblur = (e)=>{
    if (e.target.value === "") {
      setError(false)
    }else{
      setTouched(true);
      setpasswordError(handlepasswordvalidation(password));
    }
   }
   const passwordhandle =(e)=>{
     const num = e.target.value;
     setPassword(num);
     if (touched && num !== "") {
       setTouched(true)
       setpasswordError(handlepasswordvalidation(num));
     }
     if(num === ""){
         setpasswordError("")
         console.log('hello')
       }
   }
 const inputpassword = Boolean(Passworderror)

/* Email validations */

   const [email, setEmail] = useState("");
   const [error, setError] = useState(false);
   // const [number , setNumber] = useState("")
    
   const checkvalidation = (value)=>{
      value= value.trim()
      // const isOnlyNumber = /^[0-9]+$/.test(value); 
    if(!value){
      return 'please enter Email or number';
    }else if(!value.endsWith('@gmail.com')){
      return 'Email must be ends with @gmail.com'
    }else{
      return "";
    }
   }
   const handleBlur =(e)=>{
     if (e.target.value === "") {
         setError("")
    }else{
        setTouched(true);
        setError(checkvalidation(email))
    } 
   }
   const handlechange =(e)=>{
      const val = e.target.value;
      setEmail(val);
      if (touched && val !== "") {
         setTouched(true)
         setError(checkvalidation(val));
      }
      if(val === ""){
         setError("")
       }
   }
   const inputError = Boolean(error);
   
   /* signup in backend */
  
 const handleSignup = async () => {
  const emailError = checkvalidation(email);
  const passwordError = handlepasswordvalidation(password);

  setError(emailError);
  setpasswordError(passwordError);

  if (emailError || passwordError) {
    return;
  }

  try {
    const urls = isMobile ? "fetch('netfliex-jqt2.vercel.app/api/signup?v=2')" : ""
    const response = await fetch('http://localhost:5000/api/signup?v=2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Signup successful!");
      setEmail("");
      setPassword("");
    } else {
      // Show meaningful message from backend or fallback
      alert(data.error || "❌ Signup failed. Please try again.");
    }

  } catch (error) {
    // Network/server related issues
    console.error("Error during signup:", error);
    alert("⚠️ Network error or server is not responding.");
  }
 };

  return (
    <>
    <div className={`${isMobile ? " bg-black h-[900px] ":"h-[1100px]"} relative  overflow-hidden`}>
       <img className={` h-full w-full scale-110 object-cover`} src="netfliex-page.jpg" alt="netfliex-logo" />
       <div className={` ${isMobile ? " bg-black/80" : " bg-black/45" } absolute inset-0 `}></div>

       <div className={`${isMobile ? "h-[800px] w-[100%] top-[10%] " : "bg-black/80 h-[900px] w-[38%] top-[15%] left-[30%]" } absolute flex flex-col items-center`}>
          <div className={`${isMobile ? " w-[94%] " : "mt-[30px] w-[90%] " } h-[80px] `}>
             <p className={`${isMobile ?"pt-[10px] ps-[20px] ":" pt-[20px] ps-[55px] "} text-[35px] text-white font-bold `}>Sign In</p>
          </div>
          <div className={`${isMobile ? "h-[440px] w-[94%] " : "w-[90%] mt-[10px]  h-[450px]"} flex flex-col items-center `}>
            <input id='input1' value={email} onChange={handlechange} onBlur={handleBlur} className={` ${isMobile ? "w-[94%] rounded-[6px]  " : " rounded-[10px] w-[80%]" } ${error ?"h-[60px] border-solid border-red-500 border-[2px]":" h-[80px] border-white"} bg-black/40 text-white text-[20px] font-semibold mt-[10px] ps-[10px] border-[1px]  outline-none focus:border-[3px] border-solid`} autoComplete="off" placeholder='Email or Mobile Number' type="text" />
            {inputError && (<p className="w-[80%] text-red-500 text-sm mt-1">{error}</p>)}

            <input value={password} onChange={passwordhandle} onBlur={handlepasswordblur} className={` ${isMobile ? "w-[94%] rounded-[6px]  " : " rounded-[10px] w-[80%]" } ${Passworderror ?"h-[60px] border-solid border-red-500 border-[2px]":" h-[80px] border-white"} bg-black/40 text-white text-[20px] font-semibold mt-[10px] ps-[10px] border-[1px]  outline-none focus:border-[3px] border-solid`} autoComplete="off" placeholder='Password' type="Password" />
             {inputpassword && (<p className="w-[80%] text-red-500 text-sm mt-1">{Passworderror}</p>)}

            <button onClick={handleSignup} className={`${isMobile ? "w-[94%] h-[60px] text-[23px] " : " w-[80%] h-[55px] text-[20px]" } bg-red-600 text-white rounded-[10px] text-center mt-[15px] font-bold`}>Sign in</button>
            <p className={`${isMobile ? " h-[40px] w-[90%] pt-[3px] font-medium text-[22px] " : "h-[40px] w-[40%] pt-[5px] font-semibold text-[25px]"}  text-center text-white  mt-[10px] `}>OR</p>
            <button className={`${isMobile ? "w-[94%] mt-[10px] " : " w-[80%] mt-[15px]" } h-[55px] bg-white/30 text-white rounded-[10px] text-center font-bold text-[20px] `}>Use a Sign-In Code</button>
            <a className={`${isMobile ? "  mt-[10px] pt-[2px] text-[17px] " : " my-[20px] text-[20px]" } w-[90%] h-[40px] text-center text-white font-semibold underline decoration-white decoration-2`} href="/">FORGET PASSWORD</a>
          </div>

          <div className={` ${window.innerWidth  <= 576 ? "w-[94%] items-start ps-[5px]" : "w-[90%] items-center" } flex flex-col  h-[220px]  `}>
               <div className={` ${isMobile ? " w-[90%] h-[50px]" : "w-[80%] h-[60px]" }  flex items-center `}>
                 <input type="checkbox" className={` ${isMobile ? "ms-[5px] w-5 h-5" : "ms-[12px] w-6 h-6" } appearance-none flex items-center justify-center mt-[10px] before:content-['✔'] bg-white  checked:before:text-black checked:bg-black checked:border-[2px] font-bold text-[18px] `}/>
                 <label htmlFor="vehicle1" className={`${isMobile ? "text-[18px]" : "text-[22px]" }  text-white font-semibold ps-[10px] pt-[6px] `}>REMEMBER ME</label>
               </div>
               <div className={` ${isMobile ? " h-[50px] w-[90%]" : "h-[60px] w-[80%]" }`}>
                  <p className={` ${isMobile ? "text-[18px] ms-[8px]" : "text-[20px] ps-[10px]" } font-semibold text-gray-400 mt-[10px] `}>New to Netflie? <span className={` ${isMobile ? "text-[18px] " : "text-[20px]" } text-white font-semibold `}>Sign Up now</span> </p>
               </div>
               <div className={` ${isMobile ? " w-[95%] h-[100px]" : " w-[80%] h-[90px]" } flex flex-col`}>
                  <p className={` ${isMobile ? "pt-[4px] " : "ps-[10px]" } text-white text-[18px] font-semibold `}>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                  <a className={` ${isMobile ? "ps-[2px] pt-[3px] " : "ps-[10px]" } text-[20px] text-blue-500 underline decoration-blue-500  font-bold `} href="/">Learn More</a>
               </div>
          </div>  
       </div>
    </div>
    
    <div className={` ${isMobile ? "h-[320px]" : "h-[300px]" } bg-black flex items-center justify-center`}>
          <div className={` ${isMobile ? "h-[300px] w-[96%] items-center" : "h-[250px] w-[90%]" } flex flex-col`}>
             <div className={` ${isMobile ? "text-start mt-[5px]" : "ps-[60px] mt-[40px]" } h-[40px] w-[96%]`}>
                <a className='text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 ' href="/">Questions?Contact Us?</a>
             </div>
             <div className={` ${isMobile ? "h-[250px] flex-wrap justify-center mt-[3px] " : "h-[200px] flex-row ms-[2%] mt-[1px] ps-[2%]" } flex w-[96%] `}>
               <div className={` ${isMobile ? "w-[50%] h-[120px] " : "w-[24%] h-[160px] my-[2%]" } bg-black flex flex-col`}>
                  <a className='text-[18px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 my-[15px] ps-[10px] ' href="/">FAQ</a>
                  <a className='text-[18px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 my-[15px] ps-[10px]' href="/">Cookie Preference</a>
               </div>
               <div className={` ${isMobile ? "w-[50%] h-[120px] " : "w-[24%] h-[160px] my-[2%]" } bg-black flex flex-col`}>
                  <a className='text-[18px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 my-[15px] ps-[10px] ' href="/">Help Center</a>
                  <a className='text-[18px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 my-[15px] ps-[10px]' href="/">Coperate Information</a>
               </div>
               <div className={` ${isMobile ? "w-[50%] h-[120px] " : "w-[24%] h-[160px] my-[2%]" } bg-black flex flex-col`}>
                  <a className='text-[18px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 my-[15px] ps-[10px] ' href="/">Terms To use</a>
               </div>
               <div className={` ${isMobile ? "w-[50%] h-[120px] " : "w-[24%] h-[160px] my-[2%]" } bg-black flex flex-col`}>
                  <a className='text-[18px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 my-[15px] ps-[10px] ' href="/">privacy</a>
               </div>
             </div>
          </div>
    </div>
    </>
  )
}
