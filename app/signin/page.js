export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-md w-full m-5 sm:m-10 bg-white shadow-lg sm:rounded-lg flex flex-col items-center p-8">
        <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
          Sign Up
        </h1>

        <form className="w-full mt-6">
          {/* First & Last Name */}
          <div className="mb-4 flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0 md:w-1/2 md:mr-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="md:w-1/2 md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="mobile"
            >
              Mobile No.
            </label>
            <input
              id="mobile"
              type="mobile"
              placeholder="Mobile"
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password & Confirm Password */}
          <div className="mb-4 flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0 md:w-1/2 md:mr-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="******************"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="md:w-1/2 md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="c_password"
              >
                Confirm Password
              </label>
              <input
                id="c_password"
                type="password"
                placeholder="******************"
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="mt-5 w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
