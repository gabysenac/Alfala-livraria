
import logo from '../../img/logo.svg'
import styled from 'styled-components'


const LogoConstainer = styled.div`
display: flex;
font-size: 30px;
`

const LogoImage = styled.img`
margin-right: 10px;
`


function Logo() {
    return (
    <LogoConstainer>
    <LogoImage
    src={logo} 
        alt='Alfala logo'>
            </LogoImage>
            <p><strong>Alfala</strong>Books</p>
    </LogoConstainer>
    )
}



export default Logo;

