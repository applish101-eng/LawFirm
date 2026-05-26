import React from "react";
import ServicesImage from "../../assets/ServicesImage.png";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F5]">
      {/* =========================
          SECTION HEADER
      ========================= */}
      <div className="px-6 py-10">
        <h1 className="text-black font-primary text-xl">Our Services</h1>

        <p className="w-full text-black/80 font-secondary font-medium text-3xl sm:text-6xl mt-3 sm:leading-[1.1]">
          We provide legal guidance backed by strong and effective
          representation.
        </p>
      </div>

      {/* ======================================================
          FOR INDIVIDUALS
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-10">
        {/* LEFT LABEL */}
        <div className="lg:sticky lg:top-24 self-start">
          <p className="text-xl lg:text-sm lg:border-t lg:border-black/40 lg:pt-6">
            For Individuals
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
          {/* LEFT COLUMN */}
          <div className="flex-1">
            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Family & Personal Law
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Legal guidance for family disputes, personal rights, and
                      civil matters.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">01</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Criminal Defense
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Strategic defense representation for criminal allegations
                      and cases.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">03</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Dispute Resolution
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Mediation and legal negotiation for conflict resolution.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">05</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1">
            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Property & Civil Disputes
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Assistance with ownership conflicts and legal civil
                      proceedings.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">02</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Documentation & Immigration
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Legal documentation support and immigration assistance
                      services.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">04</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Property & Civil Disputes
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Representation in property conflicts and civil litigation
                      matters.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">06</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          FOR COMPANIES
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-10">
        {/* LEFT LABEL */}
        <div className="lg:sticky lg:top-24 self-start">
          <p className="text-xl lg:text-sm border-t border-black/40 pt-6">
            For Companies
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
          {/* LEFT COLUMN */}
          <div className="flex-1">
            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Corporate & Commercial Law
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Legal support for corporate structure, operations, and
                      governance.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">01</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Employment & Labor Law
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Guidance on workforce policies, disputes, and labor
                      regulations.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">03</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Investment & Regulatory Support
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Assistance for investment approvals and compliance
                      procedures.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">05</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1">
            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Contracts & Compliance
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Drafting agreements and ensuring regulatory compliance.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">02</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Intellectual Property
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Protection for trademarks, copyrights, and business
                      assets.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">04</span>
              </div>
            </div>

            {/* ITEM */}
            <div className="group border-t border-black/40 py-6 cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-secondary font-medium">
                    Arbitration & Mediation
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-sm text-slate-500 mt-4 max-w-sm">
                      Efficient resolution of business disputes outside court.
                    </p>
                  </div>
                </div>

                <span className="text-sm text-slate-400 shrink-0">06</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          BOTTOM CTA SECTION
      ====================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 px-6 py-10">
        {/* LEFT CARD */}
        <div className="bg-white rounded-md p-4 flex flex-col justify-between lg:items-end min-h-[260px]">
          <div>
            <h1 className="text-black font-primary text-xl">Our Services</h1>

            <p className="font-secondary font-medium text-2xl mt-2">
              More about our legal services and solutions
            </p>
          </div>

          <div className="border border-slate-400 w-12 h-12 flex items-center justify-center rounded-sm">
            <ArrowRight />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative rounded-md overflow-hidden min-h-[500px]">
          <img
            src={ServicesImage}
            alt="Services"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY CARD */}
          <div className="absolute bottom-2 left-2 right-2 bg-white rounded-md p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div>
              <p className="text-black text-2xl lg:text-3xl font-medium">
                Couldn't find the legal service you need?
              </p>

              <p className="text-slate-500 text-sm lg:text-base mt-2">
                Our team is here to guide you with trusted legal support.
              </p>
            </div>

            <button className="flex items-center justify-between gap-3 bg-primary-500 text-black text-lg lg:text-2xl font-medium pr-2 pl-4 py-2 rounded whitespace-nowrap hover:bg-primary-600 transition-colors duration-300">
              <span>Talk With Our Team</span>

              <span className="bg-black text-primary-500 p-3 lg:p-4 rounded-sm">
                <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
