import React from 'react';
import CustomerItem from './CustomerItem';

export default function CustomerList({ customers }) {
  return (
    <div>
      <h2>Customers</h2>
      <div className="customer-list">
        {customers.map((customer) => (
          <CustomerItem key={customer.id} {...customer} />
        ))}
      </div>
    </div>
  );
}
