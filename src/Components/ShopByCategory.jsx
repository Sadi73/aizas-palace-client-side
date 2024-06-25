
const ShopByCategory = (props) => {
    const {car} = props;
    return (
        <div key={car.name}>
            <img key={car.name} src={car.picture} className="h-96 w-full" />
            <h1>Name: {car.name} Car</h1>
            <h1>${car.price}</h1>
            <h1>Rating: {car.rating} star</h1>
        </div>
    );
};

export default ShopByCategory;