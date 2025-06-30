import { FaClock, FaPhoneAlt, FaStar } from 'react-icons/fa';
import { FaArrowRightLong, FaComputer } from 'react-icons/fa6';
import genAiBanner from '../../assets/trainings/genAi/genAiBanner.png';


// const courseAmount= import.meta.env.VITE_PAYMENT_AMOUNT;
// const razorpayKeyId = import.meta.env.VITE_Key_id;

// const loadRazorpayScript = () => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };


// const handlePayment = async() => {
//   console.log("Payment button clicked");
//   const isLoaded = await loadRazorpayScript();
//   if (!isLoaded) {
//     alert("Razorpay SDK failed to load. Are you online?");
//     return;
//   }
//   const name = "Test User";
//   const email = "testemail@gmail.com"
//   const phone = "1234567890";
//   const course = "Generative AI Course";
//   if(!name || !email ||!phone || !course ){
//     alert("Please fill all the fields");
//     return;
//   }
// const response=await fetch("http://localhost:8080/api/payments/create-order",{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body:JSON.stringify({
//     name:name,
//     email:email,
//     phone:phone,
//     course:course,
//     amount: courseAmount,
//     currency: "INR",
//   })
// })

// const { order } = await response.json();
// console.log("Order created:", order);

// const options = {
//     key: razorpayKeyId,
//     amount: order.amount,
//     currency: order.currency,
//     name: "Demo Store",
//     description: `Payment of ₹${order.amount}`,
//     order_id: order.id,

//     handler: async (response)=> {
//       const verifyRes = await fetch("http://localhost:8080/api/payments/verify-payments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...response, name, email }),
//       });
//       const verifyData = await verifyRes.json();
//       alert(verifyData.message);
//     },

//     prefill: {
//       name,
//       email,
//       contact: phone,
//     },
//     theme: { color: "#2563eb" },
//   };

//   const razor = new window.Razorpay(options);
//   razor.open();
// };


const HeroBanner = () => {

  return (
    <>
      <div className="relative shadow overflow-hidden w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[400px] 2xl:h-[580px] flex">
        <img
          src={genAiBanner}
          alt="Generative AI Banner"
          className="w-full h-full  object-top"
        />

        {/* <video
          src={video1}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
          style={{ filter: 'brightness(0.5)' }}
        /> */}
        <div className="absolute left-0 -top-6 right-0 bottom-0 flex flex-col justify-center items-center px-4 text-center text-white max-w-6xl mx-auto">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] ">
            <span className=''>Unlock the Future with</span>
            <span className="animate-pulse block border-black bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-[#009ed2]">
              Generative AI
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-4 w-full max-w-5xl font-medium text-white px-24">
            Join Shilsha Technologies' comprehensive 60-hour online course and master the
            technologies that are revolutionizing industries worldwide.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYXXm-GchM9X54oy0g9xpBNqoFCIePyNuLHyt4o9pOhKkYkg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border cursor-pointer bg-gradient-to-r from-[#2f5d98] via-[#4e8ad9] to-[#00bfff] hover:bg-[#00bfff] transition px-6 py-3 text-white rounded-md shadow text-xs sm:text-sm whitespace-nowrap"
            >
              Enroll Now <FaArrowRightLong className="inline ml-1" />
            </a>
            <a href='#curriculum1'
              className="cursor-pointer hover:bg-[white] hover:text-[#4e8ad9] font-medium tracking-wide border-2 border-[#4e8ad9] transition px-6 py-3 text-white rounded-lg shadow text-xs sm:text-sm whitespace-nowrap">
              View Curriculum
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4 text-xs sm:text-sm text-white animate-pulse">
            <div className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaClock /></div>
              <div className='flex gap-1'>
                <div>60 Hours</div>
                <div>Duration</div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaComputer /></div>
              <div className='flex gap-1'>
                <div>Online</div>
                <div>Mode</div>
              </div>
            </div>
            <div className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaStar /></div>
              <div className='flex gap-1'>
                <div>Expert Led</div>
                <div>Training</div>
              </div>
            </div>
            <div
              // onClick={handlePayment}
              className='flex items-center justify-center gap-2 border-2 border-[#4e8ad9] rounded-md hover:scale-105 p-2 '>
              <div><FaPhoneAlt /></div>
              <div className='flex gap-1' >
                <a href='#enquiryForm'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-200" />
    </>
  );
};

export default HeroBanner;
