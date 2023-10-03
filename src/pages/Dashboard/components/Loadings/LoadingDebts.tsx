import { Skeleton, Stack } from "@chakra-ui/react";

export function LoadingDebts() {
  return (
    <Stack gap="1rem">
      <Skeleton height='5rem' startColor='gray.600' endColor="#2A2D52" borderRadius="10px" />
      <Skeleton height='5rem' startColor='gray.600' endColor="#2A2D52" borderRadius="10px" />
      <Skeleton height='5rem' startColor='gray.600' endColor="#2A2D52" borderRadius="10px" />
      <Skeleton height='5rem' startColor='gray.600' endColor="#2A2D52" borderRadius="10px" />
      <Skeleton height='5rem' startColor='gray.600' endColor="#2A2D52" borderRadius="10px" />
      <Skeleton height='5rem' startColor='gray.600' endColor="#2A2D52" borderRadius="10px" />
    </Stack>
  );
}
