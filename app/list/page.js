export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                products.map((product, i) => {
                    return (
                        <div className="food" key={i}>
                            
                            <h4>{products[i]} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    );
}
