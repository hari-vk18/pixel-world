import React from "react";

export default function TeamMember({ img, name, title, bio }) {
    return (
        <div className="flex lg:flex-row items-start gap-4 h-full">

            {/* FIXED SIZE IMAGE */}
            <div
                className="
          bg-[#B89B7A] rounded-xl overflow-hidden border-2 border-iotc-gold
          w-[120px] h-[120px]
          lg:w-[150px] lg:h-[150px]
          2xl:w-[200px] 2xl:h-[200px]
          flex-shrink-0
        "
            >
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* TEXT SECTION */}
            <div className="3xs:pl-4 md:pl-8 font-sf-pro flex-1">
                <p className="2xl:text-[300%] lg:text-[150%] 3xs:text-[110%] font-normal leading-tight">
                    {name}
                </p>

                <p className="2xl:text-[250%] xl:text-[150%] lg:text-[100%] 3xs:text-[80%] font-normal text-[#B89B7A] mt-1">
                    {title}
                </p>

                <p className="2xl:text-[250%] lg:text-[115%] 3xs:text-[80%] text-gray-500 mt-2 leading-snug">
                    {bio}
                </p>

                <div className="flex items-center mt-4">
                    <a
                        href="#"
                        className="
              text-white bg-[#696969] inline-flex items-center justify-center 
              rounded-[10%] transition-colors duration-300
              2xl:w-[32px] 2xl:h-[32px]
              lg:w-[24px] lg:h-[24px]
              3xs:w-[18px] 3xs:h-[18px]
            "
                    >
                        <svg className="w-10 h-10" viewBox="0 0 34 34" fill="none">
                            <rect width="34" height="34" rx="2" />
                            <path d="M10.1 14.3h3v9.4h-3v-9.4zm1.5-4.2c1 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.7 1.6h-.1c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6zm4.2 4.2h2.9v1.3h.1c.4-.7 1.3-1.5 2.7-1.5 2.1 0 3.7 1.4 3.7 4.3v5.3h-3v-4.7c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.7h-3v-9.4z" fill="currentColor" />
                        </svg>

                    </a>

                    <p
                        className="
              2xl:text-[250%] xl:text-[100%] lg:text-[80%] 3xs:text-[60%]
              ml-4 font-semibold text-gray-600 tracking-widest cursor-pointer
            "
                    >
                        READ PROFILE
                    </p>
                </div>
            </div>
        </div>
    );
}
