import { CiMail } from "react-icons/ci";

function Support() {
  return (
    <div className="flex flex-col gap-24">
      <div className="mx-auto flex w-full max-w-[1024px] justify-between gap-4  md:px-10">
        <div className="w-[450px]">
          <div>
            <img src="./Email.png" alt="email" className="h-6 w-6" />
          </div>
          <p className="mt-2 text-2xl font-semibold">Contract Us</p>
          <p className="text-sm text-Gray">
            Have a question or just want to know more? Feel free to reach out to
            us.
          </p>
        </div>
        <form
          action=""
          className="flex w-[550px] flex-col gap-6 rounded-2xl bg-White p-4"
        >
          <p className="text-sm font-semibold">
            You will receive response within 24 hours of time of submit.
          </p>
          <div className="flex justify-between">
            <label htmlFor="name" className="font-semibold">
              Name
              <input
                type="text"
                placeholder="James"
                className="rounded-md border px-3 py-1 font-normal outline-none"
                id="name"
              />
            </label>
            <label htmlFor="surname" className="font-semibold">
              Surname
              <input
                type="text"
                placeholder="Arthur"
                className="w-full rounded-md border px-3 py-1 font-normal outline-none"
                id="surname"
              />
            </label>
          </div>
          <label htmlFor="email" className="flex flex-col font-semibold">
            Email
            <input
              type="email"
              placeholder="name@mail.com"
              className="rounded-md border px-3 py-1 font-normal outline-none"
              id="email"
            />
          </label>

          <label htmlFor="message" className="flex flex-col font-semibold">
            Message
            <textarea
              className="h-24 rounded-md border px-3 py-1 font-normal outline-none"
              name="message"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </label>
          <label htmlFor="t&c" className="flex gap-2">
            <input type="checkbox" name="t&c" id="t&c" />I agree with{" "}
            <span className="text-Purple">Terms & Conditions.</span>
          </label>

          <div className="flex flex-col gap-2">
            <button className="rounded-lg bg-[#D8DDE2] py-2 font-semibold text-[#797E82] ">
              Send a Message
            </button>
            <button className="rounded-lg bg-Main py-2 font-semibold">
              Send a Message
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto flex w-full max-w-[1024px] justify-between gap-4  md:px-10">
        <div
          className="w-[450px]
  
    "
        >
          <div>
            <img src="./Chatbot.png" alt="email" className="h-6 w-6" />
          </div>
          <p className="mt-2 text-2xl font-semibold">Live Chat</p>
          <p className="text-sm text-Gray">
            Don’t have time to wait for the answer? Chat with us now.
          </p>
        </div>

        <div className="w-[550px] rounded-lg bg-Purple p-6">
          <p className="w-fit rounded-2xl bg-White px-2 py-1 text-sm font-semibold text-Purple mb-2">
            Chatbot{" "}
          </p>

          <p className="text-White">
       Chat with us now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
