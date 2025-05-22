import InitialLayout from "@/assets/images/components/InitialLayout";
import { tokenCache } from "@/cache";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";

import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <InitialLayout />
            {/* <Stack screenOptions={{ headerShown: false }} /> */}
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
