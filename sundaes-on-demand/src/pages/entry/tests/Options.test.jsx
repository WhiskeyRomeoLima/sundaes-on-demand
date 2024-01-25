import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays images for scoop options from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display images for topping options from server", async () => {
  render(<Options optionType="toppings" />)

  //find images
  const toppingImages = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppingImages).toHaveLength(3)

  //confirm alt text of images
  //@ts-ignore
  const images = toppingImages.map((img) => img.alt)
  expect(images).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
}) 
