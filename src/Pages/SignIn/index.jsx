import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <form
        className="flex flex-col w-80 gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const Data = {
            email: event.target.email.value,
            pass: event.target.pass.value,
          };
          context.setIsLoggedIn(true);
          context.setUserData(Data);
        }}
      >
        <h3 className="text-lg">Please enter your information</h3>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0]focus:border-primary"
        />
        <input
          type="password"
          name="pass"
          placeholder="You Password"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] focus:border-primary"
        />
        <input
          className="py-3 px-[14px] cursor-pointer border border-black rounded-l border-[f0f0f0] bg-black text-white"
          type="submit"
        />
      </form>
    </Layout>
  );
}

export default SignIn;
