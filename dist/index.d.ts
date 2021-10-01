export declare type ID = string;
export declare type Instant = Date;
export declare type LocalDate = Date;
export declare type LocalDateTime = Date;
export declare type URL = string;
export declare type Upload = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Contact extends Local {
    comment: string;
    displayName: string;
    contactId: number;
    code: string;
    kind: string;
    meta: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    urls: ContactUrl[];
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    notes: Note[];
    tasks: Task[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
}
export interface Local {
    id: ID;
    version: number;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    createdBy?: User;
    updatedBy?: User;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    id: ID;
    version: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface BoxApplicationPermission extends Local {
    boxId: number;
    applicationId: number;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Person extends Contact, Local {
    comment: string;
    displayName: string;
    contactId: number;
    code: string;
    kind: string;
    meta: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactAddress extends ContactElement, Local {
    reference?: string;
    state?: string;
    country?: string;
    street?: string;
    postal?: string;
    city?: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserReference extends Local {
    handle: string;
    userId: number;
    referenceId: number;
    kind: string;
    id: ID;
    version: number;
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
    version: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface User extends Local {
    handle?: string;
    locale: string;
    zone: string;
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
    firstName: string;
    lastName?: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tasks?: Task[];
    avatar?: string;
    avatarOriginal?: string;
}
export interface Box extends Local {
    name: string;
    language: string;
    country: string;
    currency: string;
    token: string;
    kind: string;
    configuration: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    applications?: Application[];
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    userId: number;
    role: string;
    boxId: number;
    kind: string;
    id: ID;
    version: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Currency extends Local {
    name: string;
    code: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Zone {
    name: string;
    offset: number;
    code: string;
    description: string;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface Task extends Local {
    zone: string;
    status: string;
    stateSequence?: number;
    title: string;
    backgroundColor: string;
    latest: Date;
    finish?: Date;
    color: string;
    description?: string;
    kind: string;
    start: Date;
    meaning?: string;
    due: Date;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reference?: Local;
    parent?: Task;
    children?: Task[];
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface CreateUpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Application extends Local {
    name: string;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Customer extends Local {
    name: string;
    comment: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    taxId: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivables?: ReceivableDocument[];
    sales?: SaleDocument[];
    invoices?: SaleDocument[];
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Note extends Local {
    zone: string;
    referenceId: number;
    latitude?: number;
    longitude?: number;
    description: string;
    kind: string;
    displayOn?: Date;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    id: ID;
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    dueDaysClass?: number;
    debits?: number;
    credits?: number;
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
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    comment: string;
    item: string;
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
    productId: number;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    displayLine: number;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskFlow extends Local {
    title: string;
    backgroundColor: string;
    color: string;
    description?: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface PendingReceivableResultData {
    contactId?: ID;
    dueDaysClass?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerRepresentativeId?: ID;
    customerId?: ID;
}
export interface Unit extends Local {
    name: string;
    code: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    status: string;
    flowId: number;
    stateId: number;
    stateSequence: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface BoxApplicationBusinessPermission extends Local {
    boxId: number;
    applicationId: number;
    businessId: number;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocument extends Local {
    entry: string;
    comment?: string;
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
    taxId?: string;
    kind: string;
    meta?: string;
    displayOn?: Date;
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
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
}
export interface PendingReceivablesHistoryResult {
    now?: Date;
    data?: ReceivablePendingByDate[];
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
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    customer?: Customer;
    paid?: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface TagDetail extends Local {
    referenceId: number;
    tagId: number;
    kind: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableResult {
    representatives?: Representative[];
    data?: PendingReceivableResultData[];
}
export interface TaskState extends Local {
    parentId?: ID;
    flowId: ID;
    title: string;
    backgroundColor: string;
    parentSequence: number;
    color: string;
    description?: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Business extends Local {
    name: string;
    language: string;
    provider: string;
    country: string;
    currency: string;
    boxId: number;
    taxId: string;
    description: string;
    kind: string;
    configuration: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePendingByDate {
    date?: Date;
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    total?: ReceivablePendingByEntry;
}
export interface UnitListDetail extends Local {
    alternativeUnit: string;
    alternativeFactor: number;
    kind: string;
    unitListId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Tag extends Local {
    color: string;
    background: string;
    description: string;
    kind: string;
    meaning: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateContactResult {
    contact?: Contact;
    errors?: UserError[];
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    contactId: number;
    code: string;
    kind: string;
    meta: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    position: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
    id: ID;
    version: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface PriceList extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Representative extends Local {
    name: string;
    comment: string;
    contactId: number;
    taxId: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface MemberApplicationPermission extends Local {
    memberId: number;
    applicationId: number;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface PendingReceivablesByDueDaysClassResult {
    pastDueDays?: number[];
    futureDueDays?: number[];
    data?: PendingReceivablesByDueDaysClassResultData[];
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface MemberApplicationBusinessPermission extends Local {
    memberId: number;
    applicationId: number;
    businessId: number;
    kind: string;
    configuration: string;
    meta: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface HashtagReference extends Local {
    handle: string;
    hashtagId: number;
    referenceId: number;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePending {
    count?: number;
    dueDays?: number;
    pending?: number;
}
export interface Hashtag extends Local {
    handle: string;
    color: string;
    background: string;
    description: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Country extends Local {
    name: string;
    code: string;
    kind: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DefaultTask {
    id: ID;
    zone?: string;
    description: string;
    due?: Date;
}
export interface UpdateTaskInput {
    zone?: string;
    responsibleId?: ID;
    title?: string;
    backgroundColor?: string;
    color?: string;
    description?: string;
    due?: Date;
}
export interface UpdateTaskStateInput {
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    parentSequence?: number;
    color?: string;
    description?: string;
}
export interface TagInput {
    description?: string;
    type?: string;
    parentId?: ID;
    backgroundColor?: string;
    color?: string;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ContactFilterInput {
    q?: string;
}
export interface UpdateNoteInput {
    zone?: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
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
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    parentId?: ID;
    title?: string;
    backgroundColor?: string;
    parentSequence?: number;
    color?: string;
    description?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
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
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
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
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
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
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface CreateTaskFlowInput {
    title?: string;
    backgroundColor?: string;
    color?: string;
    description?: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface UpdateTaskFlowInput {
    title?: string;
    backgroundColor?: string;
    color?: string;
    description?: string;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    sequence?: number;
    locus?: string;
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
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateTaskInput {
    referenceId?: ID;
    parentId?: ID;
    supervise?: Boolean;
    zone?: string;
    responsibleId?: ID;
    title?: string;
    backgroundColor?: string;
    color?: string;
    description?: string;
    due?: Date;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
