import { useAppSelector } from "@/store/hook";
function Page6_02() {
  const { filter } = useAppSelector((state) => state.Map);
  const [getName, setGetName] = filter.name ? filter.name : "";
  const [getType, setGetType] = filter.type ? filter.type : "";

  console.log(setGetName, setGetType);

  return (
    <>
      <div>
        <h1>{getName}</h1>
        <h1>{getType}</h1>
      </div>
    </>
  );
}

export default Page6_02;
