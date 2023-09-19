import React from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import apiUrl from "../api/ApiUrl";

const Register = () => {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const photo = useRef();
  const password = useRef();
  const address = useRef();
  const phone = useRef();

  const register = async () => {
    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
      photo: photo.current.value?.trim(),
      name: name.current.value?.trim(),
      address: address.current.value?.trim(),
      phone: phone.current.value?.trim(),
    };

    console.log(data);
    try {
      let newUser = await axios.post(apiUrl + "/auth/signup", data);

      if (newUser) {
        Swal.fire({
          icon: "success",
          html: `<p>Account User Registered!</p>`,
          timer: 2000,
        });
        navigate("/signin");
      }
    } catch (error) {
      Swal.fire({
        icon: "info",
        text: "¡Sign Up Failed!",
        html: error.response.data.messages
          .map((each) => `<p>${each}</p>`)
          .join(""),
      });
    }
  };

  return (
    <main className="flex bg-t_main w-full min-h-full items-center mt-2">
      <div className="flex flex-col items-center justify-center gap-2 h-screen w-screen md:w-[50%]">
        <img src="/assets/logo23.png" alt="frame" className="w-[140px]" />
        <p className="font-semibold text-[10px] mb-[1px] text-center p-1">
          Enjoy Free Shipping on stack commerce!
        </p>
        <p className="font-semibold text-[10px] mb-[1px] text-center p-1">
          For buyers, shop at ease and enjoy lower prices for your purchases.
        </p>
        <form className="flex flex-col">
          <input
            className=" transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className=" transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="photo"
            id="photo"
            placeholder="URL Photo"
            ref={photo}
          />

          <input
            className=" transition-transform transform hover:scale-105w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <hr />
          <p className="text-lg font-normal">Customer</p>
          <input
            className="transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
            type="name"
            name="name"
            id="name"
            placeholder="Name"
            ref={name}
          />

          <input
            className="transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
            type="address"
            name="address"
            id="address"
            placeholder="Address"
            ref={address}
          />

          <input
            className="transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-[12px] hover:border-t_background3 rounded-lg border-2 border-[#1F1F1F]"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone"
            ref={phone}
          />

          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-xl text-white rounded-lg bg-t_background3  hover:bg-t_background3 hover:text-[white] hover:border-t_background3 cursor-pointer"
            type="button"
            value="Sign up"
            onClick={register}
          />
          <p className="font-semibold text-[12px] text-center pb-6">
            Go back to{" "}
            <Anchor to="/" className="text-[#4338CA] hover:text-black">
              Home
            </Anchor>
            !
          </p>
        </form>
      </div>

      <img
        className="hidden md:block h-screen w-[50%] object-cover mb-2"
        src="/assets/corine.jpg"
        alt="register"
      />
    </main>
  );
};

export default Register;
