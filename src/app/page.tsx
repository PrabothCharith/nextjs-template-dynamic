"use client";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button, ButtonGroup, Select, SelectItem } from "@heroui/react";
import { example } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {

  const {theme, setTheme} = useTheme();

  const fetchData = useQuery({
    queryKey: ['exampleData'],
    queryFn: async () => {
      const response = await fetch('/api/example');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  const [drawer, setDrawer] = useState<{
    isOpen: boolean,
    data: example | null
  }>({
    isOpen: false,
    data: null
  });

  if (fetchData.isLoading) {
    return <div className="h-screen w-full flex items-center justify-center"><Loader className="rotate animate-spin" /></div>;
  }

  return (
    <div className={`${drawer.isOpen && 'scale-95'} transition-transform duration-300 ease-in-out`}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Example Page</h1>

        <Select
          className="fixed top-4 right-4 w-40"
          value={theme}
          onChange={(event) => setTheme((event.target as HTMLSelectElement).value as 'system' | 'dark' | 'light')}
          defaultSelectedKeys={theme ? [theme] : []}
        >
          <SelectItem key='system'>System</SelectItem>
          <SelectItem key='dark'>Dark</SelectItem>
          <SelectItem key='light'>Light</SelectItem>
        </Select>
        
        <p className="mb-4">Select an item to view more details:</p>
        <ButtonGroup>
          {fetchData.data?.map((item: example) => (
            <Button
              key={item.id}
              onPress={() => setDrawer({ isOpen: true, data: item })}
            >
              {item.name}
            </Button>
          ))}
        </ButtonGroup>

        <Drawer open={drawer.isOpen} onOpenChange={(open) => setDrawer({ ...drawer, isOpen: open })}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Example Data</DrawerTitle>
              <DrawerDescription>Here is the data fetched from the API.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              {drawer.data && (
                <div>
                  <h2 className="text-lg font-bold">{drawer.data.name}</h2>
                  <p>{drawer.data.email}</p>
                </div>
              )}
            </div>
            <DrawerFooter>
              <Button variant="bordered" onPress={() => setDrawer({ ...drawer, isOpen: false })}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

      </div>

    </div>
  );
}
