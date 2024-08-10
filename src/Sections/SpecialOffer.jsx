import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center flex-wrap items-start max-xl:flex-col-reverse gap-14 max-container">
     <div className="flex-1">
      <img src={offer} alt="offer" width={773} height={667} className="object-contain"/>
     </div>
     <div className="flex flex-col flex-1 mt-16">
      
        <h1 className="text-4xl font-palanquin font-bold lg:max-w-lg">
        
        <span className="text-coral-red">Special</span> Offer
        
          <br />
          
        </h1>
        <p className="lg:max-w-lg info-text mt-4">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="lg:max-w-lg mt-6 info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconUrl={arrowRight} />
        <Button label="learn More" iconUrl={arrowRight} backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer
