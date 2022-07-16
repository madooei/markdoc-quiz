export function Option({ id, correct = false, shuffle, children }) {
  return (
    <div style={{ border: "2px solid", marginBottom: "10px", padding: "10px" }}>
      <div style={{ color: "blue" }}>
        {`Passed from Markdown: ${JSON.stringify({ correct }, null, 2)}`}
      </div>
      <div style={{ color: "green" }}>
        {`Passed during transformation: ${JSON.stringify({ id }, null, 2)}`}
      </div>
      <div style={{ color: "red" }}>
        {`Passed from parent component: ${JSON.stringify(
          { shuffle },
          null,
          2
        )}`}
      </div>
      <div>{children}</div>
    </div>
  );
}
