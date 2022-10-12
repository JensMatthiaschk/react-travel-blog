import ReactMarkdown from 'react-markdown'

const Images = ({ content }) => {

  console.log("content", content)

  return (
    <div>
      <img src={content.destImage.fields.file.url} />
      <h1>{content.title}</h1>
      <ReactMarkdown className="content-body">{content.body}</ReactMarkdown>
      <p>{content.travelTime}</p>
    </div>
  );
};

export default Images;

