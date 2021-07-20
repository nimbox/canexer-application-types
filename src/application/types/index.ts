export type ID = string;
export type Instant = Date;
export type LocalDate = Date;
export type LocalDateTime = Date;
export type URL = string;
export type Upload = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Local {
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    createdBy?: User;
    updatedBy?: User;
}
export interface Contact extends Local {
    comment: string;
    displayName: string;
    kind: string;
    contactId: number;
    meta: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    urls: ContactUrl[];
    phones: ContactPhone[];
    tags: Tag[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    networks: ContactNetwork[];
    emails: ContactEmail[];
    anniversaries: ContactAnniversary[];
    notes: Note[];
    customers: Customer[];
    representatives: Representative[];
}
export interface UnitListDetail extends Local {
    kind: string;
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    kind: string;
    contactId: number;
    meta: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface ReceivablePendingByDate {
    date?: Date;
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    total?: ReceivablePendingByEntry;
}
export interface PendingReceivablesHistoryResult {
    now?: Date;
    data?: ReceivablePendingByDate[];
}
export interface ContactLocation extends ContactElement, Local {
    kind: string;
    latitude: number;
    longitude: number;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    userId: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableDocument extends Local {
    entry: string;
    comment?: string;
    kind: string;
    meta?: string;
    displayOn?: Date;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    customer?: Customer;
    paid?: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PendingReceivablesResultData {
    past?: PendingReceivablesResultDataGroup;
    future?: PendingReceivablesResultDataGroup;
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface ReceivablePending {
    count?: number;
    dueDays?: number;
    pending?: number;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    kind: string;
    boxId: number;
    userId: number;
    role: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Person extends Contact, Local {
    comment: string;
    displayName: string;
    kind: string;
    contactId: number;
    meta: string;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Representative extends Local {
    name: string;
    comment: string;
    kind: string;
    contactId: number;
    meta: string;
    taxId: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Unit extends Local {
    name: string;
    kind: string;
    code: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxApplicationPermission extends Local {
    kind: string;
    boxId: number;
    applicationId: number;
    configuration: string;
    meta: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDueDaysClassResult {
    pastDueDays?: number[];
    futureDueDays?: number[];
    data?: PendingReceivablesByDueDaysClassResultData[];
}
export interface Task extends Local {
    zone: string;
    kind: string;
    status: string;
    stateSequence?: number;
    title: string;
    backgroundColor: string;
    latest: Date;
    finish?: Date;
    description?: string;
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateUpdateUserResult {
    errors?: UserError[];
    user?: User;
}
export interface Note extends Local {
    zone: string;
    kind: string;
    displayOn?: Date;
    description: string;
    latitude?: number;
    longitude?: number;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    referenceId: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
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
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Warehouse extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxApplicationBusinessPermission extends Local {
    kind: string;
    businessId: number;
    boxId: number;
    applicationId: number;
    configuration: string;
    meta: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TagDetail extends Local {
    kind: string;
    tagId: number;
    referenceId: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableResult {
    representatives?: Representative[];
    data?: PendingReceivableResultData[];
}
export interface CreateContactResult {
    contact?: Contact;
    errors?: UserError[];
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface MemberApplicationBusinessPermission extends Local {
    kind: string;
    businessId: number;
    applicationId: number;
    configuration: string;
    meta: string;
    memberId: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
}
export interface Stock extends Local {
    kind: string;
    warehouseId: number;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Customer extends Local {
    name: string;
    comment: string;
    kind: string;
    contactId: number;
    meta: string;
    taxId: string;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivables?: ReceivableDocument[];
    sales?: SaleDocument[];
    invoices?: SaleDocument[];
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    day: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableResultData {
    contactId?: ID;
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerRepresentativeId?: ID;
    dueDaysClass?: number;
    customerId?: ID;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface ReceivableReconciliationDetail extends Local {
    entry: string;
    comment: string;
    kind: string;
    meta: string;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    originalCurrency: string;
    originalRate: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface Hashtag extends Local {
    handle: string;
    kind: string;
    description: string;
    color: string;
    background: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface BusinessCurrency extends Local {
    currency: string;
    kind: string;
    businessId: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface MemberApplicationPermission extends Local {
    kind: string;
    applicationId: number;
    configuration: string;
    meta: string;
    memberId: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocument extends Local {
    entry: string;
    comment?: string;
    kind: string;
    meta?: string;
    displayOn?: Date;
    taxId?: string;
    payment: string;
    required?: Date;
    shipped?: Date;
    delivered?: Date;
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
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
}
export interface PriceList extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    kind: string;
    meta: string;
    issued: Date;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface Business extends Local {
    name: string;
    language: string;
    provider: string;
    country: string;
    currency: string;
    kind: string;
    boxId: number;
    configuration: string;
    taxId: string;
    description: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Application extends Local {
    name: string;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Box extends Local {
    name: string;
    language: string;
    country: string;
    currency: string;
    kind: string;
    token: string;
    configuration: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    applications?: Application[];
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface ContactAddress extends ContactElement, Local {
    reference?: string;
    state?: string;
    country?: string;
    kind: string;
    street?: string;
    postal?: string;
    city?: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    comment: string;
    item: string;
    kind: string;
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
    displayLine: number;
    discount: number;
    tax: number;
    profit: number;
    saleTotal: number;
    originalDiscount: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    productId: number;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    hashtagId: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Currency extends Local {
    name: string;
    kind: string;
    code: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface User extends Local {
    handle?: string;
    locale: string;
    zone: string;
    kind: string;
    uid?: string;
    blocked?: Date;
    avatarInitials: string;
    avatarColor: string;
    avatarX?: number;
    avatarY?: number;
    avatarSize?: number;
    emailAddress: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    firstName: string;
    lastName?: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    avatar?: string;
    avatarOriginal?: string;
}
export interface Country extends Local {
    name: string;
    kind: string;
    code: string;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    businessId?: ID[];
    representativeContactId?: ID;
    customerContactId?: ID;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface TagInput {
    description?: string;
    type?: string;
    parentId?: ID;
    backgroundColor?: string;
    color?: string;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface UpdateSelfInput {
    handle?: string;
    locale?: string;
    zone?: string;
    uid?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarX?: number;
    avatarY?: number;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    avatarOriginal?: Upload;
}
export interface UpdateNoteInput {
    zone?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    sequence?: number;
    locus?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactAddressInput {
    reference?: string;
    state?: string;
    country?: string;
    street?: string;
    postal?: string;
    city?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactFilterInput {
    search?: string;
}
export interface TagFilterInput {
    limit?: number;
    q?: string;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskInput {
    parentId?: ID;
    referenceId?: ID;
    zone?: string;
    responsibleId?: ID;
    flowId?: ID;
    stateId?: ID;
    stateSequence?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
    due?: string;
}
export interface UpdateBusinessInput {
    name?: string;
    language?: string;
    provider?: string;
    country?: string;
    currency?: string;
    taxId?: string;
    description?: string;
}
export interface CreateBusinessInput {
    name?: string;
    language?: string;
    provider?: string;
    country?: string;
    currency?: string;
    taxId?: string;
    description?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}

