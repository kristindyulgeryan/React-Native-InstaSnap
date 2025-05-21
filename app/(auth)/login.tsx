import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function login() {
  return (
    <View style={styles.container}>
      {/* Brand */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Instasnap</Text>
        <Text style={styles.tagline}>Don't miss anything</Text>
      </View>
    </View>
  );
}
