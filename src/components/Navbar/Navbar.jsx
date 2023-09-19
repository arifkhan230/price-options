import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
    ];


    return (
        <nav className="bg-yellow-200 p-6">
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true? <ImCross className="text-2xl"></ImCross>: <RiMenu2Line className="text-3xl font-bold"></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex duration-1000  absolute md:static
            ${open ? 'top-16' : '-top-60'}
            bg-yellow-200 px-6
             `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;