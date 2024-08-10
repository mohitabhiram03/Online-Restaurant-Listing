import { useEffect } from 'react';

interface Pagination {
    postsPerPage: number;
    totalPosts: number;
    currentPage: number;
    paginate: (arg0 : number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate} : Pagination) => {
    const pageNumber = [];

    // if(totalPosts - currentPage > 6 ) {
    //     for (let i = 0; i < 6; i++) {
    //             pageNumber.push(currentPage+i);
    //     }
    // } else {
    //     for(let i = totalPosts-6; i <= totalPosts; i++) { 
    //         pageNumber.push(i);
    //     }
    // }
    if( currentPage < 950 ) {
        for (let i = 0; i < 6; i++) {
                pageNumber.push(currentPage+i);
        }
    } else {
        for(let i = 950; i <= 956; i++) { 
            pageNumber.push(i);
        }
    }


    console.log((currentPage))



  return (
    <nav className="w-full h-[50px] p-2 justify-center">
        <ul className="h-full flex flex-row gap-x-2 justify-center items-center">
            {currentPage !== 1 && (<li className="text-sm">
                <a href="#" onClick={() => {paginate(1)}}> First</a>
            </li>)}
            <li className="text-sm">
                <a href="#" onClick={() => {if(currentPage > 1){paginate(currentPage-1)}}} className="text-black">
                    {/* icon goes here */}
                    Prev
                </a>
            </li>
            {pageNumber.map((number) => {
                    return (
                        <li
                        key={number}
                        className={`p-1 text-sm rounded-lg ${currentPage === number ? 'border border-black' : ''}`}
                        >
                        <a href="#" onClick={() => paginate(number)} className="text-black px-2 rounded-lg">
                            {number}
                        </a>
                        </li>
                    );
                    })
            }

            <li className="text-sm">
                <a href="#" onClick={() => {if(currentPage < ((totalPosts/10)+1)-1){paginate(currentPage+1)}}} className="text-black">
                    {/* icon goes here */}
                    Next
                </a>
            </li>
            {currentPage < 956 && (<li className="text-sm">
                <a href="#" onClick={() => {paginate(Math.floor(totalPosts/10)+1)}}> Last</a>
            </li>)}
        </ul>
    </nav>
    // <div className="text-5xl">pagination ...</div>
  )
}

export default Pagination