import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LOADING,
  SET_LANGUAGE,
  SET_ADDRESS_LIST,
  SET_CREDIT_CARDS,
  SET_ERROR,
  UPDATE_ADDRESS_LIST,
  DELETE_ADDRESS_LIST,
  UPDATE_RECEIPT_ADDRESS_LIST,
  DELETE_RECEIPT_ADDRESS_LIST,
  SET_RECEIPT_ADDRESS_LIST,
  DELETE_CARD,
  UPDATE_CARD,
  SET_ORDERS,
} from "../actions/clientAction";

const clientInitialState = {
  user: {},
  addressList: [],
  receiptAddresses: [
    {
      id: 1,
      title: "Ev Adresi",
      name: "Mehmet",
      surname: "Demir",
      phone: "05322547895",
      city: "Ankara",
      district: "Çankaya",
      neighborhood: "Kocatepe Mahallesi",
    },
    {
      id: 2,
      title: "İş Adresi",
      name: "Ayşe",
      surname: "Yılmaz",
      phone: "05347863210",
      city: "İstanbul",
      district: "Kadıköy",
      neighborhood: "Kozyatağı Mahallesi",
    },
    {
      id: 3,
      title: "Yazlık Adresi",
      name: "Ali",
      surname: "Kara",
      phone: "05356349210",
      city: "Muğla",
      district: "Marmaris",
      neighborhood: "Beldibi Mahallesi",
    },
  ],
  orders:[],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  loading: false,
  error: null,
};

const clientReducer = (state = clientInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    case SET_ROLES:
      return { ...state, roles: action.payload };

    case SET_THEME:
      return { ...state, theme: action.payload };

    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    case SET_ADDRESS_LIST:
      // Gelen veri array ise, addressList'i baştan al
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          addressList: action.payload, // Gelen array ile güncelle
        };
      }

      // Gelen veri object ise, mevcut listeye ekle
      if (typeof action.payload === "object") {
        // Yeni id oluşturuyoruz, son elemanın id'sini alıp +1 ekliyoruz
        const newId =
          state.addressList[state.addressList.length - 1]?.id + 1 || 1;

        return {
          ...state,
          addressList: [...state.addressList, { ...action.payload, id: newId }],
        };
      }

      return state;

    case UPDATE_ADDRESS_LIST:
      return {
        ...state,
        addressList: state.addressList.map(
          (address) =>
            address.id === action.payload.id
              ? { ...address, ...action.payload } // id'si aynı olan adresi güncelle
              : address // diğerlerini aynen bırak
        ),
      };
    case DELETE_ADDRESS_LIST:
      return {
        ...state,
        addressList: state.addressList.filter(
          (address) => address.id !== action.payload
        ),
      };

    case SET_RECEIPT_ADDRESS_LIST:
      // If the received data is an array, reset the receiptAddresses list
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          receiptAddresses: action.payload, // Update with the received array
        };
      }

      // If the received data is an object, add it to the existing list
      if (typeof action.payload === "object") {
        // Generate a new ID by taking the last ID and adding 1
        const newId =
          state.receiptAddresses[state.receiptAddresses.length - 1]?.id + 1 ||
          1;

        return {
          ...state,
          receiptAddresses: [
            ...state.receiptAddresses,
            { ...action.payload, id: newId },
          ],
        };
      }

      return state;

    // Updating an existing receipt address
    case UPDATE_RECEIPT_ADDRESS_LIST:
      return {
        ...state,
        receiptAddresses: state.receiptAddresses.map(
          (address) =>
            address.id === action.payload.id
              ? { ...address, ...action.payload } // Update address with matching ID
              : address // Keep other addresses unchanged
        ),
      };

    // Deleting a receipt address by ID
    case DELETE_RECEIPT_ADDRESS_LIST:
      return {
        ...state,
        receiptAddresses: state.receiptAddresses.filter(
          (address) => address.id !== action.payload
        ),
      };
    case SET_CREDIT_CARDS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          creditCards: action.payload, // Gelen array ile güncelle
        };
      }

      // Gelen veri object ise, mevcut listeye ekle
      if (typeof action.payload === "object") {
        // Yeni id oluşturuyoruz, son elemanın id'sini alıp +1 ekliyoruz
        const newId =
          state.creditCards[state.creditCards.length - 1]?.id + 1 || 1;

        return {
          ...state,
          creditCards: [...state.creditCards, { ...action.payload, id: newId }],
        };
      }

      return state;

      case DELETE_CARD:
        return {
          ...state,
          creditCards: state.creditCards.filter(
            (card) => card.id !== action.payload
          ),
        };

      case UPDATE_CARD:
        return {
          ...state,
          creditCards: state.creditCards.map(
            (card) =>
              card.id === action.payload.id
                ? { ...card, ...action.payload } // id'si aynı olan adresi güncelle
                : card // diğerlerini aynen bırak
          ),
        };



        case SET_ORDERS:
          // Gelen veri array ise, addressList'i baştan al
          if (Array.isArray(action.payload)) {
            return {
              ...state,
              orders: action.payload, // Gelen array ile güncelle
            };
          }
    
          // Gelen veri object ise, mevcut listeye ekle
          if (typeof action.payload === "object") {
            // Yeni id oluşturuyoruz, son elemanın id'sini alıp +1 ekliyoruz
            const newId =
              state.orders[state.addressList.length - 1]?.id + 1 || 1;
    
            return {
              ...state,
              orders: [...state.orders, { ...action.payload, id: newId }],
            };
          }
    
          return state;
    default:
      return state;
     
  
  }
};

export default clientReducer;
