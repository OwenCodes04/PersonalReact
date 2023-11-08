import React, { useState } from 'react';

function DividerMe(props) {
    };

    return (
        <div className="flex flex-col w-full h-full" style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '35px' }}>
            <div className="flex h-60 card bg-[#F7F7F7]">
                <div className="grid flex-grow rounded-box place-items-left border border-transparent p-8">
                    <h1 className="text-[#55A3FF] text-xl font-semibold">Upload Document</h1>

                    <div className="flex items-center space-x-3">
                        <label className="w-44 h-8 btn bg-[#E7E7E7] flex justify-center items-center rounded-lg font-normal text-black cursor-pointer">
                            Select PDF
                            <input type="file" accept="application/pdf" style={{ display: 'none' }} onChange={handlePdfUpload} />
                        </label>
                        {pdfName && <span>{pdfName}</span>}
                    </div>

                    <div className="flex items-center space-x-3 mt-4">
                        <label className="w-44 h-8 btn bg-[#E7E7E7] flex justify-center items-center rounded-lg font-normal text-black cursor-pointer">
                            Select Questions
                            <input type="file" accept="application/pdf" style={{ display: 'none' }} onChange={handleQuestionsUpload} />
                        </label>
                        {questionsPdfName && <span>{questionsPdfName}</span>}
                    </div>
                </div>

                <div className="rounded-box items-stretch text-[#55A3FF] p-4 absolute bottom-0 right-0">
                    <button className="w-44 h-8 btn bg-[#55A3FF]">Submit</button>
                </div>
                <div className="radial-progress m-4 p-4 absolute top-0 right-0 text-[#55A3FF]" style={{ "--value": 70 }}>70%</div>
            </div>
            <div className="divider mx-auto w-4/5"></div>
            <div className="grid flex-grow card  h-60  bg-[#F7F7F7] rounded-box place-items-center border border-transparent">content</div>
        </div>
    );

export default DividerMe;
