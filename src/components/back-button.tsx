"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Button
      variant="outline"
      onClick={() => window.history.back()}
      className="border-white text-white hover:bg-white hover:text-black"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Go Back
    </Button>
  );
} 