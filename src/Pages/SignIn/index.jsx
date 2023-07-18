import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <Layout>
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
        <h3 className="text-lg">Please enter your information</h3>
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
        <input
          className="py-3 w-full cursor-pointer border border-black rounded-sm bg-black text-white"
          type="submit"
        />
      </form>
    </Layout>
  );
}

export default SignIn;
