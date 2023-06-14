import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import PropTypes from 'prop-types';
import { Link, useLocation} from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Dropdown(props) {
    let location = useLocation();

    
const {item_1, item_2, item_3, item_4, link_1, link_2, link_3, link_4, menuName} = props;
    return (
        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button className="w-32 h-12 mx-2 max-xl:w-26 max-lg:w-20 max-sm:w-16">
                    {menuName}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute text-center z-10 mt-3 w-36 origin-top-right rounded-b-lg bg-dark text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                        <Menu.Item>
                            {() => (
                                <>
                                <Link
                                    to={link_1}
                                    className={classNames(
                                        location.pathname === link_1 ? 'bg-white text-gray-700' : '',
                                        'block text-xs font-bold py-3 transform transition duration-300 hover:bg-white hover:text-gray-700 leading-3'
                                    )}
                                >
                                    {item_1}
                                    </Link>
                                    <hr/>
                                    </>
                                
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {() => (
                                <>
                                <Link
                                    to={link_2}
                                    className={classNames(
                                        location.pathname === link_2 ? 'bg-white text-gray-700' : '',
                                        'block py-3 text-xs font-bold transform transition duration-300 hover:bg-white hover:text-gray-700 leading-3'
                                    )}
                                >
                                    {item_2}
                                    </Link>
                                    <hr/>
                                    </>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {() => (
                                <>
                                <Link
                                    to={link_3}
                                    className={classNames(
                                        location.pathname === link_3 ? 'bg-white text-gray-700 rounded-b-lg' : '',
                                        `block py-3 text-xs font-bold transform transition duration-300 hover:bg-white hover:text-gray-700 leading-3
                                        ${item_4?"hover:rounded-b-none rounded-b-none": "hover:rounded-b-lg"}`
                                    )}
                                >
                                    {item_3}
                                    </Link>
                                    <hr className={item_4? "" : "hidden"}/>
                                    </>
                            )}
                        </Menu.Item>
                        <div className={item_4? " " : "hidden"}>
                            <Menu.Item>
                                {() => (
                                    <a
                                    href="#" 
                                        className={classNames(
                                            location.pathname === link_4 ? 'bg-white text-gray-700 rounded-b-lg' : '',
                                            'block py-3 text-xs font-bold transform transition duration-300 hover:rounded-b-lg rounded-b-lg hover:bg-white hover:text-gray-700 leading-3'
                                        )}
                                    >
                                        {item_4}
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>)
}
Dropdown.propTypes = {
    menuName: PropTypes.string.isRequired,
    item_1: PropTypes.string.isRequired,
    item_2: PropTypes.string.isRequired,
    item_3: PropTypes.string.isRequired,
    item_4: PropTypes.string,
    link_1: PropTypes.string,
    link_2: PropTypes.string,
    link_3: PropTypes.string,
    link_4: PropTypes.string,


}

export default Dropdown