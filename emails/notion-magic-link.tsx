import React from "react";
import { 
  Body, 
  Html, 
  Container, 
  Tailwind, Text, 
  Button, 
  Heading,
  Img, 
} from "@react-email/components";




const otp = () => {
  return(
    <html>
      <Tailwind>
      <body className="bg-white my-12 mx-auto">
        <Container className=" flex flex-col pt-8 px-10 rounded-lg shadow-lg h-[455px] w-[414] text-center font-sans">
       
          <Heading>Delivery Verification</Heading>
          <text className="text-sm font-medium text-gray-700">
            Thank you for trusting RRG Freight Services! 
            Use this unique code to verify that the package is 
            being receive to its rightful receiver.
          </text>
            <div className="[background-color:_#78CFDC] rounded-lg my-8 py-2 text-[36px] font-bold text-white">
              <text
              >9 9 9 9 9 9</text> {/* OTP NUMBER */}
            </div>
          <text className="text-sm font-medium text-gray-700 py-8 my-8">
            You must give this code to the courier that will deliver it to you.
          </text>
          <div className=" mt-8 m">
          <p className="text-slate-300 text-sm mt-6"
          >If this email is not intended to you, please ignore and delete it. Thank you for Understanding.</p>
          </div>
          
        </Container>
      </body>
      </Tailwind>
    </html>
  )
}

export default otp