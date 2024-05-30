import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" rounded="md" p={2} pr={4} mb={3}>
        <Image
          source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
          alt="Homem fazendo remada unilateral"
          w={20}
          h={20}
          mr={4}
          rounded="md"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily="heading">
            Remada Unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
          size={5}
        />
      </HStack>
    </TouchableOpacity>
  )
}