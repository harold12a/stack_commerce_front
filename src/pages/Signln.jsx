import React from "react";
import { Link as Anchor} from "react-router-dom";
import { useRef } from "react";
import apiUrl from "../api/ApiUrl";
import Swal from "sweetalert2";
import axios from "axios";

const SignIn = () => {
  const email = useRef();
  const password = useRef();

  const signIn = async (event) => {
    event.preventDefault();

    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
    };

    try {
      let user = await axios.post(apiUrl + "/auth/signin", data);

      if (user) {
        localStorage.setItem("token", user.data.response.token);
        localStorage.setItem("user", JSON.stringify(user.data.response.user));

        Swal.fire({
          icon: "success",
          text: "Welcome to StackCommerce !",
          timer: 1500,
          allowOutsideClick: false,
          showConfirmButton: false,
        });

        setTimeout(() => {
          window.location.replace("/");
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        icon: "info",
        text: "¡Sign In Failed!",
        html: error.response.data.messages
          .map((each) => `<p>${each}</p>`)
          .join(""),
      });
    }
  };

  return (
    <main className="bg-cover bg-center bg-no-repeat h-screen bg-white md:bg-[url('/assets/signIn.png')] ">
      <div className=" md:flex object-cover bg-no-repeat w-screen">
        <div className="flex flex-col items-center justify-center bg-white gap-2 h-screen w-screen md:w-[50%]">
          <form className="flex flex-col items-center justify-center md:w-96 p-4 h-[70%] md:h-[50%]">
            <div className="flex justify-center">
              <img
                src="/assets/logo23.png"
                alt="frame"
                className="w-[140px] bg-white rounded-lg mb-4"
              />
            </div>
            <input
              className="transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] p-2 my-[8px] text-[12px] hover:border-t_background1 rounded-lg border-2 border-[#1F1F1F]"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              ref={email}
            />
            <input
              className="transition-transform transform hover:scale-105 w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px]  p-2 my-[8px] text-[12px] hover:border-t_background1 rounded-lg border-2 border-[#1F1F1F]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              ref={password}
            />
            <input
              className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[40px] p-2 my-[8px] text-xl text-white rounded-lg bg-t_background1 from-t_background1 hover:bg-t_background1 hover:text-[white] hover:border-[#4338CA] cursor-pointer"
              type="button"
              value="Sign In"
              onClick={signIn}
            />
            <div className="flex justify-center flex-col items-center">
              <p className="font-semibold text-[12px] mt-[12px] p-2">
                You don't have an account yet?{" "}
                <Anchor
                  to="/register"
                  className="text-[#4338CA] hover:text-black"
                >
                  Sign up
                </Anchor>
                !
              </p>
              <p className="font-semibold text-[12px] p-2">
                Go back to{" "}
                <Anchor to="/" className="text-[#4338CA] hover:text-black">
                  Home
                </Anchor>
                !
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
