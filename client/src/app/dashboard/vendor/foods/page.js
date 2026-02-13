'use client';

import React, { useEffect, useState } from 'react'
import { foodService } from '../../../../services/food.service';
import Link from 'next/link';
import Image from 'next/image';
import { Pencil, Trash } from "lucide-react";

const VendorFoodsPage = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const res = await foodService.getAllFoods();
      
      if (res && res.data) {
        console.log(res.data)
        setFoods(res.data);
      }
    };

    fetchFoods();
  }, []);


  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 py-2">Foods</h1>
        <Link href="/dashboard/vendor/add-food">
          <button className="btn btn-primary">Add New Food</button>
        </Link>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--color-primary-light)] text-left">
              <td className='px-4 py-3 text-sm font-semibold text-[var(--color-primary)]'>Image</td>
              <td className='px-4 py-3 text-sm font-semibold text-[var(--color-primary)]'>Name</td>
              <td className='px-4 py-3 text-sm font-semibold text-[var(--color-primary)]'>Description</td>
              <td className='px-4 py-3 text-sm font-semibold text-[var(--color-primary)]'>Price</td>
              <td className='px-4 py-3 text-sm font-semibold text-[var(--color-primary)]' colSpan={2}></td>
            </tr>
          </thead>

          <tbody>
            
            {
              foods.lenght === 0 ? 
              (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-6 text-center text-sm text-[var(--color-muted)]"
                  >
                    No data found
                  </td>
                </tr>
              ) : 
              (
              foods.map((e) => (

                <tr key={e._id} className='border-b border-[var(--color-border)] hover:bg-[var(--color-primary-light)] transition-colors duration-200'>
                  <td className='px-4 py-3 text-sm text-[var(--color-text)]'>
                    <Image src={process.env.NEXT_PUBLIC_IMAGE_SERVER_URL+'uploads/'+e.Image} width={100} height={100} alt='Food Image' className='rounded' unoptimized />
                  </td>
                  <td className='px-4 py-3 text-sm text-[var(--color-text)]'>{e.name}</td>
                  <td className='px-4 py-3 text-sm text-[var(--color-text)]'>{e.description}</td>
                  <td className='px-4 py-3 text-sm text-[var(--color-text)]'>{e.price}</td>
                  <td className='px-4 py-3 text-sm text-[var(--color-text)] hover:text-orange-400 hover:scale-110 transition duration-300'><Pencil size={20}/></td>
                  <td className='px-4 py-3 text-sm text-[var(--color-text)] hover:text-orange-400 hover:scale-110 transition duration-300'><Trash size={20}/></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
    </div>
    </div>

  )
}

export default VendorFoodsPage