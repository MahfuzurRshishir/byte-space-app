import AuthFormWrapper from "@/components/auth/shared/auth-form-wrapper";
import LoginForm from "@/components/auth/login/login-form";

export default function LoginPage() {
  return (
    <AuthFormWrapper
      headline="Sign in with ease"
      subtext="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthFormWrapper>
  );
}
