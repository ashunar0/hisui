import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Stack } from "@/components/ui/stack";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card.Root className="w-full max-w-sm">
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
          <Card.Description>
            Fill in the form below to create an account
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack className="w-full">
            <Field.Root>
              <Field.Label>First Name</Field.Label>
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Last Name</Field.Label>
              <Input />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer className="justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Sign in</Button>
        </Card.Footer>
      </Card.Root>
    </main>
  );
}

export default App;
