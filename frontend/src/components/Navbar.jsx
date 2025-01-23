import React from 'react'
import { navbar } from '../constants'
import { ListItem } from '@mui/material'
import MenuButton from './MenuButton'
import image1 from "../assets/ieee1.png"
const Navbar = () => {

    const buttons= navbar.filter((item,index)=>item.type=="menu")
    const icons=navbar.filter((item,index)=>item.type=="icon")
  return (
    <nav>
        <div className='flex justify-between'>
            <div>
                <div className="icon h-12 w-20">
                    <img src={image1} alt="ieee logo"/>
                </div>

            </div>
            <div className='space-x-4 flex '>
                end
                {
                    buttons.map((item,index)=>(
                        <MenuButton data={item}/>
                    ))
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar