import React, { useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
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
  const scale = useRef(new Animated.Value(1)).current;

  const aumentar = () => {
    Animated.spring(scale, {
      toValue: 1.03,
      useNativeDriver: true,
      friction: 5,
    }).start();
  };

  const voltar = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
    }).start();
  };

  const pressionar = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      friction: 5,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
        onPress={onPress}
        onPressIn={pressionar}
        onPressOut={voltar}
        onHoverIn={aumentar}
        onHoverOut={voltar}
      >
        <Text style={styles.icon}>
          {emoji}
        </Text>

        <Text style={styles.title}>
          {titulo}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 2,
  },

  cardPressed: {
    opacity: 0.92,
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