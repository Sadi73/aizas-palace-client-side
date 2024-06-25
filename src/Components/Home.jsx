import { useEffect, useState } from "react";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const [toggle, setToggle] = useState(1);
    const handleToggle = (id) => {
        setToggle(id);
    }
    const sportsCar = products.filter(car => car.category === "sports-car");
    const fireTruck = products.filter(car => car.category === "mini-fire-truck");
    const policeTruck = products.filter(car => car.category === "mini-police-truck");
    // console.log(sportsCar)
    return (
        <div>
            {/* ----------Slider--------- */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full max-h-screen">
                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=1060&t=st=1686425638~exp=1686426238~hmac=b3bb0c2c5c1915e133c3fa959b1e3a761ea90e01396cbe515f4ed9c73dff3fc8" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full max-h-screen">
                    <img src="https://img.freepik.com/free-photo/smiling-baby-lying-bed_1139-14.jpg?size=626&ext=jpg&ga=GA1.2.793887435.1673891886&semt=sph" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full max-h-screen">
                    <img src="https://img.freepik.com/free-photo/child-dressed-like-elf-lies-fluffy-carpet_1304-4806.jpg?size=626&ext=jpg&ga=GA1.2.793887435.1673891886&semt=sph" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full max-h-screen">
                    <img src="https://img.freepik.com/free-photo/sleeping-infant-peacefully-laying-little-newborn-with-cute-grey-hat-toy-bear_179666-160.jpg?size=626&ext=jpg&ga=GA1.2.793887435.1673891886&semt=sph" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* Product Gallary */}
            <div>
                <h1 className="text-5xl text-center text-sky-600 my-16">Product Gallary</h1>
                <div className="grid grid-cols-3 gap-10 px-10">
                    {
                        products.map(product => <img key={product.name} src={product.picture} alt="" className="h-96 w-full" />)
                    }
                </div>
            </div>

            {/* Shop by category */}
            <div>
                <h1 className="text-5xl text-center text-sky-600 my-16">Shop By Category</h1>
                <ul className="flex justify-center text-3xl gap-10 bg-pink-300 mx-auto p-5">
                    <li className="btn" onClick={() => handleToggle(1)}>Sports Car</li>
                    <li className="btn"  onClick={() => handleToggle(2)}>Mini Fire Truck</li>
                    <li className="btn"  onClick={() => handleToggle(3)}>Mini Police Truck</li>
                </ul>
                <div className={toggle === 1 ? "block grid grid-cols-3 gap-5 p-5" : "hidden"}>
                    {
                        sportsCar.map(car => <ShopByCategory key={car.id} car = {car}></ShopByCategory> )
                    }

                </div>
                <div className={toggle === 2 ? "block grid grid-cols-3 gap-5 p-5" : "hidden"}>
                    {
                        fireTruck.map(car => <ShopByCategory key={car.id} car={car}></ShopByCategory> )
                    }
                </div>
                <div className={toggle === 3 ? "block grid grid-cols-3 gap-5 p-5" : "hidden"}>
                    {
                        policeTruck.map(car => <ShopByCategory key={car.id} car={car}></ShopByCategory> )
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;