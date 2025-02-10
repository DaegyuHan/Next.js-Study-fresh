'use client'
import { useState } from "react";

export default function List() {
    let [count, changeCount] = useState([0, 0, 0])
    let products = ['Tomatoes', 'Pasta', 'Coconut']

    // 수량 감소 함수
    const decreaseCount = (index) => {
        let copy = [...count];
        copy[index]--;
        changeCount(copy);
    }

    // 수량 증가 함수
    const increaseCount = (index) => {
        let copy = [...count];
        copy[index]++;
        changeCount(copy);
    }

    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                products.map((product, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"></img>
                            <h4>{products[i]} $40</h4>
                            <button onClick={() => { decreaseCount(i)}}>-</button>
                            <span>{count[i]}</span>
                            <button onClick={() => {increaseCount(i)}}>+</button>
                        </div>
                    )
                })
            }
        </div>
    );

}
