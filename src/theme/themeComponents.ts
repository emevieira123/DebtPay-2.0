import { extendTheme } from "@chakra-ui/react";

export const themeComponents = extendTheme({
  components: {
    Drawer: {
      baseStyle: () => ({
        dialog: {
          bg: "#1F213A",
          color: "#FFFFFF",
        }
      })
    },
    Modal: {
      baseStyle: () => ({
        dialog: {
          bg: "#1F213A",
          color: "#FFFFFF",
        }
      })
    },
  },
})
