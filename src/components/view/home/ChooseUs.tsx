import Image from "next/image";

const ChooseUs = () => {
  return (
 <div className="bg-[#fafbfc]">
     <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
      <div className="py-5 flex items-center gap-3">
        <hr className="w-10 h-[3px] bg-main my-2" />{" "}
        <span className="text-sm sm:text-lg">WHY CHOOSE US</span>
      </div>
      <h1 className="text-2xl font-medium sm:text-4xl sm:font-bold text-black">
        Because we care about your safety.
      </h1>

      <div className="lg:flex justify-center mt-8 gap-8 items-center h-full">
        <div className="w-full lg:w-2/5 flex justify-center items-center h-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white  shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
              <div>
                <Image
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png"
                  alt=""
                />
              </div>
              <div className="text-base font-bold text-black">
                24/7 Support
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
              <div>
                <Image
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_sanitized.png"
                  alt=""
                />
              </div>
              <div className="text-base font-bold text-black">
                Sanitising Hands & Equipment
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
              <div>
                <Image
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_mask.png"
                  alt=""
                />
              </div>
              <div className="text-base font-bold text-black">
                Ensuring Masks
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
              <div>
                <Image
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_gloves.png"
                  alt=""
                />
              </div>
              <div className="text-base font-bold text-black">
                Ensuring Gloves
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 sm:mt-0 lg:w-3/5 h-[250px] sm:h-[280px] md:h-[350px]">
          <Image
            src="https://res.cloudinary.com/dyy4n4fmh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697715568/Image-11_n2nt55.jpg"
            alt=""
            
            width={1000}
            height={800}
            className="rounded-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
 </div>
  );
};
export default ChooseUs;
