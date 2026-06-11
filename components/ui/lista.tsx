import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Opacity from "../ui/opacity";

const habitos = [
  {
    id: "hidratacao",
    emoji: "💧",
    titulo: "Hidratação",
    descricao:
      "Beba cerca de 2 litros de água por dia. A hidratação melhora o funcionamento do organismo.",
  },
  {
    id: "alimentacao",
    emoji: "🥗",
    titulo: "Alimentação",
    descricao:
      "Consuma frutas, verduras e alimentos naturais.",
  },
  {
    id: "sono",
    emoji: "😴",
    titulo: "Sono",
    descricao:
      "Procure dormir entre 7 e 9 horas por noite.",
  },
  {
    id: "exercicios",
    emoji: "🏃",
    titulo: "Exercícios",
    descricao:
      "Pratique atividades físicas regularmente.",
  },
];

export default function Lista({
  selecionado,
  setSelecionado,
}: {
  selecionado: string | null;
  setSelecionado: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}) {
  const habitoSelecionado = habitos.find(
    (item) => item.id === selecionado
  );

  return (
    <>
      <Text style={styles.sectionTitle}>
        Escolha um hábito saudável
      </Text>

      <View style={styles.grid}>
        {habitos.map((item) => (
          <Opacity
            key={item.id}
            emoji={item.emoji}
            titulo={item.titulo}
            onPress={() =>
              setSelecionado(item.id)
            }
          />
        ))}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Informações do hábito
        </Text>

        {habitoSelecionado ? (
          <>
            <Text style={styles.infoEmoji}>
              {habitoSelecionado.emoji}
            </Text>

            <Text style={styles.infoHabit}>
              {habitoSelecionado.titulo}
            </Text>

            <Text style={styles.infoText}>
              {habitoSelecionado.descricao}
            </Text>

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Marcar como realizado
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.placeholder}>
            Selecione um hábito acima para
            visualizar as informações.
          </Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginHorizontal: 16,
    marginBottom: 16,
    color: "#2D3748",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  infoCard: {
    margin: 16,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoEmoji: {
    fontSize: 50,
    textAlign: "center",
  },

  infoHabit: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 24,
    color: "#555",
  },

  placeholder: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#4A9FEA",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});