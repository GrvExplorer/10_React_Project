import { IoMdDownload } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function Transaction() {
  return (
    <div className="mx-auto min-w-[1024px] max-w-[1024px]">
      <div className="text-end">
        <button className="text-md flex items-center justify-center gap-2 rounded-lg bg-Purple px-3 py-3 font-bold text-White ">
          <IoMdDownload className="text-xl" />
          Export CSV
        </button>
      </div>

      <div className="h-fit w-full rounded-lg bg-White px-6 py-4">
        <div className="flex justify-between">
          <div className="flex gap-4 ">
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
          <div
            className="flex items-center gap-1 border-b-4 border-none"
          >
            <IoSearchOutline className="text-2xl text-Gray" />
            <input
              type="text"
              className="outline-none"
              placeholder="Search by ID or destination"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
