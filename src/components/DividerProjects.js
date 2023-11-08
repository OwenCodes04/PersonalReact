import React, { useState } from 'react';
import ProjectsTable from './ProjectsTable';

    return (
        <div className="flex flex-col w-full h-full" style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '35px' }}>
            <div className="h-full card bg-[#F7F7F7]">
                <div className="grid flex-grow place-items-left p-8">
                    <textarea className="textarea textarea-bordered mb-8" placeholder="Type here"></textarea>
                    <textarea className="textarea textarea-bordered mb-8" placeholder="Response" disabled></textarea>
                </div>
                <div className="rounded-box items-stretch text-[#55A3FF] p-8">
                    <button className="w-44 h-8 btn bg-[#55A3FF] absolute bottom-8 right-8">Submit</button>
                </div>
            </div>
            <div className="divider mx-auto w-4/5"></div>
            <div className="grid flex-grow card bg-[#F7F7F7] rounded-box place-items-center border border-transparent h-full">

                <ProjectsTable></ProjectsTable>

            </div>
        </div>
    );

export default DividerProjects;