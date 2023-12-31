import React from 'react'
import {Carousel, IconButton} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline"
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../utils/Spinner'


export default function HomeCategory() {
    const{
        error,
        data: categories,
        loading,
    } = useFetch('https://ecommtest.onrender.com/categories')
    const bannerCategory = categories.filter((category) => category.name === 'Fashion' || category.name === 'Earpiece')
  return (
    <div className='mt-5'>
        {loading && <Spinner/>}
        {error || (categories && 
            <>
                {error && <p>{error.message}</p>}
                <Carousel
                 className="rounded-xl"
                 prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 -translate-y-2/4 left-4"
                        >
                        <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 -translate-y-2/4 !right-4"
                        >
                        <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
                        </IconButton>
                    )}
                >
                    {bannerCategory.map((banner) => (
                    <Carousel.Item key={banner.id}>
                        <img
                        className="block h-full w-full object-cover"
                        src={banner.image}
                        alt={banner.name}
                        style={{ height: "600px" }}
                        />
                        <Carousel.Caption>
                        <h1 className="display-3">{banner.name}</h1>
                        <Link to={`/categories/${banner.id}`}>
                            <button
                            variant="dark"
                            size="lg"
                            className="border-none rounded-0"
                            >
                                SEE MORE
                            </button>
                        </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </>)}

    </div>
  )
}

// import { Carousel, IconButton } from "@material-tailwind/react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
 
// export default function Example() {
//   return (
//     <Carousel
//       className="rounded-xl"
//       prevArrow={({ handlePrev }) => (
//         <IconButton
//           variant="text"
//           color="white"
//           size="lg"
//           onClick={handlePrev}
//           className="!absolute top-2/4 -translate-y-2/4 left-4"
//         >
//           <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
//         </IconButton>
//       )}
//       nextArrow={({ handleNext }) => (
//         <IconButton
//           variant="text"
//           color="white"
//           size="lg"
//           onClick={handleNext}
//           className="!absolute top-2/4 -translate-y-2/4 !right-4"
//         >
//           <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
//         </IconButton>
//       )}
//     >
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// }