import React, { useState } from 'react'

const SchoolDistrict = () => {
    const [school, setSchools] = useState([]);
    
    return (
        <div class="flex flex-row">
        <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
          <img
            class="h-50 w-full object-cover md:h-50 md:w-49"
            src="http://placekitten.com/300/250"
          />
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-black-500 font-semibold">
              School Name
            </div>
            <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              District Name
            </div>
            <p class="mt-2 text-slate-500">Information of school</p>
          </div>
        </div>

        <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
          <img
            class="h-50 w-full object-cover md:h-50 md:w-49"
            src="http://placekitten.com/300/250"
          />
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-black-500 font-semibold">
              School Name
            </div>
            <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              District Name
            </div>
            <p class="mt-2 text-slate-500">Information of school</p>
          </div>
        </div>

        <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
          <img
            class="h-50 w-full object-cover md:h-50 md:w-49"
            src="http://placekitten.com/300/250"
          />
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-black-500 font-semibold">
              School Name
            </div>
            <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              District Name
            </div>
            <p class="mt-2 text-slate-500">Information of school</p>
          </div>
        </div>

        
      </div>
    )
}

export default SchoolDistrict;