import '../assets/css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import payImg from '../assets/images/payment-method_69e7ec.svg'
import blob1 from '..//assets/images/blob.jpg'
import blob2 from '..//assets/images/blob2.jpg'
import blob3 from '..//assets/images/blob3.jpg'
import blob4 from '..//assets/images/blob4.jpg'
const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <div className='d-flex justify-content-between pad-cus containerForResponsive'>
                <div className="1 font-s">
                    <p className='dim-color'>ABOUT</p>
                    <div className='line-h'>
                        <p><a className='text-white text-decoration-none' href="#kk">Contact Us</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">About Us</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Careers</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Flipkart Stories</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Press</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Corporate Information</a></p>
                    </div>
                </div>
                <div className="2 font-s">
                    <p className='dim-color'>GROUP COMPANIES</p>
                    <div className='line-h'>
                        <p><a className='text-white text-decoration-none' href="#kk">Myntra</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Flipkart Wholesale</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Cleartrip</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Shopsy</a></p>
                    </div>
                </div>
                <div className="3 font-s">
                    <p className='dim-color'>HELP</p>
                    <div className='line-h'>
                        <p><a className='text-white text-decoration-none' href="#kk">Payments</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Shipping</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Cancellation $ Returns</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">FAQ</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Report Infringement</a></p>
                    </div>
                </div>
                <div className="4 font-s">
                    <p className='dim-color'>CONSUMER POLICY</p>
                    <div className='line-h'>
                        <p><a className='text-white text-decoration-none' href="#kk">Cancellation $ Returns</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Terms Of Use</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Security</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">privacy</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Sitemap</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">Grievence Redressal</a></p>
                        <p><a className='text-white text-decoration-none' href="#kk">EPR Compliance</a></p>
                    </div>
                </div>
                <div className="vertical dim-color"></div>
                <div className="5 font-s">
                    <p className='dim-color'>MAIL Us</p>
                    <div className='line-h-0'>
                        <p>Flipkart Internet Private Limited,</p>
                        <p>Buildings Alyssa, Begonia &</p>
                        <p>Clove Embassy Tech Village,</p>
                        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p>Bengaluru, 560103,</p>
                        <p>Karnataka, India</p>
                    </div>

                    <div>
                        <p className='dim-color'>Social</p>
                        <div className='d-flex gap-4'>
                            <div><a href="#kk"><FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} /></a></div>
                            <div><a href="#kk"><FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff", }} /></a></div>
                            <div><a href="#kk"><FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff", }} /></a></div>
                        </div>
                    </div>
                </div>
                <div className="6 font-s">
                    <p className='dim-color'>Registered Office Address:</p>
                    <div className='line-h-0'>
                        <p>Flipkart Internet Private Limited,</p>
                        <p>Buildings Alyssa, Begonia &</p>
                        <p>Clove Embassy Tech Village,</p>
                        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p>Bengaluru, 560103,</p>
                        <p>Karnataka, India</p>
                        <p>CIN : U51109KA2012PTC066107</p>
                        <p>Telephone: <a className='text-decoration-none' href="#kk">044-45614700</a> / <a className='text-decoration-none' href="#kk">044-67415800</a></p>
                    </div>
                </div>
            </div>

           <div className='horizantal dim-color'></div>
           <div className='d-flex justify-content-between pad-cus-1'>
              <div><img src={blob1} alt="" /> <a className='text-white text-decoration-none' href="#kk">Become a Seller</a></div>
              <div><img src={blob2} alt="" /> <a className='text-white text-decoration-none' href="#kk">Advertise</a></div>
              <div><img src={blob3} alt="" /> <a className='text-white text-decoration-none' href="#kk">Gift Cards</a></div>
              <div><img src={blob4} alt="" /> <a className='text-white text-decoration-none' href="#kk">Help Center</a></div>
              <img className='img-sm' src={payImg} alt="img" />
            </div>
        </footer>
    )
}
export default Footer