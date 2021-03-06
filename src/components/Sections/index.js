import React from "react";
import { BoxCard, Title, ContentImage } from "./styles";
import { View, Text, FlatList } from "react-native";
import Card from "../Card";

const Section = ({ data, sectionName = "Nome", dif }) => {
  const renderItem = ({ item }) => {
    return (
      <Card
        title={item.title}
        backPath={dif ? item.poster_path : item.poster}
      />
    );
  };
  return (
    <View
      style={{
        width: "100%",
        minHeight: 200,
      }}
    >
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 16,
          color: "white",
        }}
      >
        {sectionName}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={renderItem}
        style={{ flex: 1 }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Section;
