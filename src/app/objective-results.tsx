import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useAssessment } from '@/context/AssessmentContext';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function ObjectiveResults(){
 const router=useRouter();const{colors}=useCampusTheme();const{scores,addHistory}=useAssessment();
 const items=[['PHQ-9',scores.phq9,'/ 27'],['GAD-7',scores.gad7,'/ 21'],['DASS-21',scores.dass21,'/ 42'],['WHO-5',scores.who5,'/ 100']];
 return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Your Assessment Results" subtitle="A snapshot of your current responses"/>{items.map(([name,value,max])=><CampusCard key={name} style={{marginBottom:9}}><View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}><View><Text style={[Typography.h3,{color:colors.textPrimary}]}>{name}</Text><Text style={[Typography.body,{color:colors.textPrimary,marginTop:3}]}>{value??'—'} <Text style={{color:colors.textMuted}}>{max}</Text></Text></View><Text style={{color:name==='WHO-5'?colors.green:colors.warning,fontWeight:'800'}}>{name==='WHO-5'?'Well-being':'Current indication'}</Text></View></CampusCard>)}<View style={[styles.note,{backgroundColor:colors.purpleSoft,borderColor:colors.purple}]}><Text style={[Typography.bodySmall,{color:colors.textSecondary}]}>These results are not a diagnosis. They help CampusCare understand your current state and decide what information should be considered next.</Text></View><CampusButton title="Continue to Monitoring →" onPress={()=>{addHistory({id:String(Date.now()),date:new Date().toISOString().slice(0,10),...scores,source:'objective'});router.push('/dynamic-monitoring')}} variant="green" style={{marginTop:16}}/><CampusButton title="Share more about your experience" onPress={()=>router.push('/emotional-expression')} variant="outline" style={{marginTop:10}}/></ScrollView>;
}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38},note:{borderWidth:1,borderRadius:12,padding:12,marginTop:6}});
