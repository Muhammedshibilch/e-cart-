import React from 'react'
import Header from '../components/Header'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const handleCart =(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
      const existingProduct = userCart?.find(item=>item?.id==product.id)
      if(existingProduct){
        alert("product quantity is incrementing in your cart!!")
      }else{
        alert("Product added to your wishlist")
      }
    
    }
    
 
  return (
    <>
    <Header/>
    <div className="px-5" style={{paddingTop:'100px'}}>
      {
        userWishlist?.length>0?
      <>
      <h1 className="text-4xl font-bold text-red-600">My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4">
{
  userWishlist?.map(product=>(
    <div key={product?.id} className="rounded border p-2 shadow">
      <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
      <div className="text-center">
        <h3 className="text-xl font-bold">{product?.title}</h3>
        <div className="flex justify-evenly mt-3">
          <button onClick={()=>dispatch(removeFromWishlist(product?.id))} className="text-xl"><i className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
          <button onClick={()=>handleCart(product)} className="text-xl"><i className="fa-solid fa-cart-plus text-green-700"></i></button>

        </div>
      </div>
    </div>
  ))
}
    


      </div>
      </>
      :
      <div className="flex flex-col justify-center items-center">
        <img src="https://krosfitsports.com/public/empty-cart.gif" alt="" className="w-100 h-1/2" />
        <h1 className="text-4xl text-red-600 mt-3 text-bold">Your Wishlist is empty!!!</h1>
      </div>
}
    </div>
    </>
  )
}

export default Wishlist