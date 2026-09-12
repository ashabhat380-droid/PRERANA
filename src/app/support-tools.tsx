import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

const tools=['Rights & Relief Checker','Private Incident Diary','Rehabilitation Tracker','Emergency Safety Support'];
export default function SupportTools(){const router=useRouter();const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="More Support for You" subtitle="Practical tools and resources"/>{tools.map((t,i)=><CampusCard key={t} style={{marginBottom:8}}><Text style={[Typography.h3,{color:i===3?colors.danger:colors.textPrimary}]}>{t}</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:3}]}>{i===0?'Know your entitlements and available support.':i===1?'Record events, documents and important details securely.':i===2?'Track applications and rehabilitation follow-ups.':'Get immediate help if you feel unsafe.'}</Text></CampusCard>)}<CampusButton title="Emergency Help" onPress={()=>router.push('/emergency')} variant="outline"/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
