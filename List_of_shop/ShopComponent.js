import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddNewShop from './AddNewShop'
import All_Shop_List from './All_Shop_List'
import ShopHomePage from './ShopHomePage'

export default function ShopComponent() {
    return (
        <div>

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<ShopHomePage />} />
                    <Route path="/addshop" element={<AddNewShop />} />
                    <Route path="/home" element={<ShopHomePage />} />
                    <Route path="/shoplist" element={<All_Shop_List />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
