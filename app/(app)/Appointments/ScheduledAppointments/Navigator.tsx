import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmptyAppointment from './AppointmentEmptyScreen';
import CompletedAppointment from './AppointmentCompletedScreen';
import CancelledAppointment from './AppointmentCancelledScreen';
import UpcomingAppointment from './AppointmentUpcomingScreen';

const Stack = createStackNavigator();

export function UpcomingAppointmentScreen(){
  return<UpcomingAppointment/>
}

export function CompletedAppointmentScreen(){
  return<CompletedAppointment/>
}

export function CancelledAppointmentScreen(){
  return<CancelledAppointment/>
}

export function EmptyAppointmentScreen(){
  return<EmptyAppointment/>
}

{/*
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmptyAppointment from './AppointmentEmptyScreen';
import CompletedAppointment from './AppointmentCompletedScreen';
import CancelledAppointment from './AppointmentCancelledScreen';
import UpcomingAppointment from './AppointmentUpcomingScreen';

const Stack = createStackNavigator();

 export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppointmentUpcoming">
        <Stack.Screen name="EmptyAppointment" component={EmptyAppointment} />
        <Stack.Screen name="AppointmentUpcoming" component={UpcomingAppointment} />
        <Stack.Screen name="AppointmentCompleted" component={CompletedAppointment} />
        <Stack.Screen name="AppointmentCancelled" component={CancelledAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

*/}
