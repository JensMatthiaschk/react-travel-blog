const Images = ({ content }) => {
  
    return (
    <div>
    <img src={content.destinationImage.file.url} />
        <h1>{content.title}</h1>
        <p>{content.body}</p>
        <p>{content.travelTime}</p>
    </div>
  );
};

export default Images;

