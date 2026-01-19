import React,{useState} from 'react'
import ShopCard from './ShopCard';

const Shop = () => {
const [search, setSearch] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const itemsperPage =9;


    const shoes = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    price: 8999,
    discountPrice: 6999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format"
  },
  {
    id: 2,
    name: "Nike Revolution 6",
    price: 4999,
    discountPrice: 3799,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format"
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    price: 10999,
    discountPrice: 8499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format"
  },
  {
    id: 4,
    name: "Nike Air Force 1",
    price: 9999,
    discountPrice: 7999,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format"
  },
  {
    id: 5,
    name: "Nike Blazer Mid",
    price: 8599,
    discountPrice: 6499,
    image: "https://converse.static.n7.io/media/catalog/product/5/6/563512c_01.jpg"
  },
  {
    id: 6,
    name: "Nike React Infinity Run",
    price: 12999,
    discountPrice: 9999,
    image: "https://converse.static.n7.io/media/catalog/product/a/1/a10548c_a_107x1.jpg"
  },
  {
    id: 7,
    name: "Nike Downshifter 12",
    price: 4299,
    discountPrice: 3299,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&auto=format"
  },
  {
    id: 8,
    name: "Nike Court Vision Low",
    price: 5599,
    discountPrice: 4199,
    image: "https://converse.static.n7.io/media/catalog/product/5/6/563509c_a_107x1.jpg"
  },
  {
    id: 9,
    name: "Nike Flex Experience",
    price: 4899,
    discountPrice: 3699,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format"
  },
  {
    id: 10,
    name: "Nike Air Max Excee",
    price: 9499,
    discountPrice: 7299,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format"
  },
  {
    id: 11,
    name: "Nike Zoom Fly 5",
    price: 13999,
    discountPrice: 10999,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&auto=format"
  },
  {
    id: 12,
    name: "Nike SB Chron 2",
    price: 5999,
    discountPrice: 4599,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format"
  }
];

// Search - Bar filter
const filterSearch = shoes.filter((shoe)=>{
  return shoe.name.toLowerCase().includes(search.toLowerCase());
});

// calculate total page need
const totalPages = Math.ceil(filterSearch.length / itemsperPage);  //Math.ceil = roundUp  If 12 items  12/6 = 2total pages.

// calculate the index range for current page.
const indexOfLastItem = currentPage * itemsperPage;

// calculate the index range for item to display on page.
const indexOfFirstItem = indexOfLastItem -itemsperPage;

// get items for current page only
const currentItems = filterSearch.slice(indexOfFirstItem , 
    indexOfLastItem);


// Go to next Page.
const nextPage = ()=>{
  if(currentPage < totalPages){
    setCurrentPage(currentPage + 1);
  }

}
const prevPage = ()=>{
  if(currentPage > 1){
    setCurrentPage(currentPage -1);
  }
}

// Go to specific page
const goTopage =(pageNumber)=>{
  setCurrentPage(pageNumber);
}


// handle the input search and reset to page 1 if user on different page.
const handleSearch =(e)=>{
  setSearch(e.target.value);
  setCurrentPage(1);
}


  return (
    <div className='container margin Shoe '> 

      <div className='shop-search-container'>
        <h1 className='shop-heading'>Shop</h1>
        
        <input 
        type="text" 
        placeholder='search' 
        className='shop-search' 
        value={search} 
        onChange={handleSearch}
        />

      </div>


        <div className='shoe-shop'>
        {currentItems.map((shoe) => (
            <div key={shoe.id} className='shop'>
                <ShopCard
                id={shoe}
                name ={shoe.name}
                price={shoe.price}
                discountPrice={shoe.discountPrice}
                image={shoe.image}
                />
            </div>
        ))}
        </div>

        {/* Pagination control */}

        {filterSearch.length > 0 &&(
        <div className='pagination'>
            
            <button
            onClick={prevPage}
            className='pagination-prev'
            disabled = {currentPage === 1}
            >
                Previous
            </button>

            <span className='pagination-info'>
            Page {currentPage} of {totalPages}
            </span>

            <button
            onClick={nextPage}
            className='pagination-next'
            disabled ={currentPage === totalPages}
            > Next Page 
            </button>
            </div>
            )}


            {filterSearch.length === 0 && (
                <h3>No shoes Found matching.</h3>
            )}
        </div>
    )
}

export default Shop