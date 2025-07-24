import React,{useEffect,useState} from 'react'

export default function Home() {
/* handling images section */  
const images = [
  {img: "/jungle-image.jpeg", number :1},
  {img: "/alladin-image.jpeg", number :2},
  {img: "/squid-game2.jpeg", number :3},
  {img: "/demoon-images.jpeg", number :4},
  {img: "/12Fail-image.jpeg", number :5},
  {img: "/kgf-image.jpeg", number :6},
  {img: "/annabelle-image.jpeg", number :7},
  {img: "/beast-image.jpeg", number :8},
  {img: "/squid-game.jpeg", number :9},
  {img: "/kong-VS-godzilla.jpeg", number :10}
]

const itemsperpage = window.innerWidth <= 576 ? 1 : 5;
let [startindex , setStartIndex] = useState(0);

const handleNext =()=>{
  // if (startindex + itemsperpage <images.length) {
  //   setStartIndex(startindex = startindex + 1)
  // }
  if (startindex + itemsperpage <images.length) {
    setStartIndex(startindex + itemsperpage)
  }
}
const handlePrev =()=>{
  // if (startindex - itemsperpage >= 0) {
  //   setStartIndex(startindex = startindex -1)
  // }
  if (startindex - itemsperpage >= 0) {
    setStartIndex(startindex - itemsperpage)
  }
}
const visibleimages = images.slice(startindex , startindex + itemsperpage)

/* cursor handling */
  const handlemovecursor1 =()=>{
    document.querySelector('#input1').focus()
  }
  const handlemovecursor2 =()=>{
    document.querySelector('#input2').focus()
  }
 
  useEffect(()=>{ 
   const alldetails = document.querySelectorAll('details')
   const detailsheight = document.getElementById('info')

   function handletoggle (e){
     const currentDetail = e.target;
     if (currentDetail.open) {
      detailsheight.style.height =  window.innerWidth <= 576 ? "900px" : "1120px";
       alldetails.forEach((detail)=>{
          if (detail !== currentDetail) {
             detail.removeAttribute("open");
          }
       })
     }else{
      const anyopen = Array.from(alldetails).some((e)=>e.open)
      if (!anyopen) {
        detailsheight.style.height = window.innerWidth <= 576 ? "640px" : "800px";
      }
     }
   }
   alldetails.forEach((detail)=>{
     detail.addEventListener('toggle',handletoggle)
   })
     },[])
/*validation check for 1st input tag*/

   const [email1, setEmail1] = useState("");
   const [error1, setError1] = useState(false);    
   const [touched, setTouched] = useState(false);

   const checkvalidation1 = (value)=>{
      value= value.trim();
    if(!value){
      return 'please enter Email or number';
    }else if(!value.endsWith('@gmail.com')){
      return 'Email must be ends with @gmail.com'
    }else{
      return "";
    }
  }
   const handleBlurinput1 =(e)=>{
    if (e.target.value === "") {
      setError1(false)
    }else{
      setTouched(true);
      setError1(checkvalidation1(email1))
    } 
  }
   const handlechangeinput1 =(e)=>{
      const val = e.target.value;
      setEmail1(val);
      if (touched && val !== "") {
         setTouched(true)
         setError1(checkvalidation1(val));
      }
      if(val === "" || touched === true ){
         setError1(false)
       }
   }
   const inputError1 = Boolean(error1)

/*validation check for 2nd input tag*/
 const [email2, setEmail2] = useState("");
 const [error2, setError2] = useState(false);  

   const checkvalidation2 = (value)=>{
      value= value.trim();
    if(!value){
      return 'please enter Email or number';
    }else if(!value.endsWith('@gmail.com')){
      return 'Email must be ends with @gmail.com'
    }else{
      return "";
    }
  }
  const handleBlurinput2 =(e)=>{
    if (e.target.value === "") {
      setError2(false)
    }else{
      setTouched(true);
      setError2(checkvalidation2(email2))
    } 
   }
   const handlechangeinput2 =(e)=>{
      const val = e.target.value;
      setEmail2(val);
      if (touched && val !== "") {
         setTouched(true)
         setError2(checkvalidation2(val));
      }
      if(val === "" || touched === true ){
         setError2(false)
       }
   }
   const inputError2 = Boolean(error2)

  return (
    <>

       <div className={` ${window.innerWidth <= 576 ? "h-[600px]" : " h-[730px]" } bg-black flex items-center relative`}>
            <div className={`${window.innerWidth <= 576 ? "" : "" } h-[100%] w-[96%] mx-[2%] `}>
              <img className="h-full w-full object-cover z-index " src="netfliex-page.jpg" alt="home page" />
              <div className={`absolute inset-0  bg-black/70 z-10`}></div>

              <div className={` ${window.innerWidth <= 576 ? "top-[20%] left-[2%] h-[400px] w-[84%] mx-[7%]" : "top-[25%] left-[22%] h-[400px] w-[900px]" } z-20 absolute flex items-center pt-[10px] flex-col`}>
                <div className={` ${window.innerWidth <= 576 ? "h-[120px] w-[94%]" : "h-[160px] w-[90%]" } flex `}>
                  <p className={` ${window.innerWidth <= 576 ? "text-[20px] font-bold " : "italic text-[70px] font-bold" } text-white  leading-none text-center`}>Unlimited movies, TV shows, and more</p>
                </div>
                <div className={` ${window.innerWidth <= 576 ? " w-[94%] h-[30px] mt-[5px]" : " w-[90%] h-[50px] mt-[10px]"} `}>
                  <p className={` ${window.innerWidth <= 576 ? "text-[18px] " : " text-[30px]" } text-center text-white italic font-semibold`}>Starts at Rs 250. Cancel anytime.</p>
                </div>

                <div className={` ${window.innerWidth <= 576 ? " h-[220px] w-[94%]" : "h-[150px] w-[90%]" } flex-column `}>
                  <div className={` ${window.innerWidth <= 576 ? "h-[50px]  mt-[5px]" : "h-[40px] mt-[10px]" } w-[100%]`}> 
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] text-center " : "text-[20px]" } text-white font-medium flex justify-center italic`}>Ready to watch? Enter your email to create or restart your membership.</p>
                  </div>
                  <div className={`${window.innerWidth <= 576 ? "flex-col mt-[5px] items-center h-[150px] " : "flex-row mt-[10px] w-[94%] ms-[3%]  h-[90px]" } flex`}>
                    <div className={`${window.innerWidth <= 576 ? " w-[100%] h-[75px]" : "w-[73%] h-[90px]" } flex flex-col `}>
                      <input id='input1' onChange={handlechangeinput1} onBlur={handleBlurinput1} className={` ${window.innerWidth <= 576 ? "w-[96%] ms-[2%]" : "ms-[1%] w-[98%]" } ${error1 ?"border-solid border-red-500 h-[60px] border-[2px]":" border-slate-300"} text-white  text-[15px] ps-[10px] h-[70px] bg-black border-[1px] outline-none rounded-[5px] focus:border-solid focus:border-[3px]  `} type={email1} placeholder='Email address' />
                      {inputError1 && (<p className={` ${window.innerWidth <= 576 ? "text-[15px] w-[90%] " : " text-[18px] w-[80%]" } h-[25px] ms-[10px] text-red-500 `}>{error1}</p>)}
                    </div>
                    <button className={` ${window.innerWidth <= 576 ? "w-[45%] text-[15px] h-[60px] mt-[3px] ps-[2px] font-extrabold " : "w-[27%] text-[25px] h-[70px] ms-[0%] font-semibold pb-[12px] ps-[5px]" } bg-red-600 rounded-[10px] text-white `} onClick={handlemovecursor1}>GET STARTED <span className={`${window.innerWidth <= 576 ? "text-[20px] ps-[5px] font-extrabold" : "text-[40px] ps-[5px] font-bold  " }`}> › </span></button>
                  </div>
                  
                </div>
              </div>
            </div>
       </div>

       <div className={`h-[10px] bg-black flex items-center z-30 `}>
            <div className="rounded-t-[100%] border-solid border-t-[5px] border-red-600 mx-[1%] h-[10px] w-[96%] bg-[radial-gradient(circle_closest-corner_at_center,#0e36a0_20%,black_100%)]">
            </div>
       </div>
       
       <div className={`${window.innerWidth <= 576 ? "h-[450px]" : "h-[500px]" } bg-black flex flex-col  items-center  `}>
          <div className={` ${window.innerWidth <= 576 ?"h-[50px] w-[94%]" : " h-[60px] w-[90%]"} my-[10px] `}>
              <p className={` ${window.innerWidth <= 576 ?" text-[20px] ps-[10px]" : "text-[28px] ps-[75px] pt-[10px]"} font-bold text-white  `}>TRENDING NOW</p>
          </div>
          <div className={` ${window.innerWidth <= 576 ?" w-[94%] h-[350px] " : " w-[90%] h-[400px]"} bg-black relative flex items-center justify-center`}>
            <button onClick={handlePrev} disabled={startindex === 0} className={` ${window.innerWidth <= 576 ?"left-[2px] h-[120px] top-[45%] " : " left-[30px] h-[150px] top-1/2"} text-white text-3xl font-bold bg-[#474748] bg-opacity-75 absolute w-[35px] text-[30px] border-none cursor-pointer  -translate-y-1/2 z-[2]`}>‹</button>
            <button onClick={handleNext} disabled={startindex + itemsperpage >= images.length} className={` ${window.innerWidth <= 576 ?"h-[120px] top-[45%] right-[2px] " : "h-[150px] right-[30px] top-1/2"} text-white text-3xl font-bold bg-[#474748] bg-opacity-75 absolute w-[35px] text-[30px] border-none cursor-pointer -translate-y-1/2 z-[2]`}>›</button>

            <div className={` ${window.innerWidth <=  576 ? "justify-center" : "items-center" } flex h-[300px] w-[90%]  items-center`}>
             {visibleimages.map((item,index)=>{
              return <div key={index} className={` ${window.innerWidth <= 576 ? "h-[250px] w-[200px] m-[10px]  " : " m-[20px] h-[300px] w-[220px]"} relative bg-gray-300 overflow-visible obj `}>
                  <img className='absolute h-[60px] w-[50px] m-[10px] ' src="netfliex-icon.png" alt="" />
                  <img className="h-full w-full hover:scale-110 object-cover" src={item.img} alt="Sample"/>
                  <span className={` ${window.innerWidth <= 576 ? "text-[90px] [-webkit-text-stroke:2px_white] font-bold left-[-20]" : " text-[120px] [-webkit-text-stroke:3px_white] font-bold left-[-20px]" } absolute  bottom-[-20px]`}>
                    {item.number}
                  </span>
              </div>
               }
              )
             }
            </div>
          </div>
       </div>

       <div className={` ${window.innerWidth <= 576 ? "h-[1550px]  " : " h-[600px]" } flex flex-col items-center bg-black `}>
          <div className={`${window.innerWidth <= 576 ? "h-[50px] w-[94%]" : "h-[60px] w-[90%]" } my-[10px]`}>
            <p className={` ${window.innerWidth <= 576 ? "text-[22px] ps-[10px] " : " ps-[75px] text-[28px] pt-[10px]" } font-bold text-white `}>More Reasons to Join</p>
          </div>
           <div className={` ${window.innerWidth <= 576 ? "flex-col h-[1450px] w-[94%]" : "flex-row h-[480px] w-[90%] justify-between" } flex`}>

              <div className={`${window.innerWidth <= 576 ? "h-[350px] w-[90%] my-[10px] ms-[5%]" : "h-[420px] w-[22%] mt-[25px]" } rounded-[20px] bg-[radial-gradient(circle_at_top_left,#01015a_30%,black_100%)] `}>
                <p className={` ${window.innerWidth <= 576 ? "text-[30px] text-center" : "text-[37px] ps-[12px]" } font-bold text-white pt-[15px] `}>Enjoy  on your TV</p>
                <p className={` ${window.innerWidth <= 576 ? "text-[20px] px-[10px] text-center" : " text-[22px] px-[12px]" } font-semibold  text-gray-500 pt-[5px] `}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,  Blu-ray players, and more.</p>
                <div className={` ${window.innerWidth <= 576 ? "w-[120px] ms-[35%] mt-[10%]" : "mt-[30%] w-[100px] ms-[160px]" } h-[100px] `}>
                  <img className='h-full w-full object-cover' src="comp-image.png" alt="" />
                </div>
              </div>
            <div className={`${window.innerWidth <= 576 ? "h-[350px] w-[90%] my-[10px]  ms-[5%]" : "h-[420px] w-[22%]  mt-[25px]" } rounded-[20px] bg-[radial-gradient(circle_at_top_left,#01015a_30%,black_100%)] `}>
              <p className={` ${window.innerWidth <= 576 ? "text-[30px] text-center" : "text-[37px] ps-[12px]" } font-bold text-white pt-[15px] `}>Download your shows to watch offline</p>
              <p className={` ${window.innerWidth <= 576 ? "text-[20px] px-[10px] text-center" : " text-[22px] px-[12px]" } font-semibold  text-gray-500 pt-[5px] `}>Save your favorites easily and always have something to watch.</p>
              <div className={` ${window.innerWidth <= 576 ? "w-[120px] ms-[35%] mt-[10%]" : "mt-[7%] w-[100px] ms-[160px]" } h-[100px] `}>
                <img className='h-full w-full object-cover' src="down-arrow.png" alt="" />
              </div>
            </div>
            <div className={`${window.innerWidth <= 576 ? "h-[350px] w-[90%] my-[10px]  ms-[5%]" : "h-[420px] w-[22%]  mt-[25px]" } rounded-[20px] bg-[radial-gradient(circle_at_top_left,#01015a_30%,black_100%)] `}>
              <p className={` ${window.innerWidth <= 576 ? "text-[30px] text-center" : "text-[37px] ps-[12px]" } font-bold text-white pt-[15px] `}>Watch everywhere</p>
              <p className={` ${window.innerWidth <= 576 ? "text-[20px] px-[10px] text-center" : " text-[22px] px-[12px]" } font-semibold  text-gray-500 pt-[5px] `}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
             <div className={` ${window.innerWidth <= 576 ? "w-[120px] ms-[35%] mt-[10%]" : "mt-[15%] w-[100px] ms-[160px]" } h-[100px] `}>
                <img className='h-full w-full object-cover' src="rocket-image.png" alt="" />
              </div>
            </div>
            <div className={`${window.innerWidth <= 576 ? "h-[350px] w-[90%] my-[10px]  ms-[5%]" : "h-[420px] w-[22%]  mt-[25px]" } rounded-[20px] bg-[radial-gradient(circle_at_top_left,#01015a_30%,black_100%)] `}>
              <p className={` ${window.innerWidth <= 576 ? "text-[30px] text-center" : "text-[37px] ps-[12px]" } font-bold text-white pt-[15px] `}>Create profiles for kids</p>
              <p className={` ${window.innerWidth <= 576 ? "text-[20px] px-[10px] text-center" : " text-[22px] px-[12px]" } font-semibold  text-gray-500 pt-[5px] `}>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
             <div className={` ${window.innerWidth <= 576 ? "w-[120px] ms-[35%] mt-[10%]" : "mt-[5%] w-[100px] ms-[160px]" } h-[100px] `}>
                <img className='h-full w-full object-cover' src="message-image.png" alt="" />
              </div>
            </div>
        </div>
       </div>

        <div  className={` ${window.innerWidth <= 576 ? "h-[640px]" : "h-[800px]" } flex flex-col items-center bg-black `}>
          <div className={` ${window.innerWidth <= 576 ? "h-[40px] w-[94%] " : " h-[60px] w-[90%]" } my-[10px] `}>
             <p className={` ${window.innerWidth <= 576 ? "text-[20px] ps-[10px] " : "text-[28px] ps-[75px] pt-[10px]" } font-bold text-white `}>Frequently Asked Questions</p>
          </div>
          <div className={` ${window.innerWidth <= 576 ? "h-[560px] w-[94%] " : " h-[680px] w-[90%]" } `}>
             <div className={` ${window.innerWidth <= 576 ? "" : "" } flex items-center flex-col w-[100%] mt-[10px]`}>

                <details  className={` ${window.innerWidth <= 576 ? "w-[96%] my-[10px]" : "w-[90%] my-[5px]" } group text-white  `}>
                  <summary className={` ${window.innerWidth <= 576 ? "h-[70px] rounded-[15px]" : " h-[100px]" } flex justify-between items-center flex-row cursor-pointer  bg-[#323232] text-white hover:bg-[#4e4e54] transition `}>
                     <div className={` ${window.innerWidth <= 576 ? "ps-[10px] text-[22px] font-medium" : "ps-[20px] text-[35px]" }`}><p>What is Netfliex ?</p></div>
                      <div className={` ${window.innerWidth <= 576 ? "mr-4" : "mr-6" } transition-transform group-open:rotate-180 `}><span className={` ${window.innerWidth <= 576 ? "text-[12px]" : " text-[22px]" } h-[10px] w-[20px] flex items-center justify-center `}>▼</span></div>
                  </summary>
                  <div className={` ${window.innerWidth <= 576 ? "px-[15px] h-[260px] rounded-[15px] pt-[10px]" : " px-[50px] h-[325px]" }  text-white  bg-[#323232] mt-[2px]  `}>
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] " : "text-[30px]" }  font-semibold text-white break-words`}>Netflix is a streaming service that offers a wide variety of award-winning TV shows,movies, anime, documentaries, and more on thousands of internet-connected device.
                    <br/><br/> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                  </div>
                </details>

                <details   className={` ${window.innerWidth <= 576 ? "w-[96%] my-[10px]" : "w-[90%] my-[5px]" } group text-white  `}>
                  <summary className={` ${window.innerWidth <= 576 ? "h-[70px] rounded-[15px]" : " h-[100px]" } flex justify-between items-center flex-row cursor-pointer  bg-[#323232] text-white hover:bg-[#4e4e54] transition `}>
                     <div className={` ${window.innerWidth <= 576 ? "ps-[10px] text-[22px] font-medium" : "ps-[20px] text-[35px]" }`}><p>How much does netfliex Cost ?</p></div>
                      <div className={` ${window.innerWidth <= 576 ? "mr-4" : "mr-6" } transition-transform group-open:rotate-180 `}><span className={` ${window.innerWidth <= 576 ? "text-[12px]" : " text-[22px]" } h-[10px] w-[20px] flex items-center justify-center `}>▼</span></div>
                  </summary>
                  <div className={` ${window.innerWidth <= 576 ? "px-[15px] rounded-[15px] h-[125px] " : " px-[50px] h-[150px]" } pt-[10px] text-white  bg-[#323232] mt-[2px]  `}>
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] " : "text-[30px]" }  font-semibold text-white break-words`}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.</p>
                  </div>
                </details>

                <details  className={` ${window.innerWidth <= 576 ? "w-[96%] my-[10px]" : "w-[90%] my-[5px]" } group text-white  `}>
                  <summary className={` ${window.innerWidth <= 576 ? "h-[70px] rounded-[15px]" : " h-[100px]" } flex justify-between items-center flex-row cursor-pointer  bg-[#323232] text-white hover:bg-[#4e4e54] transition `}>
                     <div className={` ${window.innerWidth <= 576 ? "ps-[10px] text-[22px] font-medium" : "ps-[20px] text-[35px]" }`}><p>Where can I watch ?</p></div>
                      <div className={` ${window.innerWidth <= 576 ? "mr-4" : "mr-6" } transition-transform group-open:rotate-180 `}><span className={` ${window.innerWidth <= 576 ? "text-[12px]" : " text-[22px]" } h-[10px] w-[20px] flex items-center justify-center `}>▼</span></div>
                  </summary>
                  <div className={` ${window.innerWidth <= 576 ? "px-[15px] rounded-[15px] h-[280px] pt-[10px]" : "px-[50px] h-[325px]" }  text-white  bg-[#323232] mt-[2px] `}>
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] " : "text-[30px]" }  font-semibold text-white break-words`}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/>
                    You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                  </div>
                </details>

                <details  className={` ${window.innerWidth <= 576 ? "w-[96%] my-[10px]" : "w-[90%] my-[5px]" } group text-white  `}>
                  <summary className={` ${window.innerWidth <= 576 ? "h-[70px] rounded-[15px]" : " h-[100px]" } flex justify-between items-center flex-row cursor-pointer  bg-[#323232] text-white hover:bg-[#4e4e54] transition `}>
                     <div className={` ${window.innerWidth <= 576 ? "ps-[10px] text-[22px] font-medium" : "ps-[20px] text-[35px]" }`}><p>How do I cancel?</p></div>
                      <div className={` ${window.innerWidth <= 576 ? "mr-4" : "mr-6" } transition-transform group-open:rotate-180 `}><span className={` ${window.innerWidth <= 576 ? "text-[12px]" : " text-[22px]" } h-[10px] w-[20px] flex items-center justify-center `}>▼</span></div>
                  </summary>
                  <div className={` ${window.innerWidth <= 576 ? "rounded-[15px] h-[135px] px-[15px] " : "h-[150px] px-[50px]" } pt-[10px] text-white bg-[#323232] mt-[2px] `}>
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] " : "text-[30px]" }  font-semibold text-white break-words`}>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                  </div>
                </details>

                <details  className={` ${window.innerWidth <= 576 ? "w-[96%] my-[10px]" : "w-[90%] my-[5px]" } group text-white  `}>
                  <summary className={` ${window.innerWidth <= 576 ? "h-[70px] rounded-[15px]" : " h-[100px]" } flex justify-between items-center flex-row cursor-pointer  bg-[#323232] text-white hover:bg-[#4e4e54] transition `}>
                     <div className={` ${window.innerWidth <= 576 ? "ps-[10px] text-[22px] font-medium" : "ps-[20px] text-[35px]" }`}><p>What can I watch on Netfliex ?</p></div>
                      <div className={` ${window.innerWidth <= 576 ? "mr-4" : "mr-6" } transition-transform group-open:rotate-180 `}><span className={` ${window.innerWidth <= 576 ? "text-[12px]" : " text-[22px]" } h-[10px] w-[20px] flex items-center justify-center `}>▼</span></div>
                  </summary>
                  <div className={` ${window.innerWidth <= 576 ? " rounded-[15px] h-[125px] px-[15px]" : "h-[150px] px-[50px]" } pt-[10px] text-white bg-[#323232] mt-[2px] `}>
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] " : "text-[30px]" }  font-semibold text-white break-words`}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                  </div>
                </details>

                <details  className={` ${window.innerWidth <= 576 ? "w-[96%] my-[10px]" : "w-[90%] my-[5px]" } group text-white  `}>
                  <summary className={` ${window.innerWidth <= 576 ? "h-[70px] rounded-[15px]" : " h-[100px]" } flex justify-between items-center flex-row cursor-pointer  bg-[#323232] text-white hover:bg-[#4e4e54] transition `}>
                     <div className={` ${window.innerWidth <= 576 ? "ps-[10px] text-[22px] font-medium" : "ps-[20px] text-[35px]" }`}><p>Is Netfliex good for Kids ?</p></div>
                      <div className={` ${window.innerWidth <= 576 ? "mr-4" : "mr-6" } transition-transform group-open:rotate-180 `}><span className={` ${window.innerWidth <= 576 ? "text-[12px]" : " text-[22px]" } h-[10px] w-[20px] flex items-center justify-center `}>▼</span></div>
                  </summary>
                  <div className={` ${window.innerWidth <= 576 ? "rounded-[15px] px-[15px] h-[240px] " : "h-[300px] px-[50px]" } pt-[10px] text-white bg-[#323232] mt-[2px] `}>
                    <p className={` ${window.innerWidth <= 576 ? "text-[15px] " : "text-[30px]" }  font-semibold text-white break-words`}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/><br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                  </div>
                </details>
            </div>
          </div>
        </div>

        <div className={` ${window.innerWidth <= 576 ? "h-[260px] justify-center" : "h-[160px]" } items-center justify-center flex bg-black `}>
          <div className={` ${window.innerWidth <= 576 ? "h-[250px] w-[94%] " : "h-[150px] w-[90%] " } flex flex-col `}>
            <div className={` ${window.innerWidth <= 576 ? "h-[70px] w-94% mt-[10px]" : "h-[40px]  w-[60%] ms-[20%] mt-[20px]" } flex text-center `}> 
              <p className={` ${window.innerWidth <= 576 ? "italic font-semibold" : "font-medium items-center" } text-[20px] text-white flex justify-center`}>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className={` ${window.innerWidth <= 576 ? "flex-col h-[150px]" : "flex-row" } flex mt-[10px]`}>
              <div className={`${window.innerWidth <= 576 ? "w-[100%] h-[75px]" : "w-[65%] h-[90px]" } flex flex-col `}>
                 <input id='input2' onChange={handlechangeinput2} onBlur={handleBlurinput2} className={` ${window.innerWidth <= 576 ? "w-[96%] ms-[2%] mt-[2px]" : "ms-[10%] w-[90%]" } ${error1 ?"border-solid border-red-500 h-[60px] border-[2px]":" border-slate-500"} text-white focus:border-white text-[15px] ps-[10px] h-[70px] bg-black border-[1px] outline-none rounded-[5px] focus:border-solid focus:border-[3px]  `} type={email1} placeholder='Email address' />
                 {inputError2 && (<p className={` ${window.innerWidth <= 576 ? "text-[15px] w-[90%]  ms-[15px]" : "ms-[10%] text-[18px] w-[80%]" } h-[25px] text-red-500 `}>{error2}</p>)}
              </div>
                  <button className={` ${window.innerWidth <= 576 ? "w-[40%] text-[15px] h-[60px] pb-[4px] mt-[5px] ms-[30%] ps-[2px] font-extrabold " : "w-[15%] text-[25px] h-[70px] font-semibold pb-[12px] ms-[1%] ps-[5px]" } bg-red-600 rounded-[10px] text-white`} onClick={handlemovecursor2}>GET STARTED <span className={`${window.innerWidth <= 576 ? " text-[20px] ps-[5px] font-extrabold " : "text-[40px] ps-[5px] font-bold" }`}> › </span></button>
            </div>
            
          </div>
        </div>

        <div className={` ${window.innerWidth <= 576 ? "h-[780px]" : "h-[420px]" } bg-black flex items-center justify-center`}>
          <div className={`  ${window.innerWidth <= 576 ? "h-[760px] w-[94%]" : "h-[380px] w-[90%] justify-center" } items-center flex flex-col`}>
             <div className={`  ${window.innerWidth <= 576 ? "mt-[10px] text-center pt-[5px] " : "ps-[50px] items-center " } flex h-[40px] w-[96%] `}>
                <a className={` ${window.innerWidth <= 576 ? "" : "" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2 `} href="/">Questions?Contact Us?</a>
             </div>
             <div className={`  ${window.innerWidth <= 576 ? "flex-col h-[680px] mt-[10px]" : "flex-row h-[300px] mt-[1px]" } flex w-[96%] ps-[2%]`}>
               <div className={`  ${window.innerWidth <= 576 ? "h-[180px] w-[90%] mt-[5px]" : "h-[280px] w-[24%] my-[1%]" }  bg-black flex flex-col`}>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">FAQ</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Investor relations</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">privacy</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Speed Test</a>
               </div>
               <div className={`  ${window.innerWidth <= 576 ? "h-[170px] w-[90%] mt-[5px]" : "h-[280px] w-[24%] my-[1%]" }  bg-black flex flex-col `}>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Help Center</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Jobs</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">cookiie preference</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Legal Notice</a>
               </div>
               <div className={`  ${window.innerWidth <= 576 ? "h-[170px] w-[90%] mt-[5px]" : "h-[280px] w-[24%] my-[1%]" }  bg-black flex flex-col `}>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Account</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Ways to Watch</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Corporate Information</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Only on Netfliex</a>
               </div>
               <div className={`  ${window.innerWidth <= 576 ? "h-[130px] w-[90%] mt-[5px]" : "h-[280px] w-[24%] my-[1%]" }  bg-black flex flex-col `}>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Media Center</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">terms to Use</a>
                  <a className={`  ${window.innerWidth <= 576 ? "my-[5px]" : "my-[15px]" } text-[20px] text-gray-400 font-semibold underline decoration-gray-400 decoration-2  ps-[10px]`} href="/">Contact Us</a>
               </div>
             </div>
          </div>
        </div>
        <div className={` ${window.innerWidth <= 576 ? "h-[220px]" : "h-[240px]" } bg-black flex justify-center items-center `}>
           <div className={` ${window.innerWidth <= 576 ? "h-[210px]" : "h-[220px]" } bg-black  w-[90%] my-[15px] `}>
            <div className={` ${window.innerWidth <= 576 ? "ms-[10px] h-[40px] pt-[4px]" : "ms-[60px] h-[50px]" } w-[150px] border-solid border-[2px] border-gray-600 rounded-[10px] mt-[15px] `}>
              <li className="relative group flex items-center justify-center ">
               <a href="/" className={` ${window.innerWidth <= 576 ? "" : " ms-[5px] px-3 py-2" } flex items-center text-white`}>
                 爱A ENGLISH
                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path  strokeLinecap="round" strokeWidth="2"
                  d="M19 9l-7 7-7-7"></path>
               </svg>
               </a>
               <ul
                 className={`absolute left-0 hidden group-hover:block bg-blue-500 rounded-[10px] shadow-lg mt-1 w-[150px] text-white `}>
                 <li><a href="/" className={` ${window.innerWidth <= 576 ? "" : "" } block px-4 py-2 border-solid border-[1px] rounded-[10px] hover:border-white`}>ENGLISH</a></li>
                 </ul>
              </li>
            </div>
            <p className={` ${window.innerWidth <= 576 ? "ps-[10px] mt-[15px]" : "ps-[60px] my-[25px]" } text-[20px] text-gray-400 font-semibold   `}>Netfliex Pakistan</p>
            <p className={` ${window.innerWidth <= 576 ? "ps-[10px] mt-[15px]" : "ps-[60px] my-[25px]" } text-[18px] text-gray-500 `}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-[20px] text-blue-500 underline decoration-blue-500 ' href="/">Learn More</a></p>
           </div>
        </div>
    </>
  )
}
