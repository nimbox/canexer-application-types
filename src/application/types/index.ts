export type ID = string;
export type Instant = Date;
export type LocalDate = Date;
export type URL = string;
export type JSON = any;
export type Upload = any;
export type LocalDateTime = Date;
export interface ContactElement extends Local {
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Contact extends Local {
    position: string;
    displayName: string;
    comment: string;
    meta: string;
    code: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
    urls: ContactUrl[];
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
}
export interface Local {
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    createdBy?: User;
    updatedBy?: User;
}
export interface TagDetail extends Local {
    tagId: number;
    kind: string;
    referenceId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskState extends Local {
    flowId: ID;
    title: string;
    color: string;
    kind: string;
    parentId?: ID;
    parentSequence: number;
    backgroundColor: string;
    description?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface SaleDocumentDetail extends Local {
    comment: string;
    entry: string;
    meta: string;
    meaning: string;
    total: number;
    tax: number;
    profit: number;
    item: string;
    price: number;
    unit: string;
    kind: string;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    displayLine: number;
    discount: number;
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
    productId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactNetwork extends ContactElement, Local {
    provider: string;
    handle: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
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
export interface SaleDocument extends Local {
    comment?: string;
    entry: string;
    meta?: string;
    taxId?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    payment: string;
    shipped?: Date;
    expense: number;
    other: number;
    tax: number;
    profit: number;
    kind: string;
    displayOn?: Date;
    customerId: number;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    required?: Date;
    delivered?: Date;
    subtotal: number;
    discount: number;
    saleTotal: number;
    originalSubtotal: number;
    originalDiscount: number;
    originalExpense: number;
    originalOther: number;
    originalTax: number;
    originalProfit: number;
    originalSaleTotal: number;
    representativeId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
}
export interface DefaultTask {
    zone?: string;
    id: ID;
    due?: Date;
    description: string;
}
export interface Person extends Contact, Local {
    position: string;
    displayName: string;
    comment: string;
    meta: string;
    code: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface ContactAddress extends ContactElement, Local {
    country?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    kind: string;
    reference?: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface PendingReceivableResultData {
    dueDays?: number;
    debits?: number;
    credits?: number;
    dueDaysClass?: number;
    contactDisplayName?: string;
    customerName?: string;
    customerId?: ID;
    contactId?: ID;
    customerRepresentativeId?: ID;
}
export interface ContactLocation extends ContactElement, Local {
    kind: string;
    latitude: number;
    longitude: number;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UnitListDetail extends Local {
    kind: string;
    alternativeUnit: string;
    alternativeFactor: number;
    unitListId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
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
export interface MemberApplicationPermission extends Local {
    meta: string;
    kind: string;
    memberId: number;
    configuration: string;
    applicationId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceList extends Local {
    comment: string;
    name: string;
    meta: string;
    kind: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    day: number;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface PriceListDetail extends Local {
    price: number;
    kind: string;
    currency: string;
    productId: number;
    priceListId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Unit extends Local {
    name: string;
    code: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Box extends Local {
    zone: string;
    country: string;
    name: string;
    token: string;
    locale: string;
    kind: string;
    configuration: string;
    currency: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    applications: Application[];
    businesses: Business[];
}
export interface PendingReceivablesByDueDaysClassResult {
    data?: PendingReceivablesByDueDaysClassResultData[];
    pastDueDays?: number[];
    futureDueDays?: number[];
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface CreateUpdateUserResult {
    errors?: UserError[];
    user?: User;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    meta: string;
    issued: Date;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface User extends Local {
    zone: string;
    handle?: string;
    uid?: string;
    blocked?: Date;
    avatarX?: number;
    avatarY?: number;
    locale: string;
    kind: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    firstName: string;
    lastName?: string;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tasks?: Task[];
    avatar?: string;
    avatarOriginal?: string;
}
export interface Currency extends Local {
    name: string;
    code: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Application extends Local {
    name: string;
    meta: string;
    kind: string;
    configuration: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Product extends Local {
    comment: string;
    name: string;
    meta: string;
    price: number;
    unit: string;
    kind: string;
    currency: string;
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
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface Task extends Local {
    zone: string;
    start: Date;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    color: string;
    kind: string;
    stateSequence?: number;
    backgroundColor: string;
    description?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    parent?: Task;
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
    reference?: Local;
    children?: Task[];
}
export interface SynchronizationStatus {
    start?: Date;
    running?: Boolean;
    nextStart?: Date;
}
export interface BoxApplicationPermission extends Local {
    meta: string;
    boxId: number;
    kind: string;
    configuration: string;
    applicationId: number;
    version: number;
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
export interface Tag extends Local {
    meaning: string;
    color: string;
    kind: string;
    backgroundColor: string;
    description: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PriceListUnitDetail extends Local {
    price: number;
    unit: string;
    kind: string;
    currency: string;
    productId: number;
    priceListId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivableDocument extends Local {
    comment?: string;
    entry: string;
    meta?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    kind: string;
    displayOn?: Date;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    paid?: Date;
    customer?: Customer;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface ReceivablePendingByDate {
    past?: ReceivablePendingByEntry;
    future?: ReceivablePendingByEntry;
    date?: Date;
    total?: ReceivablePendingByEntry;
}
export interface ReceivablePendingByEntry {
    debits?: ReceivablePending;
    credits?: ReceivablePending;
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesResult {
    data?: PendingReceivablesResultData;
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface Representative extends Local {
    comment: string;
    name: string;
    meta: string;
    taxId: string;
    kind: string;
    contactId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DownloadablePackageVersion {
    version?: string;
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
    version: number;
    id: ID;
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
export interface Customer extends Local {
    comment: string;
    name: string;
    meta: string;
    taxId: string;
    kind: string;
    contactId: number;
    representativeId: number;
    creditLimit: number;
    creditDays: number;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    sales?: SaleDocument[];
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
}
export interface ReceivableReconciliationDetail extends Local {
    comment: string;
    entry: string;
    meta: string;
    kind: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    receivableReconciliationId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface Zone {
    name: string;
    offset: number;
    code: string;
    description: string;
}
export interface BoxApplicationBusinessPermission extends Local {
    meta: string;
    boxId: number;
    kind: string;
    configuration: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Country extends Local {
    name: string;
    code: string;
    kind: string;
    version: number;
    id: ID;
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
export interface BusinessCurrency extends Local {
    kind: string;
    currency: string;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Member extends Local {
    boxId: number;
    userId: number;
    role: string;
    kind: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UserReference extends Local {
    handle: string;
    userId: number;
    kind: string;
    referenceId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    locus?: string;
    contactId: number;
    sequence: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Business extends Local {
    zone: string;
    provider: string;
    country: string;
    name: string;
    boxId: number;
    taxId?: string;
    enabled: Boolean;
    locale: string;
    kind: string;
    configuration?: string;
    currency: string;
    scheduled: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    synchronization?: SynchronizationStatus;
}
export interface DownloadablePackage {
    name?: string;
    id?: string;
    versions?: DownloadablePackageVersion[];
    latestVersion?: DownloadablePackageVersion;
}
export interface MemberApplicationBusinessPermission extends Local {
    meta: string;
    kind: string;
    memberId: number;
    configuration: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Organization extends Contact, Local {
    position: string;
    displayName: string;
    comment: string;
    meta: string;
    code: string;
    kind: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    contactId: number;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    status: string;
    flowId: number;
    stateId: number;
    kind: string;
    stateSequence: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    state: TaskState;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Hashtag extends Local {
    handle: string;
    color: string;
    kind: string;
    backgroundColor: string;
    description: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UnitList extends Local {
    name: string;
    kind: string;
    baseUnit: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    referenceId: number;
    hashtagId: number;
    version: number;
    id: ID;
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
    kind: string;
    displayOn?: Date;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    description: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface Warehouse extends Local {
    comment: string;
    name: string;
    meta: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteSource: string;
    remoteId: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface TaskHistory extends Local {
    start: Date;
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    kind: string;
    responsibleId?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskFlow extends Local {
    title: string;
    color: string;
    kind: string;
    backgroundColor: string;
    description?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    states?: TaskState[];
    structure?: ClassifiedTaskFlowStructure;
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
export interface PackageBundle {
    version?: string;
    name?: string;
    file?: string;
    vendor?: string;
    built?: Date;
    provides?: string;
    installed?: Date;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface PendingReceivablesHistoryResult {
    data?: ReceivablePendingByDate[];
    now?: Date;
}
export interface ContactEmailInput {
    address?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactUrlActionsInput {
    delete: ID[];
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
}
export interface UpdateBusinessInput {
    zone?: string;
    provider?: string;
    country?: string;
    name?: string;
    taxId?: string;
    enabled?: Boolean;
    locale?: string;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
}
export interface ContactAddressInput {
    country?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    reference?: string;
    locus?: string;
    sequence?: number;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface UserFilterInput {
    q?: string;
}
export interface UpdateTaskFlowInput {
    title?: string;
    color?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactNetworkActionsInput {
    delete: ID[];
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
}
export interface UpdateTaskInput {
    zone?: string;
    due?: Date;
    title?: string;
    color?: string;
    responsibleId?: ID;
    backgroundColor?: string;
    description?: string;
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface ContactPhoneInput {
    number?: string;
    locus?: string;
    sequence?: number;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    latitude?: number;
    longitude?: number;
    description?: string;
}
export interface ContactPhoneActionsInput {
    delete: ID[];
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface CreateBusinessInput {
    zone?: string;
    provider?: string;
    country?: string;
    name?: string;
    taxId?: string;
    enabled?: Boolean;
    locale?: string;
    configuration?: string;
    currency?: string;
    scheduled?: Boolean;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
}
export interface ContactUrlInput {
    specification?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    locus?: string;
    sequence?: number;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    title?: string;
    color?: string;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
    description?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface ContactEmailActionsInput {
    delete: ID[];
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    customerContactId?: ID;
    representativeContactId?: ID;
    businessId?: ID[];
}
export interface CreateTaskInput {
    supervise?: Boolean;
    parentId?: ID;
    referenceId?: ID;
    zone?: string;
    due?: Date;
    title?: string;
    color?: string;
    responsibleId?: ID;
    backgroundColor?: string;
    description?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactNetworkInput {
    provider?: string;
    handle?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface TagInput {
    description?: string;
    type?: string;
    color?: string;
    parentId?: ID;
    backgroundColor?: string;
}
export interface UpdateNoteInput {
    zone?: string;
    start?: Date;
    locked?: Boolean;
    pinned?: Boolean;
    latitude?: number;
    longitude?: number;
    description?: string;
}
export interface ContactAddressActionsInput {
    delete: ID[];
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
}
export interface ContactLocationActionsInput {
    delete: ID[];
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
}
export interface UpdateSelfInput {
    zone?: string;
    handle?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    locale?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    avatarOriginal?: Upload;
    password?: string;
    firstName?: string;
    lastName?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
}
export interface CreateTaskFlowInput {
    title?: string;
    color?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface UpdateTaskStateInput {
    title?: string;
    color?: string;
    parentId?: ID;
    parentSequence?: number;
    backgroundColor?: string;
    description?: string;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    locus?: string;
    sequence?: number;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    pending?: Boolean;
    remoteSource?: string;
}
export interface ContactAnniversaryActionsInput {
    delete: ID[];
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
}

