import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicial',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="house.fill"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Mais',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="paperplane.fill"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="primeiros-cuidados"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="alimentacao"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="higiene"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="saude-bucal"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="ajuda"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="medicamentos"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="prevencao"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="vacinacao"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}