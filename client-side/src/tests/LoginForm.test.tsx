import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import "@testing-library/jest-dom";

jest.mock("../services/authService");

// const mockedLogin = jest.mocked(authService.login);
const mockedLogin = jest.fn();

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("LoginForm", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("renders form fields and login button", () => {
    renderWithRouter(<LoginForm />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows validation error for short password", async () => {
    renderWithRouter(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/password should include at least 5 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("calls login service and stores token on success", async () => {
    mockedLogin.mockResolvedValue("fake-jwt-token");

    renderWithRouter(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockedLogin).toHaveBeenCalledWith({
        username: "testuser",
        password: "123456",
      });

      expect(localStorage.getItem("jwtToken")).toBe("fake-jwt-token");
    });
  });

  it("shows alert on login failure", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    mockedLogin.mockRejectedValue({ message: "Invalid credentials" });

    renderWithRouter(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpass" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Invalid credentials");
    });
  });
});
