export type ID = string;
export type URL = string;
export type Instant = Date;
export type LocalDate = Date;
export type Upload = any;
export type LocalDateTime = Date;
export interface Contact extends Local {
    comment: string;
    displayName: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    position: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    urls: ContactUrl[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
}
export interface Local {
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    createdBy: User;
    updatedBy: User;
}
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesByDueDaysClassResult {
    pastDueDays: number[];
    futureDueDays: number[];
    data: PendingReceivablesByDueDaysClassResultData[];
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Currency extends Local {
    name: string;
    code: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Application extends Local {
    name: string;
    configuration: string;
    meta: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Member extends Local {
    userId: number;
    role: string;
    boxId: number;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    unit: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Business extends Local {
    name: string;
    language: string;
    provider: string;
    country: string;
    currency: string;
    description: string;
    configuration: string;
    boxId: number;
    taxId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Country extends Local {
    name: string;
    code: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PriceListDetail extends Local {
    currency: string;
    priceListId: number;
    productId: number;
    price: number;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    issued: Date;
    meta: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    details: ReceivableReconciliationDetail[];
}
export interface Tag extends Local {
    name: string;
    meaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivableDocument extends Local {
    entry: string;
    comment: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    meta: string;
    taxId: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    reconciliationDetails: ReceivableReconciliationDetail[];
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface TagDetail extends Local {
    tagId: number;
    taggableId: number;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivableReconciliationDetail extends Local {
    entry: string;
    comment: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    reconciliation: ReceivableReconciliation;
    receivable: ReceivableDocument;
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    position: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PriceList extends Local {
    name: string;
    comment: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesResult {
    data: PendingReceivablesResultData;
}
export interface ReceivablePendingByDate {
    date: Date;
    total: ReceivablePendingByEntry;
    past: ReceivablePendingByEntry;
    future: ReceivablePendingByEntry;
}
export interface PendingReceivableResultData {
    customerId: ID;
    dueDaysClass: number;
    contactDisplayName: string;
    customerName: string;
    customerRepresentativeId: ID;
    dueDays: number;
    debits: number;
    credits: number;
    contactId: ID;
}
export interface Person extends Contact, Local {
    comment: string;
    displayName: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    position: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivablePending {
    count: number;
    pending: number;
    dueDays: number;
}
export interface MemberApplicationBusinessPermission extends Local {
    memberId: number;
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface CreateUpdateUserResult {
    errors: UserError[];
    user: User;
}
export interface PendingReceivablesHistoryResult {
    now: Date;
    data: ReceivablePendingByDate[];
}
export interface SaleDocument extends Local {
    entry: string;
    comment: string;
    profit: number;
    representativeId: number;
    customerId: number;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    saleTotal: number;
    payment: string;
    required: Date;
    shipped: Date;
    delivered: Date;
    subtotal: number;
    discount: number;
    expense: number;
    other: number;
    tax: number;
    originalSubtotal: number;
    originalDiscount: number;
    originalExpense: number;
    originalOther: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    meta: string;
    taxId: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    receivable: ReceivableDocument;
}
export interface CreateContactResult {
    errors: UserError[];
    contact: Contact;
}
export interface Product extends Local {
    name: string;
    comment: string;
    currency: string;
    price: number;
    unit: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    meta: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Box extends Local {
    name: string;
    language: string;
    country: string;
    currency: string;
    configuration: string;
    token: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    applications: Application[];
}
export interface PendingReceivablesResultDataGroup {
    count: number;
    dueDays: number;
    debits: number;
    credits: number;
    net: number;
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    comment: string;
    item: string;
    profit: number;
    productId: number;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    displayLine: number;
    saleTotal: number;
    discount: number;
    tax: number;
    originalDiscount: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    saleDocumentId: number;
    warehouseId: number;
    displayQuantity: number;
    displayUnit: string;
    displayFactor: number;
    displayCurrency: string;
    displayRate: number;
    displayPrice: number;
    quantity: number;
    salePrice: number;
    originalPrice: number;
    originalSalePrice: number;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface BoxApplicationBusinessPermission extends Local {
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    businessId: number;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface User extends Local {
    handle: string;
    locale: string;
    zone: string;
    firstName: string;
    lastName: string;
    uid: string;
    blocked: Date;
    avatarInitials: string;
    avatarColor: string;
    avatarX: number;
    avatarY: number;
    avatarSize: number;
    emailAddress: string;
    emailAddressVerified: Date;
    phoneNumber: string;
    phoneNumberVerified: Date;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    avatar: string;
    avatarOriginal: string;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactAddress extends ContactElement, Local {
    reference: string;
    state: string;
    country: string;
    street: string;
    postal: string;
    city: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Customer extends Local {
    name: string;
    comment: string;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    meta: string;
    taxId: string;
    contactId: number;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    invoices: SaleDocument[];
    sales: SaleDocument[];
    receivables: ReceivableDocument[];
}
export interface PendingReceivablesResultData {
    past: PendingReceivablesResultDataGroup;
    future: PendingReceivablesResultDataGroup;
    count: number;
    dueDays: number;
    debits: number;
    credits: number;
    net: number;
}
export interface UnitListDetail extends Local {
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactAnniversary extends ContactElement, Local {
    year: number;
    month: number;
    day: number;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Unit extends Local {
    name: string;
    code: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface UserError {
    name: string;
    value: string;
    code: string;
}
export interface Representative extends Local {
    name: string;
    comment: string;
    meta: string;
    taxId: string;
    contactId: number;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivablePendingByEntry {
    debits: ReceivablePending;
    credits: ReceivablePending;
}
export interface Warehouse extends Local {
    name: string;
    comment: string;
    meta: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface MemberApplicationPermission extends Local {
    memberId: number;
    configuration: string;
    meta: string;
    applicationId: number;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivableResult {
    representatives: Representative[];
    data: PendingReceivableResultData[];
}
export interface BoxApplicationPermission extends Local {
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count: number;
    dueDaysClass: number;
    debits: number;
    credits: number;
}
export interface Stock extends Local {
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactEmailInput {
    address: string;
    sequence: number;
    locus: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactUrlInput {
    specification: string;
    sequence: number;
    locus: string;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactInput {
    comment: string;
    organizationName: string;
}
export interface ContactFilterInput {
    search: string;
}
export interface ContactLocationInput {
    latitude: number;
    longitude: number;
    sequence: number;
    locus: string;
}
export interface UpdateBusinessInput {
    name: string;
    language: string;
    provider: string;
    country: string;
    currency: string;
    description: string;
    taxId: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface UpdateSelfInput {
    handle: string;
    locale: string;
    zone: string;
    firstName: string;
    lastName: string;
    uid: string;
    password: string;
    avatarInitials: string;
    avatarColor: string;
    avatarX: number;
    avatarY: number;
    avatarSize: number;
    emailAddress: string;
    phoneNumber: string;
    avatarOriginal: Upload;
}
export interface ContactPhoneInput {
    number: string;
    sequence: number;
    locus: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryInput {
    year: number;
    month: number;
    day: number;
    sequence: number;
    locus: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ReceivableDocumentFilterInput {
    entry: string;
    pending: Boolean;
    remoteSource: string;
}
export interface ContactAddressInput {
    reference: string;
    state: string;
    country: string;
    street: string;
    postal: string;
    city: string;
    sequence: number;
    locus: string;
}
export interface CreateBusinessInput {
    name: string;
    language: string;
    provider: string;
    country: string;
    currency: string;
    description: string;
    taxId: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactNetworkInput {
    handle: string;
    provider: string;
    sequence: number;
    locus: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
