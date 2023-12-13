const MyWebSocketComponent = () => {
  return (
    <>
      <div style={{ height: "100%", zIndex: 1 }}>
        <iframe
          src="http://127.0.0.1:1880/ui"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
};

export default MyWebSocketComponent;
