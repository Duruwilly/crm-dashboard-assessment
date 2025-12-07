import { Paragraph } from "~/components/ui/paragraph";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginSchema, type TLogin } from "./validations/login";
import { LocalStorageHelpers } from "~/lib/helpers/local-storage-helpers";
import { LocalStorageKeys } from "~/lib/constants/app";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "~/lib/constants/app-routes";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input/text-input";
import InputPassword from "~/components/ui/input/password-input";
import type { Route } from "./+types";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Log in to your account." },
  ];
}

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TLogin>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<TLogin> = async (data) => {
    setIsLoading(true);
    LocalStorageHelpers.set(LocalStorageKeys.user_data, { email: data.email });
    setTimeout(() => {
      setIsLoading(false);
      navigate(APP_ROUTES.PRODUCT);
    }, 1000);
  };

  return (
    <div className="mt-14 md:mt-20 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph className="font-semibold font-poppins-semibold text-[24px]">Log in</Paragraph>
        <Paragraph className="text-base" color="#666666">
          Welcome back! Please enter your details.
        </Paragraph>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <Input
            label="Email"
            placeholder="Enter email address"
            {...register("email")}
            error={errors.email?.message}
          />
          <InputPassword
            label="Password"
            placeholder="Enter password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
        <Button text="Sign in" isLoading={isLoading} disabled={isLoading} />
      </form>
    </div>
  );
};

export default Login;
