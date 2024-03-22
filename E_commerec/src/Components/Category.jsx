import React from 'react'

function Category() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBar />
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
      </div>

    </div>
  )
}

export default Category