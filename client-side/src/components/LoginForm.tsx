import {
  Button,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, ICredentials } from "../services/authService";

export const AuthenticationForm = (props: PaperProps) => {
  const type = "login"; // Hardcoded for now, can be changed later
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      password: (val) =>
        val.length <= 5
          ? "Password should include at least 5 characters"
          : null,
    },
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (cred: ICredentials) => {
      return login(cred);
    },
    onSuccess: (data: string) => {
      localStorage.setItem("jwtToken", data); // Store JWT token in local storage
      navigate("/home"); // Redirect user after successful login
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Sensivo Hub, {type} with
      </Text>

      <form
        onSubmit={form.onSubmit(() => {
          mutation.mutate({
            username: form.values.username,
            password: form.values.password,
          });
        })}>
        <Stack>
          <TextInput
            label="Username"
            required
            placeholder="Your username"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 5 characters"
            }
            radius="md"
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
