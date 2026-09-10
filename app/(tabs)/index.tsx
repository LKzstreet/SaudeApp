import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ScrollViewComponent from "../../components/scrollview";
import Lista from "../../components/ui/lista";

export default function HomeScreen() {
  const [selecionado, setSelecionado] =
    useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewComponent>
        <Lista
          selecionado={selecionado}
          setSelecionado={setSelecionado}
        />

        <View style={styles.footer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logo}>❤️</Text>
          </View>

          <Text style={styles.footerTitle}>
            App de Saúde
          </Text>

          <Text style={styles.footerSubtitle}>
            Pequenas escolhas, grandes mudanças.
          </Text>

          <Text style={styles.description}>
            Um aplicativo criado para ajudar você a
            desenvolver hábitos mais saudáveis e cuidar
            melhor da sua qualidade de vida.
          </Text>

          <View style={styles.linksContainer}>
            <Pressable>
              <Text style={styles.link}>Inicial</Text>
            </Pressable>

            <Text style={styles.dot}>•</Text>

            <Pressable>
              <Text style={styles.link}>Mais</Text>
            </Pressable>

            <Text style={styles.dot}>•</Text>

            <Pressable>
              <Text style={styles.link}>Sobre</Text>
            </Pressable>
          </View>

          <View style={styles.divider} />

          <Text style={styles.copyright}>
            © 2026 App de Saúde
          </Text>

          <Text style={styles.bottomText}>
            Feito com ❤️ para uma vida mais saudável.
          </Text>
        </View>
      </ScrollViewComponent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footer: {
    marginTop: 50,
    paddingTop: 35,
    paddingBottom: 45,
    paddingHorizontal: 25,
    backgroundColor: "#24446B",
    alignItems: "center",
  },

  logoCircle: {
    width: 65,
    height: 65,
    borderRadius: 22,
    backgroundColor: "#7EC3E6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  logo: {
    fontSize: 30,
  },

  footerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  footerSubtitle: {
    color: "#D8EAF5",
    fontSize: 14,
    marginTop: 6,
  },

  description: {
    color: "#D8EAF5",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 22,
    maxWidth: 500,
  },

  linksContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  link: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  dot: {
    color: "#7EC3E6",
    fontSize: 18,
    marginHorizontal: 12,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#496783",
    marginTop: 28,
    marginBottom: 18,
  },

  copyright: {
    color: "#D8EAF5",
    fontSize: 12,
  },

  bottomText: {
    color: "#9FB7C9",
    fontSize: 12,
    marginTop: 7,
  },
});