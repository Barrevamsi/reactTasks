// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// function InfinetScrollTask() {
//   const [data, setData] = useState(Array.from({ length: 20 }));
//   const [hasmore, setHasMore] = useState(true);

//   const style = {
//     border: "1px solid black",
//     margin: "12px",
//   };
//   function fetchMoredata() {
//     // making api calls hear
//     setTimeout(() => {
//       setData(data.concat(Array.from({ length: 20 })));
//     }, 500);
//   }
//   return (
//     <div >
//       <InfiniteScroll
//         dataLength={data.length}
//         next={fetchMoredata}
//         hasMore={hasmore}
//         loader={<p>loading....</p>}
//       >
//         {data.map((val, ind) => {
//             return(
//            <div style={style} key={ind}>this is a div #{ind + 1} inside infinetScroll </div>
//         )})}
//       </InfiniteScroll>
//     </div>
//   );
// }
// export default InfinetScrollTask;

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


