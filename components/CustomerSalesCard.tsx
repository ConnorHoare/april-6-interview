import React from 'react'

interface CustomerSalesType {
    orderNumber: number;
    customerRef: string;
    partNumber: string;
    date: string;
}

const CustomerSalesCard = ({orderNumber, customerRef, partNumber, date}: CustomerSalesType) => {
  return (
    <div className='border border-b-2 rounded p-4 w-full'>
        <div className='flex w-full justify-around gap-4'>
            <div>
                <p>Order Number</p>
                <p>{orderNumber}</p>
            </div>
            <div>
                <p>Customer Ref</p>
                <p>{customerRef}</p>
            </div>
            <div>
                <p>Part Number</p>
                <p>{partNumber}</p>
            </div>
            <div>
                <p>Date</p>
                <p>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerSalesCard