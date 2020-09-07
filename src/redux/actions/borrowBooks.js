import { createAsyncAction } from "redux-promise-middleware-actions";
import { getBorrowBookAPI, postBorrowBookAPI, deleteBorrowBookAPI } from "../../utils/borrowBooks";

export const getBorrowBookAPICreator = createAsyncAction("GETBORROW", async () => {
  const res = await getBorrowBookAPI();
  return res.data;
});

export const postBorrowBookAPICreator = createAsyncAction(
  "POSTBORROW",
  async (body) => {
    const res = await postBorrowBookAPI(body);
    return res.data;
  }
);

export const deleteBorrowBookAPICreator = createAsyncAction(
  "DELETEBORROW",
  async (id) => {
    const res = await deleteBorrowBookAPI(id);
    return res.data;
  }
);