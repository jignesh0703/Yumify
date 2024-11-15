import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context'
import Food_item from './Food_item'

const Food_Display = ({category}) => {

    const { food_list } = useContext(StoreContext)

    return (
        <>
        <div className='flex justify-center'>
            <div className='mt-4 w-[90%] sm:w-[80%]'>
                <h1 className='text-[2rem] font-bold tracking-tight mb-6'>Top dishes near you</h1>
                <div className='flex flex-wrap gap-5 3xl:gap-20 justify-center'>
                    {
                        food_list.map(
                            (item, index) => {
                                if (category==="All" || category===item.category){
                                    return <Food_item key={index} id={item.id} image={item.image} name={item.name} description={item.description} price={item.price}/>
                                }
                            }
                        )
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default Food_Display