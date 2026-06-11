import MateriaScrollView from "@/components/scrollviewmateria";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";



export default function MateriaSaude() {
  return (
    <MateriaScrollView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            ❤️ Saúde em Foco
          </Text>

          <Text style={styles.bannerSubtitle}>
            Pequenas escolhas podem transformar sua vida.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>
            Hábitos Saudáveis: uma mudança que começa hoje
          </Text>

          <Text style={styles.text}>
            Especialistas afirmam que hábitos saudáveis
            estão diretamente ligados à prevenção de doenças
            e ao aumento da qualidade de vida.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            ⚠️ Sinais de alerta
          </Text>

          <Text style={styles.item}>
            • Cansaço frequente
          </Text>

          <Text style={styles.item}>
            • Dificuldade de concentração
          </Text>

          <Text style={styles.item}>
            • Dores de cabeça constantes
          </Text>

          <Text style={styles.item}>
            • Alterações no sono
          </Text>

          <Text style={styles.item}>
            • Sedentarismo
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            💧 Hidratação
          </Text>

          <Text style={styles.text}>
            A água é responsável por regular a temperatura
            corporal, transportar nutrientes e auxiliar
            diversas funções do organismo.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            🥗 Alimentação Saudável
          </Text>

          <Text style={styles.text}>
            Uma alimentação equilibrada contribui para
            o fortalecimento da imunidade e prevenção
            de diversas doenças.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            😴 Qualidade do Sono
          </Text>

          <Text style={styles.text}>
            Dormir bem melhora a memória, o humor e
            auxilia na recuperação do organismo.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            🏃 Atividade Física
          </Text>

          <Text style={styles.text}>
            Exercícios físicos ajudam a fortalecer músculos,
            melhorar a circulação e aumentar a disposição.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            ✅ Benefícios dos hábitos saudáveis
          </Text>

          <Text style={styles.item}>
            • Mais energia
          </Text>

          <Text style={styles.item}>
            • Melhor concentração
          </Text>

          <Text style={styles.item}>
            • Redução do estresse
          </Text>

          <Text style={styles.item}>
            • Melhor qualidade de vida
          </Text>

          <Text style={styles.item}>
            • Prevenção de doenças
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Fonte: Organização Mundial da Saúde (OMS)
            e Ministério da Saúde.
          </Text>
        </View>
      </View>
    </MateriaScrollView>
  );
}

const styles = StyleSheet.create({
container: {
  backgroundColor: "#F5F7FA",
},

  banner: {
    backgroundColor: "#7EC3E6",
    padding: 30,
  },

  bannerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },

  bannerSubtitle: {
    color: "#FFF",
    fontSize: 18,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#FFF",
    margin: 16,
    padding: 20,
    borderRadius: 20,
    elevation: 2,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },

  item: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },

  footer: {
    padding: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#777",
    textAlign: "center",
  },
});
