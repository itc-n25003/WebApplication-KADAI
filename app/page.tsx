export default function Page() {
  return (
    <>
      <iframe
        src="https://senka.su/world?num=1"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "800px",
          height: "700px",
          border: "none",
          zIndex: 1000,
        }}
      />
    </>
  );
}
