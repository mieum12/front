import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { styled } from "styled-components";

export default function AuthForm() {
  return (
    <AuthContainer>
      <Form method="post" className="form">
        <div>로그인 / 회원가입 하는 곳</div>
      </Form>
    </AuthContainer>
  );
}

const AuthContainer = styled.div``;
