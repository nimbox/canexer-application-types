export type Upload = any;
export type LocalDateTime = any;
export type Instant = any;
export type URL = any;
export type LocalDate = any;
export interface Contact extends Local {
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    comment: string;
    displayName: string;
    position: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    emails: ContactEmail;
    networks: ContactNetwork;
    addresses: ContactAddress;
    locations: ContactLocation;
    anniversaries: ContactAnniversary;
    customers: Customer;
    representatives: Representative;
    phones: ContactPhone;
    urls: ContactUrl;
}
export interface Local {
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    createdBy: User;
    updatedBy: User;
}
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface Organization extends Contact, Local {
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    comment: string;
    displayName: string;
    position: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface UnitListDetail extends Local {
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ReceivableReconciliationDetail extends Local {
    meta: string;
    originalCurrency: string;
    originalRate: number;
    comment: string;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    entry: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    reconciliation: ReceivableReconciliation;
    receivable: ReceivableDocument;
}
export interface TagDetail extends Local {
    tagId: number;
    taggableId: number;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count: number;
    dueDaysClass: number;
    debits: number;
    credits: number;
}
export interface SaleDocumentDetail extends Local {
    productId: number;
    price: number;
    unit: string;
    meta: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    comment: string;
    displayLine: number;
    discount: number;
    tax: number;
    profit: number;
    saleTotal: number;
    originalDiscount: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    saleDocumentId: number;
    warehouseId: number;
    item: string;
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
    entry: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ReceivablePendingByDate {
    date: LocalDate;
    total: ReceivablePendingByEntry;
    past: ReceivablePendingByEntry;
    future: ReceivablePendingByEntry;
}
export interface Business extends Local {
    configuration: string;
    currency: string;
    boxId: number;
    taxId: string;
    provider: string;
    country: string;
    description: string;
    name: string;
    language: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface CreateContactResult {
    errors: UserError;
    contact: Contact;
}
export interface Country extends Local {
    code: string;
    name: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface Product extends Local {
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
    currency: string;
    comment: string;
    name: string;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ReceivableDocument extends Local {
    meta: string;
    meaning: string;
    issued: LocalDateTime;
    due: LocalDateTime;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    comment: string;
    entry: string;
    taxId: string;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    reconciliationDetails: ReceivableReconciliationDetail;
}
export interface MemberApplicationPermission extends Local {
    memberId: number;
    configuration: string;
    meta: string;
    applicationId: number;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface Unit extends Local {
    code: string;
    name: string;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface BoxApplicationBusinessPermission extends Local {
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    businessId: number;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivablesByDueDaysClassResult {
    pastDueDays: number;
    futureDueDays: number;
    data: PendingReceivablesByDueDaysClassResultData;
}
export interface UserError {
    code: string;
    name: string;
    value: string;
}
export interface ContactNetwork extends ContactElement, Local {
    provider: string;
    handle: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivableResultData {
    contactDisplayName: string;
    customerName: string;
    customerRepresentativeId: number;
    customerId: number;
    dueDaysClass: number;
    debits: number;
    credits: number;
    dueDays: number;
    contactId: number;
}
export interface ReceivablePending {
    pending: number;
    count: number;
    dueDays: number;
}
export interface Tag extends Local {
    meaning: string;
    name: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivablesResultData {
    past: PendingReceivablesResultDataGroup;
    future: PendingReceivablesResultDataGroup;
    count: number;
    debits: number;
    credits: number;
    net: number;
    dueDays: number;
}
export interface Application extends Local {
    configuration: string;
    meta: string;
    name: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface Currency extends Local {
    code: string;
    name: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ContactAnniversary extends ContactElement, Local {
    month: number;
    day: number;
    year: number;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivablesResultDataGroup {
    count: number;
    debits: number;
    credits: number;
    net: number;
    dueDays: number;
}
export interface Representative extends Local {
    meta: string;
    taxId: string;
    comment: string;
    name: string;
    contactId: number;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface UnitList extends Local {
    baseUnit: string;
    name: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface MemberApplicationBusinessPermission extends Local {
    memberId: number;
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface User extends Local {
    locale: string;
    firstName: string;
    lastName: string;
    uid: string;
    blocked: Instant;
    zone: string;
    avatarInitials: string;
    avatarColor: string;
    avatarX: number;
    avatarY: number;
    avatarSize: number;
    emailAddress: string;
    emailAddressVerified: Instant;
    phoneNumber: string;
    phoneNumberVerified: Instant;
    handle: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    avatarOriginal: URL;
    avatar: URL;
}
export interface Customer extends Local {
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    meta: string;
    taxId: string;
    comment: string;
    name: string;
    contactId: number;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    invoices: SaleDocument;
    sales: SaleDocument;
    receivables: ReceivableDocument;
}
export interface BoxApplicationPermission extends Local {
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface Person extends Contact, Local {
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    comment: string;
    displayName: string;
    position: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ReceivablePendingByEntry {
    debits: ReceivablePending;
    credits: ReceivablePending;
}
export interface Stock extends Local {
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivablesResult {
    data: PendingReceivablesResultData;
}
export interface CreateUpdateUserResult {
    user: User;
    errors: UserError;
}
export interface Member extends Local {
    userId: number;
    role: string;
    boxId: number;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivableResult {
    representatives: Representative;
    data: PendingReceivableResultData;
}
export interface PriceListDetail extends Local {
    priceListId: number;
    productId: number;
    price: number;
    currency: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PendingReceivablesHistoryResult {
    now: LocalDate;
    data: ReceivablePendingByDate;
}
export interface Warehouse extends Local {
    meta: string;
    comment: string;
    name: string;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface Box extends Local {
    configuration: string;
    token: string;
    currency: string;
    country: string;
    name: string;
    language: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    applications: Application;
}
export interface ReceivableReconciliation extends Local {
    meta: string;
    issued: LocalDateTime;
    comment: string;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    details: ReceivableReconciliationDetail;
}
export interface PriceListUnitDetail extends Local {
    priceListId: number;
    productId: number;
    price: number;
    unit: string;
    currency: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface PriceList extends Local {
    meta: string;
    comment: string;
    name: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface SaleDocument extends Local {
    representativeId: number;
    meta: string;
    taxId: string;
    customerId: number;
    meaning: string;
    issued: LocalDateTime;
    due: LocalDateTime;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    comment: string;
    payment: string;
    required: LocalDateTime;
    shipped: LocalDateTime;
    delivered: LocalDateTime;
    subtotal: number;
    discount: number;
    expense: number;
    other: number;
    tax: number;
    profit: number;
    saleTotal: number;
    originalSubtotal: number;
    originalDiscount: number;
    originalExpense: number;
    originalOther: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    entry: string;
    displayMeaning: string;
    displayId: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
    receivable: ReceivableDocument;
}
export interface ContactAddress extends ContactElement, Local {
    country: string;
    reference: string;
    state: string;
    street: string;
    city: string;
    postal: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Instant;
    updatedOn: Instant;
    deletedOn: Instant;
    id: number;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput;
    update: ContactAnniversaryIdInput;
    delete: string;
}
export interface ContactPhoneInput {
    number: string;
    sequence: number;
    locus: string;
}
export interface ContactEmailInput {
    address: string;
    sequence: number;
    locus: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput;
    update: ContactPhoneIdInput;
    delete: string;
}
export interface ContactInput {
    organizationName: string;
    comment: string;
}
export interface CreateBusinessInput {
    currency: string;
    taxId: string;
    provider: string;
    country: string;
    description: string;
    name: string;
    language: string;
}
export interface UpdateBusinessInput {
    currency: string;
    taxId: string;
    provider: string;
    country: string;
    description: string;
    name: string;
    language: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput;
    update: ContactUrlIdInput;
    delete: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput;
    update: ContactAddressIdInput;
    delete: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: string;
}
export interface ContactFilterInput {
    search: string;
}
export interface ContactUrlInput {
    specification: string;
    sequence: number;
    locus: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: string;
}
export interface ContactNetworkInput {
    provider: string;
    handle: string;
    sequence: number;
    locus: string;
}
export interface ContactLocationInput {
    latitude: number;
    longitude: number;
    sequence: number;
    locus: string;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: string;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput;
    update: ContactLocationIdInput;
    delete: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: string;
}
export interface ReceivableDocumentFilterInput {
    pending: Boolean;
    entry: string;
    remoteSource: string;
}
export interface ContactAnniversaryInput {
    month: number;
    day: number;
    year: number;
    sequence: number;
    locus: string;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput;
    update: ContactEmailIdInput;
    delete: string;
}
export interface ContactAddressInput {
    country: string;
    reference: string;
    state: string;
    street: string;
    city: string;
    postal: string;
    sequence: number;
    locus: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput;
    update: ContactNetworkIdInput;
    delete: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: string;
}
export interface UpdateSelfInput {
    locale: string;
    firstName: string;
    lastName: string;
    avatarOriginal: Upload;
    uid: string;
    password: string;
    zone: string;
    avatarInitials: string;
    avatarColor: string;
    avatarX: number;
    avatarY: number;
    avatarSize: number;
    emailAddress: string;
    phoneNumber: string;
    handle: string;
}
