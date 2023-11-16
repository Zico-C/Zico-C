import { useAppSelector } from "@/store/hook";
import { Card, Select } from "antd";
import { useState } from "react";
import HsinchuPark from "./travelPage/HsinchuPark";
import HsinchuZoo from "./travelPage/HsinchuZoo";
import HsinchuStation from "./travelPage/HsinchuStation";
import HsinchuTemple from "./travelPage/HsinchuTemple";
import BigCity from "./travelPage/BigCity";
// 建立一個介面來表示 Select 的選項
type SelectOption = {
  label: string;
  value: string;
  options?: SelectOption[];
};
function Page6_02() {
  const { filter } = useAppSelector((state) => state.Map);
  const { markers } = useAppSelector((state) => state.Map);
  const [markersData] = useState(markers);

  // const [markerName, setMarkerName] = useState("");
  const [markerName, setMarkerName] = useState(
    filter.name.length !== 0 ? filter.name.toString() : ""
  );
  // 保存 axios 請求回來的 map_markers (地圖標記)API
  // 將發起的請求 fetchData 由 useQuery 自動發起請求並保存資料

  console.log(markersData[0].name.toString());

  console.log("filter.name", filter.name);
  console.log("...render ");
  const handleChange = (value: string) => {
    setMarkerName(value);
    console.log(`selected ${value}`);
  };

  // 創建一個 Set 來存儲已經存在的 type
  const uniqueTypes = new Set<string>();
  // 創建一個空陣列來存儲最終的選項
  const uniqueOptions: SelectOption[] = [];

  // 遍歷 markersData 陣列
  markersData.forEach((marker) => {
    // 檢查這個 type 是否已經處理過，若沒有，就執行下面的代碼
    if (!uniqueTypes.has(marker.type)) {
      // 將 type 加入到已處理的 Set 中，表示已經處理過
      uniqueTypes.add(marker.type);

      // 創建一個新的選項對象，包含 label 和 value
      const option: SelectOption = { label: marker.type, value: marker.type };

      // 將這個選項加入到最終的選項陣列中
      uniqueOptions.push(option);
    }
  });

  // 最終的 options 陣列，其中每個元素都是一個包含 label 和 options 的對象
  const options = uniqueOptions.map((opt) => ({
    label: opt.label,
    // 使用 filter 過濾 markersData 陣列，只保留符合條件的元素
    options: markersData
      .filter((marker) => marker.type === opt.label)
      // 使用 map 將每個元素轉換為包含 label 和 value 的對象
      .map((marker) => ({ label: marker.name, value: marker.name })),
  }));

  const markerComponents = {
    新竹公園: <HsinchuPark />,
    新竹動物園: <HsinchuZoo />,
    新竹火車站: <HsinchuStation />,
    新竹城隍廟: <HsinchuTemple />,
    "Big City遠東巨城購物中心": <BigCity />,
    // 添加更多的 key-value 對應
  };

  return (
    <>
      <Card>
        <div>
          <Select
            defaultValue={markerName}
            bordered={true}
            style={{ width: "auto" }}
            onChange={handleChange}
            options={options}
            dropdownStyle={{ width: "auto" }}
          />
        </div>
        {markerName && (
          <div>
            <hr color="gray" style={{ margin: "2rem" }} />
            {markerComponents[markerName] || null}
          </div>
        )}
      </Card>
    </>
  );
}

export default Page6_02;
