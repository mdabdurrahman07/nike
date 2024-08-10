/* eslint-disable no-unused-vars */
const ShoeCard = ({ImgUrl,CngBigShoesImg,BigShoeImg}) => {
    const handleClick = () => {
        if(BigShoeImg != ImgUrl.bigShoe){
            CngBigShoesImg(ImgUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${BigShoeImg === ImgUrl.bigShoe} ? 'border-coral-red' : 'border-transparent' cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-cover bg-current sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img src={ImgUrl.thumbnail} alt="Nike-shoe-collection" width={127} height={103} className="object-contain" /></div> 
    </div>
  )
}

export default ShoeCard
