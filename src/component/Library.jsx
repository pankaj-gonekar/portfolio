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
        <div className="flex mt-10 w-screen justify-end">
            <div className='px-1 py-2 me-7 w-fit rounded-2xl shadow-super text-white bg-white self-end'>
        <ul className='flex'>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-xl ${activeTab === 0 ? 'text-black bg-white border-2' : ''}`} onClick={()=>handleTabClick(0)} >Logo <b>Designs</b></button></li>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-xl ${activeTab === 1 ? 'text-black bg-white border-2' : ''}`} onClick={()=>handleTabClick(1)} >Poster <b>Designs</b></button></li>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-xl ${activeTab === 2 ? 'text-black bg-white border-2' : ''}`} onClick={()=>handleTabClick(2)} >Web <b>Designs</b></button></li>
          <li><button className={`p-3 text-xl mx-1 hover:bg-crimson-red-2 hover:text-white transform transition duration-300 bg-dark rounded-xl ${activeTab === 3 ? 'text-black bg-white border-2' : ''}`} onClick={()=>handleTabClick(3)} >UI/UX <b>Designs</b></button></li>
        </ul>
      </div> 
      </div>
      <div className="container w-100 m-auto">
        {activeTab === 0 && <Logodesign />}
        {activeTab === 1 && <Posterdesign />}
        {activeTab === 2 && <div>content for tab 3</div>}
        {activeTab === 3 && <div>content for tab 4</div>}

      </div>
    </div>
  )
}

export default Library