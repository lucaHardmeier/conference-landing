export interface OrderForm {
  id: string;
  items: Item[];
  value: number;
  totalizers: Totalizer[];
  marketingData: MarketingData;
  canEditData: boolean;
  loggedIn: boolean;
  paymentData: PaymentData;
  messages: Messages;
  shipping: Shipping;
  userProfileId: string;
  userType: string;
  clientProfileData: ClientProfileData;
  clientPreferencesData: ClientPreferencesData;
  allowManualPrice: boolean;
  customData: CustomData;
  __typename: string;
}

export interface ClientPreferencesData {
  locale: string;
  optInNewsletter: boolean;
  __typename: string;
}

export interface ClientProfileData {
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  documentType: string;
  phone: string;
  isValid: boolean;
  __typename: string;
}

export interface CustomData {
  customApps: CustomApp[];
  __typename: string;
}

export interface CustomApp {
  fields: Fields;
  id: string;
  major: number;
  __typename: string;
}

export interface Fields {
  direccionDeFacturacion: string;
  userInfo: string;
  atycArrayDocVersion: string;
  timerCheckout: string;
  vehiculosDatos: string;
  vehiculosForm: string;
}

export interface Item {
  additionalInfo: AdditionalInfo;
  attachments: any[];
  attachmentOfferings: any[];
  bundleItems: any[];
  parentAssemblyBinding: null;
  parentItemIndex: null;
  sellingPriceWithAssemblies: null;
  options: null;
  availability: string;
  detailUrl: string;
  id: string;
  imageUrls: ImageUrls;
  listPrice: number;
  manualPrice: null;
  measurementUnit: string;
  modalType: null;
  name: string;
  offerings: any[];
  price: number;
  priceTags: any[];
  productCategories: ProductCategories;
  productCategoryIds: string;
  productRefId: string;
  productId: string;
  quantity: number;
  seller: string;
  sellingPrice: number;
  skuName: string;
  skuSpecifications: SkuSpecification[];
  unitMultiplier: number;
  uniqueId: string;
  refId: null;
  isGift: boolean;
  priceDefinition: PriceDefinition;
  __typename: string;
}

export interface AdditionalInfo {
  brandName: string;
  __typename: string;
}

export interface ImageUrls {
  at1x: string;
  at2x: string;
  at3x: string;
  __typename: string;
}

export interface PriceDefinition {
  calculatedSellingPrice: number;
  total: number;
  sellingPrices: SellingPrice[];
  __typename: string;
}

export interface SellingPrice {
  quantity: number;
  value: number;
  __typename: string;
}

export interface ProductCategories {
  "1": string;
}

export interface SkuSpecification {
  fieldName: string;
  fieldValues: string[];
  __typename: string;
}

export interface MarketingData {
  coupon: string;
  utmCampaign: string;
  utmMedium: string;
  utmSource: string;
  utmiCampaign: string;
  utmiPart: string;
  utmiPage: string;
  __typename: string;
}

export interface Messages {
  couponMessages: any[];
  generalMessages: any[];
  __typename: string;
}

export interface PaymentData {
  paymentSystems: PaymentSystem[];
  payments: any[];
  installmentOptions: InstallmentOption[];
  availableAccounts: any[];
  isValid: boolean;
  __typename: string;
}

export interface InstallmentOption {
  paymentSystem: string;
  installments: any[];
  __typename: string;
}

export interface PaymentSystem {
  id: string;
  name: string;
  groupName: string;
  validator: Validator;
  stringId: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description: string;
  requiresAuthentication: boolean;
  dueDate: Date;
  __typename: string;
}

export interface Validator {
  regex: null;
  mask: null;
  cardCodeRegex: null;
  cardCodeMask: null;
  weights: null;
  useCvv: boolean;
  useExpirationDate: boolean;
  useCardHolderName: boolean;
  useBillingAddress: boolean;
  __typename: string;
}

export interface Shipping {
  countries: Country[];
  availableAddresses: Address[];
  selectedAddress: Address;
  deliveryOptions: any[];
  pickupOptions: PickupOption[];
  isValid: boolean;
  __typename: string;
}

export interface Address {
  addressId: string;
  addressType: AddressType;
  city: City;
  complement: Complement;
  country: Country;
  neighborhood: Neighborhood;
  number: string;
  postalCode: string;
  receiverName: null;
  reference: null;
  state: State;
  street: Street;
  isDisposable: boolean;
  geoCoordinates: number[];
  __typename: Typename;
}

export enum Typename {
  Address = "Address",
}

export enum AddressType {
  Pickup = "pickup",
  Search = "search",
}

export enum City {
  Santiago = "Santiago",
}

export enum Complement {
  Piso16 = "Piso 16",
}

export enum Country {
  Chl = "CHL",
}

export enum Neighborhood {
  LasCondes = "Las Condes",
}

export enum State {
  RegiónMetropolitana = "Región Metropolitana",
}

export enum Street {
  AvenidaApoquindo = "Avenida Apoquindo",
}

export interface PickupOption {
  id: string;
  address: Address;
  deliveryChannel: string;
  price: number;
  estimate: string;
  isSelected: boolean;
  friendlyName: string;
  additionalInfo: string;
  storeDistance: number;
  transitTime: string;
  businessHours: BusinessHour[];
  __typename: string;
}

export interface BusinessHour {
  dayNumber: string;
  closed: boolean;
  closingTime: string;
  openingTime: string;
  __typename: string;
}

export interface Totalizer {
  id: string;
  name: string;
  value: number;
  __typename: string;
}
