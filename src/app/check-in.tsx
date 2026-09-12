import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useAssessment } from '@/context/AssessmentContext';
import { useCampusTheme } from '@/context/ThemeContext';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusButton from '@/components/common/CampusButton';
import MoodCard from '@/components/checkin/MoodCard';
import BottomNavigation from '@/components/common/BottomNavigation';
import { Typography } from '@/constants/typography';

const moods=[
 {level:1,title:'Great',description:'Feeling positive and hopeful',icon:'◒',tone:'green' as const},
 {level:2,title:'Okay',description:'Generally okay today',icon:'∿',tone:'blue' as const},
 {level:3,title:'Not so good',description:'A bit overwhelmed or uncertain',icon:'☼',tone:'yellow' as const},
 {level:4,title:'Feeling low',description:'Having a difficult time right now',icon:'⌁',tone:'purple' as const},
 {level:5,title:'Very distressed',description:'I need more support today',icon:'♡',tone:'red' as const},
];

export default function CheckIn(){
 const router=useRouter(); const {colors}=useCampusTheme(); const {setCheckInLevel}=useAssessment(); const [selected,setSelected]=useState<number|null>(null);
 const proceed=()=>{if(!selected)return;setCheckInLevel(selected);router.push(selected<=3?'/objective':'/projective')};
 return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Wellbeing Check-in" subtitle="There is no right or wrong answer."/><Text style={[Typography.h1,{color:colors.textPrimary,textAlign:'center'}]}>How are you feeling today?</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,textAlign:'center',marginTop:5}]}>Take a moment to check in with yourself.</Text><View style={styles.grid}>{moods.map(m=><MoodCard key={m.level} {...m} selected={selected===m.level} onPress={()=>setSelected(m.level)}/>)}</View>{selected===5&&<View style={[styles.safety,{backgroundColor:colors.danger+'18',borderColor:colors.danger}]}><Text style={[Typography.h3,{color:colors.danger}]}>You can get immediate support</Text><Text style={[Typography.bodySmall,{color:colors.textSecondary,marginTop:4}]}>You can continue the assessment or reach emergency support now.</Text><Pressable onPress={()=>router.push('/emergency')}><Text style={{color:colors.danger,fontWeight:'800',marginTop:8}}>Get immediate help →</Text></Pressable></View>}<CampusButton title="Continue →" onPress={proceed} style={{marginTop:12,opacity:selected?1:0.5}}/><BottomNavigation/></ScrollView>;
}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38},grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:22},safety:{borderWidth:1,borderRadius:12,padding:12,marginTop:4}});
