export type ID = string;
export type LocalDateTime = Date;
export type URL = string;
export type Instant = Date;
export type LocalDate = Date;
export type Upload = any;
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
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    kind: string;
    meta: string;
    contactId: number;
    comment: string;
    displayName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    emails: ContactEmail[];
    networks: ContactNetwork[];
    locations: ContactLocation[];
    addresses: ContactAddress[];
    phones: ContactPhone[];
    tags: Tag[];
    anniversaries: ContactAnniversary[];
    notes: Note[];
    customers: Customer[];
    representatives: Representative[];
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
    code: string;
    kind: string;
    name: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface TaskFlow extends Local {
    color: string;
    title: string;
    backgroundColor: string;
    description?: string;
    kind: string;
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
    color: string;
    background: string;
    meaning: string;
    description: string;
    kind: string;
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
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    kind: string;
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
    specification: string;
    kind: string;
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
    start: Date;
    due: Date;
    status: string;
    responsibleId?: number;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
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
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableReconciliationId: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    kind: string;
    meta: string;
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
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface HashtagReference extends Local {
    referenceId: number;
    hashtagId: number;
    kind: string;
    handle: string;
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
export interface CreateTaskResult {
    task?: Task;
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
    creditLimit: number;
    creditDays: number;
    kind: string;
    representativeId: number;
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
    invoices?: SaleDocument[];
    sales?: SaleDocument[];
    receivables?: ReceivableDocument[];
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
    kind: string;
    provider: string;
    handle: string;
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
    productId: number;
    price: number;
    priceListId: number;
    kind: string;
    currency: string;
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
export interface UpdateNoteResult {
    note?: Note;
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
    productId: number;
    price: number;
    priceListId: number;
    unit: string;
    kind: string;
    currency: string;
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
    kind: string;
    locale: string;
    zone: string;
    handle?: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    avatarOriginal?: string;
    avatar?: string;
}
export interface Zone {
    code?: string;
    description?: string;
    offset?: number;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface UnitList extends Local {
    baseUnit: string;
    kind: string;
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
    future?: ReceivablePendingByEntry;
    past?: ReceivablePendingByEntry;
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
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface Organization extends Contact, Local {
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    kind: string;
    meta: string;
    contactId: number;
    comment: string;
    displayName: string;
    position: string;
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
    memberId: number;
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface CreateUpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface DefaultTask {
    due?: Date;
    description?: string;
    zone?: string;
    id?: string;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ReceivablePending {
    dueDays?: number;
    pending?: number;
    count?: number;
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    kind: string;
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
    code: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    kind: string;
    meta: string;
    contactId: number;
    comment: string;
    displayName: string;
    position: string;
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
    memberId: number;
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface UserError {
    code?: string;
    name: string;
    value: string;
}
export interface Hashtag extends Local {
    color: string;
    background: string;
    description: string;
    kind: string;
    handle: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Unit extends Local {
    code: string;
    kind: string;
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
export interface PendingReceivablesHistoryResult {
    now?: Date;
    data?: ReceivablePendingByDate[];
}
export interface Member extends Local {
    userId: number;
    role: string;
    kind: string;
    boxId: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface Stock extends Local {
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    kind: string;
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
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ReceivableReconciliation extends Local {
    issued: Date;
    kind: string;
    meta: string;
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
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
    count?: number;
}
export interface PendingReceivableResult {
    representatives?: Representative[];
    data?: PendingReceivableResultData[];
}
export interface SaleDocumentDetail extends Local {
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
    kind: string;
    meta: string;
    entry: string;
    comment: string;
    item: string;
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
    code: string;
    kind: string;
    name: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
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
    kind: string;
    meta: string;
    currency: string;
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
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface ReceivableDocument extends Local {
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    kind: string;
    meta?: string;
    displayOn?: Date;
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
    customerId?: ID;
    contactId?: ID;
    dueDaysClass?: number;
}
export interface CreateNoteResult {
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
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
    count?: number;
}
export interface Business extends Local {
    description: string;
    kind: string;
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
    latitude?: number;
    longitude?: number;
    referenceId: number;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    description: string;
    kind: string;
    displayOn?: Date;
    zone: string;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
    hashtags?: Hashtag[];
}
export interface TaskState extends Local {
    color: string;
    parentId?: ID;
    flowId: ID;
    title: string;
    backgroundColor: string;
    parentSequence: number;
    description?: string;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface PendingReceivablesResultData {
    future?: PendingReceivablesResultDataGroup;
    past?: PendingReceivablesResultDataGroup;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
    count?: number;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Task extends Local {
    color: string;
    start: Date;
    meaning?: string;
    due: Date;
    status: string;
    stateSequence?: number;
    title: string;
    backgroundColor: string;
    latest: Date;
    finish?: Date;
    description?: string;
    kind: string;
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
    referenceId: number;
    userId: number;
    kind: string;
    handle: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface SaleDocument extends Local {
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
    kind: string;
    representativeId: number;
    meta?: string;
    displayOn?: Date;
    taxId?: string;
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
    referenceId: number;
    tagId: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    version: number;
    id: ID;
}
export interface ContactAnniversary extends ContactElement, Local {
    kind: string;
    day: number;
    year?: number;
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
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
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
export interface ContactEventsFilterInput {
    days?: number;
}
export interface TagFilterInput {
    limit?: number;
    q?: string;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface ReceivableDocumentFilterInput {
    pending?: Boolean;
    remoteSource?: string;
    entry?: string;
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
    color?: string;
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    parentSequence?: number;
    description?: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface UpdateNoteInput {
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    zone?: string;
}
export interface TaskFlowStructureInput {
    status?: string;
    stateSequence?: number;
    first?: Boolean;
}
export interface CreateNoteInput {
    referenceId?: ID;
    latitude?: number;
    longitude?: number;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    zone?: string;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactAnniversaryInput {
    day?: number;
    year?: number;
    month?: number;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    color?: string;
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    parentSequence?: number;
    description?: string;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskInput {
    referenceId?: ID;
    parentId?: ID;
    color?: string;
    due?: Date;
    responsibleId?: ID;
    title?: string;
    backgroundColor?: string;
    description?: string;
    zone?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface UpdateSelfInput {
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
    avatarOriginal?: Upload;
    locale?: string;
    zone?: string;
    handle?: string;
}
export interface UpdateTaskInput {
    color?: string;
    due?: Date;
    responsibleId?: ID;
    title?: string;
    backgroundColor?: string;
    description?: string;
    zone?: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface TagInput {
    color?: string;
    parentId?: ID;
    backgroundColor?: string;
    description?: string;
    type?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface CreateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
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
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
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
export interface ReceivablePaymentHistoryInputFilter {
    businessId?: ID[];
    months?: number;
    customerContactId?: ID;
    representativeContactId?: ID;
}
export interface ContactInput {
    organizationName?: string;
    comment?: string;
}

