import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
   <>
   <Header/>
   <div className="px-5" style={{paddingTop:'100px'}}>
    <>
    <h1 className="text-5xl font-bold text-blue-600">Cart Summary</h1>
    <div className="grid grid-cols-3 gap-4 mt-5">
      <div className="col-span-2 border rounded p-5 shadow">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <td className="font-semibold">#</td>
              <td className="font-semibold">Name</td>
              <td className="font-semibold">Image</td>
              <td className="font-semibold">Quantity</td>
              <td className="font-semibold">Price</td>
              <td className="font-semibold">...</td>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product</td>
              <td><img src="https://th.bing.com/th/id/OIP.Y_aTB7y-KNhEDMeKekVMwAHaFj?rs=1&pid=ImgDetMain" width={'70px'} height={'70px'} alt="" /></td>
              <td>
                <div className="flex">
                  <button className="font-bold">-</button>
                  <input type="text" style={{width:'40px'}} className="border p-1 rounded mx-2" readOnly value={1} />
                  <button className="font-bold">+</button>

                </div>
              </td>
              <td>$ 450</td>
              <td><button className="text-red-600"><i className="fa-solid fa-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
        <div className="float-right mt-5">
          <button className="bg-red-600 rounded p-2 text-white">EMPTY CART</button>
          <Link to={'/'} className="bg-blue-600 rounded ms-4 p-2 text-white" >SHOP MORE</Link>
        </div>
      </div>
      <div className="col-span-1">
        <div className="border rounded shadow p-5">
          <h2 className="text-2xl font-bold my-4">Total Amount :  <span className='text-red-600'> $ 450</span></h2><hr />
          <button className="bg-green-600 rounded p-2 text-xl text-white w-full mt-4">CHECK OUT</button>
        </div>
      </div>
    </div>
    </>
   </div>
   </>
  )
}

export default Cart