import React from 'react'
import Link from 'next/link';
import { FaShoppingBasket, FaUser, FaShoppingBag } from 'react-icons/fa'
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'
import { SiNextdotjs } from 'react-icons/si'
import { RiArrowDownSLine } from 'react-icons/ri'


const HeaderNavLinks = [
    {
        label: "Account",
        path: '/profile',
        icon: <FiUser fontSize={20} />
    },
    {
        label: "Wishlists",
        path: '/wishlist',
        icon: <FiHeart fontSize={20} />
    },
    {
        label: "My Cart",
        path: '/cart',
        icon: <FiShoppingBag fontSize={20} />
    }

]


const Header = () => {
    return (
        <header className='bg-white border-b border-b-gray-300'>
            <div className="navbar layout">
                <div className="navbar-start">
                    <Link href='/' className='flex justify-center gap-2 text-red-400 text-xl font-semibold'>
                        {/* <FaShoppingBasket fontSize={28} /> */}
                        <SiNextdotjs fontSize={28} />
                        {/* <TbBrandNextjs fontSize={28} /> */}
                        <span>E  Commerce</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <div className="join w-[28rem]">
                        <input className="input w-full input-sm input-bordered join-item"
                            placeholder="Search products..."
                        />
                        <div className="dropdown dropdown-hover join-item">
                            <label
                                tabIndex={0}
                                className='w-[7rem] px-1 btn btn-sm btn-outline border-gray-300 rounded-none capitalize'
                            >
                                Category <RiArrowDownSLine />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-1 shadow border border-gray-300 bg-base-100 rounded-lg w-52"
                            >
                                <li>
                                    <a href="">Electronics</a>
                                </li>
                                <li>
                                    <a href="">Laptops & PC&#39;S </a>
                                </li>
                                <li>
                                    <a href="">Home Furnitures</a>
                                </li>

                            </ul>

                        </div>
                        <button className="btn btn-sm btn-secondary join-item text-white">Search</button>
                    </div>
                </div>
                <div className="navbar-end flex gap-7">
                    {HeaderNavLinks.map((nav, index) => (
                        <Link
                            href={nav.path}
                            key={nav.path}
                            className='flex items-center flex-col gap-1 text-gray-600 tooltip tooltip-bottom'
                            data-tip={nav.label}
                        >
                            <div className="indicator">
                                {nav.path === "/cart" && (
                                    <span className="indicator-item px-1 text-xs font-semibold badge badge-secondary">
                                        5
                                    </span>
                                )}
                                {nav.icon}
                            </div>
                            {/* <span className='text-xs'>{nav.label}</span> */}
                        </Link>

                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header;