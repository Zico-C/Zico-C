import { useState } from "react";

function Page3_06() {
  // const Title = (props: {
  //   renderFirst: () => JSX.Element;
  //   renderSecond: () => JSX.Element;
  // }) => {
  //   return (
  //     <>
  //       {props.renderFirst()}
  //       {props.renderSecond()}
  //     </>
  //   );
  // };

  return (
    <>
      {/* <Title
        renderFirst={() => <h1 style={{ fontSize: "2rem" }}>Hello World</h1>}
        renderSecond={() => <h2 style={{ fontSize: "1.5rem" }}>Hello World</h2>}
      /> */}
      <Input
        render={(name: any) => (
          <>
            <ReadName name={name} />
            <Greet name={name} />
          </>
        )}
      />
    </>
  );
}
const Input = (props: any) => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {props.render(name)}
    </>
  );
};

const ReadName = ({ name }: any) => {
  return <h1>{name}</h1>;
};

const Greet = ({ name }: any) => {
  return <h1>Hello {name}</h1>;
};
export default Page3_06;
