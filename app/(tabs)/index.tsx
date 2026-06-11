import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import ScrollViewComponent from "../../components/scrollview";
import Lista from "../../components/ui/lista";

export default function HomeScreen() {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollViewComponent>
        <Lista
          selecionado={selecionado}
          setSelecionado={setSelecionado}
        />
      </ScrollViewComponent>
    </SafeAreaView>
  );
}