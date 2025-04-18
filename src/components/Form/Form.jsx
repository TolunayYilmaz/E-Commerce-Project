import FooterButton from "../Button/FooterButton";

export default function Form(){
    const roles = [
        {
          id: 1,
          name: "Customer",
        },
        {
          id: 2,
          name: "Admin",
        },
        ,
        {
          id: 3,
          name: "Store",
        },
      ];
    return(  <form className=" flex flex-col items-center h-[520px] justify-center gap-y-6 w-[90%] shadow-md rounded-lg border-1 border-[#23A6F0] mx-auto">
        <div className="flex items-start flex-col  justify-between h-[80px] w-[90%]">
          <label
            htmlFor="exampleEmail"
            className="text-[#23A6F0] text-xl font-medium "
          >
            Email:
          </label>
          <input
            id="exampleEmail"
            name="email"
            type=""
            placeholder="Enter your email"
            className="h-10 w-[100%]"
          />
        </div>
        <div className="flex items-start flex-col  justify-between  h-[80px] w-[90%]">
          <label
            htmlFor="password"
            className="text-[#23A6F0] text-xl font-medium "
          >
            Password:
          </label>
          <input
            id="password"
            name="password"
            type=""
            placeholder="Enter your password"
            className="h-10 w-[100%]"
          />
        </div>
        <div className="flex items-start flex-col  justify-between  h-[80px] w-[90%]">
          <label
            htmlFor="confirmPassword"
            className="text-[#23A6F0] text-xl font-medium "
          >
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type=""
            placeholder="Enter your password"
            className="h-10 w-[100%]"
          />
        </div>
        <div className="flex items-start flex-col  justify-between  h-[80px] w-[90%]">
          <label
            htmlFor="password"
            className="text-[#23A6F0] text-xl font-medium  "
          >
            Role:
          </label>
          <select
            defaultValue=""
            className="h-10 w-[100%] pl-2  py-2 text-sm border rounded "
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <FooterButton buttonName={"Sign Up"}/>
      </form>);
}