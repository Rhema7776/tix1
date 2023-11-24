import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { Typography } from "@material-tailwind/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
 
  const handleClick = () => setNav(!nav);

  return (
    <div className="  text-16px text-gray-800 bg-white   w-full xs:py-3  sticky top-0 z-10">
      <div className="mx-auto p-7  z-10 font-md bg-white md:flex md:justify-center md:items-center fixed top-0  drop-shadow-xl  w-full">
        <div className="flex justify-between items-center    h-full w-full ">
          <div className=" xs:max-sm:w-20  items-centerw w-28 ">
            <img
              data-v-d6fb7314=""
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTMyIDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOS42MjIgMjQuNTg2QzEwLjA3NTMgMjQuNTg2IDEwLjY0MiAyNC41MjkzIDExLjMyMiAyNC40MTZWMjcuMDM0QzEwLjU1MTMgMjcuMTcgOS43NjkzMyAyNy4yMzggOC45NzYgMjcuMjM4QzcuMzIxMzMgMjcuMjM4IDYuMDA2NjcgMjYuNzk2IDUuMDMyIDI1LjkxMkM0LjA4IDI1LjAwNTMgMy42MTUzMyAyMy42MzQgMy42MzggMjEuNzk4TDMuNjcyIDEyLjIxSDAuNDQyVjkuNjZIMy42NzJMMy43MDYgMy42NzZINi42NjRMNi42MyA5LjY2SDExLjI4OFYxMi4yMUg2LjYzTDYuNTYyIDIxLjIyQzYuNTYyIDIzLjQ2NCA3LjU4MiAyNC41ODYgOS42MjIgMjQuNTg2Wk0xNS4yNDYzIDIuMDQ0QzE1LjYzMTcgMS42NTg2NyAxNi4wODUgMS40NjYgMTYuNjA2MyAxLjQ2NkMxNy4xMjc3IDEuNDY2IDE3LjU4MSAxLjY1ODY3IDE3Ljk2NjMgMi4wNDRDMTguMzUxNyAyLjQwNjY3IDE4LjU0NDMgMi44NiAxOC41NDQzIDMuNDA0QzE4LjU0NDMgMy45MjUzMyAxOC4zNTE3IDQuMzc4NjcgMTcuOTY2MyA0Ljc2NEMxNy41ODEgNS4xMjY2NyAxNy4xMjc3IDUuMzA4IDE2LjYwNjMgNS4zMDhDMTYuMDYyMyA1LjMwOCAxNS41OTc3IDUuMTI2NjcgMTUuMjEyMyA0Ljc2NEMxNC44NDk3IDQuMzc4NjcgMTQuNjY4MyAzLjkyNTMzIDE0LjY2ODMgMy40MDRDMTQuNjY4MyAyLjg2IDE0Ljg2MSAyLjQwNjY3IDE1LjI0NjMgMi4wNDRaTTE4LjAzNDMgMjdIMTUuMTEwM1Y5LjY2SDE4LjAzNDNWMjdaTTMxLjg5NzYgMTguMTI2TDM3Ljk4MzYgMjdIMzQuNDgxNkwyOS43ODk2IDIwLjEzMkwyNS4wMjk2IDI3SDIxLjU5NTZMMjcuNTQ1NiAxOC4wNThMMjEuODY3NiA5LjY2SDI1LjMzNTZMMjkuNzg5NiAxNi4xNTRMMzQuMTQxNiA5LjY2SDM3LjY0MzZMMzEuODk3NiAxOC4xMjZaTTQyLjAxNzYgMjMuMjk0QzQyLjU4NDMgMjMuMjk0IDQzLjA2MDMgMjMuNDk4IDQzLjQ0NTYgMjMuOTA2QzQzLjg1MzYgMjQuMjkxMyA0NC4wNTc2IDI0Ljc2NzMgNDQuMDU3NiAyNS4zMzRDNDQuMDU3NiAyNS44NzggNDMuODUzNiAyNi4zNTQgNDMuNDQ1NiAyNi43NjJDNDMuMDYwMyAyNy4xNDczIDQyLjU4NDMgMjcuMzQgNDIuMDE3NiAyNy4zNEM0MS40NzM2IDI3LjM0IDQxLjAwOSAyNy4xNDczIDQwLjYyMzYgMjYuNzYyQzQwLjIzODMgMjYuMzU0IDQwLjA0NTYgMjUuODc4IDQwLjA0NTYgMjUuMzM0QzQwLjA0NTYgMjQuNzY3MyA0MC4yMzgzIDI0LjI5MTMgNDAuNjIzNiAyMy45MDZDNDEuMDA5IDIzLjQ5OCA0MS40NzM2IDIzLjI5NCA0Mi4wMTc2IDIzLjI5NFpNNTQuNTMwNyA5LjM1NEM1Ni42NjE0IDkuMzU0IDU4LjI5MzQgOS45NDMzMyA1OS40MjY3IDExLjEyMkM2MC41ODI3IDEyLjI3OCA2MS4xNjA3IDEzLjkzMjcgNjEuMTYwNyAxNi4wODZWMjdINTguMjAyN1YyNC45NkM1Ni44NjU0IDI2LjU0NjcgNTUuMTQyNyAyNy4zNCA1My4wMzQ3IDI3LjM0QzUxLjMxMiAyNy4zNCA0OS45Mjk0IDI2LjkwOTMgNDguODg2NyAyNi4wNDhDNDcuODY2NyAyNS4xNjQgNDcuMzU2NyAyMy45NTEzIDQ3LjM1NjcgMjIuNDFDNDcuMzU2NyAxOS4xOTEzIDQ5LjQ3NiAxNy40Njg3IDUzLjcxNDcgMTcuMjQyTDU4LjIwMjcgMTYuOTdWMTYuMTU0QzU4LjIwMjcgMTMuMzQzMyA1Ni45OSAxMS45MzggNTQuNTY0NyAxMS45MzhDNTMuMzQwNyAxMS45MzggNTIuNCAxMi4yODkzIDUxLjc0MjcgMTIuOTkyQzUxLjEwOCAxMy42OTQ3IDUwLjc5MDcgMTQuNTQ0NyA1MC43OTA3IDE1LjU0Mkw0Ny44MzI3IDE1LjQwNkM0Ny44MzI3IDEzLjgxOTMgNDguNDQ0NyAxMi40MTQgNDkuNjY4NyAxMS4xOUM1MC44OTI3IDkuOTY2IDUyLjUxMzQgOS4zNTQgNTQuNTMwNyA5LjM1NFpNNTguMjM2NyAxOS4zMTZMNTQuMDg4NyAxOS41ODhDNTEuNTcyNyAxOS43NDY3IDUwLjMxNDcgMjAuNjY0NyA1MC4zMTQ3IDIyLjM0MkM1MC4zMTQ3IDIzLjk5NjcgNTEuMzY4NyAyNC44MjQgNTMuNDc2NyAyNC44MjRDNTQuOTA0NyAyNC44MjQgNTYuMDQ5NCAyNC40Mzg3IDU2LjkxMDcgMjMuNjY4QzU3Ljc5NDcgMjIuODc0NyA1OC4yMzY3IDIxLjY2MiA1OC4yMzY3IDIwLjAzVjE5LjMxNlpNNzMuOTEwNCAwLjQ0NTk5OUM3NC4yNzMxIDAuNDQ1OTk5IDc0LjcwMzggMC40Njg2NjYgNzUuMjAyNCAwLjUxMzk5OVYzLjA2NEM3NC44Mzk4IDMuMDE4NjcgNzQuNTExMSAyLjk5NiA3NC4yMTY0IDIuOTk2QzczLjE1MTEgMi45OTYgNzIuMjg5OCAzLjMyNDY3IDcxLjYzMjQgMy45ODJDNzAuOTk3OCA0LjYzOTMzIDcwLjY4MDQgNS41NDYgNzAuNjgwNCA2LjcwMlY5LjY2SDc1LjEzNDRWMTIuMjFINzAuNjgwNFYyN0g2Ny43NTY0VjEyLjIxSDY0LjM5MDRWOS42Nkg2Ny43NTY0VjYuNzdDNjcuNzU2NCA0Ljc5OCA2OC4zMTE4IDMuMjU2NjcgNjkuNDIyNCAyLjE0NkM3MC41MzMxIDEuMDEyNjcgNzIuMDI5MSAwLjQ0NTk5OSA3My45MTA0IDAuNDQ1OTk5Wk04Ni41NTA3IDkuNDU2VjEyLjI3OEM4NS4wMzIxIDEyLjI3OCA4My44MDgxIDEyLjczMTMgODIuODc4NyAxMy42MzhDODEuOTcyMSAxNC41NDQ3IDgxLjUxODcgMTUuNjc4IDgxLjUxODcgMTcuMDM4VjI3SDc4LjU5NDdWOS42Nkg4MS40NTA3VjEyLjI3OEM4MS43OTA3IDExLjQ4NDcgODIuMzkxNCAxMC44MTYgODMuMjUyNyAxMC4yNzJDODQuMTE0MSA5LjcyOCA4NS4yMTM0IDkuNDU2IDg2LjU1MDcgOS40NTZaTTkwLjI4NTQgMi4wNDRDOTAuNjcwNyAxLjY1ODY3IDkxLjEyNDEgMS40NjYgOTEuNjQ1NCAxLjQ2NkM5Mi4xNjY3IDEuNDY2IDkyLjYyMDEgMS42NTg2NyA5My4wMDU0IDIuMDQ0QzkzLjM5MDcgMi40MDY2NyA5My41ODM0IDIuODYgOTMuNTgzNCAzLjQwNEM5My41ODM0IDMuOTI1MzMgOTMuMzkwNyA0LjM3ODY3IDkzLjAwNTQgNC43NjRDOTIuNjIwMSA1LjEyNjY3IDkyLjE2NjcgNS4zMDggOTEuNjQ1NCA1LjMwOEM5MS4xMDE0IDUuMzA4IDkwLjYzNjcgNS4xMjY2NyA5MC4yNTE0IDQuNzY0Qzg5Ljg4ODcgNC4zNzg2NyA4OS43MDc0IDMuOTI1MzMgODkuNzA3NCAzLjQwNEM4OS43MDc0IDIuODYgODkuOTAwMSAyLjQwNjY3IDkwLjI4NTQgMi4wNDRaTTkzLjA3MzQgMjdIOTAuMTQ5NFY5LjY2SDkzLjA3MzRWMjdaTTEwNi4zOTMgOS4zNTRDMTA4LjQ1NSA5LjM1NCAxMTAuMjAxIDkuOTQzMzMgMTExLjYyOSAxMS4xMjJDMTEzLjA3OSAxMi4yNzggMTEzLjkyOSAxMy44NTMzIDExNC4xNzkgMTUuODQ4TDExMS4zMjMgMTYuMDg2QzExMS4xNjQgMTQuNzk0IDExMC42MzEgMTMuNzc0IDEwOS43MjUgMTMuMDI2QzEwOC44MTggMTIuMjU1MyAxMDcuNzA3IDExLjg3IDEwNi4zOTMgMTEuODdDMTA0LjczOCAxMS44NyAxMDMuNDAxIDEyLjQ0OCAxMDIuMzgxIDEzLjYwNEMxMDEuMzYxIDE0LjczNzMgMTAwLjg1MSAxNi4zMTI3IDEwMC44NTEgMTguMzNDMTAwLjg1MSAyMC4zNDczIDEwMS4zNjEgMjEuOTM0IDEwMi4zODEgMjMuMDlDMTAzLjQyMyAyNC4yMjMzIDEwNC43NjEgMjQuNzkgMTA2LjM5MyAyNC43OUMxMDcuNzUzIDI0Ljc5IDEwOC44NjMgMjQuNDM4NyAxMDkuNzI1IDIzLjczNkMxMTAuNjA5IDIzLjAzMzMgMTExLjE1MyAyMi4wNyAxMTEuMzU3IDIwLjg0NkwxMTQuMjEzIDIxLjExOEMxMTMuODk1IDIzLjA0NDcgMTEzLjAzNCAyNC41NjMzIDExMS42MjkgMjUuNjc0QzExMC4yMjMgMjYuNzg0NyAxMDguNDc4IDI3LjM0IDEwNi4zOTMgMjcuMzRDMTAzLjg5OSAyNy4zNCAxMDEuODQ4IDI2LjUzNTMgMTAwLjIzOSAyNC45MjZDOTguNjUyIDIzLjMxNjcgOTcuODU4NiAyMS4xMTggOTcuODU4NiAxOC4zM0M5Ny44NTg2IDE1LjU0MiA5OC42NTIgMTMuMzU0NyAxMDAuMjM5IDExLjc2OEMxMDEuODI1IDEwLjE1ODcgMTAzLjg3NyA5LjM1NCAxMDYuMzkzIDkuMzU0Wk0xMjQuNjg5IDkuMzU0QzEyNi44MiA5LjM1NCAxMjguNDUyIDkuOTQzMzMgMTI5LjU4NSAxMS4xMjJDMTMwLjc0MSAxMi4yNzggMTMxLjMxOSAxMy45MzI3IDEzMS4zMTkgMTYuMDg2VjI3SDEyOC4zNjFWMjQuOTZDMTI3LjAyNCAyNi41NDY3IDEyNS4zMDEgMjcuMzQgMTIzLjE5MyAyNy4zNEMxMjEuNDcgMjcuMzQgMTIwLjA4OCAyNi45MDkzIDExOS4wNDUgMjYuMDQ4QzExOC4wMjUgMjUuMTY0IDExNy41MTUgMjMuOTUxMyAxMTcuNTE1IDIyLjQxQzExNy41MTUgMTkuMTkxMyAxMTkuNjM0IDE3LjQ2ODcgMTIzLjg3MyAxNy4yNDJMMTI4LjM2MSAxNi45N1YxNi4xNTRDMTI4LjM2MSAxMy4zNDMzIDEyNy4xNDggMTEuOTM4IDEyNC43MjMgMTEuOTM4QzEyMy40OTkgMTEuOTM4IDEyMi41NTggMTIuMjg5MyAxMjEuOTAxIDEyLjk5MkMxMjEuMjY2IDEzLjY5NDcgMTIwLjk0OSAxNC41NDQ3IDEyMC45NDkgMTUuNTQyTDExNy45OTEgMTUuNDA2QzExNy45OTEgMTMuODE5MyAxMTguNjAzIDEyLjQxNCAxMTkuODI3IDExLjE5QzEyMS4wNTEgOS45NjYgMTIyLjY3MiA5LjM1NCAxMjQuNjg5IDkuMzU0Wk0xMjguMzk1IDE5LjMxNkwxMjQuMjQ3IDE5LjU4OEMxMjEuNzMxIDE5Ljc0NjcgMTIwLjQ3MyAyMC42NjQ3IDEyMC40NzMgMjIuMzQyQzEyMC40NzMgMjMuOTk2NyAxMjEuNTI3IDI0LjgyNCAxMjMuNjM1IDI0LjgyNEMxMjUuMDYzIDI0LjgyNCAxMjYuMjA4IDI0LjQzODcgMTI3LjA2OSAyMy42NjhDMTI3Ljk1MyAyMi44NzQ3IDEyOC4zOTUgMjEuNjYyIDEyOC4zOTUgMjAuMDNWMTkuMzE2WiIgZmlsbD0iI0ZDNjQzNSIvPgo8L3N2Zz4K"
              alt="Tix Logo"
            />
          </div>
          <ul className="hidden xs:max-md:w-80    md:flex justify-between w-[46%]">
            <li>
              <Typography
                as="a"
                href="#howitworks"
                color="blue-gray"
                className="  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
              >
                Product
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#howitworks"
                color="blue-gray"
                className="  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
              >
                Discover
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#howitworks"
                color="blue-gray"
                className="  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
              >
                Pricing
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#about"
                color="blue-gray"
                className=" transition-colors hover:text-orange-500 focus:text-orange-500"
              >
                About
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#testimonials"
                color="blue-gray"
                className=" transition-colors hover:text-orange-500 focus:text-orange-500"
              >
                Blog
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#contacts"
                color="blue-gray"
                className=" transition-colors hover:text-orange-500 focus:text-orange-500"
              >
                FAQ
              </Typography>
            </li>
          </ul>
          <div className="hidden xs:max-lg:w-40  md:flex gap-5">
            <NavLink to="/" className=" ">
            <button className="w-full border-none bg-transparent text-gray-800 p-3">
              Login
            </button>
            </NavLink>
            <NavLink to="/">
              <button className="orangebutton rounded-lg text-white p-3">
                SignUp
              </button>
            </NavLink>
          </div>
          <div className="md:hidden " onClick={handleClick}>
            {!nav ? (
              <img
                data-v-d6fb7314=""
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMTgiIGZpbGw9IiNGQzY0MzUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxwYXRoIGQ9Ik0yNS4yIDExLjZIMTAuOEMxMC4zNTg0IDExLjYgMTAgMTEuMjQxNiAxMCAxMC44QzEwIDEwLjM1ODQgMTAuMzU4NCAxMCAxMC44IDEwSDI1LjJDMjUuNjQxNiAxMCAyNiAxMC4zNTg0IDI2IDEwLjhDMjYgMTEuMjQxNiAyNS42NDE2IDExLjYgMjUuMiAxMS42WiIgZmlsbD0iI0ZDNjQzNSIvPgo8cGF0aCBkPSJNMjUuMiAxOC44SDEwLjhDMTAuMzU4NCAxOC44IDEwIDE4LjQ0MTYgMTAgMThDMTAgMTcuNTU4NCAxMC4zNTg0IDE3LjIgMTAuOCAxNy4ySDI1LjJDMjUuNjQxNiAxNy4yIDI2IDE3LjU1ODQgMjYgMThDMjYgMTguNDQxNiAyNS42NDE2IDE4LjggMjUuMiAxOC44WiIgZmlsbD0iI0ZDNjQzNSIvPgo8cGF0aCBkPSJNMjUuMiAyNi4wMDAxSDEwLjhDMTAuMzU4NCAyNi4wMDAxIDEwIDI1LjY0MTcgMTAgMjUuMjAwMUMxMCAyNC43NTg1IDEwLjM1ODQgMjQuNDAwMSAxMC44IDI0LjQwMDFIMjUuMkMyNS42NDE2IDI0LjQwMDEgMjYgMjQuNzU4NSAyNiAyNS4yMDAxQzI2IDI1LjY0MTcgMjUuNjQxNiAyNi4wMDAxIDI1LjIgMjYuMDAwMVoiIGZpbGw9IiNGQzY0MzUiLz4KPC9zdmc+Cg=="
                alt="Menu Icon"
                class=""
              />
            ) : (
              <img
                data-v-d6fb7314=""
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSIjRkM2NDM1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA2TDE4IDE4IiBzdHJva2U9IiNGQzY0MzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                alt="Close Icon"
                class="close-button"
              />
            )}
          </div>
        </div>
      </div>
      <nav className="scrollbox overflow-auto  ">
        <div className={!nav ? "hidden " : "w-full text-center mx-auto  scrollbox-inner "}>
            <ul className=" mt-28 w-full p-3 font-md text-gray-800 ">
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-lg font-md block  text-gray-800  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                >
                Product
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-lg  my-8 font-md block  text-gray-800   transition-colors hover:text-orange-500 focus:text-orange-500"
                >
                Discover
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#testimonials"
                color="blue-gray"
                className=" my-8 font-md block  text-gray-800 text-lg   transition-colors hover:text-orange-500 focus:text-orange-500"
                >
                Pricing
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#contacts"
                color="blue-gray"
                className="my-8 font-md block  text-gray-800 text-lg   transition-colors hover:text-orange-500 focus:text-orange-500"
                >
                About
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#contacts"
                color="blue-gray"
                className="my-10 font-md block  text-gray-800 text-lg  transition-colors hover:text-orange-500 focus:text-orange-500"
                >
                Blog
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#contacts"
                color="blue-gray"
                className="my-10 font-md block  text-gray-800 text-lg   transition-colors hover:text-orange-500 focus:text-orange-500"
                >
                FAQ
                </Typography>
            </li>
            </ul>
            <hr className=" border-blue-gray-50 w-full absolute " />

            <div className="font-md text-lg text-gray-800   my-4 p-2 ">
            <NavLink to="/" className=" ">
                <button className="w-full border-none bg-transparent text-gray-800 p-3">
                Login
                </button>
            </NavLink>
            <NavLink to="/">
                <button className="orangebutton rounded-lg text-white  p-3">
                SignUp
                </button>
            </NavLink>
            </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
