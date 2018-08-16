import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import fakeData from "./fakeData";

export default function() {
  const mock = new MockAdapter(axios);
  const data = new fakeData(3, 3).getAll();

  mock.onGet("https://mock.data.com/loadTodo").reply(function(config) {
    return [200, data];
  });
}
