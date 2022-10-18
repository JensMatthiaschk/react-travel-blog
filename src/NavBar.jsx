import { Outlet, Link } from "react-router-dom";
import { React, useContext, useState } from 'react'
import { CMSContext } from './CMSContext';

export default function NavBar() {

    const { continentEntries, destinationEntries } = useContext(CMSContext)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li> */}
                        <li tabIndex={0}>
                            <Link to="/Continents">
                                Travel Regions
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li className="dropdown">
                                    <Link to="/ContinentDetail/Europe">Europe</Link>
                                    <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "Europe" && <li><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                                <li><Link to="/ContinentDetail/North America">North America</Link></li>
                                <li><Link to="/ContinentDetail/Latin America">Latin America</Link></li>
                                <li><Link to="/ContinentDetail/Oceania">Oceania</Link></li>
                                <li><Link to="/ContinentDetail/Asia">Asia</Link></li>
                                <li><Link to="/ContinentDetail/Africa">Africa</Link></li>

                            </ul>
                        </li>
                        {/* <li><a>Item 3</a></li> */}
                        <div className="form-control ml-1 w-44">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Travel Blog</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* <li><a>Item 1</a></li> */}
                    <li tabIndex={0}>
                        <Link to="/Continents">
                            Travel Regions
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link to="/ContinentDetail/Europe">Europe</Link></li>
                            <li><Link to="/ContinentDetail/North America">North America</Link></li>
                            <li><Link to="/ContinentDetail/Latin America">Latin America</Link></li>
                            <li><Link to="/ContinentDetail/Oceania">Oceania</Link></li>
                            <li><Link to="/ContinentDetail/Asia">Asia</Link></li>
                            <li><Link to="/ContinentDetail/Africa">Africa</Link></li>
                        </ul>
                    </li>
                    {/* <li><a>Item 3</a></li> */}
                </ul>
                <div className="form-control ml-4">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
            </div>
        </div>
    )
}