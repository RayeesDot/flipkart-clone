import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';
const dropdownMenus = [
  {
    title: "Electronics",
    links: [
      { text: "test comp", url: "/testComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  },
  {
    title: "TVs & Appliances",
    links: [
      { text: "test comp", url: "/testComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  },
  {
    title: "Men",
    links: [
      { text: "test comp", url: "/TestComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  },
  {
    title: "Women",
    links: [
      { text: "test comp", url: "/TestComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  },
  {
    title: "Baby & Kids",
    links: [
      { text: "test comp", url: "/TestComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  },
  {
    title: "Home & Furniture",
    links: [
      { text: "test comp", url: "/TestComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  },
  {
    title: "Sports, Books & More",
    links: [
      { text: "test comp", url: "/TestComp" },
      { text: "Link 3", url: "kk" },
      { text: "Link 1", url: "kk" }
    ]
  }
];

const Navbar = () => {
  const [angle,setAngle] = useState(null)
  return (
    <div className="border p-1">
      <nav className='container'>
        <div className='d-flex justify-content-between navbar navbar-expand-lg font resp-media'>
        {dropdownMenus.map((menu, index) => (
        <div className="dropdown" key={index}>
          <div onMouseOver={() => setAngle(index)} onMouseLeave={() => setAngle(null)}>
            {menu.title} <FontAwesomeIcon icon={angle ===index ?faAngleUp: faAngleDown} style={{ color: "grey" }} />
          </div>
          <div className="dropdown-content">
            {menu.links.map((link, i) => (
              <Link to={link.url} key={i}> {link.text}</Link>
            ))}
          </div>
        </div>
      ))}



          <a className='text-decoration-none text-dark' href="#ok">Flights</a>
          <a className='text-decoration-none text-dark' href="#ok">Offer Zone</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
