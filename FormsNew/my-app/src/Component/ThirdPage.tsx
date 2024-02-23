import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ThirdPage = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const [images, setImages] = useState([{ id: 0, data: '' }]); // Initial image state with one empty image

  const handleImageUpload = (event:any, index:number) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        const imgData = fileReader.result;
        const updatedImages:any = [...images];
        updatedImages[index] = { id: index, data: imgData }; // Update the image data in the array
        setImages(updatedImages);
      };
    }
  };

  const handleRemoveImage = (index:number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleAddMore = () => {
    const newIndex = images.length;
    setImages([...images, { id: newIndex, data: '' }]); // Add a new empty image object
  };

  const renderImageUploadSections = () => {
    return images.map((image, index) => (
      <div key={image.id}>
        <input
          type="file"
          onChange={(e) => handleImageUpload(e, index)}
          accept="image/*"
          name={`picture_${index}`}
        />
        {errors[`picture_${index}`] && (
          <span role="alert">Please upload at least one image.</span>
        )}
        <img src={image.data} alt = "Loading" style={{
width:"300px",
height:"300px",
objectFit:"cover"
        }} />
        {index > 0 && (
          <button type="button" onClick={() => handleRemoveImage(index)}>
            Remove
          </button>
        )}
      </div>
    ));
  };

  const onSubmit = (data:any) => {
    // Handle form submission with image data
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderImageUploadSections()}
        <button type="button" onClick={handleAddMore}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ThirdPage;
