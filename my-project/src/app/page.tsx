
import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-teal-500 mx-auto">
        <h1 className="font-poppins font-semibold text-6xl pb-5 text-center text-white pt-20">
          Check your financial health
        </h1>
        <p className="font-poppins font-light text-lg  text-center text-white pb-10">
          Use WeathoMeter to get a free report
          <br />
          card for your finances - within minutes!
        </p>
        <div className='pb-10'>
          <button className="font-poppins font-semibold text-lg leading-12 bg-orange-500 text-white py-3 px-6 rounded-full">
            Get Started
          </button>
        </div>


        <div className="flex text-white relative justify-around w-full max-w-screen-lg mx-auto">
          <div className="flex flex-col">

            <div className='flex mb-2'>
              <Image src="/app/assets/check.png" alt="check" width="25" height="10" className="mr-2 z-index-1000" />
              <div>
                <p>Expected Retirement Age</p>
                <Image src="/app/assets/line.png" alt="line" width="190" height="100" className="mt-1 " />
              </div>
            </div>

            <div className='flex'>
              <Image src="/app/assets/check.png" alt="check" width="25" height="10" className="mr-2" />
              <div>
                <p>Identify Mistakes</p>
                <Image src="/app/assets/line.png" alt="line" width="190" height="100" className="mt-1 " />
              </div>

            </div>
          </div>

          <div className=''>
            <Image src="/app/assets/phone.png" alt="phone" width="350" height="500" className="pl-11" />
          </div>

          <div>
            <div className='flex mb-2'>
              <Image src="/app/assets/check.png" alt="check" width="25" height="10" className="mr-2" />
              <div>
                <p>Personalised Road Map</p>
                <Image src="/app/assets/line.png" alt="line" width="190" height="100" className="mt-1 " />
              </div>

            </div>

            <div className='flex'>
              <Image src="/app/assets/check.png" alt="check" width="25" height="10" className="mr-2" />
              <div>
                <p>Tips to Improve</p>
                <Image src="/app/assets/line.png" alt="line" width="190" height="100" className="mt-1 " />
              </div>

            </div>

          </div>
        </div>

        {/* <div className="bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url('/app/assets/wave.png')` }}>
          <p className="font-poppins font-bold text-2xl text-white text-center">
            How it works?
          </p>
          <div className='flex justify-center items-center'>
          <Image src="/app/assets/workkk.png" alt="phone" width="1050" height="0" />
          </div>
          
          <div className="flex justify-between text-white w-full max-w-screen-lg mx-auto p-5">
            <p>Answer few <br /> questions</p>
            <p>Register using <br /> phone and OTP</p>
            <p>Get report and <br /> personal roadmap</p>
          </div>
          <div className='flex items-center justify-center pb-10'>
          <button className="font-poppins font-semibold text-lg leading-12 bg-orange-500 text-white py-3 px-6 rounded-full mt-4">
            Get Started
          </button>
          </div>
          
        </div> */}
        <div className="bg-cover bg-center bg-no-repeat w-full h-full" style={{ backgroundImage: `url('/app/assets/wave.png')`}}>
          <p className="font-poppins font-bold text-4xl text-white text-center pt-20">
            How it works?
          </p>
          <div className='flex justify-center items-center '>
            {/* Adjust the height property to a specific value or use "auto" */}
            <Image src="/app/assets/workkk.png" alt="phone" width="1050" height="0" />
          </div>
          <div className="flex justify-between text-white w-full max-w-screen-lg mx-auto p-5">
            <p >Answer few <br /> questions</p>
            <p>Register using <br /> phone and OTP</p>
            <p>Get report and <br /> personal roadmap</p>
          </div>

          <div className='flex items-center justify-center pb-10'>
            <button className="font-poppins font-semibold text-lg leading-12 bg-orange-500 text-white py-3 px-6 rounded-full mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


