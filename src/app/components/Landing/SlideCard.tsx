import Image from "next/image";

       export const SlideCard = () => {
  return (
       <div className="container mx-auto text-center">
          <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold">
            News impact analysis
          </h1>
          {/* Slider card */}
          <div className="mt-4 p-3 w-125 h-95 before:absolute before:left-0 before:top-0 before:h-95 before:w-1 before:rounded-l-xl before:bg-gradient-to-b before:from-[#3D32D5] before:to-[#32D583] bg-white">
            <div className="flex flex-row">
              <Image
                src="./icc/lightning-01.svg"
                alt="Logo"
                width={25}
                height={25}
                className="mr-3 m-2"
              />
              <div className="pr-50 mt-2 text-lg">Stock</div>
              <div className="border rounded-xl h-full p-1 bg-yellow-50 text-green-400">
                Confidence score: 90%
              </div>
            </div>
            <div className="flex flex-col items-start font-bold mb-2">
              Gold Rises for 2nd Session
            </div>
            <div className="flex flex-col items-start mb-2">Summary:</div>
            <div className="text-sm text-neutral-500">
              Gold drifted toward $2,800 per ounce on Friday, reaching its
              all-time high as investors sought safety after US President Donald
              Trump reiterated tariff threats.
            </div>
            <div className="flex flex-col items-start mb-2">Market impact</div>
            <div className="text-sm text-neutral-500 mb-2">
              Gold drifted toward $2,800 per ounce on Friday, reaching its
              all-time high as investors sought safety after US President Donald
              Trump reiterated tariff threats.{" "}
            </div>
            <div className="flex flex-row justify-between text-neutral-500 mb-2">
              1 hour
              <div className="">Source:ikon.mn</div>
            </div>
            <div className="flex flex-row mx-5 items-center">
              <div className="flex flex-row border p-2 mr-5 rounded-xl">
                <img
                  src="./icc/US.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="mr-3 m-2"
                />
                <div className="flex items-center">USD Bullish</div>
              </div>
              <div className="flex flex-row border w-30 p-2 rounded-xl ">
                <img
                  src="./icc/icon.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="mr-3 m-2"
                />
                <div className="flex items-center">Risk-off</div>
              </div>
            </div>
          </div>
          {/* Second slider card */}
          <div className="flex mt-4 w-64 h-22"></div>
        </div>
    );
};