"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router";
import bg from "@/assets/Background.png";
import logo_login from "@/assets/logo-login.png";
import { register } from "@/services/register";
import { requestOTP } from "@/services/verify";
import { InputOTPComponent } from "@/Global/OTP";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scene, setScene] = useState<"login" | "verify" | "reset">("login");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await register({
    //   email: email,
    //   password: password,
    //   phone_number: "07082749179",
    // });
    console.log("Login submitted");

    navigate("/dashboard");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className={`min-h-screen bg-[#4645B0]  font-inter  flex items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      {/* <div className="absolute inset-0 "></div> */}
      {scene === "login" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Card className="w-full rounded-xl  max-w-2xl z-10">
            <CardHeader>
              <div className="w-32 pt-4 pb-8 items-center flex ">
                <img src={logo_login} className="w-full object-cover" alt="" />
              </div>
              <motion.div variants={itemVariants}>
                <CardTitle className="text-2xl font-semibold text-start">
                  Register
                </CardTitle>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardDescription className="text-start font-medium">
                  Enter your details to access the admin dashboard
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="h-[300px] w-[420px]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label className="text-[#414651] text-sm" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label className="text-[#414651] text-sm" htmlFor="password">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <motion.div className="w-full" variants={itemVariants}>
                    <a
                      href="#"
                      className="text-sm text-primary text-end  font-semibold hover:underline"
                    >
                      Forgot password?
                    </a>
                  </motion.div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      register({
                        email: email,
                        password: password,
                        phoneNumber: "07082749179",
                      }).then(() => {
                        requestOTP({
                          identifier: email,
                          method: "email",
                        }).then(() => {
                          setScene("verify");
                        });
                      });
                    }}
                    // type="submit"
                    className="w-full bg-[#222375] "
                  >
                    Login
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
      {scene === "verify" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <InputOTPComponent />
        </motion.div>
      )}
    </div>
  );
}
