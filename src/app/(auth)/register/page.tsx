import AuthFormWrapper from "@/components/auth/shared/auth-form-wrapper";
import RegisterForm from "@/components/auth/register/register-form";

export default function RegisterPage() {
  return (
    <AuthFormWrapper
      headline="Sign up and come in"
      subtext="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <RegisterForm />
    </AuthFormWrapper>
  );
}
