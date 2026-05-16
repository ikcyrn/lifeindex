import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>shadcn/ui is working</CardTitle>
          <CardDescription>
            This card is rendered from the shared workspace UI package.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If this looks styled and centered, your monorepo setup is wired
            correctly.
          </p>
        </CardContent>
        <CardFooter className="justify-end">
          <Button>Verification</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
