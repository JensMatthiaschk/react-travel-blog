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
                        <li tabIndex={0}>
                            <Link to="/Continents">
                                Travel Regions
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li className="dropdown menu menu-compact">
                                    <Link to="/ContinentDetail/Europe" className="hover:bg-gray-150 block whitespace-no-wrap">Europe</Link>
                                    <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "Europe" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/ContinentDetail/North America" className="hover:bg-gray-150 block whitespace-no-wrap">North America</Link>
                                    <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "North America" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/ContinentDetail/Latin America" className="hover:bg-gray-150 block whitespace-no-wrap">Latin America</Link>
                                    <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "Latin America" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/ContinentDetail/Oceania" className="hover:bg-gray-150 block whitespace-no-wrap">Oceania</Link>
                                    <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "Oceania" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/ContinentDetail/Asia" className="hover:bg-gray-150 block whitespace-no-wrap">Asia</Link>
                                    <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "Asia" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="/ContinentDetail/Africa" className="hover:bg-gray-150 block whitespace-no-wrap">Africa</Link>
                                    <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                        {destinationEntries.map(e => e.travelRegion == "Africa" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Travel Blog</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <Link to="/Continents">
                            Travel Regions
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li className="dropdown">
                                <Link to="/ContinentDetail/Europe" className="hover:bg-gray-150 block whitespace-no-wrap">Europe</Link>
                                <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                    {destinationEntries.map(e => e.travelRegion == "Europe" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="/ContinentDetail/North America" className="hover:bg-gray-150 block whitespace-no-wrap">North America</Link>
                                <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                    {destinationEntries.map(e => e.travelRegion == "North America" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="/ContinentDetail/Latin America" className="hover:bg-gray-150 block whitespace-no-wrap">Latin America</Link>
                                <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                    {destinationEntries.map(e => e.travelRegion == "Latin America" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="/ContinentDetail/Oceania" className="hover:bg-gray-150 block whitespace-no-wrap">Oceania</Link>
                                <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                    {destinationEntries.map(e => e.travelRegion == "Oceania" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="/ContinentDetail/Asia" className="hover:bg-gray-150 block whitespace-no-wrap">Asia</Link>
                                <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                    {destinationEntries.map(e => e.travelRegion == "Asia" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link to="/ContinentDetail/Africa" className="hover:bg-gray-150 block whitespace-no-wrap">Africa</Link>
                                <ul className="dropdown-content menu menu-compact absolute pl-5 ml-24 mt-10">
                                    {destinationEntries.map(e => e.travelRegion == "Africa" && <li className="bg-gray-50 hover:bg-gray-150 block whitespace-no-wrap"><Link to={`/DestinationDetail/${e.title}`}>{e.title}</Link></li>)}
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="form-control ml-4">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
            </div>
        </div>
    )
}