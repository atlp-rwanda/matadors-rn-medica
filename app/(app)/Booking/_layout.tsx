import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function BookingLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="reviewSummary" options={{ headerShown: false }} />
        <Stack.Screen
          name="SelectPayment"
          options={{
            header: () => {
              return <Header title="Payments" />;
            },
          }}
        />
      </Stack>
    </>
  );
}
