"use client";

import Layout from "@/layout";
import React from "react";
import InputComponent from "@/components/Global/InputComponent";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import AnimatedButton from "@/components/ui/animatedButton";

function Contact() {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_QUOTE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const sendEmail = async () => {
    try {
      if (!firstName || !lastName || !email || !phone || !message) {
        toast.error("Kindly fill all the fields");
      } else {
        setLoading(true);
        const templateParams = {
          from_firstName: name,
          from_lastName: lastName,
          from_email: email,
          from_phone: phone,
          message: message,
        };

        const res = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        console.log(res);
        setLoading(false);
        toast.success(
          "Thank you for contacting LetsCr8T! We will get back to you shortly."
        );
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send email");
      console.error(error);
    }
  };
  return (
    <Layout>
      <div className=" lg:pt-[80px] pt-[50px] lg:px-[80px] px-[25px] pb-[50px]">
        <div className="flex flex-col item-center justify-center gap-[10px] lg:w-[630px] md:w-[470px] w-[340px]  text-center mx-auto items-center">
          <h1 className="lg:text-5xl text-[32px] font-normal md:font-medium font-grotesk ">
            Contact LetsCr8T
          </h1>
          <p className=" text-base md:text-lg font-light md:leading-[27px] text-cr8tLightBlack font-poppins leading-6">
            Have a project in mind or need more information? Fill out the form
            below, and let&apos;s discuss how our digital solutions can help
            your business thrive
          </p>
        </div>
        <div className="md:mt-10 mt-[30px] bg-white rounded-[20px] max-w-[894px] mx-auto lg:px-8 px-[10px] flex flex-col gap-8 py-8">
          <div className="lg:text-[21px] text-base font-normal lg:font-medium font-poppins">
            <h3>Leave Us a message</h3>
            <div className="border-2 border-cr8tOrange w-[100px]"></div>
          </div>
          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex gap-5 flex-wrap lg:flex-nowrap">
              <InputComponent
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="w-full"
              />
              <InputComponent
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="w-full"
              />
            </div>

            {/* Email and Phone Number */}
            <div className="flex gap-5 flex-wrap lg:flex-nowrap">
              <InputComponent
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full"
              />
              <InputComponent
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                className="w-full"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              className="flex min-h-[170px] w-full border-input bg-background px-3 py-2 disabled:cursor-not-allowed  border  h-14 text-base rounded-[5px] pl-[10px] font-light font-poppins focus:outline-none focus:ring focus:ring-cr8tOrange text-cr8tLightBlack text-opacity-25"
              placeholder="Leave a message "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="mx-auto">
              <AnimatedButton
                className="lg:w-[282px] h-[56px] w-full mx-auto"
                disabled={loading}
                onClick={sendEmail}
              >
                {`${loading ? "SENDING..." : "Submit your message"}`}
              </AnimatedButton>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
