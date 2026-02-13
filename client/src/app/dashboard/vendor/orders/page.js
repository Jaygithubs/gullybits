'use client';

import React, { useEffect,useState } from 'react'
import { vendorService } from '../../../../services/vendor.service';
import Table from '../../../../components/common/Table';

const VendorOrdersPage = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await vendorService.getVendorOrders();
      if (res && res.data) {
        setOrders(res.data);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    { key: "userId", label: "Vendor" },
    { key: "vendorId", label: "Items" },
    { key: "orderTotal", label: "Total Price" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <Table columns={columns} data={orders} />
    </div>

  )
}

export default VendorOrdersPage