import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import AppUsageModule from '@/components/passive/AppUsageModule';
import TypingBehaviourModule from '@/components/passive/TypingBehaviourModule';
import ActivityPatternsModule from '@/components/passive/ActivityPatternsModule';
import LocationPatternsModule from '@/components/passive/LocationPatternsModule';
import ContextSignalsModule from '@/components/passive/ContextSignalsModule';
import { useAssessment } from '@/context/AssessmentContext';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

const active=[['PHQ-9','Depressive symptoms','/phq9'],['GAD-7','Anxiety symptoms','/gad7'],['DASS-21','Depression • Anxiety • Stress','/dass21'],['WHO-5','Positive well-being','/who5']];
const passive=[['app','App Usage'],['typing','Typing Behaviour'],['activity','Activity Patterns'],['location','Location Patterns'],['context','Context Signals']];

export default function Objective(){
 const router=useRouter(); const{colors}=useCampusTheme(); const{selectedPassive,setSelectedPassive}=useAssessment(); const[type,setType]=useState<'active'|'passive'>('active');
 const toggle=(id:string)=>setSelectedPassive(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
 return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Objective Assessment" subtitle="Structured & validated tools"/><View style={styles.toggle}><Pressable onPress={()=>setType('active')} style={[styles.tab,type==='active'&&{backgroundColor:colors.green}]}><Text style={{color:type==='active'?colors.background:colors.textPrimary,fontWeight:'800'}}>Active</Text></Pressable><Pressable onPress={()=>setType('passive')} style={[styles.tab,type==='passive'&&{backgroundColor:colors.green}]}><Text style={{color:type==='passive'?colors.background:colors.textPrimary,fontWeight:'800'}}>Passive</Text></Pressable></View>{type==='active'?<>{active.map(([title,desc,route])=><Pressable key={title} onPress={()=>router.push(route as any)}><CampusCard style={styles.card}><Text style={[Typography.h3,{color:colors.textPrimary}]}>{title}</Text><Text style={[Typography.bodySmall,{color:colors.textMuted}]}>{desc}</Text><Text style={{color:colors.green,position:'absolute',right:16,top:23}}>›</Text></CampusCard></Pressable>)}<CampusButton title="Start Assessment" onPress={()=>router.push('/phq9')} style={{marginTop:4}}/></>:<>{passive.map(([id,label])=><Pressable key={id} onPress={()=>toggle(id)}><CampusCard style={[styles.card,{borderColor:selectedPassive.includes(id)?colors.green:colors.border}]}><View style={{flexDirection:'row',alignItems:'center'}}><Text style={{color:selectedPassive.includes(id)?colors.green:colors.textMuted,fontSize:20,width:30}}>{selectedPassive.includes(id)?'✓':'○'}</Text><Text style={[Typography.h3,{color:colors.textPrimary}]}>{label}</Text></View></CampusCard></Pressable>)}{selectedPassive.includes('app')&&<AppUsageModule/>}{selectedPassive.includes('typing')&&<TypingBehaviourModule/>}{selectedPassive.includes('activity')&&<ActivityPatternsModule/>}{selectedPassive.includes('location')&&<LocationPatternsModule/>}{selectedPassive.includes('context')&&<ContextSignalsModule/>}<CampusButton title="Continue to Results" onPress={()=>router.push('/objective-results')} variant="green"/></>}</ScrollView>;
}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38},toggle:{flexDirection:'row',backgroundColor:'transparent',gap:8,marginBottom:14},tab:{flex:1,padding:12,borderRadius:10,alignItems:'center',borderWidth:1,borderColor:'#263746'},card:{marginBottom:9,position:'relative'}});
