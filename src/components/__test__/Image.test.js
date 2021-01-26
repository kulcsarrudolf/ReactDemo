import Image from "../Image";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const normalUser = {
  name: "Test User",
  isLogged: true,
  isPremiumUser: false,
};

const premiumUser = {
  name: "Premium User",
  isLogged: true,
  isPremiumUser: true,
};

const testImage = {
  id: "1005",
  author: "Matthew Wiebe",
  width: 5760,
  height: 3840,
  url: "https://unsplash.com/photos/tBtuxtLvAZs",
  download_url: "https://picsum.photos/id/1005/5760/3840",
};

test("Download button is disabled", async () => {
  const { getByText } = render(<Image image={testImage} user={normalUser} />);
  const downloadButton = getByText(/Download/i).closest("button");

  expect(downloadButton).toBeDisabled();
});

test("Download button is enabled", async () => {
  const { getByText } = render(<Image image={testImage} user={premiumUser} />);
  const downloadButton = getByText(/Download/i).closest("button");

  expect(downloadButton).toBeEnabled();
});
