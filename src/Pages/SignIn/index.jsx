import Layout from "../../Components/Layout";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const [signForm, setSignForm] = useState(null);
  const [newUserForm, setNewUserForm] = useState(false);

  useEffect(() => {
    if (!newUserForm) {
      setSignForm(
        <div>
          <form
            className="flex flex-col w-80 gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              let data = undefined;

              //get old users
              if (localStorage.getItem("users")) {
                data = JSON.parse(localStorage.getItem("users"));
              } else {
                data = [];
              }

              const registeredUser = data.find(
                (user) => user.email == event.target.email.value
              );
              //add the new user
              if (!registeredUser) {
                const newUser = {
                  email: event.target.email.value,
                  pass: event.target.pass.value,
                };
                data = [...data, newUser];
                localStorage.setItem("users", JSON.stringify(data));
                context.setUserData(newUser);
              } else {
                context.setUserData(registeredUser);
              }

              context.setIsLoggedIn(true);
              navigate("/");
            }}
          >
            <h3 className="text-lg ">Please enter your information</h3>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0]focus:border-primary"
              required
            />
            <input
              type="password"
              name="pass"
              placeholder="You Password"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] focus:border-primary"
              required
            />
            <button
              className="py-3 w-full cursor-pointer border border-black rounded-sm bg-black text-white"
              type="submit"
            >
              Log-in
            </button>
            <div className="flex items-center justify-center text-gray-500">
              <p className="cursor-pointer hover:text-black">
                Forgot Your Password?
              </p>
            </div>
          </form>

          <section className="flex flex-col w-80 gap-4">
            <hr className="border w-full border-gray-300 my-4" />
            <div>
              <button
                className="py-3 w-full cursor-pointer border border-gray-800 rounded-sm bg-blue-600 text-white"
                onClick={() => {
                  setNewUserForm(true);
                }}
              >
                Create a new account
              </button>
            </div>
          </section>
        </div>
      );
    } else {
      setSignForm(
        <div>
          <form
            className="flex flex-col w-80 gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              let data = undefined;

              //get old users
              if (localStorage.getItem("users")) {
                data = JSON.parse(localStorage.getItem("users"));
              } else {
                data = [];
              }

              const registeredUser = data.find(
                (user) => user.email == event.target.email.value
              );
              //add the new user
              if (!registeredUser) {
                const newUser = {
                  email: event.target.email.value,
                  pass: event.target.pass.value,
                };
                data = [...data, newUser];
                localStorage.setItem("users", JSON.stringify(data));
                context.setUserData(newUser);
              } else {
                context.setUserData(registeredUser);
              }

              context.setIsLoggedIn(true);
              navigate("/");
            }}
          >
            <h3 className="text-lg ">Please enter your information</h3>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0]focus:border-primary"
              required
            />
            <input
              type="password"
              name="pass"
              placeholder="You Password"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] focus:border-primary"
              required
            />
            <button
              className="py-3 w-full cursor-pointer border border-black rounded-sm bg-black text-white"
              type="submit"
            >
              Sign-in
            </button>
          </form>
        </div>
      );
    }
  }, [context, navigate, newUserForm, signForm]);

  return <Layout>{signForm}</Layout>;
}

export default SignIn;
