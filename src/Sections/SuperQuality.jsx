import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
      
        <h1 className="text-4xl font-palanquin font-bold lg:max-w-lg">
        
          We Provide You
        
          <br />
          <span className="text-coral-red">Super Quality</span> Shoes
        </h1>
        <p className="lg:max-w-lg info-text mt-4">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg mt-6 info-text">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <Button label="View Details" iconUrl={arrowRight} />
        </div>
        
      </div>

      <div className="flex  flex-1 justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-container" />
      </div>
    </section>
  )
}

export default SuperQuality
