import React from 'react'
import Script from 'next/script'
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
/>

function BottonNavbar() {
    return (

        <>


            <div>

                <div className="bg-gray-700 w-full lg:hidden  h-16 px-6 py-2 flex justify-between text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99">
                    <a href="/">
                        <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <rect x="10" y="12" width="4" height="4" />
                            </svg>
                        </span>
                    </a>
                    <a href="/">
                        <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </span>
                    </a>
                   
                    <a href="/">
                        <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                        </span>
                    </a>
                    <a href="/">
                        <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm  flex flex-col items-center text-center text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="10" r="3" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </span>
                    </a>

                </div>


                <script
                    src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
                    defer
                ></script>
            </div>
        </>


    )
}

export default BottonNavbar
