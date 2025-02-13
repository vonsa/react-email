import { render } from "@react-email/render";
import { Html } from "./index";

describe("<Html> component", () => {
  it("renders children correctly", async () => {
    const testMessage = "Test message";
    const html = await render(<Html>{testMessage}</Html>);
    expect(html).toContain(testMessage);
  });

  it("passes props correctly", async () => {
    const html = await render(
      <Html data-testid="html-test" dir="rtl" lang="fr" />,
    );
    expect(html).toContain('lang="fr"');
    expect(html).toContain('dir="rtl"');
    expect(html).toContain('data-testid="html-test"');
  });

  it("renders correctly", async () => {
    const actualOutput = await render(<Html />);
    expect(actualOutput).toMatchInlineSnapshot(
      '"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><html dir=\\"ltr\\" lang=\\"en\\"><head></head></html>"',
    );
  });
});
