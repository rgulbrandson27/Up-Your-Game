
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
                <ul className="sm:flex space-x-6 hidden">
                  <li>
                    <NavLink
                      to="/home"
                      className={({ isActive }) => `text-xl ${isActive ? ' text-blue-500' : 'text-xl text-gray-400 hover:text-blue-500'}`
                      }
                      onClick={() => close()}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/userdashboard"
                      className={({ isActive }) => `text-xl ${isActive ? ' text-blue-500' : 'text-xl text-gray-400 hover:text-blue-500'}`
                      }
                      onClick={() => close()}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/quizpage"
                      className={({ isActive }) => `text-xl ${isActive ? ' text-blue-500' : 'text-xl text-gray-400 hover:text-blue-500'}`
                      }
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
                  className={({ isActive }) => isActive ? ' bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}
                  onClick={() => close()}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/userdashboard"
                  className={({ isActive }) => isActive ? ' bg-gray-900 text-white' : ' text-gray-300 hover:bg-gray-700'}
                  onClick={() => close()}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/quizpage"
                  className={({ isActive }) => isActive ? ' bg-gray-900 text-white' : ' text-gray-300 hover:bg-gray-700'}
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