import React from 'react';
import { VscChevronDown } from 'react-icons/vsc';
import { PiListFill } from 'react-icons/pi';
import { useState } from 'react';
import Dropdown from './Dropdown';
import DropdownMobile from './DropdownMobile';
import { menu } from '../Assets/Contents';

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState('hidden');
  const [toggleSolution, setToggleSolution] = useState('hidden');
  const [toggleService, setToggleService] = useState('hidden');
  const [toggleCareer, setToggleCareer] = useState('hidden');
  const [rotate, setRotate] = useState('');
  
  const { solutionMenu, servicesMenu, careersMenu } = menu;
  const handleOnClickSolution = () => {
    if (toggleSolution === 'hidden') {
      setToggleSolution('flex');
    } else {
      setToggleSolution('hidden');
    }
    setToggleService('hidden');
    setToggleCareer('hidden');
  };
  const handleOnClickService = () => {
    if (toggleService === 'hidden') {
      setToggleService('flex');
    } else {
      setToggleService('hidden');
    }
    setToggleSolution('hidden');
    setToggleCareer('hidden');
  };
  const handleOnClickCareer = () => {
    if (toggleCareer === 'hidden') {
      setToggleCareer('flex');
    } else {
      setToggleCareer('hidden');
    }
    setToggleService('hidden');
    setToggleSolution('hidden');
  };

  const handleListOnClick = () => {
    if (!rotate) {
      setRotate('rotate-90');
    } else {
      setRotate('');
    }
    if (toggleDropdown === 'hidden') {
      setToggleDropdown('block');
    } else {
      setToggleDropdown('hidden');
    }
    setToggleService('hidden');
    setToggleSolution('hidden');
    setToggleCareer('hidden');
  };

  const handleClickOut = () => {
    if (toggleDropdown === 'block') {
      setToggleDropdown('hidden');
    }
    if (!rotate) {
      setRotate('rotate-90');
    } else {
      setRotate('');
    }
    setToggleService('hidden');
    setToggleSolution('hidden');
    setToggleCareer('hidden');
  };

  return (
    <nav className="bg-primary fixed w-full ">
      <div className="container max-[1024px]:max-w-4xl max-[1496px]:max-w-8xl mx-auto my-1.5 flex justify-between">
        <div className="nav-logo my-auto">
          <a href="#logo">
            <img className="w-24" src="./logo.png" alt="" />
          </a>
        </div>

        <ul className="hidden p-4 justify-between md:flex max-[865px]:px-1">
          <li
            id="solutions"
            className="font-bold text-base hover:*:text-secondary flex mr-4 pr-3 relative max-[865px]:pr-1">
            <a href="#solutions" className="text-white flex m-auto">
              Solutions
              <VscChevronDown className="my-auto" />
            </a>
            <Dropdown prop={solutionMenu} />
          </li>

          <li
            id="services"
            className="font-bold text-base hover:*:text-secondary flex mr-4 pr-3 relative max-[865px]:pr-1">
            <a href="#services" className="text-white flex m-auto">
              Services
              <VscChevronDown className="my-auto" />
            </a>
            <Dropdown prop={servicesMenu} />
          </li>
          <li
            id="careers"
            className="font-bold text-base hover:*:text-secondary flex mr-4 pr-3 relative max-[865px]:pr-1">
            <a href="#careers" className="text-white flex m-auto">
              Careers
              <VscChevronDown className="my-auto" />
            </a>
            <Dropdown prop={careersMenu} />
          </li>
          <li className="font-bold text-base hover:*:text-secondary flex pr-6 max-[865px]:p-1">
            <a href="#about" className="text-white flex m-auto">
              About Us
            </a>
          </li>
        </ul>
        <button
          id="menuButton"
          onClick={handleListOnClick}
          className="list-btn md:hidden p-1.5 rounded-md text-lg text-white flex hover:bg-gray-dark">
          <PiListFill className={`m-auto ${rotate} transition`} />
        </button>

        <div className="hidden md:flex">
          <button className="text-primary hover:bg-secondary hover:text-white m-4 px-5 py-1.5 rounded-lg bg-white font-bold max-[865px]:p-2">
            Contact Us
          </button>
        </div>
      </div>
      <div id="menuMobile" className={`bg-primary md:hidden ${toggleDropdown}`}>
        <div className=" md:hidden">
          <button className="text-white m-4 px-3 py-1.5 rounded-lg bg-secondary font-bold text-sm hover:bg-white hover:text-primary">
            Contact Us
          </button>
        </div>
        {/* Mobile */}
        <ul className="mx-4 my-3 md:hidden">
          <li className="flex justify-between my-2 ml-2 py-1">
            <button className="text-white font-bold hover:text-secondary">About Us</button>
          </li>
          <li
            onClick={handleOnClickService}
            id="services-mobile"
            className="flex justify-between my-2 ml-2 py-1 relative">
            <button className="text-white font-bold hover:text-secondary">Services</button>
            <VscChevronDown className="text-white text-xl" />
            <DropdownMobile prop={{ ...servicesMenu, show: toggleService }} />
          </li>

          <li
            onClick={handleOnClickSolution}
            id="solutions-mobile"
            className="flex justify-between my-2 ml-2 py-1 relative">
            <button className="text-white font-bold hover:text-secondary">Solutions</button>
            <VscChevronDown className="text-white text-xl" />
            <DropdownMobile prop={{ ...solutionMenu, show: toggleSolution }} />
          </li>
          <li
            onClick={handleOnClickCareer}
            id="careers-mobile"
            className="flex justify-between my-2 ml-2 py-1 relative">
            <button className="text-white font-bold hover:text-secondary">Careers</button>
            <VscChevronDown className="text-white text-xl" />
            <DropdownMobile prop={{ ...careersMenu, show: toggleCareer }} />
          </li>
        </ul>
      </div>
      <button
        onClick={handleClickOut}
        className={`mask w-full h-screen z-10 absolute ${toggleDropdown} `}></button>
    </nav>
  );
};

export default Navbar;
