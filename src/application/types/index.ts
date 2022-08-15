export type ID = string;
export type URL = string;
export type Instant = Date;
export type Upload = any;
export type LocalDateTime = Date;
export type LocalDate = Date;
export type JSON = any;
export interface ContactElement extends Local {
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    kind: string;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
export interface Contact extends Local {
    position: string;
    displayName: string;
    comment: string;
    code: string;
    meta: string;
    kind: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    remoteId?: string;
    remoteSource?: string;
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
    receivableDocuments: ReceivableDocument[];
    representatives: Representative[];
    customers: Customer[];
    anniversaries: ContactAnniversary[];
    locations: ContactLocation[];
    addresses: ContactAddress[];
    networks: ContactNetwork[];
    pendingReceivablesAging: PendingReceivablesAgingResult;
    pendingReceivablesAgingHistory?: PendingReceivablesAgingHistoryResult;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface PendingReceivablesAgingExtra {
    customers: Customer[];
    contacts: Contact[];
}
export interface BoxUserPermission extends Local {
    role: string;
    kind: string;
    configuration?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    user: User;
    box: Box;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface Box extends Local {
    zone: string;
    country: string;
    name: string;
    token: string;
    kind: string;
    locale: string;
    configuration: string;
    currency: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tags: Tag[];
    users: User[];
    businesses: Business[];
    application: Application;
    applications: Application[];
    applicationPermissions: BoxApplicationPermission[];
    applicationBusinessPermissions: BoxApplicationBusinessPermission[];
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    issued: Date;
    meta: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface CreateContactResult {
    errors?: UserError[];
    contact?: Contact;
}
export interface TaskState extends Local {
    color: string;
    flowId: ID;
    title: string;
    kind: string;
    backgroundColor: string;
    description?: string;
    parentId?: ID;
    parentSequence: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    kind: string;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
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
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface ReceivableReconciliationDetail extends Local {
    entry: string;
    comment: string;
    meta: string;
    kind: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    receivableReconciliationId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface Product extends Local {
    comment: string;
    name: string;
    price: number;
    unit: string;
    meta: string;
    kind: string;
    unitListId: number;
    purchaseUnit: string;
    purchaseFactor: number;
    saleFactor: number;
    saleUnit: string;
    available: number;
    reserved: number;
    incoming: number;
    currency: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
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
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Business extends Local {
    zone: string;
    provider: string;
    country: string;
    name: string;
    taxId?: string;
    enabled: Boolean;
    boxId: number;
    kind: string;
    locale: string;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description: string;
    scheduled: Boolean;
    configuration?: string;
    currency: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    currencies?: BusinessCurrency[];
    synchronization?: SynchronizationStatus;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface UpdateMemberApplicationBusinessPermissionResult {
    permission?: BoxUserApplicationBusinessPermission;
    errors?: UserError[];
}
export interface PendingReceivableHistoryTuple {
    entry: string;
    count: number;
    date: Date;
    dueDays: number;
    pending: number;
    contactId: ID;
    dueDaysBin: number;
    customerId: ID;
    originalCurrency: string;
    originalPending: number;
}
export interface BoxApplicationBusinessPermission extends Local {
    boxId: number;
    kind: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    box: Box;
    business: Business;
    application: Application;
}
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface TagDetail extends Local {
    tagId: number;
    kind: string;
    referenceId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivableTuple {
    entry: string;
    count: number;
    date: Date;
    dueDays: number;
    pending: number;
    contactId: ID;
    dueDaysBin: number;
    customerId: ID;
    originalCurrency: string;
    originalPending: number;
}
export interface UnitList extends Local {
    name: string;
    kind: string;
    baseUnit: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface BoxApplicationPermission extends Local {
    boxId: number;
    kind: string;
    applicationId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    box: Box;
    application: Application;
}
export interface Zone {
    name: string;
    offset: number;
    code: string;
    description: string;
}
export interface PriceListDetail extends Local {
    price: number;
    kind: string;
    productId: number;
    priceListId: number;
    currency: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
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
export interface TaskFlow extends Local {
    color: string;
    title: string;
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
export interface DownloadablePackageVersion {
    version?: string;
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
export interface DefaultTask {
    zone?: string;
    id: ID;
    due?: Date;
    description: string;
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface PendingReceivablesAgingHistoryContext {
    historyDays?: number;
    entry?: string;
    today?: Date;
    contactId?: ID;
    pastDays: number[];
    futureDays: number[];
}
export interface Application extends Local {
    name: string;
    enabled: Boolean;
    meta: string;
    kind: string;
    installed: Boolean;
    configuration: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Stock extends Local {
    kind: string;
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesAgingResult {
    extra?: PendingReceivablesAgingExtra;
    context?: PendingReceivablesAgingContext;
    datum?: PendingReceivableTuple[];
    meta?: AnalysisMeta;
}
export interface CreateAddTagResult {
    tag?: Tag;
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
export interface HashtagReference extends Local {
    handle: string;
    kind: string;
    hashtagId: number;
    referenceId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocument extends Local {
    entry: string;
    comment?: string;
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
    meta?: string;
    kind: string;
    representativeId: number;
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
    displayOn?: Date;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    receivable?: ReceivableDocument;
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
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Note extends Local {
    zone: string;
    locked: Boolean;
    pinned: Boolean;
    start: Date;
    kind: string;
    longitude?: number;
    latitude?: number;
    description: string;
    referenceId: number;
    displayOn?: Date;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    hashtags?: Hashtag[];
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Customer extends Local {
    comment: string;
    name: string;
    taxId: string;
    meta: string;
    kind: string;
    contactId: ID;
    creditDays: number;
    representativeId: ID;
    creditLimit: number;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    tags: Tag[];
    business: Business;
    sales?: SaleDocument[];
    moons?: MoonAnalysisResult;
    receivables?: ReceivableDocument[];
    invoices?: SaleDocument[];
}
export interface PendingReceivableResult {
    data?: PendingReceivableResultData[];
    representatives?: Representative[];
}
export interface PendingReceivableResultData {
    dueDays?: number;
    debits?: number;
    credits?: number;
    contactId?: ID;
    contactDisplayName?: string;
    customerName?: string;
    dueDaysClass?: number;
    customerId?: ID;
    customerRepresentativeId?: ID;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface MoonAnalysisResult {
    delay: QuintileValue;
    sales: QuintileValue;
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface PendingReceivablesAgingHistoryResult {
    context?: PendingReceivablesAgingHistoryContext;
    datum?: PendingReceivableHistoryTuple[];
    meta?: AnalysisMeta;
}
export interface Organization extends Contact, Local {
    position: string;
    displayName: string;
    comment: string;
    code: string;
    meta: string;
    kind: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Representative extends Local {
    comment: string;
    name: string;
    taxId: string;
    meta: string;
    kind: string;
    contactId: number;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateMemberApplicationPermissionResult {
    permission?: BoxUserApplicationPermission;
    errors?: UserError[];
}
export interface Tag extends Local {
    name: string;
    color: string;
    meaning?: string;
    kind: string;
    backgroundColor: string;
    description?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface User extends Local {
    handle?: string;
    zone: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    enabled?: Boolean;
    kind: string;
    locale: string;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    lastName?: string;
    firstName: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    businesses: Business[];
    tasks?: Task[];
    avatar?: string;
    preferences?: JSON;
    avatarOriginal?: string;
    role: string;
    applications: Application[];
    applicationPermissions: BoxUserApplicationPermission[];
    applicationBusinessPermissions: BoxUserApplicationBusinessPermission[];
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface QuintileValue {
    value: number;
    count: number;
    quintile: number;
}
export interface CreateTaskStateResult {
    state?: TaskState;
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
export interface ReceivableDocument extends Local {
    entry: string;
    comment?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    meta?: string;
    kind: string;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    displayOn?: Date;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    customer?: Customer;
    paid?: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ContactAnniversary extends ContactElement, Local {
    year?: number;
    month: number;
    day: number;
    kind: string;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxUserApplicationPermission extends Local {
    part?: string;
    boxId: number;
    userId: number;
    kind: string;
    applicationId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    user: User;
    box: Box;
    application: Application;
}
export interface AnalysisMeta {
    execution?: number;
    finish?: Date;
    start?: Date;
}
export interface ContactAddress extends ContactElement, Local {
    country?: string;
    reference?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    kind: string;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface ContactLocation extends ContactElement, Local {
    kind: string;
    longitude: number;
    latitude: number;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface SaleDocumentDetail extends Local {
    entry: string;
    item: string;
    comment: string;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    tax: number;
    profit: number;
    meta: string;
    kind: string;
    productId: number;
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
    remoteId?: string;
    remoteSource?: string;
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
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface CreateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface DownloadablePackage {
    name?: string;
    id?: string;
    versions?: DownloadablePackageVersion[];
    latestVersion?: DownloadablePackageVersion;
}
export interface ContactUrl extends ContactElement, Local {
    kind: string;
    specification: string;
    locus?: string;
    sequence: number;
    contactId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Person extends Contact, Local {
    position: string;
    displayName: string;
    comment: string;
    code: string;
    meta: string;
    kind: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface BoxUserApplicationBusinessPermission extends Local {
    kind: string;
    applicationId: number;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    user: User;
    box: Box;
    business: Business;
    application: Application;
}
export interface PriceListUnitDetail extends Local {
    price: number;
    unit: string;
    kind: string;
    productId: number;
    priceListId: number;
    currency: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
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
export interface BoxBusinessPermission extends Local {
    boxId: number;
    kind: string;
    businessId: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface TaskHistory extends Local {
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    start: Date;
    kind: string;
    responsibleId?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface Task extends Local {
    zone: string;
    color: string;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    start: Date;
    kind: string;
    backgroundColor: string;
    description?: string;
    stateSequence?: number;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
    reference?: Local;
    parent?: Task;
    children?: Task[];
    descendants?: Task[];
    ascendants?: Task[];
    responsible?: User;
}
export interface UnitListDetail extends Local {
    kind: string;
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface UpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface Warehouse extends Local {
    comment: string;
    name: string;
    meta: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface businesses {
    ids?: ID[];
    pendingReceivablesAging: PendingReceivablesAgingResult;
    receivables: ReceivableDocument[];
    pendingReceivablesAgingHistory: PendingReceivablesAgingHistoryResult;
    pendingReceivables: ReceivableDocument[];
}
export interface SynchronizationStatus {
    running?: Boolean;
    start?: Date;
    nextStart?: Date;
}
export interface Unit extends Local {
    name: string;
    code: string;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    displayOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    deletedOn?: Date;
}
export interface PendingReceivablesAgingContext {
    entry?: string;
    today?: Date;
    contactId?: ID;
    pastDays: number[];
    futureDays: number[];
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactUrlActionsInput {
    create: ContactUrlIdInput[];
    update: ContactUrlIdInput[];
    delete: ID[];
}
export interface UpdateBusinessInput {
    zone?: string;
    provider?: string;
    country?: string;
    name?: string;
    taxId?: string;
    enabled?: Boolean;
    locale?: string;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
    currencies?: string[];
    scheduled?: Boolean;
    configuration?: string;
    currency?: string;
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface CreateNoteInput {
    referenceId?: ID;
    zone?: string;
    locked?: Boolean;
    pinned?: Boolean;
    start?: Date;
    longitude?: number;
    latitude?: number;
    description?: string;
}
export interface UpdateTaskInput {
    zone?: string;
    color?: string;
    due?: Date;
    title?: string;
    backgroundColor?: string;
    description?: string;
    responsibleId?: ID;
}
export interface ContactEventsFilterInput {
    days?: number;
}
export interface ContactNetworkIdInput {
    network: ContactNetworkInput;
    id: ID;
}
export interface ContactNetworkActionsInput {
    create: ContactNetworkIdInput[];
    update: ContactNetworkIdInput[];
    delete: ID[];
}
export interface UpdateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
}
export interface ContactFilterInput {
    q?: string;
}
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface PendingReceivableByDocumentContextInput {
    meaning?: string[];
    businesses?: ID[];
    currencies?: string[];
    nominal?: Boolean;
    currency?: string;
}
export interface BusinessCurrencyContextInput {
    businesses?: ID[];
    currencies?: string[];
    nominal?: Boolean;
    currency?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface ReceivablePaymentHistoryInputFilter {
    months?: number;
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
}
export interface ContactPhoneInput {
    number?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface ContactAddressInput {
    country?: string;
    reference?: string;
    state?: string;
    street?: string;
    postal?: string;
    city?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface PendingReceivablesHistoryContextInput {
    historyDays?: number;
    entry?: string;
    pastDays?: number[];
    futureDays?: number[];
}
export interface CreateBusinessInput {
    zone?: string;
    provider?: string;
    country?: string;
    name?: string;
    taxId?: string;
    enabled?: Boolean;
    locale?: string;
    incrementalSchedule?: string;
    completeSchedule?: string;
    description?: string;
    currencies?: string[];
    scheduled?: Boolean;
    configuration?: string;
    currency?: string;
}
export interface ContactEmailInput {
    address?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactAnniversaryIdInput {
    anniversary: ContactAnniversaryInput;
    id: ID;
}
export interface UpdateTaskStateInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
}
export interface TaskFlowStructureInput {
    first?: Boolean;
    status?: string;
    stateSequence?: number;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface CreateTaskFlowInput {
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
}
export interface TagInput {
    name?: string;
    type?: string;
    color?: string;
    backgroundColor?: string;
    description?: string;
}
export interface CreateTaskInput {
    supervise?: Boolean;
    referenceId?: ID;
    parentId?: ID;
    zone?: string;
    color?: string;
    due?: Date;
    title?: string;
    backgroundColor?: string;
    description?: string;
    responsibleId?: ID;
}
export interface ContactUrlInput {
    specification?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactPhoneActionsInput {
    create: ContactPhoneIdInput[];
    update: ContactPhoneIdInput[];
    delete: ID[];
}
export interface ReceivablesContextInput {
    meaning?: string[];
    issuedFrom?: Date;
}
export interface BusinessFilterInput {
    enabled?: Boolean;
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactLocationInput {
    longitude?: number;
    latitude?: number;
    locus?: string;
    sequence?: number;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    color?: string;
    title?: string;
    backgroundColor?: string;
    description?: string;
    parentId?: ID;
    parentSequence?: number;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    pending?: Boolean;
    remoteSource?: string;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    locus?: string;
    sequence?: number;
}
export interface ContactAnniversaryInput {
    year?: number;
    month?: number;
    day?: number;
    locus?: string;
    sequence?: number;
}
export interface UpdateNoteInput {
    zone?: string;
    locked?: Boolean;
    pinned?: Boolean;
    start?: Date;
    longitude?: number;
    latitude?: number;
    description?: string;
}
export interface UserFilterInput {
    q?: string;
}
export interface TagFilterInput {
    q?: string;
    limit?: number;
}
export interface PendingReceivablesContextInput {
    entry?: string;
    pastDays?: number[];
    futureDays?: number[];
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
}
export interface UserInput {
    handle?: string;
    zone?: string;
    role?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    enabled?: Boolean;
    locale?: string;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    lastName?: string;
    firstName?: string;
    avatarOriginal?: Upload;
}

