import React from "react";


// function Login(){
//     function otpgen(min=1000,max=9999){
//         x=(Math.floor(Math.random()*(max-min +1)) +min);
//         console.log(x);
//     }
//     function check(){
//        

//         if(otp==x){
//             alert("correct otp")
//         }else{
//             alert("wrong otp")
//         }
//     }
   
    // <div>
    //     <div >
    //         <div>
    //         <label>
    //             username:
    //         <input type="text" name/> </label>
    //     </div>
    //         <div>
    //         <label>
    //             password:
    //         <input type="text" name/> </label>
    //     </div>
    //     <button onClick={otpgen}>get otp</button>
    //     <input type="text" id="id1"/>

    // </div>
    // </div>
    // )


    import  { useState } from "react";

function Login() {
  const [otp, setOtp] = useState(""); 
  const [enteredOtp, setEnteredOtp] = useState("");

  function otpgen(min = 1000, max = 9999) {
    const generated = Math.floor(Math.random() * (max - min + 1)) + min;
    setOtp(generated.toString());
    console.log("Generated OTP:", generated);
    alert(`Your OTP is ${generated}`);
  }

  function check() {
    if (enteredOtp === otp) {
      alert("Correct OTP ");
    } else {
      alert("Wrong OTP ");
    }
  }

  return (
    <div>
      <div>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>

      <button onClick={() => otpgen()}>Get OTP</button>
      <input
        type="text"
        value={enteredOtp}
        onChange={(e) => setEnteredOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={check}>Verify OTP</button>
    </div>
  );
}

export default Login;