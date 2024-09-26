const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  
const Products = () => {
    // list of products.
    const products = [
        { title: 'Cabbage', id: 1 , color: "green"},
        { title: 'Garlic', id: 2 , color: "white" },
        { title: 'Apple', id: 3 , color: "pink" },
        { title: 'Banana', id: 4 , color: "yellow" },
      ];
    //   const listItems = products.map(product =>
    //     <li key={product.id}>
    //       {product.title}
    //     </li>
    //   );
  return (
    <div style={{
        backgroundColor: "grey",
        margin: "35px",
        padding: 20,
        textAlign: "center",
         borderRadius: "15px",
    }}>
      <h1>Products</h1>
      {/* <ul>{listItems}</ul>*/}
    {
        products.map(product => (
            <ul key={product.id}>
                <li style={{
                    listStyleType: 'none',
                    marginLeft: '20px',
                    marginBottom: '10px',
                  backgroundColor: product.color
                }}>{product.title}</li>
            </ul>
        ))
    }
    </div>
  )
}
export default Products