import { render } from "@react-email/render";
import { Hr } from "./index";

describe("<Hr> component", () => {
  it("passes styles and other props correctly", async () => {
    const style = {
      width: "50%",
      borderColor: "black",
    };
    const html = await render(<Hr data-testid="hr-test" style={style} />);
    expect(html).toContain("width:50%");
    expect(html).toContain("border-color:black");
    expect(html).toContain('data-testid="hr-test"');
  });

  it("renders correctly", async () => {
    const actualOutput = await render(<Hr />);
    expect(actualOutput).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><hr style=\\"width:100%;border:none;border-top:1px solid #eaeaea\\"/>"`,
    );
  });
});
