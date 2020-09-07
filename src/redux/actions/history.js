import { createAsyncAction } from "redux-promise-middleware-actions";
// import axios from "axios";
import { getHistoryAPI, postHistoryAPI } from "../../utils/history";

export const historyAPICreator = createAsyncAction("GETHISTORY", async () => {
  const res = await getHistoryAPI();
  return res.data;
});

export const postHistoryAPICreator = createAsyncAction(
  "POSTHISTORY",
  async (body) => {
    const res = await postHistoryAPI(body);
    return res.data;
  }
);
