/* import React from 'react' */
import Layout from "../../Components/Layout";

function MyAcount() {
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <Layout>
      <form
        className="flex flex-col w-80 gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const updateUserData = {
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.pass.value,
          };
          localStorage.setItem("user", JSON.stringify(updateUserData));
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
            defaultValue={userData.email}
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
