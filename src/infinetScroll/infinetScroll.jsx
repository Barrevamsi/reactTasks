import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

const InfiniteScrollTask = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 20 })]);
    }, 1500);
  };

  return (    
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {items.map((_, index) => (
        <div style={style} key={index}>
         this is div - #{index} inside infinet scroll
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollTask;


