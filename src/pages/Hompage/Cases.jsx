import React from "react";
import CasesImage from "../../assets/cases.png";
import { ArrowRight } from "lucide-react";
const Cases = () => {
  return (
    <section className="w-full  bg-[#F5F5F5]">
      {/* IMAGE */}
      <div className="w-full h-screen overflow-hidden">
        <img
          src={CasesImage}
          alt="Cases Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="px-6 py-10">
        <h1 className="text-black font-primary text-xl">Our Cases</h1>

        <p className="w-full text-black/80 font-secondary font-medium text-3xl sm:text-6xl mt-3 sm:leading-[1.1]">
          See how justice <br></br>was achieved in real cases.
        </p>
      </div>

      {/* CARDS */}
      <div className="px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-md min-h-[220px] flex flex-col items-end gap-12">
          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl">Property Dispute Resolved</h2>
            <p className="text-md">
              Complex property ownership dispute involving conflicting land
              documents. Through detailed legal research and court advocacy,
              secured a favorable judgment restoring the client’s rightful
              ownership.
            </p>
          </div>
          <div className="border border-slate-400 w-12 h-12 flex items-center justify-center rounded-sm">
            <ArrowRight />
          </div>
        </div>

        <div className="bg-white p-6 rounded-md min-h-[220px] flex flex-col items-end gap-12">
          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl">Property Dispute Resolved</h2>
            <p className="text-md">
              Complex property ownership dispute involving conflicting land
              documents. Through detailed legal research and court advocacy,
              secured a favorable judgment restoring the client’s rightful
              ownership.
            </p>
          </div>
          <div className="border border-slate-400 w-12 h-12 flex items-center justify-center rounded-sm">
            <ArrowRight />
          </div>
        </div>

        <div className="bg-white p-6 rounded-md min-h-[220px] flex flex-col items-end gap-12">
          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl">Property Dispute Resolved</h2>
            <p className="text-md">
              Complex property ownership dispute involving conflicting land
              documents. Through detailed legal research and court advocacy,
              secured a favorable judgment restoring the client’s rightful
              ownership.
            </p>
          </div>
          <div className="border border-slate-400 w-12 h-12 flex items-center justify-center rounded-sm">
            <ArrowRight />
          </div>
        </div>

        <div className="bg-white p-6 rounded-md min-h-[220px] flex flex-col items-end gap-12">
          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl">Property Dispute Resolved</h2>
            <p className="text-md">
              Complex property ownership dispute involving conflicting land
              documents. Through detailed legal research and court advocacy,
              secured a favorable judgment restoring the client’s rightful
              ownership.
            </p>
          </div>
          <div className="border border-slate-400 w-12 h-12 flex items-center justify-center rounded-sm">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
