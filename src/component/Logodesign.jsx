import React, { useState, useEffect } from 'react';
import Compressor from 'compressorjs';
import logoData from './LogoData'
import ImageCard from './ImageCard'
const Logodesign = () => {
    const [compressedImages, setCompressedImages] = useState([]);

    useEffect(() => {
    // Compress the images when the component mounts
    compressImages();
  }, []);
  const compressImages = () => {
    try {
      const compressedImagesArray = logoData.map((logoData) => {

        // Assuming the imageObj has a property 'url' with the image URL.
        return { ...logoData, compressedImage: null };
      });
      Promise.all(
        compressedImagesArray.map(async (data) => {
          const compressedImage = await compressImage(data.image);
          return { ...data, compressedImage };
        })
      ).then((results) => {
        setCompressedImages(results);
      });
    } catch (error) {
      console.error('Error compressing images:', error);
    }
  };


  const compressImage = (image) => {
    return new Promise((resolve, reject) => {
      new Compressor(image, {
        quality: 0.8, // Adjust as needed (0.0 - 1.0)
        maxWidth: 800, // Adjust as needed to resize the image
        maxHeight: 800, // Adjust as needed to resize the image
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
  };


  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col gap-1">
        <div className="grid grid-cols-3 bg-dark ps-10 py-12">
          {logoData.map((data)=>{
            return  <ImageCard key={data.id} logoData={data} />

          })
}
        </div>
        <div className="col-span-3 h-40 bg-neutral-700">aaa</div>
        <div>
      {compressedImages.map((data) => (
        <img key={data.id} src={data.compressedImage} alt={data.altText} />
      ))}
    </div>

      </div>
    </div>
  )
}

export default Logodesign