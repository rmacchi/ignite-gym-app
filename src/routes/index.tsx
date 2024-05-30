import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { Platform, SafeAreaView } from "react-native";
import { THEME } from "src/theme";

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {/* {
          Platform.OS === 'android' ? (
            <AppRoutes />
          ) : (
            <SafeAreaView style={{ flex: 1, backgroundColor: THEME.colors.gray[600] }}>
              <AppRoutes />
            </SafeAreaView>
          )
        } */}
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}