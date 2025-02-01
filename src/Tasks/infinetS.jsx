import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
function InfinetS(){
    const [data,setData]=useState(Array.from({length:20}))
    const[moredata,setMoreData]=useState(true)
    const style={
        border:"1px solid black",
        padding:"12px" 
    }
    const moreData= () => {
        if(data.length<100){
            setTimeout(() => {
                setData(prevItems => [...prevItems, ...Array.from({ length: 20 })]);
              }, 1500);
        }
        else{
            setMoreData(false)
        }
      };
    return(
        <div>
            <InfiniteScroll
            dataLength={data.length}
            next={moreData}
            hasMore={moreData}
            loader={<p>loading .....</p>}
            endMessage={<p>
                no more data
            </p>}
            >
                <div >
                {data.map((val,ind)=>{
                    return (
                        <div key={ind} style={style}>this is #{ind} div inside infinet Scroll</div>
                    )
                })}
                </div>
            </InfiniteScroll>
        </div>
    )
}
export default InfinetS;