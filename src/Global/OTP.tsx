"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { verifyOTP } from "@/services/verify";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";

export function InputOTPComponent({
  requestOTP,
  email,
}: {
  requestOTP: (data: { identifier: string; method: string }) => Promise<void>;
  email: string;
}) {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  return (
    <Card className="w-[408px]">
      <CardHeader>
        <h3 className="text-2xl font-semibold">Enter OTP</h3>
        <CardDescription>
          Enter the OTP that was sent to chikemd@gmail.com
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="w-full space-y-2">
          <label className="text-sm font-medium">OTP</label>
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="w-full flex items-center justify-between ">
              <InputOTPSlot
                className="rounded-lg last:rounded-r-lg first:rounded-l-lg   h-12 w-12 border border-black"
                index={0}
              />
              <InputOTPSlot
                className="rounded-lg last:rounded-r-lg first:rounded-l-lg   h-12 w-12 border border-black"
                index={1}
              />
              <InputOTPSlot
                className="rounded-lg last:rounded-r-lg first:rounded-l-lg   h-12 w-12 border border-black"
                index={2}
              />
              <InputOTPSlot
                className="rounded-lg last:rounded-r-lg first:rounded-l-lg   h-12 w-12 border border-black"
                index={3}
              />
              <InputOTPSlot
                className="rounded-lg last:rounded-r-lg first:rounded-l-lg   h-12 w-12 border border-black"
                index={4}
              />
              <InputOTPSlot
                className="rounded-lg last:rounded-r-lg first:rounded-l-lg   h-12 w-12 border border-black"
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>
          <div className="w-full flex items-start">
            <Button
              variant="ghost"
              onClick={() => {
                requestOTP({
                  identifier: email,
                  method: "email",
                });
              }}
            >
              Resend OTP
            </Button>
          </div>
        </div>
        <Button
          onClick={() => {
            verifyOTP({
              email: email,
              otp: value,
            })
              .then(() => {
                toast({
                  title: "OTP verified successfully",
                });
                navigate("/admin/dashboard");
              })
              .catch((error) => {
                toast({
                  title: "Verification failed",
                  description: error.message,
                  variant: "destructive",
                });
              });
          }}
          className="w-full my-4 bg-[#222375]"
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
