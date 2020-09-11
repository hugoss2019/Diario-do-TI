import NavBar from '../components/NavBar'

const Header = () =>{
    return(
        <div>
          <h1 className='bg-white py-8 px-64'>
            <img  
            className='h-32 mx-auto py-4' 
            src='/logo.png' 
            height='90'
            />
          </h1>
          <NavBar />
        </div>
    )
}
export default Header