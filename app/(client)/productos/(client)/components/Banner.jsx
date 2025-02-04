export default function Banner({ titulo, imagen }) {
  const style = {
    backgroundImage: `url(${imagen})`,
  };

  return (
    <main style={style}>
      <h1>
        Conoce más sobre
        <span>{titulo}</span>
        en nuestra página
      </h1>
    </main>
  );
}
