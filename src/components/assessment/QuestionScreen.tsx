import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { useAssessment } from '@/context/AssessmentContext';
import { Typography } from '@/constants/typography';

export default function QuestionScreen({title,questions,scoreKey,scaleLabels,description,nextRoute,compute}:{
 title:string;questions:string[];scoreKey:'phq9'|'gad7'|'dass21'|'who5';scaleLabels:string[];description:string;nextRoute:string;compute:(answers:number[])=>number;
}){
 const router=useRouter();const{colors}=useCampusTheme();const{setScore}=useAssessment();const[answers,setAnswers]=useState<number[]>([]);const[index,setIndex]=useState(0);
 const selected=answers[index];
 const choose=(v:number)=>setAnswers(a=>{const n=[...a];n[index]=v;return n});
 const next=()=>{if(selected===undefined)return;if(index<questions.length-1)setIndex(index+1);else{setScore(scoreKey,compute(answers));router.push(nextRoute as any)}};
 return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title={title} subtitle={`Question ${index+1} of ${questions.length}`}/><View style={[styles.progressTrack,{backgroundColor:colors.borderSoft}]}><View style={[styles.progressFill,{backgroundColor:colors.green,width:`${((index+1)/questions.length)*100}%`}]}/></View><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:10,marginBottom:18}]}>{description}</Text><Text style={[Typography.h2,{color:colors.textPrimary,lineHeight:28}]}>{questions[index]}</Text><View style={{marginTop:18}}>{scaleLabels.map((label,v)=><Pressable key={label} onPress={()=>choose(v)} style={[styles.option,{backgroundColor:selected===v?colors.greenSoft:colors.surface,borderColor:selected===v?colors.green:colors.border}]}><Text style={{color:selected===v?colors.green:colors.textMuted,fontSize:18}}>{selected===v?'●':'○'}</Text><Text style={[Typography.body,{color:colors.textPrimary,flex:1,marginLeft:10}]}>{label}</Text></Pressable>)}</View><CampusButton title={index===questions.length-1?'View Result':'Next →'} onPress={next} style={{marginTop:20,opacity:selected===undefined?0.5:1}}/></ScrollView>;
}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38},progressTrack:{height:6,borderRadius:99,overflow:'hidden'},progressFill:{height:'100%',borderRadius:99},option:{minHeight:52,borderWidth:1,borderRadius:10,padding:13,flexDirection:'row',alignItems:'center',marginBottom:8}});
