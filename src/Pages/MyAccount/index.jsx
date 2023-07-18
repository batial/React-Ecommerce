/* import React from 'react' */
import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function MyAcount() {
  const context = useContext(ShoppingCartContext);
  const userData = context.userData;

  return (
    <Layout>
      <form
        className="flex flex-col w-80 gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          let updateUserData = context.userData;
          updateUserData.name = event.target.name.value;
          updateUserData.email = event.target.email.value;
          updateUserData.pass = event.target.pass.value;
          const users = JSON.parse(localStorage.getItem("users")) || [];
          const userIndex = users.findIndex(
            (user) => user.email === updateUserData.email
          );
          if (userIndex !== -1) {
            users[userIndex] = updateUserData;
          }
          localStorage.setItem("users", JSON.stringify(users));
        }}
      >
        <h3 className="text-lg">My account</h3>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0]focus:border-primary"
            defaultValue={userData.name ?? ""}
          />
        </label>

        <label htmlFor="name">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0]focus:border-primary"
            defaultValue={userData.email ?? "Empty Email"}
            readOnly
          />
        </label>

        <label htmlFor="pass">
          Password:
          <input
            type="password"
            name="pass"
            placeholder="You Password"
            className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] focus:border-primary"
            required
          />
        </label>
        <input
          className="py-3 w-full cursor-pointer border border-black rounded-sm bg-black text-white"
          type="submit"
        />
      </form>
    </Layout>
  );
}

export default MyAcount;
