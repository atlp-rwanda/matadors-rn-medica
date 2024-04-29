import Header from "@/components/UI/Header";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="SignIn&SignOut/SetYourFingerPrint">
      <Stack.Screen
        name="SignIn&SignOut/SetYourFingerPrint"
        options={{
          header: () => {
            return <Header />;
          },
        }}
      />
    </Stack>
    
  );
}
