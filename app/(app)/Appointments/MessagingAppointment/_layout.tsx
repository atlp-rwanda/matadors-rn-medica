import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
    return (
<Stack>
    <Stack.Screen  name="index" options={{headerShown:false}}/>
    <Stack.Screen  name="ChatMessaging" options={{headerShown:false}}/>
    <Stack.Screen  name="Camera" options={{headerShown:false}}/>
</Stack>
)}