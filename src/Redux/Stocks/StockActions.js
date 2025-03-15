import axios from "axios";
import {
  FETCH_STOCK_LIST_REQUEST,
  FETCH_STOCK_LIST_SUCCESS,
  FETCH_STOCK_LIST_FAILURE,
  FETCH_MARKET_CHART_REQUEST,
  FETCH_MARKET_CHART_SUCCESS,
  FETCH_MARKET_CHART_FAILURE,
  FETCH_STOCK_BY_SYMBOL_REQUEST,
  FETCH_STOCK_BY_SYMBOL_SUCCESS,
  FETCH_STOCK_BY_SYMBOL_FAILURE,
  FETCH_TOP_50_STOCKS_REQUEST,
  FETCH_TOP_50_STOCKS_SUCCESS,
  FETCH_TOP_50_STOCKS_FAILURE,
  SEARCH_STOCK_REQUEST,
  SEARCH_STOCK_SUCCESS,
  SEARCH_STOCK_FAILURE,
} from "./ActionTypes";
import api, { API_BASE_URL } from "@/Api/api";

/**
 * Fetch stock list (paginated)
 */
export const fetchStockList = (page) => async (dispatch) => {
  dispatch({ type: FETCH_STOCK_LIST_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks?page=${page}`);
    dispatch({ type: FETCH_STOCK_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_STOCK_LIST_FAILURE, payload: error.message });
  }
};

/**
 * Fetch top 50 stocks
 */
export const getTop50StockList = () => async (dispatch) => {
  dispatch({ type: FETCH_TOP_50_STOCKS_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks/top50`);
    dispatch({ type: FETCH_TOP_50_STOCKS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_TOP_50_STOCKS_FAILURE, payload: error.message });
  }
};

/**
 * Fetch market chart data for a stock
 */
export const fetchStockMarketChart = ({ stockSymbol, days, jwt }) => async (dispatch) => {
  dispatch({ type: FETCH_MARKET_CHART_REQUEST });
  try {
    const response = await api.get(`/stocks/${stockSymbol}/chart?days=${days}`, {
      headers: { Authorization: `Bearer ${jwt}` }
    });
    dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
  }
};

/**
 * Fetch stock by symbol
 */
export const fetchStockBySymbol = (stockSymbol) => async (dispatch) => {
  dispatch({ type: FETCH_STOCK_BY_SYMBOL_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks/${stockSymbol}`);
    dispatch({ type: FETCH_STOCK_BY_SYMBOL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_STOCK_BY_SYMBOL_FAILURE, payload: error.message });
  }
};

/**
 * Search for stocks
 */
export const searchStock = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_STOCK_REQUEST });
  try {
    const response = await api.get(`/stocks/search?q=${keyword}`);
    dispatch({ type: SEARCH_STOCK_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SEARCH_STOCK_FAILURE, payload: error.message });
  }
};
