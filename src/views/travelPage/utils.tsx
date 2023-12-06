// utils.tsx
import { Card } from "antd";
export const PageTitle = ({
  title,
  subtitle,
  wiki,
  photo,
}: {
  title: string;
  subtitle: string;
  wiki?: string;
  photo: string[];
}) => (
  <>
    <h1>{title}</h1>
    <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />
    <p>{wiki}</p>
    <Card
      style={{ margin: 0, padding: 0 }}
      hoverable
      bodyStyle={{ padding: 0 }}
    >
      {photo.map((photo, index) => (
        <img key={index} src={photo} />
      ))}
    </Card>
  </>
);
