import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function ScrollViewComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#7EC3E6",
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          ❤️ App de Saúde
        </Text>
      </View>

      <View
        style={{
          margin: 16,
          padding: 24,
          borderRadius: 20,
          backgroundColor: "#EAF5FD",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#24446B",
          }}
        >
          Pequenas escolhas,
          {"\n"}
          grandes mudanças.
        </Text>
      </View>

      {children}
    </ScrollView>
  );
}