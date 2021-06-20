import React, { useEffect } from "react";
import { useState } from "react";

const items = [
  { id: 0, product: "Apples", price: 1.0 },
  { id: 1, product: "Bread", price: 0.8 },
  { id: 2, product: "Milk", price: 1.3 },
  { id: 3, product: "Soup", price: 0.65 },
];

const Item = () => {
  let week = true;

  const [counters, setCounters] = useState([0, 0, 0, 0]);

  //get list of all breads
  const [breads, setBreads] = useState([]);

  const [total, setTotal] = useState(0.0);
  const [subTotal, setSubTotal] = useState(0.0);

  useEffect(() => {
    const { total, subTotal } = counters.reduce(
      ({ total, subTotal }, counter, ind, arr) => {
        const price = items[ind].price;
        subTotal += price * counter;

        total += calculateDiscount(price, ind, arr, counter);
        
        return { total, subTotal };
      },
      {
        total: 0,
        subTotal: 0,
      }
    );
    setTotal(total);
    setSubTotal(subTotal);
    //console.log(total, subTotal);
  }, [counters]);

  const setCount = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCounters(newCounters);
  };

  const calculateDiscount = (originalPrice, ind, counterArr, counter) => {
    const APPLE_PERCENT_0FF = 10;
    const BREAD_PERCENT_0FF = 50;
    const CENT = 100;
    let result = 0;
    if (week && ind === 0) {
      result = originalPrice - originalPrice * (APPLE_PERCENT_0FF / CENT);
      return result * counter;
    }
    if (ind === 1) {
      if ( Math.floor(counterArr[3] / 2)>0) {
        let setOfSoups =  Math.floor(counterArr[3] / 2);
        let breads = counterArr[1];
        let breadPrice = 0;

        while(setOfSoups && breads){
          breadPrice += originalPrice- originalPrice * (BREAD_PERCENT_0FF / CENT);
          setOfSoups-=1;
          breads-=1;
        }
        while(breads){
          breadPrice += originalPrice;
          breads -=1;
        }

        return breadPrice;
        
      }
    }
    return originalPrice * counter;
  };

  const incrementPrice = (index, value, item) => {
    setCount(index, counters[index] + 1);
    //add breads
    if (item === 'Bread') {
      setBreads((prev) => [...prev, {item:'Bread', discount:false}])
    }
   
  };

  const decrementPrice = (index) => {
    setCount(
      index,
      counters[index] === 0 ? counters[index] : counters[index] - 1
    );
  };

  const listItem = items.map((item, index) => (
    <div className="list-items" key={item.product}>
      <label className="product-name">{item.product}</label>
      <div className="controls">
        <button onClick={() => decrementPrice(index, Math.trunc(item.price))}>
          -
        </button>
        <label className="displayValue">{counters[index]}</label>
        <button onClick={() => incrementPrice(index, item.price, item.product)}>
          +
        </button>
        <h4 className="unit-price">{`Unit / £${item.price}`}</h4>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      <div className="list-item-container">
        <h3>Shopping Cart</h3>
        {listItem}
      </div>
      <div className="list-item-details-container">
        <h4>Price Details</h4>
        <h5>
          Subtotal GBP <span>{subTotal.toFixed(2)}</span>
        </h5>

        <h5>
          TOTAL: <span>{total.toFixed(2)}</span>
        </h5>
      </div>
    </div>
  );
};

export default Item;
