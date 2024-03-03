import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({category}:{category:any}) => {
  const {id,title,image} = category || {}
 
  return (
    
         <div key={category?.id}>
            <Link className=" rounded-md" href={`/all-services/#${category.title}`}>
             <div className="h-[100px] flex justify-center items-center">
             <Image
                src={category?.image}
                alt="image"
                layout="responsive"
                height={600}
                width={600}
                className=""
              />
             </div>
              <h3 className="text-center text-white text-lg font-poppins pt-1">
                {category.title}
              </h3>
            </Link>
          </div>
  )
}

export default ServiceCard