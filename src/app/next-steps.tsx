import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function NextSteps(){const router=useRouter();const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Next Check-in" subtitle="Small steps, continued support"/><CampusCard><Text style={[Typography.h1,{color:colors.textPrimary}]}>You're not alone.</Text><Text style={[Typography.body,{color:colors.textSecondary,marginTop:7}]}>We'll check in again in 2 weeks. You can update your preferences or ask for immediate help at any time.</Text></CampusCard>{['Set a reminder','Update preferences','Need immediate help?'].map(x=><CampusCard key={x} style={{marginTop:8}}><Text style={[Typography.body,{color:colors.textPrimary,fontWeight:'700'}]}>{x}</Text></CampusCard>)}<CampusButton title="Back to Dashboard" onPress={()=>router.push('/dashboard')} style={{marginTop:14}}/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
