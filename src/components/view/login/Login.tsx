"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../../../public/assets/images/pro_logo.png";
import Form from "@/components/Form/Form";
import { LoginSchema } from "@/schema";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { storeUserInfo } from "@/services";
import FormInput from "@/components/Form/FormInput";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
const LoginForm = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation()
  const { toast } = useToast()
  
  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      const res = await userLogin(values).unwrap();
      if (res === undefined) {
        toast({
          title: "Invalid Email & Password",
        });
      } else if (res?.accessToken) {
        router.push("/");
        toast({
          title: "User Login Successfully",
        });
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      console.log(err, "error");
    }
  };
  return (
    <div className="flex place-items-center p-4 sm:pt-16 mt-16 sm:mt-0 sm:min-h-screen font-poppins justify-center items-center">
      <div className="w-96 shadow-sm shadow-black/25 rounded-md p-8">
        <div className="text-center pb-5 sm:pb-10">
          <div className="flex justify-center items-center">
            <Image width={100} height={50} src={logo} alt="logo" />
          </div>
          <h2 className="text-xl font-roboto">Log In Your Account</h2>
        </div>
        <div>
          <div>
          <Form
            submitHandler={onSubmit}
            resolver={zodResolver(LoginSchema)}
            
          >
            <div className="grid grid-cols-6  col-span-full lg:col-span-3 gap-0">
              <div className="col-span-full">
                <FormInput
                  className={" bg-white"}
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-span-full">
                <FormInput
                  className={" bg-white"}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="mt-2">
              <Button
                className="w-full bg-main py-5"
                type="submit"
              >
                Login
              </Button>
            </div>
          </Form>
          </div>
        </div>
        <div className="mt-5 text-primary">
          <span className="text-sm font-roboto text-black">Not a member?</span>{" "}
          <span>
            <Link className="text-main text-sm" href="/register">
              Sign Up Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
