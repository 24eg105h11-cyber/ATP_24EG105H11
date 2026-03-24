function Product(props) {
    const { productObj } =props;
    return (
        <div className="shadow p-4 bg-sky-900 rounded-2xl shadow-4xl">
        <h2 className="text-2xl text-blue-400">{productObj.title}</h2>
        <p className="font-bold">{productObj.description}</p>
        </div>
    );
}
export default Product