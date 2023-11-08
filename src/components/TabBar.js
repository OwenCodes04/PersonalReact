import React from 'react';

function TabBar(props) {
    return (
        <div className="flex w-full" style={{ paddingLeft: '10px', paddingRight: '20px', marginBottom: '35px'}}>
            <button className="btn btn-wide bg-[#fb923c] py-2 px-2 border border-transparent">Upload Document</button>
            <div className="divider divider-horizontal"></div>
            <button className="btn btn-wide bg-[#FFCAB8] border border-transparent ">Q&A</button>
        </div>

    );
}

export default TabBar;



