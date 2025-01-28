'use client'

import React, { useState } from 'react'
import CustomerCard from './CustomerCard';
import CustomerSalesCard from './CustomerSalesCard';
import ProductsCard from './ProductsCard';
import SearchBar from './SearchBar';

const TabClient = ({ customers, products, sales }) => {
    const [tab, setTab] = useState("customers");
    const [input, setInput] = useState('')

    const filteredCustomers = customers.filter((customer) =>
        customer.name.toLowerCase().includes(input.toLowerCase())
    );

    const filteredSales = sales.filter((sale) =>
        sale.order_number.toString().includes(input)
    );

    const filteredProducts = products.filter((product) =>
        product.category.toLowerCase().includes(input.toLowerCase())
    );

    const handleTabChange = (tab) => {
        setTab(tab);
        setInput('');
    }

    return (
        <>
            <div>
                <button onClick={() => handleTabChange("customers")}>Customers</button>
                <button onClick={() => handleTabChange("sales")}>Sales</button>
                <button onClick={() => handleTabChange("products")}>Products</button>
            </div>


            {tab === "customers" && (
                <>
                    <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }} value={input} />
                    {filteredCustomers.map((customer) => (
                        <CustomerCard key={customer.key} address={customer.address} customerRef={customer.ref} email={customer.email} name={customer.name} />
                    ))}
                </>
            )}

            {tab === "sales" && (
                <>
                    <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }} value={input} />
                    {filteredSales.map((sale) => (
                        <CustomerSalesCard key={sale.key} customerRef={sale.customer_ref} date={sale.date} orderNumber={sale.order_number} partNumber={sale.part_number} />
                    ))}
                </>
            )}

            {tab === "products" && (
                <>
                    <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }} value={input} />
                    {filteredProducts.map((product) => (
                        <ProductsCard key={product.key} category={product.category} description={product.description} partNumber={product.part_number} subCategory={product.sub_category} />
                    ))}
                </>
            )}
        </>
    )
}

export default TabClient