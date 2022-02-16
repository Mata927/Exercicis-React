export default function Titol({titols}) {
    return (
      <>
          <ul>
            {titols.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
      </>
    );
  }