import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../utils/Spinner'

export default function Navlocker({isOpen, setOpen}) {
    const { 
        error, 
        data: categories, 
        loading 
    } = useFetch(
    'https://ecommtest.onrender.com/categories'
    )
   


    return (
        <div className='position-fixed top-0'>
            <div className='' style={{width
            :'24rem'}}>
                <div style={{marginTop: '5rem'}}> 
                    <Link to='/products' onClick={()=> setOpen(!isOpen)}>
                        <p className=''>products</p>
                    </Link>
                    <p>Categories</p>
                    
                    
                </div>
            </div>
        </div>
    )
}
