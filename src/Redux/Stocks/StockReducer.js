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
    FETCH_TOP_50_STOCKS_SUCCESS,
    SEARCH_STOCK_SUCCESS,
    SEARCH_STOCK_FAILURE,
    SEARCH_STOCK_REQUEST,
    FETCH_TOP_50_STOCKS_REQUEST,
    FETCH_TOP_50_STOCKS_FAILURE,
  } from "./ActionTypes";
  
  const initialState = {
    stockList: [],
    top50: [],
    searchStockList: [],
    marketChart: { data: [], loading: false },
    stockBySymbol: null,
    loading: false,
    error: null,
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STOCK_LIST_REQUEST:
      case FETCH_STOCK_BY_SYMBOL_REQUEST:
      case SEARCH_STOCK_REQUEST:
      case FETCH_TOP_50_STOCKS_REQUEST:
        return { ...state, loading: true, error: null };
  
      case FETCH_MARKET_CHART_REQUEST:
        return {
          ...state,
          marketChart: { loading: true, data: [] },
          error: null,
        };
  
      case FETCH_STOCK_LIST_SUCCESS:
        return {
          ...state,
          stockList: action.payload,
          loading: false,
          error: null,
        };
  
      case FETCH_TOP_50_STOCKS_SUCCESS:
        return {
          ...state,
          top50: action.payload,
          loading: false,
          error: null,
        };
  
      case FETCH_MARKET_CHART_SUCCESS:
        return {
          ...state,
          marketChart: { data: action.payload.prices, loading: false },
          error: null,
        };
  
      case FETCH_STOCK_BY_SYMBOL_SUCCESS:
        return {
          ...state,
          stockBySymbol: action.payload,
          loading: false,
          error: null,
        };
  
      case SEARCH_STOCK_SUCCESS:
        return {
          ...state,
          searchStockList: action.payload.stocks,
          loading: false,
          error: null,
        };
  
      case FETCH_MARKET_CHART_FAILURE:
        return {
          ...state,
          marketChart: { loading: false, data: [] },
          error: action.payload,
        };
  
      case FETCH_STOCK_LIST_FAILURE:
      case SEARCH_STOCK_FAILURE:
      case FETCH_STOCK_BY_SYMBOL_FAILURE:
      case FETCH_TOP_50_STOCKS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default stockReducer;
  