import Gif from "./Gif";

export default function SingleGif({ id, title, url }) {
  console.log(id, title, url);
  return (
    <div>
      <Gif key={id} title={title} id={id} url={url} />
    </div>
  );
}
