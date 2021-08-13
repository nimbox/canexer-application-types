export declare type ID = string;
export declare type LocalDateTime = Date;
export declare type URL = string;
export declare type Instant = Date;
export declare type LocalDate = Date;
export declare type Upload = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Contact extends Local {
    kind: string;
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    comment: string;
    displayName: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    notes: Note[];
    customers: Customer[];
    representatives: Representative[];
    tags: Tag[];
    emails: ContactEmail[];
    phones: ContactPhone[];
    addresses: ContactAddress[];
    networks: ContactNetwork[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    urls: ContactUrl[];
}
export interface Local {
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    createdBy?: User;
    updatedBy?: User;
}
export interface ContactPhone extends ContactElement, Local {
    kind: string;
    number: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Currency extends Local {
    kind: string;
    code: string;
    name: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface TaskFlow extends Local {
    title: string;
    backgroundColor: string;
    kind: string;
    description?: string;
    color: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
}
export interface PriceList extends Local {
    kind: string;
    meta: string;
    comment: string;
    name: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Tag extends Local {
    kind: string;
    description: string;
    color: string;
    background: string;
    meaning: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
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
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface TaskHistory extends Local {
    status: string;
    responsibleId?: number;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
    start: Date;
    due: Date;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface PendingReceivablesByDueDaysClassResult {
    pastDueDays?: number[];
    futureDueDays?: number[];
    data?: PendingReceivablesByDueDaysClassResultData[];
}
export interface ReceivableReconciliationDetail extends Local {
    kind: string;
    meta: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    entry: string;
    comment: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    receivable?: ReceivableDocument;
    reconciliation?: ReceivableReconciliation;
}
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    hashtagId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ClassifiedTaskFlowStructure {
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
    first?: TaskFlowStructure;
}
export interface UserError {
    code?: string;
    name: string;
    value: string;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface ContactEmail extends ContactElement, Local {
    kind: string;
    address: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Customer extends Local {
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    comment: string;
    name: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    sales?: SaleDocument[];
    receivables?: ReceivableDocument[];
    invoices?: SaleDocument[];
}
export interface DefaultTask {
    description?: string;
    due?: Date;
    zone?: string;
    id?: string;
}
export interface BoxApplicationPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    kind: string;
    provider: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface PriceListDetail extends Local {
    kind: string;
    currency: string;
    productId: number;
    price: number;
    priceListId: number;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Application extends Local {
    kind: string;
    configuration: string;
    meta: string;
    name: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Box extends Local {
    kind: string;
    configuration: string;
    token: string;
    currency: string;
    country: string;
    name: string;
    language: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    applications?: Application[];
}
export interface PriceListUnitDetail extends Local {
    kind: string;
    currency: string;
    productId: number;
    price: number;
    priceListId: number;
    unit: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface User extends Local {
    locale: string;
    handle?: string;
    kind: string;
    firstName: string;
    lastName?: string;
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
    zone: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    avatar?: string;
    avatarOriginal?: string;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateUpdateUserResult {
    errors?: UserError[];
    user?: User;
}
export interface UnitList extends Local {
    kind: string;
    baseUnit: string;
    name: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ReceivablePendingByDate {
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    date?: Date;
    total?: ReceivablePendingByEntry;
}
export interface ContactAddress extends ContactElement, Local {
    kind: string;
    street?: string;
    postal?: string;
    city?: string;
    country?: string;
    reference?: string;
    state?: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Warehouse extends Local {
    kind: string;
    meta: string;
    comment: string;
    name: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Organization extends Contact, Local {
    kind: string;
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    comment: string;
    displayName: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface MemberApplicationBusinessPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    memberId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface CreateContactResult {
    contact?: Contact;
    errors?: UserError[];
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface ReceivablePending {
    count?: number;
    dueDays?: number;
    pending?: number;
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
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Person extends Contact, Local {
    kind: string;
    meta: string;
    contactId: number;
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    comment: string;
    displayName: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface BoxApplicationBusinessPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    businessId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface MemberApplicationPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    memberId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Hashtag extends Local {
    handle: string;
    kind: string;
    description: string;
    color: string;
    background: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Unit extends Local {
    kind: string;
    code: string;
    name: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PendingReceivablesHistoryResult {
    now?: Date;
    data?: ReceivablePendingByDate[];
}
export interface Member extends Local {
    kind: string;
    boxId: number;
    userId: number;
    role: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Stock extends Local {
    warehouseId: number;
    kind: string;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface TaskFlowStructure extends Local {
    status: string;
    flowId: number;
    stateId: number;
    stateSequence: number;
    kind: string;
    first: Boolean;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    state: TaskState;
}
export interface Zone {
    description?: string;
    code?: string;
    offset?: number;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ReceivableReconciliation extends Local {
    kind: string;
    meta: string;
    issued: Date;
    comment: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    details?: ReceivableReconciliationDetail[];
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface PendingReceivableResult {
    representatives?: Representative[];
    data?: PendingReceivableResultData[];
}
export interface SaleDocumentDetail extends Local {
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
    item: string;
    entry: string;
    comment: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Country extends Local {
    kind: string;
    code: string;
    name: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Product extends Local {
    kind: string;
    meta: string;
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
    comment: string;
    name: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ReceivableDocument extends Local {
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
    entry: string;
    comment?: string;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    customer?: Customer;
    paid?: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface BusinessCurrency extends Local {
    kind: string;
    currency: string;
    businessId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface PendingReceivableResultData {
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerRepresentativeId?: ID;
    dueDaysClass?: number;
    contactId?: ID;
    customerId?: ID;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface Representative extends Local {
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
    comment: string;
    name: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
}
export interface Business extends Local {
    kind: string;
    description: string;
    configuration: string;
    currency: string;
    boxId: number;
    taxId: string;
    provider: string;
    country: string;
    name: string;
    language: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Note extends Local {
    kind: string;
    description: string;
    displayOn?: Date;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    zone: string;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    hashtags?: Hashtag[];
}
export interface TaskState extends Local {
    parentId?: ID;
    flowId: ID;
    title: string;
    backgroundColor: string;
    kind: string;
    description?: string;
    color: string;
    parentSequence: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
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
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface Task extends Local {
    status: string;
    stateSequence?: number;
    title: string;
    backgroundColor: string;
    latest: Date;
    finish?: Date;
    kind: string;
    description?: string;
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    zone: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
    children?: Task[];
    reference?: Local;
    parent?: Task;
}
export interface UserReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    userId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface SaleDocument extends Local {
    kind: string;
    meta?: string;
    displayOn?: Date;
    taxId?: string;
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
    entry: string;
    comment?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    receivable?: ReceivableDocument;
}
export interface TagDetail extends Local {
    tagId: number;
    kind: string;
    referenceId: number;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    kind: string;
    day: number;
    month: number;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface CreateTaskStateInput {
    flowId?: ID;
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
    parentSequence?: number;
}
export interface CreateBusinessInput {
    description?: string;
    currency?: string;
    taxId?: string;
    provider?: string;
    country?: string;
    name?: string;
    language?: string;
}
export interface UpdateTaskFlowInput {
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
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
export interface ContactEventsFilterInput {
    days?: number;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface ReceivableDocumentFilterInput {
    remoteSource?: string;
    pending?: Boolean;
    entry?: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
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
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface UpdateNoteInput {
    description?: string;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    zone?: string;
}
export interface TaskFlowStructureInput {
    status?: string;
    stateSequence?: number;
    first?: Boolean;
}
export interface CreateNoteInput {
    referenceId?: ID;
    description?: string;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    zone?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface UpdateTaskStateInput {
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
    parentSequence?: number;
}
export interface ContactAddressInput {
    street?: string;
    postal?: string;
    city?: string;
    country?: string;
    reference?: string;
    state?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface UpdateTaskInput {
    responsibleId?: ID;
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
    due?: Date;
    zone?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface UpdateSelfInput {
    locale?: string;
    avatarOriginal?: Upload;
    handle?: string;
    firstName?: string;
    lastName?: string;
    uid?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarX?: number;
    avatarY?: number;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    zone?: string;
}
export interface TagInput {
    parentId?: ID;
    backgroundColor?: string;
    color?: string;
    description?: string;
    type?: string;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskFlowInput {
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
}
export interface ContactAnniversaryInput {
    year?: number;
    day?: number;
    month?: number;
    sequence?: number;
    locus?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    customerContactId?: ID;
    representativeContactId?: ID;
    businessId?: ID[];
}
export interface ContactInput {
    organizationName?: string;
    comment?: string;
}
export interface CreateTaskInput {
    parentId?: ID;
    referenceId?: ID;
    responsibleId?: ID;
    title?: string;
    backgroundColor?: string;
    description?: string;
    color?: string;
    due?: Date;
    zone?: string;
}
export interface UpdateBusinessInput {
    description?: string;
    currency?: string;
    taxId?: string;
    provider?: string;
    country?: string;
    name?: string;
    language?: string;
}
