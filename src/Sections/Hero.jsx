import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constant";

const Hero = () => {
  const [bigShoeImg , setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray mt-6 mb-14 leading-8 sm:max-w-sm">
          Discovers stylish Nike arrivals,quality  
          comport, and innovation for your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-10">
          {statistics.map((stat, idx) => (
            <div key={idx}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="" width={610} height={500} className="object-contain relative z-10" />
      </div>

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[-68%] sm:left-[50%] max-sm:px-6">
        {shoes.map((shoe,idx) => (
          <div key={idx}>
            <ShoeCard ImgUrl={shoe} CngBigShoesImg={(shoe) => setBigShoeImg(shoe)} BigShoeImg={bigShoeImg}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
