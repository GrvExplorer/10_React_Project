import { FaAngleDown } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function Transaction() {
  const transactionsLoad = [
    {
      id: "HD82NA2H",
      data: "2022-06-09",
      time: "7:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "pending",
    },
    {
      id: "HD82NA2H",
      data: "2022-06-09",
      time: "7:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "processing",
    },
    {
      id: "HD82NA2H",
      data: "2022-06-09",
      time: "7:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "cancelled",
    },
    {
      id: "HD82NA2H",
      data: "2022-06-09",
      time: "7:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "completed",
    },
    {
      id: "HD82NA2H",
      data: "2022-06-09",
      time: "7:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "completed",
    },
    {
      id: "HD82NA2H",
      data: "2022-06-09",
      time: "7:06 PM",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      status: "completed",
    },
  ];

  return (
    <div className="mx-auto min-w-[1024px] max-w-[1024px] md:px-10">
      <div className="mb-4 flex justify-end text-end">
        <button className="text-md flex items-center justify-center gap-2 rounded-lg bg-Purple px-3 py-3 font-bold text-White ">
          <IoMdDownload className="text-xl" />
          Export CSV
        </button>
      </div>

      <div className="h-fit w-full rounded-2xl bg-White px-6 py-4">
        {/* Navigation Of transactions */}
        <div className="flex items-center justify-between border-b-2 pl-4">
          <div className="flex gap-10">
            <div className="flex items-center gap-3 border-b-4 border-transparent pb-2 font-semibold text-black hover:border-Purple">
              All
              <p className="rounded-xl bg-Main p-1 text-Gray">349</p>
            </div>
            <div className="flex items-center gap-3 border-b-4 border-transparent pb-2 font-semibold text-black hover:border-Purple">
              Deposit
              <p className="rounded-xl bg-Main p-1 text-Gray">114</p>
            </div>
            <div className="flex items-center gap-3 border-b-4 border-transparent pb-2 font-semibold text-black hover:border-Purple">
              Withdraw
              <p className="rounded-xl bg-Main p-1 text-Gray">213</p>
            </div>
            <div className="flex items-center gap-3 border-b-4 border-transparent pb-2 font-semibold text-black hover:border-Purple">
              Trade
              <p className="rounded-xl bg-Main p-1 text-Gray">22</p>
            </div>
          </div>
          <div className="flex gap-1 border-b-4 border-none">
            <IoSearchOutline className="text-2xl text-Gray" />
            <input
              type="text"
              className="outline-none"
              placeholder="Search by ID or destination"
            />
          </div>
        </div>

        <div className="flex w-full gap-32 border-b-2 px-2 py-4 font-semibold justify-center text-Gray ">
          <p className="">ID</p>
          <p className="flex items-center gap-1">
            Data & Time <FaAngleDown />
          </p>
          <p className="">Type</p>
          <p className="flex items-center gap-1">
            Amount <FaAngleDown />
          </p>
          <p className="">Status</p>
        </div>

        {transactionsLoad.map(({ id, data, time, type, amount, status }, i) => (
          <div
            key={i}
            className="mt-6 flex w-full items-center gap-24 border-b px-2 py-4 font-bold border-opacity-0"
          >
            <p className="">{id}</p>
            <p className="flex  flex-col justify-center">
              {data}
              <p className="font-normal text-Gray">{time}</p>
            </p>
            <p className="">{type}</p>
            <p className="flex items-center gap-1">{amount}</p>
            <p
              className={`
          ${status == "pending" && "bg-Gray"}
          ${status == "processing" && "bg-yellow-500"}
          ${status == "cancelled" && "bg-red-500"}
          ${status == "completed" && "bg-green-500"}
h-fit rounded-2xl px-2 py-1 text-white`}
            >
              {status == "pending" && "Pending"}
              {status == "processing" && "Processing"}
              {status == "cancelled" && "Cancelled"}
              {status == "completed" && "Completed"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;
