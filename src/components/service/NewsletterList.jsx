export default function NewsletterList({ title, lists }) {
  return (
    <>
      <div className="NewsletterList">
        <h6>{title}</h6>
        <ul className="list-unstyled mt-3">
          {lists.map((list, index) => {
            return (
              <li key={index}>
                <span className="nl-text">{list}</span>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
