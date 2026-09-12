import React from 'react';
import QuestionScreen from '@/components/assessment/QuestionScreen';
const q=['I have felt cheerful and in good spirits','I have felt calm and relaxed','I have felt active and vigorous','I woke up feeling fresh and rested','My daily life has been filled with things that interest me'];
export default function WHO5(){return <QuestionScreen title="WHO-5" questions={q} scoreKey="who5" scaleLabels={['At no time','Some of the time','Less than half of the time','More than half of the time','Most of the time','All of the time']} description="Thinking about the last two weeks, choose how often each statement applies to you." nextRoute="/objective-results" compute={a=>a.reduce((x,y)=>x+y,0)*4}/>;}
