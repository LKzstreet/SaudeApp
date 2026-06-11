import React from "react";
import { ScrollView } from "react-native";

export default function MateriaScrollView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      {children}
    </ScrollView>
  );
}