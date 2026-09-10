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
      "Consuma frutas, verduras, legumes e alimentos naturais diariamente.",
  },
  {
    id: "sono",
    emoji: "😴",
    titulo: "Sono",
    descricao:
      "Procure dormir entre 7 e 9 horas por noite para recuperar as energias.",
  },
  {
    id: "exercicios",
    emoji: "🏃",
    titulo: "Exercícios",
    descricao:
      "Pratique atividades físicas regularmente para fortalecer o corpo e a mente.",
  },
  {
    id: "saude_mental",
    emoji: "🧠",
    titulo: "Saúde Mental",
    descricao:
      "Reserve momentos para relaxar, reduzir o estresse e cuidar das emoções.",
  },
  {
    id: "tempo_tela",
    emoji: "📱",
    titulo: "Tempo de Tela",
    descricao:
      "Evite excesso de telas e faça pausas para descansar os olhos.",
  },
  {
    id: "alongamento",
    emoji: "🤸",
    titulo: "Alongamento",
    descricao:
      "Alongue-se diariamente para melhorar a flexibilidade e evitar dores.",
  },
  {
    id: "sol",
    emoji: "☀️",
    titulo: "Exposição ao Sol",
    descricao:
      "Tome sol com moderação para ajudar na produção de vitamina D.",
  },
  {
    id: "leitura",
    emoji: "📚",
    titulo: "Leitura",
    descricao:
      "Leia alguns minutos por dia para estimular a concentração e o aprendizado.",
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

  const [realizados, setRealizados] =
    React.useState<string[]>([]);

  return (
    <>
      <Text style={styles.sectionTitle}>
        Escolha um hábito saudável
      </Text>

      <View style={styles.grid}>
        {habitos.map((item) => (
          <View key={item.id}>
            <Opacity
              emoji={item.emoji}
              titulo={item.titulo}
              onPress={() =>
                setSelecionado(
                  selecionado === item.id
                    ? null
                    : item.id
                )
              }
            />

            {selecionado === item.id && (
              <View style={styles.infoCard}>
                <Text style={styles.infoText}>
                  {item.descricao}
                </Text>

                <TouchableOpacity
                  style={[
                    styles.button,
                    realizados.includes(item.id) && {
                      backgroundColor: "#22C55E",
                    },
                  ]}
                  onPress={() => {
                    if (!realizados.includes(item.id)) {
                      setRealizados([
                        ...realizados,
                        item.id,
                      ]);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>
                    {realizados.includes(item.id)
                      ? "✅ Realizado"
                      : "Marcar como realizado"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
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
    paddingHorizontal: 16,
    flexDirection: "column",
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