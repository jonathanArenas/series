import CardShow from './CardShow'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css'

const ShowsList = ({ data }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    currentItems.length === 0
      ? <p className='text-center'>No se encontraron resultados</p>
      : (
        <div>
            <ul className='row gx-0 gx-md-5 gy-4'>
          {currentItems.map(item => (
            <li className='col-5 col-md-3 col-lg-3 ms-auto' key={item.id}>
                <Link to={`/show/${item.id}`}>
                  <CardShow {...item} />
                </Link>
            </li>
          )
          )}
          </ul>
          <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeClassName='active'
      />
        </div>
      )

  )
}

export default ShowsList
