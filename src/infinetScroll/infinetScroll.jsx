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
    if(items.length<=99){
       setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 20 })]);
    }, 1500);
    
    }
   else{
      hasMore=false
    }
  };
  // if(items.length>=100){
  //   hasMore=false
  // }

  return (    
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={<h3>END</h3>}
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


