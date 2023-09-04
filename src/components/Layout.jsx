import React from 'react'
import Header from './Header'
import MainCategory from './MainCategory'

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <MainCategory/>
            <main className="layout">
                {children}
            </main>
            {/* <footer>Footer</footer> */}
        </div>
    )
}

export default Layout