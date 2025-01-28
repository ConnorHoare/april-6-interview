import React from 'react'

interface CustomerType {
    customerRef: string;
    name: string;
    email: string;
    address: string;
}

const CustomerCard = ({customerRef, name, email, address}: CustomerType) => {
  return (
    <div className='border border-b-2 rounded p-4 w-full'>
        <div className='flex justify-around gap-4 w-full'>
            <div>
                <p>Ref</p>
                <p>{customerRef}</p>
            </div>
            <div>
                <p>Name</p>
                <p>{name}</p>
            </div>
            <div>
                <p>Email</p>
                <p>{email}</p>
            </div>
            <div>
                <p>Address</p>
                <p>{address}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerCard