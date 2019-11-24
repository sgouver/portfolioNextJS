import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/angularJS"><a><span onClick={props.onToggleMenu}>Angular JS</span></a></Link></li>
                <li><Link href="/reactJS"><a><span onClick={props.onToggleMenu}>React JS</span></a></Link></li>
                <li><Link href="/javascript"><a><span onClick={props.onToggleMenu}>Vanilla JavaScript and jQuery</span></a></Link></li>
                <li><Link href="/wordpress"><a><span onClick={props.onToggleMenu}>WordPress CMS</span></a></Link></li>
                <li><Link href="/phorcy"><a><span onClick={props.onToggleMenu}>Phorcy.com</span></a></Link></li>
                <li><Link href="/virtualtours"><a><span onClick={props.onToggleMenu}>Virtual Tours Portfolio</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
