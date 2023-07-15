export const Result = ({ photo }) => {
  const { links, urls, alt_description } = photo;
  console.log(photo);
  return (
    <div className="photo">
      <a href={links.html}>
        <img src={urls.regular} alt={alt_description} />
      </a>
    </div>
  );
};
