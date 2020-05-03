import React, { useState } from 'react';


export default function Customers() {

    const [customers, setCustomers] = useState([]);

        fetch("/barber") 
        .then(res => res.json())
        .then(customers => setCustomers(customers), () => console.log("Customers fetched..", customers));

    return (
        <h1>customers</h1>
    );
}

    


