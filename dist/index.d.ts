export declare type ID = string;
export declare type Instant = Date;
export declare type LocalDate = Date;
export declare type LocalDateTime = Date;
export declare type URL = string;
export declare type Upload = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    kind: string;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Contact extends Local {
    comment: string;
    displayName: string;
    kind: string;
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    urls: ContactUrl[];
    phones: ContactPhone[];
    tags: Tag[];
    emails: ContactEmail[];
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    notes: Note[];
    customers: Customer[];
    representatives: Representative[];
}
export interface Local {
    id: ID;
    kind: string;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    createdBy: User;
    updatedBy: User;
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    kind: string;
    priceListId: number;
    productId: number;
    price: number;
    unit: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivableResultData {
    dueDays: number;
    debits: number;
    credits: number;
    contactDisplayName: string;
    customerName: string;
    customerRepresentativeId: ID;
    contactId: ID;
    customerId: ID;
    dueDaysClass: number;
}
export interface ContactLocation extends ContactElement, Local {
    kind: string;
    latitude: number;
    longitude: number;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivableReconciliationDetail extends Local {
    entry: string;
    comment: string;
    kind: string;
    meta: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    reconciliation: ReceivableReconciliation;
    receivable: ReceivableDocument;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Person extends Contact, Local {
    comment: string;
    displayName: string;
    kind: string;
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Warehouse extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Product extends Local {
    name: string;
    comment: string;
    currency: string;
    kind: string;
    meta: string;
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
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PriceListDetail extends Local {
    currency: string;
    kind: string;
    priceListId: number;
    productId: number;
    price: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Member extends Local {
    kind: string;
    boxId: number;
    userId: number;
    role: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface UserReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    userId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesResultDataGroup {
    count: number;
    dueDays: number;
    debits: number;
    credits: number;
    net: number;
}
export interface Unit extends Local {
    name: string;
    kind: string;
    code: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface UserError {
    name: string;
    value: string;
    code: string;
}
export interface CreateContactResult {
    errors: UserError[];
    contact: Contact;
}
export interface BoxApplicationPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Note extends Local {
    kind: string;
    description: string;
    displayOn: Date;
    latitude: number;
    longitude: number;
    parentId: number;
    start: Date;
    startZone: string;
    locked: Boolean;
    pinned: Boolean;
    remoteSource: string;
    remoteId: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    hashtags: Hashtag[];
}
export interface CreateAddTagResult {
    tag: Tag;
    errors: UserError[];
}
export interface PendingReceivablesByDueDaysClassResult {
    pastDueDays: number[];
    futureDueDays: number[];
    data: PendingReceivablesByDueDaysClassResultData[];
}
export interface BoxApplicationBusinessPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    businessId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Stock extends Local {
    kind: string;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count: number;
    debits: number;
    credits: number;
    dueDaysClass: number;
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    comment: string;
    item: string;
    kind: string;
    meta: string;
    productId: number;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
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
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesResultData {
    future: PendingReceivablesResultDataGroup;
    past: PendingReceivablesResultDataGroup;
    count: number;
    dueDays: number;
    debits: number;
    credits: number;
    net: number;
}
export interface MemberApplicationBusinessPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    memberId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesHistoryResult {
    now: Date;
    data: ReceivablePendingByDate[];
}
export interface CreateNoteResult {
    note: Note;
    errors: UserError[];
}
export interface UpdateNoteResult {
    note: Note;
    errors: UserError[];
}
export interface SaleDocument extends Local {
    entry: string;
    comment: string;
    kind: string;
    meta: string;
    displayOn: Date;
    taxId: string;
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
    payment: string;
    required: Date;
    shipped: Date;
    delivered: Date;
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
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    receivable: ReceivableDocument;
}
export interface ReceivableDocument extends Local {
    entry: string;
    comment: string;
    kind: string;
    meta: string;
    displayOn: Date;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    taxId: string;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    customer: Customer;
    paid: Date;
    reconciliationDetails: ReceivableReconciliationDetail[];
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Customer extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    invoices: SaleDocument[];
    sales: SaleDocument[];
    receivables: ReceivableDocument[];
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    kind: string;
    meta: string;
    issued: Date;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    details: ReceivableReconciliationDetail[];
}
export interface TagDetail extends Local {
    kind: string;
    referenceId: number;
    tagId: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PendingReceivablesResult {
    data: PendingReceivablesResultData;
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivablePendingByEntry {
    debits: ReceivablePending;
    credits: ReceivablePending;
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ContactAnniversary extends ContactElement, Local {
    year: number;
    month: number;
    day: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface User extends Local {
    handle: string;
    locale: string;
    zone: string;
    kind: string;
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
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    avatar: string;
    avatarOriginal: string;
}
export interface UpdateTagDetailResult {
    tag: Tag;
    errors: UserError[];
}
export interface Tag extends Local {
    kind: string;
    description: string;
    color: string;
    background: string;
    meaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    kind: string;
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Hashtag extends Local {
    handle: string;
    kind: string;
    description: string;
    color: string;
    background: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface PriceList extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Representative extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface BusinessCurrency extends Local {
    currency: string;
    kind: string;
    businessId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface MemberApplicationPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    memberId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface UnitListDetail extends Local {
    kind: string;
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    displayId: string;
    displayMeaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
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
    kind: string;
    description: string;
    configuration: string;
    boxId: number;
    taxId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface Application extends Local {
    name: string;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivablePendingByDate {
    date: Date;
    future: ReceivablePendingByEntry;
    past: ReceivablePendingByEntry;
    total: ReceivablePendingByEntry;
}
export interface Box extends Local {
    name: string;
    language: string;
    country: string;
    currency: string;
    kind: string;
    configuration: string;
    token: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
    applications: Application[];
}
export interface PendingReceivableResult {
    representatives: Representative[];
    data: PendingReceivableResultData[];
}
export interface ContactAddress extends ContactElement, Local {
    reference: string;
    state: string;
    country: string;
    kind: string;
    street: string;
    postal: string;
    city: string;
    contactId: number;
    sequence: number;
    locus: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    hashtagId: number;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface CreateUpdateUserResult {
    user: User;
    errors: UserError[];
}
export interface Currency extends Local {
    name: string;
    kind: string;
    code: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued: Date;
    total: number;
}
export interface Country extends Local {
    name: string;
    kind: string;
    code: string;
    id: ID;
    displayOn: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn: Date;
}
export interface ReceivablePending {
    count: number;
    dueDays: number;
    pending: number;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ContactNetworkInput {
    handle: string;
    provider: string;
    sequence: number;
    locus: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface TagFilterInput {
    limit: number;
    q: string;
}
export interface ContactPhoneInput {
    number: string;
    sequence: number;
    locus: string;
}
export interface ContactEventsFilterInput {
    days: number;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryInput {
    year: number;
    month: number;
    day: number;
    sequence: number;
    locus: string;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactUrlInput {
    specification: string;
    sequence: number;
    locus: string;
}
export interface ContactLocationInput {
    latitude: number;
    longitude: number;
    sequence: number;
    locus: string;
}
export interface ContactEmailInput {
    address: string;
    sequence: number;
    locus: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
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
export interface ContactFilterInput {
    search: string;
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
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
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
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ReceivableDocumentFilterInput {
    entry: string;
    remoteSource: string;
    pending: Boolean;
}
export interface ReceivablePaymentHistoryInputFilter {
    months: number;
    representativeContactId: ID;
    businessId: ID[];
    customerContactId: ID;
}
export interface NoteInput {
    description: string;
    latitude: number;
    longitude: number;
    start: Date;
    startZone: string;
    locked: Boolean;
    pinned: Boolean;
}
export interface TagInput {
    description: string;
    color: string;
    background: string;
}
export interface ContactInput {
    comment: string;
    organizationName: string;
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
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
