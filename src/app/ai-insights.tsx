import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function AIInsights(){const router=useRouter();const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="CampusCare AI Insights" subtitle="Explainable, non-diagnostic interpretation"/><CampusCard><Text style={[Typography.h3,{color:colors.textPrimary}]}>Evidence considered</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:7}]}>Objective results • expressive responses • behavioural context • journal/context • protective factors</Text></CampusCard><CampusCard style={{marginTop:9}}><Text style={[Typography.h3,{color:colors.textPrimary}]}>Likely contributing factors</Text><Text style={[Typography.body,{color:colors.textSecondary,marginTop:7}]}>Current patterns may be consistent with elevated stress and anxiety alongside recent life-situation challenges. This is an exploratory interpretation, not a diagnosis.</Text></CampusCard><CampusCard style={{marginTop:9}}><Text style={[Typography.h3,{color:colors.textPrimary}]}>Protective factors</Text><Text style={[Typography.body,{color:colors.green,marginTop:7}]}>Supportive relationships • personal strengths • access to resources</Text></CampusCard><CampusButton title="View Support Pathway →" onPress={()=>router.push('/support')} variant="purple" style={{marginTop:14}}/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
