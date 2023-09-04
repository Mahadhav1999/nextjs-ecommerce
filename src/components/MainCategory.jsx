import React from 'react'
import Link from 'next/link'

import { Poppins } from 'next/font/google'


import { RiMenu2Line } from 'react-icons/ri'
// import { HiOutlineDevicePhoneMobile } from 'react-icons/hi'
// import { AiOutlineLaptop } from 'react-icons/ai'
// import { GiWoodenChair } from 'react-icons/gi'
// import { BsLaptop} from 'react-icons/bs'



const poppins = Poppins({
    weight: '500',
    subsets: ['latin'],
})



const CategoryLinks = [
    {
        label: 'Mobile Phones',
        path: '/mobiles',
        // icon: <HiOutlineDevicePhoneMobile fontSize={20} />
    },
    {
        label: 'Laptops & Desktops',
        path: '/laptops',
        // icon: <BsLaptop fontSize={20} />
    },
    {
        label: 'PC Console',
        path: '/pc-console',
        // icon: <AiOutlineLaptop fontSize={20} />
    },
    {
        label: 'Home & Furnitures',
        path: '/home-furnitures',
        // icon: <GiWoodenChair fontSize={20} />
    },
]



const MainCategory = () => {
    return (
        <div className={poppins.className}>
            <div className="bg-white border-b border-b-gray-300">
                <div className="layout">
                    <div className="flex items-center gap-6 text-md h-[2.8rem]">
                        <Link href='/categories' className='flex items-center gap-3 hover:text-gray-500'>
                            <RiMenu2Line fontSize={18} />All Category</Link>

                        {
                            CategoryLinks.map((category) => (
                                <Link key={category.path} href={category.path} className='hover:text-gray-500'>
                                    <div>{category.icon}</div>
                                    {category.label}
                                </Link>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCategory;