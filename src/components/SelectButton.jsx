export const SelectButton = ({ getPhotoData }) => {
  return (
    <div>
      <button value="colorful" onClick={getPhotoData}>
        another photo
      </button>
    </div>
  );
};
