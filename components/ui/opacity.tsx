import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  emoji: string;
  titulo: string;
  onPress: () => void;
};

export default function Opacity({
  emoji,
  titulo,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.icon}>
        {emoji}
      </Text>

      <Text style={styles.title}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    elevation: 2,
  },

  icon: {
    fontSize: 40,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});