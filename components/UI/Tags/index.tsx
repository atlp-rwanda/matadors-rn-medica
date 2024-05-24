import { useState } from "react";
import Tag from "./Tag";

interface Props {
  data: string[];
}

export default function TagsContainer({ data }: Props) {
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  return (
    <>
      {data.map((tag, index) => {
        return (
          <Tag
            title={tag}
            selected={data[selectedTagIndex] === tag ? true : false}
            onPress={() => {
              setSelectedTagIndex(index);
            }}
          />
        );
      })}
    </>
  );
}
