import React, {useState} from 'react'
import Navbar from './Navbar'
import Logodesign from './Logodesign';
import Posterdesign from './Posterdesign';

function Library() {

    const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
    setActiveTab(index);
}

  return (
    <div className='lib-bg'>
        <Navbar />
        <div className="flex mt-10 w-full justify-end">
            <div className='px-1 pt-2 rounded-t-xl me-7 shadow-super text-white bg-white self-end'>
        <ul className='flex'>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-t-xl ${activeTab === 0 ? 'text-black bg-white border-t-2 border-x-2' : ''}`} onClick={()=>handleTabClick(0)} >Logo <b>Designs</b></button></li>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-t-xl ${activeTab === 1 ? 'text-black bg-white border-t-2 border-x-2' : ''}`} onClick={()=>handleTabClick(1)} >Poster <b>Designs</b></button></li>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-t-xl ${activeTab === 2 ? 'text-black bg-white border-t-2 border-x-2' : ''}`} onClick={()=>handleTabClick(2)} >Web <b>Designs</b></button></li>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-t-xl ${activeTab === 3 ? 'text-black bg-white border-t-2 border-x-2' : ''}`} onClick={()=>handleTabClick(3)} >UI/UX <b>Designs</b></button></li>
        </ul>
      </div> 
      </div>
      <div className='h-1 pt-2 -mt-1 bg-white relative shadow-super z-0'></div>
      <div className="container w-auto z-50">
        {activeTab === 0 && <Logodesign />}
        {activeTab === 1 && <Posterdesign />}
        {activeTab === 2 && <div>content for tab 3</div>}
        {activeTab === 3 && <div>content for tab 4</div>}

      </div>
    </div>
  )
}

export default Library