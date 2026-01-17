import React from 'react'
import {Link} from 'react-router-dom'
const Catergoies = () => {

    const catorg = [
        {
            id: 1,
            name: 'Shoes',
            image: 'https://th.bing.com/th?id=OPAC.x1SGbMf%2b%2bLtFNw474C474&w=592&h=550&o=5&pid=21.1',
            link: '/shop'

        },
        {
            id: 2,
            name: 'GYM Fits',
            image: 'https://tse3.mm.bing.net/th/id/OIP.WWlw_TBCedAc0ctlUxPf9gHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
            link: '/gym'

        },
        {
            id: 3,
            name: 'Clothes',
            image: 'https://media1.popsugar-assets.com/files/thumbor/CpbhvM90LDUTYVLS0JniRTw-Jrs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/08/13/012/n/1922729/96be00e75f1ba449_netimgfRNjAn/i/Nike-Sportswear-Essential-Women-Cropped-T-Shirt.jpg',
            link: '/clothes'

        },
    ]

  return (
    <div className='container margin'>

    <div className='flex categories'>
        {catorg.map((cat) => {
    return(
        <Link to={cat.link} className='option'>
        <div key={cat.id} className='cat'>

            <div className='catergoies-img'>
            <img src={cat.image} alt="" />
            </div>
            <div className='catergioes-content'>
                <h5>{cat.name}</h5>
            </div>
            </div>
        </Link>
        );
})}
    </div>

    </div>
    )
}

export default Catergoies