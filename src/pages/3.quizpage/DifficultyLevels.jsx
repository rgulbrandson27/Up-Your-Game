import React from 'react'
import { TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";


// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Fragment } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const DifficultyLevels = () => {
  
  // const levels = [
  //   { name: 'Level One', description: 'Get a better understanding of your traffic', href: '#', icon: FingerPrintIcon },
  //   { name: 'Level Two', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  //   { name: 'Level Three', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  //   { name: 'Level Four', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  //   { name: 'Level Five', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  // ]

  const levels = [
    { name: 'Level One', description: 'Get a better understanding of your traffic'},
    { name: 'Level Two', description: 'Speak directly to your customers'},
    { name: 'Level Three', description: "Your customers' data will be safe and secure"},
    { name: 'Level Four', description: 'Connect with third-party tools'},
    { name: 'Level Five', description: 'Build strategic funnels that will convert'}
  ]

return (
<ul className="menu bg-base-200 rounded-box">
  <li><TbHexagonNumber2 /></li>
  <li><TbHexagonNumber3 />

    <a className="tooltip tooltip-right" data-tip="Home">
    

      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a className="tooltip tooltip-right" data-tip="Details">
      
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a className="tooltip tooltip-right" data-tip="Stats">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>
      // <Menu as="div" className="relative inline-block text-left">
      //   <div>
      //     <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      //       Options
      //       <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      //     </MenuButton>
      //   </div>
  
      //   {/* <Transition
      //     enter="transition ease-out duration-100"
      //     enterFrom="transform opacity-0 scale-95"
      //     enterTo="transform opacity-100 scale-100"
      //     leave="transition ease-in duration-75"
      //     leaveFrom="transform opacity-100 scale-100"
      //     leaveTo="transform opacity-0 scale-95"
      //   > */}
      //     <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      //       <div className="py-1">
      //         <MenuItem>
      //           {({ focus }) => (
      //             <a
      //               href="#"
      //               className={classNames(
      //                 focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      //                 'block px-4 py-2 text-sm'
      //               )}
      //             >
      //               Level One
      //             </a>
      //           )}
      //         </MenuItem>
      //         <MenuItem>
      //           {({ focus }) => (
      //             <a
      //               href="#"
      //               className={classNames(
      //                 focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      //                 'block px-4 py-2 text-sm'
      //               )}
      //             >
      //               Level Two
      //             </a>
      //           )}
      //         </MenuItem>
      //         <MenuItem>
      //           {({ focus }) => (
      //             <a
      //               href="#"
      //               className={classNames(
      //                 focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      //                 'block px-4 py-2 text-sm'
      //               )}
      //             >
      //               Level Three
      //             </a>
      //           )}
      //         </MenuItem>
      //         <form method="POST" action="#">
      //           <MenuItem>
      //             {({ focus }) => (
      //               <button
      //                 type="submit"
      //                 className={classNames(
      //                   focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      //                   'block w-full px-4 py-2 text-left text-sm'
      //                 )}
      //               >
      //                 Level Four
      //               </button>
      //             )}
      //           </MenuItem>
      //           <MenuItem>
      //             {({ focus }) => (
      //               <button
      //                 type="submit"
      //                 className={classNames(
      //                   focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
      //                   'block w-full px-4 py-2 text-left text-sm'
      //                 )}
      //               >
      //                 Level Five
      //               </button>
      //             )}
      //           </MenuItem>
      //         </form>
      //       </div>
      //     </MenuItems>
      //   {/* </Transition> */}
      // </Menu>
    )
  }

  
export default DifficultyLevels


// return (
//   <Popover className="relative">
//     <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//       <span>Solutions</span>
//       <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
//     </Popover.Button>

//     <Transition
//       as={Fragment}
//       enter="transition ease-out duration-200"
//       enterFrom="opacity-0 translate-y-1"
//       enterTo="opacity-100 translate-y-0"
//       leave="transition ease-in duration-150"
//       leaveFrom="opacity-100 translate-y-0"
//       leaveTo="opacity-0 translate-y-1"
//     >
//       <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
//         <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
//           <div className="p-4">
//             {solutions.map((item) => (
//               <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
//                 <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                   <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
//                 </div>
//                 <div>
//                   <a href={item.href} className="font-semibold text-gray-900">
//                     {item.name}
//                     <span className="absolute inset-0" />
//                   </a>
//                   <p className="mt-1 text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//             {callsToAction.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
//               >
//                 <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </Popover.Panel>
//     </Transition>
//   </Popover>

// Levels
// 1 - Words with first letter showing and extra letter showing
// 2 - Words with placement first letter showing
// 3 - Words with Placement of Extra Letter
// 4 - Words with Number for Each Letter
// 5 - Number of Words Only

// Hints - 
// Reveal Next Letter
// Reveal First Letter
// Reveal Eztra Letter
