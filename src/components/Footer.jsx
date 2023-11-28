import React, { useState } from "react";

import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const [productsmenu, setProductmenu] = useState(false);
  const [companymenu, setCompanymenu] = useState(false);
  const [socialmenu, setSocialmenu] = useState(false);

  const handleClickproducts = () => setProductmenu(!productsmenu);
  const handleClickcompany = () => setCompanymenu(!companymenu);
  const handleClicksocial = () => setSocialmenu(!socialmenu);

  return (
    <footer class="bg-[rgba(252,100,53,.1)] py-16 px-0 xs:max-lg:px-3 lg:px-9">
      <div class="container mx-auto w-full ">
        <div className="md:flex md:flex-row flex-col gap-[27%] lg:justify-evenly  ">
          <div className=" xs:max-lg:mb-5 block">
            <img
              data-v-d6fb7314=""
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTMyIDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOS42MjIgMjQuNTg2QzEwLjA3NTMgMjQuNTg2IDEwLjY0MiAyNC41MjkzIDExLjMyMiAyNC40MTZWMjcuMDM0QzEwLjU1MTMgMjcuMTcgOS43NjkzMyAyNy4yMzggOC45NzYgMjcuMjM4QzcuMzIxMzMgMjcuMjM4IDYuMDA2NjcgMjYuNzk2IDUuMDMyIDI1LjkxMkM0LjA4IDI1LjAwNTMgMy42MTUzMyAyMy42MzQgMy42MzggMjEuNzk4TDMuNjcyIDEyLjIxSDAuNDQyVjkuNjZIMy42NzJMMy43MDYgMy42NzZINi42NjRMNi42MyA5LjY2SDExLjI4OFYxMi4yMUg2LjYzTDYuNTYyIDIxLjIyQzYuNTYyIDIzLjQ2NCA3LjU4MiAyNC41ODYgOS42MjIgMjQuNTg2Wk0xNS4yNDYzIDIuMDQ0QzE1LjYzMTcgMS42NTg2NyAxNi4wODUgMS40NjYgMTYuNjA2MyAxLjQ2NkMxNy4xMjc3IDEuNDY2IDE3LjU4MSAxLjY1ODY3IDE3Ljk2NjMgMi4wNDRDMTguMzUxNyAyLjQwNjY3IDE4LjU0NDMgMi44NiAxOC41NDQzIDMuNDA0QzE4LjU0NDMgMy45MjUzMyAxOC4zNTE3IDQuMzc4NjcgMTcuOTY2MyA0Ljc2NEMxNy41ODEgNS4xMjY2NyAxNy4xMjc3IDUuMzA4IDE2LjYwNjMgNS4zMDhDMTYuMDYyMyA1LjMwOCAxNS41OTc3IDUuMTI2NjcgMTUuMjEyMyA0Ljc2NEMxNC44NDk3IDQuMzc4NjcgMTQuNjY4MyAzLjkyNTMzIDE0LjY2ODMgMy40MDRDMTQuNjY4MyAyLjg2IDE0Ljg2MSAyLjQwNjY3IDE1LjI0NjMgMi4wNDRaTTE4LjAzNDMgMjdIMTUuMTEwM1Y5LjY2SDE4LjAzNDNWMjdaTTMxLjg5NzYgMTguMTI2TDM3Ljk4MzYgMjdIMzQuNDgxNkwyOS43ODk2IDIwLjEzMkwyNS4wMjk2IDI3SDIxLjU5NTZMMjcuNTQ1NiAxOC4wNThMMjEuODY3NiA5LjY2SDI1LjMzNTZMMjkuNzg5NiAxNi4xNTRMMzQuMTQxNiA5LjY2SDM3LjY0MzZMMzEuODk3NiAxOC4xMjZaTTQyLjAxNzYgMjMuMjk0QzQyLjU4NDMgMjMuMjk0IDQzLjA2MDMgMjMuNDk4IDQzLjQ0NTYgMjMuOTA2QzQzLjg1MzYgMjQuMjkxMyA0NC4wNTc2IDI0Ljc2NzMgNDQuMDU3NiAyNS4zMzRDNDQuMDU3NiAyNS44NzggNDMuODUzNiAyNi4zNTQgNDMuNDQ1NiAyNi43NjJDNDMuMDYwMyAyNy4xNDczIDQyLjU4NDMgMjcuMzQgNDIuMDE3NiAyNy4zNEM0MS40NzM2IDI3LjM0IDQxLjAwOSAyNy4xNDczIDQwLjYyMzYgMjYuNzYyQzQwLjIzODMgMjYuMzU0IDQwLjA0NTYgMjUuODc4IDQwLjA0NTYgMjUuMzM0QzQwLjA0NTYgMjQuNzY3MyA0MC4yMzgzIDI0LjI5MTMgNDAuNjIzNiAyMy45MDZDNDEuMDA5IDIzLjQ5OCA0MS40NzM2IDIzLjI5NCA0Mi4wMTc2IDIzLjI5NFpNNTQuNTMwNyA5LjM1NEM1Ni42NjE0IDkuMzU0IDU4LjI5MzQgOS45NDMzMyA1OS40MjY3IDExLjEyMkM2MC41ODI3IDEyLjI3OCA2MS4xNjA3IDEzLjkzMjcgNjEuMTYwNyAxNi4wODZWMjdINTguMjAyN1YyNC45NkM1Ni44NjU0IDI2LjU0NjcgNTUuMTQyNyAyNy4zNCA1My4wMzQ3IDI3LjM0QzUxLjMxMiAyNy4zNCA0OS45Mjk0IDI2LjkwOTMgNDguODg2NyAyNi4wNDhDNDcuODY2NyAyNS4xNjQgNDcuMzU2NyAyMy45NTEzIDQ3LjM1NjcgMjIuNDFDNDcuMzU2NyAxOS4xOTEzIDQ5LjQ3NiAxNy40Njg3IDUzLjcxNDcgMTcuMjQyTDU4LjIwMjcgMTYuOTdWMTYuMTU0QzU4LjIwMjcgMTMuMzQzMyA1Ni45OSAxMS45MzggNTQuNTY0NyAxMS45MzhDNTMuMzQwNyAxMS45MzggNTIuNCAxMi4yODkzIDUxLjc0MjcgMTIuOTkyQzUxLjEwOCAxMy42OTQ3IDUwLjc5MDcgMTQuNTQ0NyA1MC43OTA3IDE1LjU0Mkw0Ny44MzI3IDE1LjQwNkM0Ny44MzI3IDEzLjgxOTMgNDguNDQ0NyAxMi40MTQgNDkuNjY4NyAxMS4xOUM1MC44OTI3IDkuOTY2IDUyLjUxMzQgOS4zNTQgNTQuNTMwNyA5LjM1NFpNNTguMjM2NyAxOS4zMTZMNTQuMDg4NyAxOS41ODhDNTEuNTcyNyAxOS43NDY3IDUwLjMxNDcgMjAuNjY0NyA1MC4zMTQ3IDIyLjM0MkM1MC4zMTQ3IDIzLjk5NjcgNTEuMzY4NyAyNC44MjQgNTMuNDc2NyAyNC44MjRDNTQuOTA0NyAyNC44MjQgNTYuMDQ5NCAyNC40Mzg3IDU2LjkxMDcgMjMuNjY4QzU3Ljc5NDcgMjIuODc0NyA1OC4yMzY3IDIxLjY2MiA1OC4yMzY3IDIwLjAzVjE5LjMxNlpNNzMuOTEwNCAwLjQ0NTk5OUM3NC4yNzMxIDAuNDQ1OTk5IDc0LjcwMzggMC40Njg2NjYgNzUuMjAyNCAwLjUxMzk5OVYzLjA2NEM3NC44Mzk4IDMuMDE4NjcgNzQuNTExMSAyLjk5NiA3NC4yMTY0IDIuOTk2QzczLjE1MTEgMi45OTYgNzIuMjg5OCAzLjMyNDY3IDcxLjYzMjQgMy45ODJDNzAuOTk3OCA0LjYzOTMzIDcwLjY4MDQgNS41NDYgNzAuNjgwNCA2LjcwMlY5LjY2SDc1LjEzNDRWMTIuMjFINzAuNjgwNFYyN0g2Ny43NTY0VjEyLjIxSDY0LjM5MDRWOS42Nkg2Ny43NTY0VjYuNzdDNjcuNzU2NCA0Ljc5OCA2OC4zMTE4IDMuMjU2NjcgNjkuNDIyNCAyLjE0NkM3MC41MzMxIDEuMDEyNjcgNzIuMDI5MSAwLjQ0NTk5OSA3My45MTA0IDAuNDQ1OTk5Wk04Ni41NTA3IDkuNDU2VjEyLjI3OEM4NS4wMzIxIDEyLjI3OCA4My44MDgxIDEyLjczMTMgODIuODc4NyAxMy42MzhDODEuOTcyMSAxNC41NDQ3IDgxLjUxODcgMTUuNjc4IDgxLjUxODcgMTcuMDM4VjI3SDc4LjU5NDdWOS42Nkg4MS40NTA3VjEyLjI3OEM4MS43OTA3IDExLjQ4NDcgODIuMzkxNCAxMC44MTYgODMuMjUyNyAxMC4yNzJDODQuMTE0MSA5LjcyOCA4NS4yMTM0IDkuNDU2IDg2LjU1MDcgOS40NTZaTTkwLjI4NTQgMi4wNDRDOTAuNjcwNyAxLjY1ODY3IDkxLjEyNDEgMS40NjYgOTEuNjQ1NCAxLjQ2NkM5Mi4xNjY3IDEuNDY2IDkyLjYyMDEgMS42NTg2NyA5My4wMDU0IDIuMDQ0QzkzLjM5MDcgMi40MDY2NyA5My41ODM0IDIuODYgOTMuNTgzNCAzLjQwNEM5My41ODM0IDMuOTI1MzMgOTMuMzkwNyA0LjM3ODY3IDkzLjAwNTQgNC43NjRDOTIuNjIwMSA1LjEyNjY3IDkyLjE2NjcgNS4zMDggOTEuNjQ1NCA1LjMwOEM5MS4xMDE0IDUuMzA4IDkwLjYzNjcgNS4xMjY2NyA5MC4yNTE0IDQuNzY0Qzg5Ljg4ODcgNC4zNzg2NyA4OS43MDc0IDMuOTI1MzMgODkuNzA3NCAzLjQwNEM4OS43MDc0IDIuODYgODkuOTAwMSAyLjQwNjY3IDkwLjI4NTQgMi4wNDRaTTkzLjA3MzQgMjdIOTAuMTQ5NFY5LjY2SDkzLjA3MzRWMjdaTTEwNi4zOTMgOS4zNTRDMTA4LjQ1NSA5LjM1NCAxMTAuMjAxIDkuOTQzMzMgMTExLjYyOSAxMS4xMjJDMTEzLjA3OSAxMi4yNzggMTEzLjkyOSAxMy44NTMzIDExNC4xNzkgMTUuODQ4TDExMS4zMjMgMTYuMDg2QzExMS4xNjQgMTQuNzk0IDExMC42MzEgMTMuNzc0IDEwOS43MjUgMTMuMDI2QzEwOC44MTggMTIuMjU1MyAxMDcuNzA3IDExLjg3IDEwNi4zOTMgMTEuODdDMTA0LjczOCAxMS44NyAxMDMuNDAxIDEyLjQ0OCAxMDIuMzgxIDEzLjYwNEMxMDEuMzYxIDE0LjczNzMgMTAwLjg1MSAxNi4zMTI3IDEwMC44NTEgMTguMzNDMTAwLjg1MSAyMC4zNDczIDEwMS4zNjEgMjEuOTM0IDEwMi4zODEgMjMuMDlDMTAzLjQyMyAyNC4yMjMzIDEwNC43NjEgMjQuNzkgMTA2LjM5MyAyNC43OUMxMDcuNzUzIDI0Ljc5IDEwOC44NjMgMjQuNDM4NyAxMDkuNzI1IDIzLjczNkMxMTAuNjA5IDIzLjAzMzMgMTExLjE1MyAyMi4wNyAxMTEuMzU3IDIwLjg0NkwxMTQuMjEzIDIxLjExOEMxMTMuODk1IDIzLjA0NDcgMTEzLjAzNCAyNC41NjMzIDExMS42MjkgMjUuNjc0QzExMC4yMjMgMjYuNzg0NyAxMDguNDc4IDI3LjM0IDEwNi4zOTMgMjcuMzRDMTAzLjg5OSAyNy4zNCAxMDEuODQ4IDI2LjUzNTMgMTAwLjIzOSAyNC45MjZDOTguNjUyIDIzLjMxNjcgOTcuODU4NiAyMS4xMTggOTcuODU4NiAxOC4zM0M5Ny44NTg2IDE1LjU0MiA5OC42NTIgMTMuMzU0NyAxMDAuMjM5IDExLjc2OEMxMDEuODI1IDEwLjE1ODcgMTAzLjg3NyA5LjM1NCAxMDYuMzkzIDkuMzU0Wk0xMjQuNjg5IDkuMzU0QzEyNi44MiA5LjM1NCAxMjguNDUyIDkuOTQzMzMgMTI5LjU4NSAxMS4xMjJDMTMwLjc0MSAxMi4yNzggMTMxLjMxOSAxMy45MzI3IDEzMS4zMTkgMTYuMDg2VjI3SDEyOC4zNjFWMjQuOTZDMTI3LjAyNCAyNi41NDY3IDEyNS4zMDEgMjcuMzQgMTIzLjE5MyAyNy4zNEMxMjEuNDcgMjcuMzQgMTIwLjA4OCAyNi45MDkzIDExOS4wNDUgMjYuMDQ4QzExOC4wMjUgMjUuMTY0IDExNy41MTUgMjMuOTUxMyAxMTcuNTE1IDIyLjQxQzExNy41MTUgMTkuMTkxMyAxMTkuNjM0IDE3LjQ2ODcgMTIzLjg3MyAxNy4yNDJMMTI4LjM2MSAxNi45N1YxNi4xNTRDMTI4LjM2MSAxMy4zNDMzIDEyNy4xNDggMTEuOTM4IDEyNC43MjMgMTEuOTM4QzEyMy40OTkgMTEuOTM4IDEyMi41NTggMTIuMjg5MyAxMjEuOTAxIDEyLjk5MkMxMjEuMjY2IDEzLjY5NDcgMTIwLjk0OSAxNC41NDQ3IDEyMC45NDkgMTUuNTQyTDExNy45OTEgMTUuNDA2QzExNy45OTEgMTMuODE5MyAxMTguNjAzIDEyLjQxNCAxMTkuODI3IDExLjE5QzEyMS4wNTEgOS45NjYgMTIyLjY3MiA5LjM1NCAxMjQuNjg5IDkuMzU0Wk0xMjguMzk1IDE5LjMxNkwxMjQuMjQ3IDE5LjU4OEMxMjEuNzMxIDE5Ljc0NjcgMTIwLjQ3MyAyMC42NjQ3IDEyMC40NzMgMjIuMzQyQzEyMC40NzMgMjMuOTk2NyAxMjEuNTI3IDI0LjgyNCAxMjMuNjM1IDI0LjgyNEMxMjUuMDYzIDI0LjgyNCAxMjYuMjA4IDI0LjQzODcgMTI3LjA2OSAyMy42NjhDMTI3Ljk1MyAyMi44NzQ3IDEyOC4zOTUgMjEuNjYyIDEyOC4zOTUgMjAuMDNWMTkuMzE2WiIgZmlsbD0iI0ZDNjQzNSIvPgo8L3N2Zz4K"
              alt="Tix Logo"
              className="mb-10"
            />
            <Typography className="text-md font-medium text-gray-900 xs:max-md:mb-5 block">
              Tix is an event ticketing platform for <br /> memorable experiences in
              Africa.
            </Typography>
          </div>

            <div className="hidden md:flex lg:gap-40  text-gray-900 ">
                
                <div className="justify-between  ">
                <div
                    className="xs:max-md:flex xs:max-md:justify-between cursor-pointer "
                    
                >
                    <Typography
                    as=""
                    className="font-medium text-md orangetext mb-3 block"
                    >
                    Products
                    </Typography>
                    
                </div>
                <div className="">
                 
                    <ul className="my-6 w-full  font-bold text-gray-900 ">
                        <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md font-medium block transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Ticketing
                        </Typography>
                        </li>
                        <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md font-medium block  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Box office
                        </Typography>
                        </li>
                        <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md font-medium block transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Cashless Payments
                        </Typography>
                        </li>
                    </ul>
                 </div>
               
                </div>

                <div className="cursor-pointer" >
                <div className="xs:max-md:flex xs:max-md:justify-between ">
                    <Typography className="font-extrabold text-md orangetext block mb-3 ">
                        Company
                    </Typography>
                    
                </div>

                <div className="">
                    
                    <ul className="my-6 w-full font-medium text-gray-900 ">
                        <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md  block   transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            About
                        </Typography>
                        </li>
                        <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md  block transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            FAQ
                        </Typography>
                        </li>
                        <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md  block  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Blog
                        </Typography>
                        </li>
                    </ul>
                </div>
                
                </div>

                <div className="cursor-pointer" >
                <div className="">
                    <Typography className="font-bold text-md orangetext block mb-3 ">
                        Follow Us
                    </Typography>
                   
                </div>

                <div className="">
                    
                    <ul className="my-6 w-full  font-medium text-gray-900">
                        <li className="flex gap-2">
                        <svg
                            data-v-74575c9b=""
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="facebook-f"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            class="social-icon svg-inline--fa fa-facebook-f w-3"
                        >
                            <path
                            data-v-74575c9b=""
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            class=""
                            ></path>
                        </svg>

                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md  block transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Facebook
                        </Typography>
                        </li>
                        <li className="flex  gap-2">
                        <svg
                            data-v-74575c9b=""
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="twitter"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="social-icon svg-inline--fa fa-twitter w-4"
                        >
                            <path
                            data-v-74575c9b=""
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.2.791-32.161 39.308-52.628 54.253z"
                            class=""
                            ></path>
                        </svg>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md block transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Twitter
                        </Typography>
                        </li>
                        <li className="flex  gap-2">
                        <svg
                            data-v-74575c9b=""
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="instagram"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            class="social-icon svg-inline--fa fa-instagram w-4"
                        >
                            <path
                            data-v-74575c9b=""
                            fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            class=""
                            ></path>
                        </svg>

                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="text-md block transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                        >
                            Instagram
                        </Typography>
                        </li>
                    </ul>
                </div>
                
                </div>
            </div>
            </div>

            {/* Mobile Outlay */}
          <div className="md:hidden  text-gray-900 ">
           
            <div className="justify-between  ">
              <div
                className="xs:max-md:flex xs:max-md:justify-between cursor-pointer "
                onClick={handleClickproducts}
              >
                <Typography
                  as=""
                  className="font-bold text-md orangetext mb-3 block"
                >
                  Products
                </Typography>
                <div className="md:hidden">
                  <img
                    data-v-74575c9b=""
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC40MTA4IDAuOTEwOTA2QzEwLjczNjIgMC41ODU0NjkgMTEuMjYzOCAwLjU4NTQ2OSAxMS41ODkzIDAuOTEwOTA2QzExLjkxNDcgMS4yMzYzNCAxMS45MTQ3IDEuNzYzOTggMTEuNTg5MyAyLjA4OTQyTDYuNTg5MjcgNy4wODk0MkM2LjI3Mzc4IDcuNDA0OSA1Ljc2NTc5IDcuNDE1OTQgNS40MzY5MSA3LjExNDQ2TDAuNDM2OTA2IDIuNTMxMTNDMC4wOTc2NDAxIDIuMjIwMTMgMC4wNzQ3MjA0IDEuNjkyOTkgMC4zODU3MTQgMS4zNTM3M0MwLjY5NjcwOCAxLjAxNDQ2IDEuMjIzODUgMC45OTE1NDEgMS41NjMxMSAxLjMwMjUzTDUuOTc0OTUgNS4zNDY3MUwxMC40MTA4IDAuOTEwOTA2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                    alt="Arrow"
                  />
                </div>
              </div>
              <productsmenu className="scrollbox overflow-auto ">
                <div
                  className={
                    !productsmenu
                      ? "hidden "
                      : "w-full text-start mx-auto z-10 scrollbox-inner "
                  }
                >
                  <ul className="text-md w-full font-medium text-gray-900 ">
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="  block   transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Ticketing
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=" block   transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Box office
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=" block  text-gray-800  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Cashless Payments
                      </Typography>
                    </li>
                  </ul>
                </div>
              </productsmenu>
            </div>

            <div className="cursor-pointer" onClick={handleClickcompany}>
              <div className="xs:max-md:flex xs:max-md:justify-between ">
                <Typography className="font-bold text-md orangetext block mb-3 ">
                  Company
                </Typography>
                <div className="md:hidden ">
                  <img
                    data-v-74575c9b=""
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC40MTA4IDAuOTEwOTA2QzEwLjczNjIgMC41ODU0NjkgMTEuMjYzOCAwLjU4NTQ2OSAxMS41ODkzIDAuOTEwOTA2QzExLjkxNDcgMS4yMzYzNCAxMS45MTQ3IDEuNzYzOTggMTEuNTg5MyAyLjA4OTQyTDYuNTg5MjcgNy4wODk0MkM2LjI3Mzc4IDcuNDA0OSA1Ljc2NTc5IDcuNDE1OTQgNS40MzY5MSA3LjExNDQ2TDAuNDM2OTA2IDIuNTMxMTNDMC4wOTc2NDAxIDIuMjIwMTMgMC4wNzQ3MjA0IDEuNjkyOTkgMC4zODU3MTQgMS4zNTM3M0MwLjY5NjcwOCAxLjAxNDQ2IDEuMjIzODUgMC45OTE1NDEgMS41NjMxMSAxLjMwMjUzTDUuOTc0OTUgNS4zNDY3MUwxMC40MTA4IDAuOTEwOTA2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                    alt="Arrow"
                  />
                </div>
              </div>

              <companymenu className="scrollbox overflow-auto ">
                <div
                  className={
                    !companymenu
                      ? "hidden "
                      : "w-full text-start mx-auto z-10 scrollbox-inner "
                  }
                >
                  <ul className=" w-full font-medium text-gray-900 ">
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=" block  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        About
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=" block  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        FAQ
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="block  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Blog
                      </Typography>
                    </li>
                  </ul>
                </div>
              </companymenu>
            </div>

            <div className="cursor-pointer" onClick={handleClicksocial}>
              <div className="xs:max-md:flex xs:max-md:justify-between ">
                <Typography className="font-bold text-md orangetext block mb-3 ">
                  Follow Us
                </Typography>
                <div className="md:hidden ">
                  <img
                    data-v-74575c9b=""
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC40MTA4IDAuOTEwOTA2QzEwLjczNjIgMC41ODU0NjkgMTEuMjYzOCAwLjU4NTQ2OSAxMS41ODkzIDAuOTEwOTA2QzExLjkxNDcgMS4yMzYzNCAxMS45MTQ3IDEuNzYzOTggMTEuNTg5MyAyLjA4OTQyTDYuNTg5MjcgNy4wODk0MkM2LjI3Mzc4IDcuNDA0OSA1Ljc2NTc5IDcuNDE1OTQgNS40MzY5MSA3LjExNDQ2TDAuNDM2OTA2IDIuNTMxMTNDMC4wOTc2NDAxIDIuMjIwMTMgMC4wNzQ3MjA0IDEuNjkyOTkgMC4zODU3MTQgMS4zNTM3M0MwLjY5NjcwOCAxLjAxNDQ2IDEuMjIzODUgMC45OTE1NDEgMS41NjMxMSAxLjMwMjUzTDUuOTc0OTUgNS4zNDY3MUwxMC40MTA4IDAuOTEwOTA2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                    alt="Arrow"
                  />
                </div>
              </div>

              <socialmenu className="scrollbox overflow-auto ">
                <div
                  className={
                    !socialmenu
                      ? "hidden "
                      : "w-full text-md text-center mx-auto z-10 scrollbox-inner "
                  }
                >
                  <ul className=" w-full font-medium text-gray-800  ">
                    <li className="flex gap-2">
                      <svg
                        data-v-74575c9b=""
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        class="social-icon svg-inline--fa fa-facebook-f w-3"
                      >
                        <path
                          data-v-74575c9b=""
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          class=""
                        ></path>
                      </svg>

                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="  block  text-gray-800  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Facebook
                      </Typography>
                    </li>
                    <li className="flex  gap-2">
                      <svg
                        data-v-74575c9b=""
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="social-icon svg-inline--fa fa-twitter w-4"
                      >
                        <path
                          data-v-74575c9b=""
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.2.791-32.161 39.308-52.628 54.253z"
                          class=""
                        ></path>
                      </svg>
                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="  block  text-gray-800  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Twitter
                      </Typography>
                    </li>
                    <li className="flex  gap-2">
                      <svg
                        data-v-74575c9b=""
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="social-icon svg-inline--fa fa-instagram w-4"
                      >
                        <path
                          data-v-74575c9b=""
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          class=""
                        ></path>
                      </svg>

                      <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className=" block  text-gray-800  transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                      >
                        Instagram
                      </Typography>
                    </li>
                  </ul>
                </div>
              </socialmenu>
            </div>
          </div>
        </div>
        {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <div class="container mx-auto text-md font-medium text-gray-900 sm:flex mt-9 sm:items-center sm:justify-between 2xl:p-[3%] 3xl:p-[8%] 4xl:p-[10%] ">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              InsideMarket™
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="">Terms</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="">Privacy Policy</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="">Cookies</span>
            </a>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
