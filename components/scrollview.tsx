import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ScrollViewComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          ❤️ App de Saúde
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          Pequenas escolhas,{"\n"}grandes mudanças.
        </Text>
      </View>

      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  content: {
    paddingBottom: 30,
  },

  header: {
    backgroundColor: "#7EC3E6",
    padding: 20,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  banner: {
    margin: 16,
    padding: 24,
    borderRadius: 20,
    backgroundColor: "#EAF5FD",
  },

  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#24446B",
  },
});