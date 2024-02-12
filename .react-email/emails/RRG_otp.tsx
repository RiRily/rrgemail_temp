import React from "react";
import { 
  Body, 
  Html, 
  Container, 
  Tailwind, 
  Text, 
  Button, 
  Heading, 
} from "@react-email/components";



const otp = () => {
  return(
    <html>
      <Tailwind>
      <body className="bg-white my-12 mx-auto">
        <Container className=" flex flex-col pt-4 px-5 rounded-lg shadow-lg h-[600px] w-[450px] text-center font-sans">
          <img className="mx-auto mt-8"
          src="https://i.pinimg.com/originals/1e/94/82/1e948264dffc366a735a49c0de6cb56c.jpg"
          width={100}
          height={100}
          />
          <Heading className="mt-0">Delivery Verification</Heading>
          <text className="text-sm font-medium text-gray-700">
            Thank you for trusting RRG Freight Services! 
            Use this unique code to verify that the package is 
            being receive to its rightful receiver.
          </text>
            <div className="[background-color:_#78CFDC] rounded-lg my-8 py-2 text-[36px] font-bold text-white w-[200px] mx-auto">
              <text
              >9 9 9 9 9 9</text> {/* OTP NUMBER */}
            </div>
          <text className="text-sm font-medium text-gray-700 py-8 my-8">
            You must give this code to the courier that will deliver it to you.
          </text>
          <div className=" mt-8 m">
          <p className="text-slate-400 text-sm mt-8"
          >If this email is not intended to you, please ignore and delete it. Thank you for Understanding.</p>
          </div>
        </Container>
      </body>
      </Tailwind>
    </html>
  )
}

export default otp