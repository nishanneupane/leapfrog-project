import axios from "axios";
import { fetchFromAPI } from "./fetchFromAPI";

// Mock axios module
jest.mock("axios");

describe("fetchFromAPI", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should return JSON data on a successful fetch", async () => {
    // Mock data to be returned by axios
    const mockData = { items: [{ id: 1, title: "Test Video" }] };

    // Mock the axios.get method to return a resolved promise with mockData
    axios.get.mockResolvedValueOnce({ data: mockData });

    // Call fetchFromAPI and verify the result
    const data = await fetchFromAPI("videos");
    expect(data).toEqual(mockData);
  });
});
