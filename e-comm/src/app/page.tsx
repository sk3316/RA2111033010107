"use client"
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



export default function Home() {
  return (
    <main className = "px-6 ">
    <NavigationMenu className="grid grid-cols-8 gap-3">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Mobiles</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Laptops</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Televisions</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Desktops</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Tablets</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="search" placeholder="Search" />
    </div>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

</NavigationMenu>
<br/>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Sort" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">A-Z</SelectItem>
    <SelectItem value="dark">Relevance</SelectItem>
    <SelectItem value="system">Popularity</SelectItem>
    <SelectItem value="system">Low-High</SelectItem>
  </SelectContent>
</Select>

<br/>

<div className= "grid grid-cols-4 gap-4">
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>
<Card>
<Image
      src="/images/black-photo.jpg"
      width={4000}
      height={50}
      alt="Picture of the author"
    />
    <br/>
  <CardFooter>
  <Button variant="outline">Add to cart</Button>
    &nbsp;
  <Drawer>
  <DrawerTrigger><Button variant="outline">Buy</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Buy the product</DrawerTitle>
      {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
      <Button>Proceed</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  </CardFooter>
</Card>


</div>

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

<Card>
  
  <CardFooter>
    <p className = "text-center align-center justify-center">Card Footer</p>
  </CardFooter>
</Card>

    </main>
    

  );
}
