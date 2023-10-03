import { Box, Text } from "@chakra-ui/react";

interface InfoProps {
  title: string;
  content: string;
  justify?: string;
}

export function DescriptionDebtInfo(props: InfoProps) {
  return (
    <Box display="flex" gap="0.5rem" justifyContent={props.justify}>
      <Text fontWeight="bold">{props.title}:</Text>
      <Text>{props.content}</Text>
    </Box>
  );
}
