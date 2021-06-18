import React, { useEffect } from "react";
import { useState } from "react";

const items = [
  { id: 0, product: "Apples", price: 1.0 },
  { id: 1, product: "Bread", price: 0.8 },
  { id: 2, product: "Milk", price: 1.3 },
  { id: 3, product: "Soup", price: 0.65 },
];

//count number of items
//const prices = items.map((item, id) => item.price);
const prices = [0, 0, 0, 0];

const Item = () => {
  let week = true;

  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [units, setUnits] = useState(prices);
  const [purchase, setPurchase] = useState(units);

  //const getPrices = items.map((item, id) => item.price);
  const [total, setTotal] = useState(0.0);
  const [subTotal, setSubTotal] = useState(0.0);

  useEffect(() => {
    const { total, subTotal } = counters.reduce(
      ({ total, subTotal }, counter, ind, arr) => {
        const price = items[ind].price;
        subTotal += price * counter;

        total += calculateDiscount(price, ind, arr) * counter;

        return { total, subTotal };
      },
      {
        total: 0,
        subTotal: 0,
      }
    );
    setTotal(total);
    setSubTotal(subTotal);
    console.log(total, subTotal);
  }, [counters]);

  const setCount = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCounters(newCounters);
  };

  const setUnitPrice = (index, aaddnewUniPrice) => {
    const addnewUniPrices = Object.assign([], units);
    addnewUniPrices[index] = aaddnewUniPrice;
    setUnits(addnewUniPrices);
  };

  const calculateDiscount = (originalPrice, ind, counterArr) => {
    const APPLE_PERCENT_0FF = 10;
    const BREAD_PERCENT_0FF = 50;

    const CENT = 100;
    let result = 0;
    if (week && ind === 0) {
      result = originalPrice - originalPrice * (APPLE_PERCENT_0FF / CENT);
      return result;
    }
    if (ind === 1) {
      if (counterArr[3] >= 2) {
        // if two soups are selected
        const selectedBreads = counterArr[1];
        // no of soups is X, number of discounted breads = Math.floor(X/2)
        // selectedBreads-
        result = originalPrice - originalPrice * (BREAD_PERCENT_0FF / CENT);
        return result;
      }
    }
    return originalPrice;
  };

  const incrementPrice = (index, value, item) => {
    setCount(index, counters[index] + 1);
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
