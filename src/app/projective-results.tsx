import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function ProjectiveResults(){const router=useRouter();const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Projective Assessment Ready" subtitle="Responses recorded for later interpretation"/>{['Image Story — response recorded','Word Association — key themes captured','Sentence Completion — responses saved','Creative Expression — response saved','Expressive patterns — consent-based review'].map(x=><CampusCard key={x} style={{marginBottom:8}}><Text style={[Typography.body,{color:colors.textPrimary,fontWeight:'700'}]}>{x}</Text></CampusCard>)}<Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:6}]}>These activities are expressive and exploratory. They are not standalone diagnostic instruments.</Text><CampusButton title="Continue to Monitoring →" onPress={()=>router.push('/dynamic-monitoring')} variant="purple" style={{marginTop:16}}/><CampusButton title="Share more about your experience" onPress={()=>router.push('/emotional-expression')} variant="outline" style={{marginTop:10}}/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
