import React from 'react'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { InputForm } from '../../components/Form/InputForm'

import Logo from '../../assets/pigz-logotipo-branco.svg'

import {
  Container,
  LoginView,
  HeaderView,
  AccountView,
  RowViewStart,
  TitleText,
  TitleInput,
  TitleTextLogin,
  TextAccount,
  TextCreateAccount,
  TextForgotPassword,
} from './styles'
import { Button } from '../../components/Button'

const schema = Yup.object().shape({
  email: Yup.string().required('Email é obrigatório!'),
  password: Yup.string().required('password é obrigatório!'),
});

export function Signin() {
  const {
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <Container>
      <HeaderView>
        <Logo 
          width={100}
          height={50}
        />
        <TitleText>Para entregadores</TitleText>
      </HeaderView>

      <LoginView>
        <TitleTextLogin>Login</TitleTextLogin>
      </LoginView>

      <RowViewStart>
        <TitleInput>Email ou Telefone</TitleInput>
        <InputForm 
          name="email"
          control={control}
          placeholder="example@pigz.com.br"
          autoCorrect={false}
          error={errors.email && errors.email.message}
          />
      </RowViewStart>
      <RowViewStart style={{marginBottom: 24}}>
        <TitleInput>Senha</TitleInput>
        <InputForm 
          name="senha"
          control={control}
          placeholder="*********"
          autoCorrect={false}
          secureTextEntry
          error={errors.password && errors.password.message}
          />
      </RowViewStart>
      <RowViewStart style={{marginBottom: 24}}>
        <TextForgotPassword>Esqueci minha senha</TextForgotPassword>
      </RowViewStart>
          <Button title="Entrar" onPress={()=>console.log('entrou')}/>
        <AccountView>
          <TextAccount>Não tem uma Conta?</TextAccount>
          <TextCreateAccount> Criar agora!</TextCreateAccount>
        </AccountView>
    </Container>
  )
}