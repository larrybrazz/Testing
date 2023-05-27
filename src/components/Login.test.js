import Login from "./Login";


test("Username input should be render", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/user/i);
    expect(userInputEl).toBeInTheDocument()
}) 