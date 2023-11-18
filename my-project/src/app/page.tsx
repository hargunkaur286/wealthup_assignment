export default function Home() {
  return (
    <section>
       <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-teal-500 h-screen p-10">
      <h1 className="font-poppins font-semibold text-6xl leading-20 text-center text-white">
        Check your financial health
      </h1>
      <p className="font-poppins font-light text-lg leading-9 text-center text-white">
        Use WeathoMeter to get a free report 
        <br/>
        card for your finances - within minutes!
      </p>
      <button className="font-poppins font-semibold text-lg leading-12 bg-orange-500 text-white py-3 px-6 rounded-full">
        Get Started
      </button>

    <div className="flex text-white relative justify-between w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col">
        <p>Expected Retirement Age</p>
        <p>Identify Mistakes</p>
      </div>
      <div>
        <p>Personalised Road Map</p>
        <p>Tips to Improve</p>
      </div>
    </div>

      <p className="font-poppins font-bold text-5xl leading-15 text-white text-center">
        How it works?
      </p>
      {/* <img
        src="./wave.png" 
        alt="Wave Vector"
      /> */}
      <div className="flex justify-between text-white w-full max-w-screen-lg mx-auto">
        <p>Answer few <br/> questions</p>
        <p>Register using <br/> phone and OTP</p>
        <p>Get report and <br/> personal roadmap</p>
      </div>

      <button className="font-poppins font-semibold text-lg leading-12 bg-orange-500 text-white py-3 px-6 rounded-full">
        Get Started
      </button>
      
    </div>
    </section>
  )
}
