import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = (category:any) => {
  return (
    <div>
         <div className="w-[350px]" key={category?.id}>
            <Link className="group rounded-md" href={`/all-services/#${category.title}`}>
             <div className="w-full">
             <Image
                src={category?.image}
                alt="image"
                layout="responsive"
                height={250}
                width={400}
                className="w-full h-[250px]"
              />
             </div>
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                {category.title}
              </h3>
            </Link>
          </div>
    </div>
  )
}

export default ServiceCard