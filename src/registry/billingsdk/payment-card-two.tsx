'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import {  CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, CreditCard, Info, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PaymentCardTwoProps {
  title?: string;
  infoBottom?: string;
  itemAmount?: number;
  item: string;
  currency?: string;
  brandName?: string;
  onCardNumberChange?: (value: string) => void;
  onPay?: () => void;
  onBack?: () => void;
  className?: string;
}

export function PaymentCardTwo({
  title,
  infoBottom,
  itemAmount,
  item,
  currency,
  brandName,
  onCardNumberChange,
  onPay,
  onBack,
  className,
}: PaymentCardTwoProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setInputValue(value);
    onCardNumberChange?.(value);
  };

  const formatCardNumber = (num: string) => {
    return num.replace(/(\d{4})/g, "$1 ").trim();
  };

  return (
    <div className={cn("w-full max-w-md overflow-hidden rounded-xl shadow-lg border border-primary/20", className)}>
      <div className="relative bg-gradient-to-b from-background to-emerald-600/30 px-1 sm:px-3 py-4  shadow-md">
        <div className="flex items-center justify-between">
          <button className="text-muted-foreground hover:text-foreground transition-colors border border-primary/20 rounded-md p-2 cursor-pointer" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-foreground text-lg font-medium">{title || "Complete Payment"}</h1>
          <div className="w-6" />
        </div>


        <div className="mt-8 mb-4">
          <div className="relative h-40">
            <div className="absolute top-6 left-0 right-0 h-32 bg-primary/5 rounded-xl backdrop-blur-sm" />
            <div className="absolute top-7 left-0 right-0 h-32 bg-primary/7 rounded-xl backdrop-blur-sm" />
            <div className="absolute top-8 left-0 right-0 bg-white rounded-xl px-4 py-2 shadow-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-black mb-1">Payble amount:</p>
                  <h2 className="text-3xl font-mono text-black border-b border-gray-300">
                    {itemAmount || 320}.<span className="text-sm font-medium ml-0.5 pt-3">00</span>
                    <span className="text-sm font-medium ml-0.5 pt-3">{currency || "$"}</span>
                  </h2>
                </div>
                <span className="text-sm font-medium text-black">{brandName || ""}</span>
              </div>

              <div className="space-y-2">
          <label className="text-sm font-medium text-black flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-black" />
            Enter Card Number
          </label>
          <div className="relative">
            <Input
              type="text"
              value={formatCardNumber(inputValue)}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 text-primary font-mono  focus:outline-none focus:ring-0 focus:border-none" 
              maxLength={19}
            />
          </div>
        </div>

              <p className="text-xs text-black mt-3 flex gap-2 items-center justify-center">
                <Info className="w-3 h-3 text-black" />
               {infoBottom || "Per day can increase the amount"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-2 sm:p-6 space-y-6 pt-4">
        <section className="pt-8 ">
          <h3 className="text-base font-medium text-foreground mb-4 border-b border-primary/20 pb-0.5">Purchases</h3>
          <div className="rounded-lg border border-primary/20 flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-muted-foreground" />
              <span className="text-md font-medium text-foreground">
                {item || "Item"}
              </span>
            </div>
            <span className="text-base font-mono text-foreground border-b border-b-gray-200">
            {itemAmount || 320}.<span className="text-sm font-medium  pt-3 text-muted-foreground">00</span>
            <span className="text-sm font-medium ml-0.5 pt-3 text-muted-foreground">{currency || "$"}</span>
            </span>
          </div>
        </section>
        
        <div className="w-full flex justify-center items-center">
            <Button 
            onClick={onPay}
            variant="outline" className="w-full">Pay now <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </div>
      </CardContent>
    </div>
  );
}

