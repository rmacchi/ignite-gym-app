import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';

export function SigIn() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="cover"
        flex={1}
        position="absolute"
      />
      <VStack flex={1} px={10} pb={16}>

        <Center my={32}>

          <LogoSvg />

          <Text
            color="gray.100"
            fontSize="sm"
          >
            Treine sua mente e o seu corpo
          </Text>

        </Center>

        <Center>
          <Heading
            color="gray.100"
            fontSize="xl"
            mb={6}
            fontFamily="heading"
          >
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            secureTextEntry

          />

          <Button
            title="Acessar"
          />
        </Center>

        <Center>
          <Text
            color="gray.100"
            fontSize="sm"
            mb={3}
            fontFamily="body"
            mt={24}
          >
            Ainda não tem uma conta?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}