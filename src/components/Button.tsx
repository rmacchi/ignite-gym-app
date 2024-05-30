import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline"
}

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 0.3 : 0}
      borderColor="green.500"
      rounded="lg"
      _pressed={{
        bg: variant === "outline" ? "gray.400" : "green.500"
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="md"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}