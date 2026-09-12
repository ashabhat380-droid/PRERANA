import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

const active = [
  ['Image Story', 'What is happening in this image?', '/image-story', '▧'],
  ['Word Association', 'What comes to mind?', '/word-association', 'Aa'],
  ['Sentence Completion', 'Complete the beginnings', '/sentence-completion', '▤'],
  ['Creative Expression', 'Draw, write or create freely', '/creative-expression', '◉'],
];

const passive = [
  ['Emotional Language', 'Tone, sentiment, themes'],
  ['Writing Style', 'Word choice, complexity'],
  ['Sentence Completion', 'Response time, engagement'],
  ['Creative Patterns', 'In drawings, stories, expressions'],
  ['Topics Over Time', 'What you choose to express'],
];

export default function Projective() {
  const router = useRouter();
  const { colors } = useCampusTheme();

  const [type, setType] = useState<'active' | 'passive'>('active');

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <ScreenHeader
        title="Projective Assessment"
        subtitle="Creative & expressive tasks"
      />

      <View style={styles.toggle}>
        {['active', 'passive'].map((x) => (
          <Pressable
            key={x}
            onPress={() => setType(x as 'active' | 'passive')}
            style={[
              styles.tab,
              type === x && { backgroundColor: colors.green },
            ]}
          >
            <Text
              style={{
                color:
                  type === x ? colors.background : colors.textPrimary,
                fontWeight: '800',
              }}
            >
              {x[0].toUpperCase() + x.slice(1)}
            </Text>
          </Pressable>
        ))}
      </View>

      {type === 'active' ? (
        <>
          {active.map(([title, desc, route, icon]) => (
            <Pressable
              key={title}
              onPress={() => router.push(route as any)}
            >
              <CampusCard style={{ marginBottom: 9 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: colors.purpleBright,
                      fontSize: 22,
                      width: 38,
                    }}
                  >
                    {icon}
                  </Text>

                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        Typography.h3,
                        { color: colors.textPrimary },
                      ]}
                    >
                      {title}
                    </Text>

                    <Text
                      style={[
                        Typography.bodySmall,
                        { color: colors.textMuted },
                      ]}
                    >
                      {desc}
                    </Text>
                  </View>

                  <Text style={{ color: colors.purpleBright }}>›</Text>
                </View>
              </CampusCard>
            </Pressable>
          ))}

          <CampusButton
            title="Start a Task"
            onPress={() => router.push('/image-story')}
            style={{ marginTop: 4 }}
          />
        </>
      ) : (
        <>
          {passive.map(([title, desc]) => (
            <CampusCard
              key={title}
              style={{ marginBottom: 8 }}
            >
              <Text
                style={[
                  Typography.h3,
                  { color: colors.textPrimary },
                ]}
              >
                {title}
              </Text>

              <Text
                style={[
                  Typography.bodySmall,
                  { color: colors.textMuted },
                ]}
              >
                {desc}
              </Text>
            </CampusCard>
          ))}

          <CampusButton
            title="Enable with consent"
            onPress={() => router.push('/projective-results')}
            variant="purple"
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 38,
  },

  toggle: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },

  tab: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#263746',
    borderRadius: 10,
    alignItems: 'center',
  },
});