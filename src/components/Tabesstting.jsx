// import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BoutnsForms from "../components/BoutnsForms";
import FromAdd from "../components/FromAdd";
import Priceproduct from "../components/Priceproduct";
import { Form } from "react-router";
import GeneralSttings from "./GeneralSttings";
import StoreSettings from "./StoreSettings";
import LocalizationSetting from "./LocalizationSetting";

export function Tabesstting() {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <Tabs className=" w-full" defaultValue="General">
        <TabsList className="w-[50%] dark:bg-gray-800 mb-10">
          <TabsTrigger value="General">General</TabsTrigger>
          <TabsTrigger value="Store">Store</TabsTrigger>
          <TabsTrigger value="Localization">Localization</TabsTrigger>
          <TabsTrigger value="Products"> Products</TabsTrigger>
          <TabsTrigger value="Customers"> Customers</TabsTrigger>
        </TabsList>
        <TabsContent className="dark:bg-gray-800" value="General">
          <Card className="w-[100%] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>General Setting</CardTitle>
              <CardDescription>
                Make changes to your General here. Click save
              </CardDescription>
            </CardHeader>
            <CardContent className="w-[100%] grid-cols-12">
              <Form
                method="POST"
                encType="multipart/form-data"
                className="grid grid-cols-12 gap-4 md:gap-6"
              >
                <GeneralSttings />
              </Form>
            </CardContent>
            <CardFooter className="flex-row-reverse">
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent className="w-[100%]" value="Store">
          <Card className="w-[100%] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Store Settings</CardTitle>
              <CardDescription>
                Change your Store Settings here. After saving, you&apos;ll be
                logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid w-[100%] gap-6">
              <Form
                method="POST"
                encType="multipart/form-data"
                className="grid grid-cols-12 gap-4 md:gap-6"
              >
                <StoreSettings />
              </Form>
            </CardContent>
            <CardFooter className="flex-row-reverse">
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent className="w-[100%]" value="Localization">
          <Card className="w-[100%] dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Localization Settings</CardTitle>
              <CardDescription>
                Change your Localization Settings here. After saving
              </CardDescription>
            </CardHeader>
            <CardContent className="grid w-[100%] gap-6">
              <Form
                method="POST"
                encType="multipart/form-data"
                className="grid grid-cols-12 gap-4 md:gap-6"
              >
                <LocalizationSetting />
              </Form>
            </CardContent>
            <CardFooter className="flex-row-reverse">
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
