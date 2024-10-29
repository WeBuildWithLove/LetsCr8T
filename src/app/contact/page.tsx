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

  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const sendEmail = async () => {
    try {
      if (!name || !lastName || !email || !phone || !message) {
        toast.error("Kindly fill all the fields");
      } else {
        setLoading(true);
        const templateParams = {
          from_name: name,
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
          "Thank you for reaching out to WeCr8t! We have received your message and will get back to you shortly."
        );
        setEmail("");
        setName("");
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
      <div className="pt-[80px] x-[80px]">
        <div className="flex flex-col item-center justify-center gap-[10px] w-[630px] text-center mx-auto">
          <h1 className="text-5xl font-medium font-grotesk">
            Contact LectsCr8T
          </h1>
          <p className=" text-lg font-normal leading-[27px] text-cr8tLightBlack font-poppins">
            If you&apos;d like to get in touch with LetsCr8T regarding your
            project or need more information? Fill out the form below to get in
            touch with us. At LetsCr8T, we&apos;re here to help your business
            thrive with our exceptional digital solutions.
          </p>
        </div>
        <div className="mt-10 bg-white rounded-[20px] w-[894px] mx-auto px-8 flex flex-col gap-8 py-8">
          <div className="text-[21px] font-medium font-poppins">
            <h3>Leave Us a message</h3>
            <div className="border-2 border-cr8tOrange w-[100px]"></div>
          </div>
          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <InputComponent
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="w-1/2"
              />
              <InputComponent
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="w-1/2"
              />
            </div>

            {/* Email and Phone Number */}
            <div className="flex space-x-4">
              <InputComponent
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-1/2"
              />
              <InputComponent
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                className="w-1/2"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              className="flex min-h-[170px] w-full border-input bg-background px-3 py-2 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border border-cr8tOrange h-14 text-base text-cr8tLightBlack opacity-[0.5] font-poppins focus:ring-0  rounded-[5px] pl-[10px] transition-colors duration-300 focus:!border-cr8tOrange"
              placeholder="Leave a message "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>

          <div className="mx-auto">
            <AnimatedButton
              className="w-[282px] h-[56px] flex flex-col"
              disabled={loading}
              onClick={sendEmail}
            >
              {`${loading ? "SENDING..." : "Submit your message"}`}
            </AnimatedButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
