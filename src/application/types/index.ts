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
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    contactId: number;
    code: string;
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
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface TaskState extends Local {
    description?: string;
    kind: string;
    color: string;
    backgroundColor: string;
    parentId?: ID;
    flowId: ID;
    title: string;
    parentSequence: number;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    kind: string;
    unit: string;
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
export interface CreateContactResult {
    contact?: Contact;
    errors?: UserError[];
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
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
    receivable?: ReceivableDocument;
    reconciliation?: ReceivableReconciliation;
}
export interface BoxApplicationPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
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
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    contactId: number;
    code: string;
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
export interface PendingReceivablesByDueDaysClassResultData {
    count?: number;
    dueDaysClass?: number;
    debits?: number;
    credits?: number;
}
export interface DefaultTask {
    id: ID;
    zone?: string;
    description: string;
    due?: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
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
export interface Product extends Local {
    name: string;
    comment: string;
    currency: string;
    kind: string;
    meta: string;
    unit: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    price: number;
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
export interface Box extends Local {
    name: string;
    language: string;
    country: string;
    currency: string;
    kind: string;
    configuration: string;
    token: string;
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
    kind: string;
    boxId: number;
    userId: number;
    role: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResultDataGroup {
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
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
    kind: string;
    code: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Task extends Local {
    zone: string;
    start: Date;
    description?: string;
    kind: string;
    color: string;
    backgroundColor: string;
    meaning?: string;
    due: Date;
    status: string;
    stateSequence?: number;
    title: string;
    latest: Date;
    finish?: Date;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reference?: Local;
    parent?: Task;
    children?: Task[];
    responsible?: User;
    ascendants?: Task[];
    descendants?: Task[];
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTaskResult {
    task?: Task;
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
export interface Unit extends Local {
    name: string;
    kind: string;
    code: string;
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
export interface BusinessCurrency extends Local {
    currency: string;
    kind: string;
    businessId: number;
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
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
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
    invoices?: SaleDocument[];
    sales?: SaleDocument[];
    receivables?: ReceivableDocument[];
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    kind: string;
    status: string;
    flowId: number;
    stateId: number;
    stateSequence: number;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
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
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    description: string;
    kind: string;
    displayOn?: Date;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    id: ID;
    version: number;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface PendingReceivablesHistoryResult {
    now?: Date;
    data?: ReceivablePendingByDate[];
}
export interface Zone {
    name: string;
    offset: number;
    description: string;
    code: string;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface Stock extends Local {
    kind: string;
    available: number;
    reserved: number;
    incoming: number;
    productId: number;
    warehouseId: number;
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
    kind: string;
    specification: string;
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
    kind: string;
    meta: string;
    unit: string;
    meaning: string;
    total: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    productId: number;
    price: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface TaskFlow extends Local {
    description?: string;
    kind: string;
    color: string;
    backgroundColor: string;
    title: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
}
export interface PendingReceivableResultData {
    dueDaysClass?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerRepresentativeId?: ID;
    contactId?: ID;
    customerId?: ID;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface BoxApplicationBusinessPermission extends Local {
    kind: string;
    configuration: string;
    meta: string;
    boxId: number;
    applicationId: number;
    businessId: number;
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
export interface ReceivablePendingByDate {
    date?: Date;
    future?: ReceivablePendingByEntry;
    past?: ReceivablePendingByEntry;
    total?: ReceivablePendingByEntry;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
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
export interface UserReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    userId: number;
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
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    avatar?: string;
    avatarOriginal?: string;
    tasks?: Task[];
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
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface TagDetail extends Local {
    kind: string;
    referenceId: number;
    tagId: number;
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
    start: Date;
    kind: string;
    due: Date;
    status: string;
    responsibleId?: number;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateUpdateUserResult {
    errors?: UserError[];
    user?: User;
}
export interface Business extends Local {
    name: string;
    language: string;
    provider: string;
    country: string;
    currency: string;
    description: string;
    kind: string;
    configuration: string;
    boxId: number;
    taxId: string;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Tag extends Local {
    description: string;
    kind: string;
    color: string;
    backgroundColor: string;
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
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Organization extends Contact, Local {
    comment: string;
    displayName: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    meta: string;
    contactId: number;
    code: string;
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
export interface PendingReceivablesResultData {
    future?: PendingReceivablesResultDataGroup;
    past?: PendingReceivablesResultDataGroup;
    count?: number;
    dueDays?: number;
    debits?: number;
    credits?: number;
    net?: number;
}
export interface UpdateTaskResult {
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
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface Representative extends Local {
    name: string;
    comment: string;
    kind: string;
    meta: string;
    taxId: string;
    contactId: number;
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
export interface MemberApplicationPermission extends Local {
    memberId: number;
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface MemberApplicationBusinessPermission extends Local {
    memberId: number;
    kind: string;
    configuration: string;
    meta: string;
    applicationId: number;
    businessId: number;
    id: ID;
    version: number;
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
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Hashtag extends Local {
    handle: string;
    description: string;
    kind: string;
    color: string;
    backgroundColor: string;
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
export interface Country extends Local {
    name: string;
    kind: string;
    code: string;
    id: ID;
    version: number;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TagInput {
    description?: string;
    type?: string;
    color?: string;
    backgroundColor?: string;
    parentId?: ID;
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    representativeContactId?: ID;
    customerContactId?: ID;
    businessId?: ID[];
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
export interface CreateTaskInput {
    referenceId?: ID;
    supervise?: Boolean;
    parentId?: ID;
    zone?: string;
    description?: string;
    color?: string;
    backgroundColor?: string;
    due?: Date;
    responsibleId?: ID;
    title?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface UpdateSelfInput {
    handle?: string;
    locale?: string;
    zone?: string;
    firstName?: string;
    lastName?: string;
    avatarOriginal?: Upload;
    uid?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarX?: number;
    avatarY?: number;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface UpdateTaskStateInput {
    description?: string;
    color?: string;
    backgroundColor?: string;
    parentId?: ID;
    title?: string;
    parentSequence?: number;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
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
    description?: string;
    color?: string;
    backgroundColor?: string;
    parentId?: ID;
    title?: string;
    parentSequence?: number;
}
export interface UpdateNoteInput {
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    latitude?: number;
    longitude?: number;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface UpdateTaskFlowInput {
    description?: string;
    color?: string;
    backgroundColor?: string;
    title?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface UpdateBusinessInput {
    name?: string;
    language?: string;
    provider?: string;
    country?: string;
    currency?: string;
    description?: string;
    taxId?: string;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface CreateBusinessInput {
    name?: string;
    language?: string;
    provider?: string;
    country?: string;
    currency?: string;
    description?: string;
    taxId?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
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
export interface CreateTaskFlowInput {
    description?: string;
    color?: string;
    backgroundColor?: string;
    title?: string;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    description?: string;
    latitude?: number;
    longitude?: number;
}
export interface UpdateTaskInput {
    zone?: string;
    description?: string;
    color?: string;
    backgroundColor?: string;
    due?: Date;
    responsibleId?: ID;
    title?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}

