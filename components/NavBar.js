import Link from 'next/link'

const NavLink =({href, children})=>{
    return(
        <Link href={href}>
        <a className='p-2 hover:underline hover:text-white'>{children}</a>
        </Link>
    )
}

const NavBar =()=>{
    return(
        <div className='bg-blue-600 text-center'>

        <NavLink href='/index'>Home</NavLink>
        <NavLink href='/sobre'>Sobre</NavLink>
        <NavLink href='/historia'>História</NavLink>
        <NavLink href='/tecnologias'>Tecnologias</NavLink>
              
        </div>
    )
}

export default NavBar