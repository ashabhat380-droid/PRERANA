import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

const items=[['Emotional support','Coping strategies and supportive resources'],['Medical support','Find nearby services'],['Relief & rehabilitation','Available schemes and benefits'],['Legal support','Understand your rights'],['Next steps','A step-by-step guide']];
export default function RecoveryNavigator(){const router=useRouter();const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Recovery Navigator" subtitle="Personalized guidance for your next steps"/>{items.map(([a,b])=><CampusCard key={a} style={{marginBottom:8}}><Text style={[Typography.h3,{color:colors.textPrimary}]}>{a}</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:3}]}>{b}</Text></CampusCard>)}<CampusButton title="Open Support Tools →" onPress={()=>router.push('/support-tools')} variant="purple"/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
