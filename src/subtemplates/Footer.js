import logoFooter from '../images/logo-footer.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logoFooter} className="footer__logo"/>
        <div className="footer__sociais">
          <ul className="footer__sociais--list">
            <li className="footer__sociais--item">
              <a>
               <img src={facebook} />
              </a>
            </li>
            <li className="footer__sociais--item">
              <a>
               <img src={instagram} />
              </a>
            </li>
            <li className="footer__sociais--item">
              <a>
               <img src={linkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer;