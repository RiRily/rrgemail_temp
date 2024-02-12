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
      <body className="bg-white my-12 ">
        <Container className=" flex flex-col px-16 rounded-lg shadow-2xl h-[325px] w-[608px] font-sans">
          <img className="mx-auto mt-12 mb-2"
          src="https://i.pinimg.com/originals/1e/94/82/1e948264dffc366a735a49c0de6cb56c.jpg"
          width={50}
          height={50}
          />
          <div>
          <Heading className="m-0">Hello!</Heading>
          <text className="text-sm font-medium text-gray-700">
            The package has been successfully imported into the system
          </text>
          </div>
          <div>
            <Button type="button" href="#" className="bg-[#78CFDC] rounded-lg my-8 py-2 px-2 font-bold text-white mt-10 h-[25px] w-[130px] border-0 hover:bg-sky-700">
              Open Dashboard</Button>
              </div>
        </Container>
      </body>
      </Tailwind>
    </html>
  )
}

export default otp