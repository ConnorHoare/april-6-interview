import React from 'react'
import Report from './Report';

interface ProductsType {
    partNumber: string;
    description: string;
    category: string;
    subCategory: string;
}


const ProductsCard = ({partNumber, description, category, subCategory}: ProductsType) => {
  return (
    <div className='border border-b-2 rounded w-full'>
        <div className='flex justify-between gap-4 w-full'>
            <div>
                <p>Part Number</p>
                <p>{partNumber}</p>
            </div>
            <div>
                <p>Description</p>
                <p>{description}</p>
            </div>
            <div>
                <p>Category</p>
                <p>{category}</p>
            </div>
            <div>
                <p>Sub Category</p>
                <p>{subCategory}</p>
            </div>
        </div>
        <Report part_number={partNumber}/>
    </div>
  )
}

export default ProductsCard