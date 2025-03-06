
import { Disclosure, DisclosurePanel, DisclosureButton} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';




const Navbar = ({ handleSelectionClick }) => {


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="text-gray-400 hover:text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <ul className="sm:flex space-x-4 hidden">
                  <li>
                    <NavLink
                      to="/home"
                      className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}
                      onClick={() => close()}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/userdashboard"
                      className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}
                      onClick={() => close()}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/quizpage"
                      className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}
                      onClick={() => close()}
                    >
                      Quiz Page
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <ul className="space-y-1 px-2 pb-3 pt-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}
                  onClick={() => close()}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/userdashboard"
                  className={({ isActive }) => isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}
                  onClick={() => close()}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/quizpage"
                  className={({ isActive }) => isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}
                  onClick={() => close()}
                >
                  Quiz Page
                </NavLink>
              </li>
            </ul>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;

//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//     {({ open }) => (
//       <>
//         <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//           <div className="relative flex items-center justify-between h-16">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <Disclosure.Button className="text-gray-400 hover:text-white">
//                 {open ? (
//                   <XMarkIcon className="block h-6 w-6" />
//                 ) : (
//                   <Bars3Icon className="block h-6 w-6" />
//                 )}
//               </Disclosure.Button>
//             </div>
//             <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//               <ul className="flex space-x-4">

//         <li>
//           <NavLink 
//               to="/home"
//               className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}
//               >
//                 Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink 
//               to="/userdashboard"
//               className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}
//               >
//                 Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink 
//               to="/quizpage"
//               className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}
//               >
//                 Quiz Page
//           </NavLink>
//         </li>
//       </ul>
//     </nav>

//   );
// }

// export default Navbar;

// // const navigation = [
// //   { name: 'My Dashboard', href: '/userdashboard'},
// //   { name: 'Word Lists', href: '/' },
// //   { name: 'Quiz Page', href: '/quizpage' },
// // ];

// // function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


  // return (
  //   <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-10">
  //     {({ open }) => (
  //       <>
  //         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //           <div className="relative flex h-14 items-center justify-between">
  //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              //   <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              //     <span className="absolute -inset-0.5" />
              //     <span className="sr-only">Open main menu</span>
              //     {open ? (
              //       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              //     ) : (
              //       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              //     )}
              //   </DisclosureButton>
              // </div>
              // <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              //   <div className="flex flex-shrink-0 items-center">
            
                // </div>
                // <div className="hidden sm:ml-6 sm:block">
                //   <div className="flex space-x-4">
                //     {navigation.map((item) => (
                //       <Link
                //         key={item.name}
                //         to={item.href}
                //         className={classNames(
                //           item.href === location.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                //           'rounded-md px-3 py-2 text-sm font-medium'
                //         )}
                //         aria-current={item.href === location.pathname ? 'page' : undefined}
                //       >
                //         {item.name}
                //       </Link>
                      // <Link
                      //   key={item.name}
                      //   href={item.href}
                      //   onClick={() => handleNavClick(item.name)}
                      //   className={classNames(
                      //     item.name === currentPage ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      //     'rounded-md px-3 py-2 text-sm font-medium'
                      //   )}
                      //   aria-current={item.name === currentPage ? 'page' : undefined}
                      // >
                      //   {item.name}
                      // </Link>
              //       ))}
              //     </div>
              //   </div>
              // </div>
              // <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              //   <button
              //     type="button"
              //     className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              //   >
              //     <span className="absolute -inset-1.5" />
              //     <span className="sr-only">View notifications</span>
              //     <BellIcon className="h-6 w-6" aria-hidden="true" />
              //   </button>

  
    //             <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                   <span className="absolute -inset-1.5" />
    //                   <span className="sr-only">Open user menu</span>
               
    //                 </Menu.Button>
    //               </div>
    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                   <MenuItem>
    //                     {({ active }) => (
    //                       <Link
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Your Profile
    //                       </Link>
    //                     )}
    //                   </MenuItem>
    //                   <MenuItem>
    //                     {({ active }) => (
    //                       <Link
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Settings
    //                       </Link>
    //                     )}
    //                   </MenuItem>
    //                   <MenuItem>
    //                     {({ active }) => (
    //                       <Link
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Sign out
    //                       </Link>
    //                     )}
    //                   </MenuItem>
    //                 </MenuItems>
    //               </Transition>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <DisclosurePanel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <DisclosureButton
    //               key={item.name}
    //               as={Link}
    //               to={item.href}
    //               className={classNames(
    //                 item.href === location.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block rounded-md px-3 py-2 text-base font-medium'
    //               )}
    //               aria-current={item.href === location.pathname ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </DisclosureButton>
    //           ))}
    //         </div>
    //       </DisclosurePanel>

      
    //     </>
    //   )}
    // </Disclosure>