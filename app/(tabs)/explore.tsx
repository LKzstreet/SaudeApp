import React, { useRef } from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function AnimatedCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const entrar = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1.03,
        useNativeDriver: true,
        speed: 20,
        bounciness: 5,
      }),
      Animated.spring(translateY, {
        toValue: -4,
        useNativeDriver: true,
        speed: 20,
        bounciness: 5,
      }),
    ]).start();
  };

  const sair = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
        bounciness: 5,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        speed: 20,
        bounciness: 5,
      }),
    ]).start();
  };

  const pressionar = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 25,
      bounciness: 3,
    }).start();
  };

  const soltar = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.cardWrapper,
        {
          transform: [
            { scale },
            { translateY },
          ],
        },
      ]}
    >
      <Pressable
        onHoverIn={entrar}
        onHoverOut={sair}
        onPressIn={pressionar}
        onPressOut={soltar}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        <Text style={styles.cardIcon}>{icon}</Text>

        <Text style={styles.cardTitle}>
          {title}
        </Text>

        <Text style={styles.cardText}>
          {text}
        </Text>

        <Text style={styles.cardArrow}>
          →
        </Text>
      </Pressable>
    </Animated.View>
  );
}

function AnimatedTool({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const entrar = () => {
    Animated.spring(scale, {
      toValue: 1.02,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  const sair = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  const pressionar = () => {
    Animated.spring(scale, {
      toValue: 0.98,
      useNativeDriver: true,
      speed: 25,
      bounciness: 3,
    }).start();
  };

  const soltar = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.toolWrapper,
        { transform: [{ scale }] },
      ]}
    >
      <Pressable
        onHoverIn={entrar}
        onHoverOut={sair}
        onPressIn={pressionar}
        onPressOut={soltar}
        style={styles.toolCard}
      >
        <View style={styles.toolIcon}>
          <Text style={styles.toolIconText}>
            {icon}
          </Text>
        </View>

        <View style={styles.toolContent}>
          <Text style={styles.toolTitle}>
            {title}
          </Text>

          <Text style={styles.toolText}>
            {text}
          </Text>
        </View>

        <Text style={styles.toolArrow}>
          →
        </Text>
      </Pressable>
    </Animated.View>
  );
}

export default function TabTwoScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* CABEÇALHO */}
      <View style={styles.header}>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>
            +
          </Text>
        </View>

        <View>
          <Text style={styles.headerTitle}>
            Mais
          </Text>

          <Text style={styles.headerSubtitle}>
            Informação para cuidar melhor de você
          </Text>
        </View>

      </View>

      {/* INTRODUÇÃO */}
      <View style={styles.intro}>

        <Text style={styles.introTitle}>
          Explore o App de Saúde
        </Text>

        <Text style={styles.introText}>
          Encontre informações, orientações e conteúdos
          para conhecer melhor diferentes áreas da saúde.
        </Text>

      </View>

      {/* CONTEÚDOS */}
      <Text style={styles.sectionTitle}>
        Conteúdos de saúde
      </Text>

      <View style={styles.grid}>

        <AnimatedCard
          icon="🩺"
          title="Primeiros cuidados"
          text="Cuidados básicos em situações comuns do dia a dia."
        />

        <AnimatedCard
          icon="🍎"
          title="Alimentação"
          text="A importância de uma alimentação variada e equilibrada."
        />

        <AnimatedCard
          icon="🧼"
          title="Higiene"
          text="Hábitos de higiene e prevenção de problemas de saúde."
        />

        <AnimatedCard
          icon="🦷"
          title="Saúde bucal"
          text="Cuidados importantes para manter dentes e gengivas saudáveis."
        />

        <AnimatedCard
          icon="🧑‍⚕️"
          title="Quando procurar ajuda"
          text="Entenda quando uma avaliação profissional pode ser necessária."
        />

        <AnimatedCard
          icon="💊"
          title="Medicamentos"
          text="Informações sobre o uso responsável de medicamentos."
        />

        <AnimatedCard
          icon="🛡️"
          title="Prevenção"
          text="Atitudes simples que ajudam a prevenir doenças e acidentes."
        />

        <AnimatedCard
          icon="💉"
          title="Vacinação"
          text="Conheça a importância da vacinação para a saúde coletiva."
        />

      </View>

      {/* FERRAMENTAS */}
      <Text style={styles.sectionTitle}>
        Ferramentas
      </Text>

      <AnimatedTool
        icon="📋"
        title="Checklist de saúde"
        text="Confira alguns hábitos e cuidados importantes para incluir na sua rotina."
      />

      <AnimatedTool
        icon="📖"
        title="Glossário de saúde"
        text="Consulte o significado de termos comuns relacionados à saúde e bem-estar."
      />

      <AnimatedTool
        icon="⚠️"
        title="Mitos e verdades"
        text="Descubra informações interessantes e diferencie fatos de crenças populares."
      />

      {/* SOBRE O APP */}
      <View style={styles.about}>

        <View style={styles.aboutIcon}>
          <Text style={styles.aboutIconText}>
            ❤️
          </Text>
        </View>

        <Text style={styles.aboutTitle}>
          Sobre o App de Saúde
        </Text>

        <Text style={styles.aboutText}>
          Este aplicativo foi desenvolvido com o
          objetivo de reunir informações e conteúdos
          relacionados à saúde e qualidade de vida.
        </Text>

        <Text style={styles.aboutText}>
          Nossa proposta é tornar o acesso à informação
          mais simples, organizado e fácil de entender.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.aboutFooter}>
          Informação • Prevenção • Qualidade de vida
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FBFE',
  },

  header: {
    backgroundColor: '#7EC3E6',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  headerIconText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#24446B',
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  headerSubtitle: {
    fontSize: 13,
    color: '#EAF5FD',
    marginTop: 3,
  },

  intro: {
    margin: 18,
    padding: 22,
    borderRadius: 20,
    backgroundColor: '#EAF5FD',
  },

  introTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#24446B',
    marginBottom: 8,
  },

  introText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#496783',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#24446B',
    marginHorizontal: 18,
    marginTop: 12,
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },

  cardWrapper: {
    width: '48%',
    marginBottom: 14,
  },

  card: {
    minHeight: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,

    shadowColor: '#24446B',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 3,
  },

  cardPressed: {
    shadowOpacity: 0.15,
    elevation: 5,
  },

  cardIcon: {
    fontSize: 29,
    marginBottom: 9,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#24446B',
    marginBottom: 7,
  },

  cardText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#61788C',
  },

  cardArrow: {
    fontSize: 22,
    color: '#7EC3E6',
    fontWeight: 'bold',
    marginTop: 'auto',
    alignSelf: 'flex-end',
  },

  toolWrapper: {
    marginHorizontal: 18,
    marginBottom: 12,
  },

  toolCard: {
    padding: 17,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#24446B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  toolIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#EAF5FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  toolIconText: {
    fontSize: 25,
  },

  toolContent: {
    flex: 1,
  },

  toolTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#24446B',
    marginBottom: 4,
  },

  toolText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#61788C',
  },

  toolArrow: {
    fontSize: 22,
    color: '#7EC3E6',
    fontWeight: 'bold',
    marginLeft: 10,
  },

  about: {
    marginTop: 25,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: '#24446B',
    alignItems: 'center',
  },

  aboutIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#7EC3E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  aboutIconText: {
    fontSize: 27,
  },

  aboutTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },

  aboutText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#D8EAF5',
    textAlign: 'center',
    marginBottom: 10,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#496783',
    marginVertical: 20,
  },

  aboutFooter: {
    fontSize: 12,
    color: '#9FB7C9',
  },
});