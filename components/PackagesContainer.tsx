import { FlatList } from "react-native";
import PackageItem from "./UI/PackageItem";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@/ctx/ThemeContext";

interface Props {
  data: {
    id: string;
    title: string;
    price: string;
    icon: () => React.JSX.Element;
    description: string;
  }[];
}

export default function PackagesContainer({ data }: Props) {
  const [selectedPackage, setSelectedPackage] = useState("0");
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <FlatList
        data={data}
        contentContainerStyle={{
          gap: 25,
          width: "100%",
          padding: 20,
        }}
        renderItem={({ item }) => (
          <PackageItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            icon={item.icon}
            selected={selectedPackage === item.id}
            onPress={() => {
              setSelectedPackage(item.id);
            }}
          />
        )}
      />
    </>
  );
}
