import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./modules/auth/SignIn/SignIn";
import SignUp from "./modules/auth/SignUp/SignUp";

const main = () => {
  return (
    <div className="w-[500px] m-auto flex justify-center h-[100vh] items-center">
      <Tabs defaultValue="SignIn">
        <TabsList>
          <TabsTrigger value="SignIn">SignIn</TabsTrigger>
          <TabsTrigger value="SignUp">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="SignIn">
          <SignIn />
        </TabsContent>
        <TabsContent value="SignUp">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default main;
