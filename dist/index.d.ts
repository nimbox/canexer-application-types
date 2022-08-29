export declare type ID = string;
export declare type URL = string;
export declare type Instant = Date;
export declare type Upload = any;
export declare type LocalDateTime = Date;
export declare type LocalDate = Date;
export declare type JSON = any;
export interface ContactElement extends Local {
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    kind: string;
}
export interface Local {
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    kind: string;
    createdBy?: User;
    updatedBy?: User;
}
export interface Contact extends Local {
    comment: string;
    position: string;
    displayName: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    code: string;
    kind: string;
    meta: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    networks: ContactNetwork[];
    addresses: ContactAddress[];
    locations: ContactLocation[];
    anniversaries: ContactAnniversary[];
    customers: Customer[];
    representatives: Representative[];
    receivableDocuments: ReceivableDocument[];
    urls: ContactUrl[];
    tags: Tag[];
    phones: ContactPhone[];
    emails: ContactEmail[];
    notes: Note[];
    tasks: Task[];
    pendingReceivablesAging: PendingReceivablesAgingResult;
    pendingReceivablesAgingHistory?: PendingReceivablesAgingHistoryResult;
}
export interface ReceivableReconciliation extends Local {
    comment: string;
    kind: string;
    meta: string;
    issued: Date;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    details?: ReceivableReconciliationDetail[];
}
export interface SynchronizeBusinessResult {
    synchronize?: SynchronizationStatus;
    errors?: UserError[];
}
export interface TaskState extends Local {
    description?: string;
    backgroundColor: string;
    parentId?: ID;
    parentSequence: number;
    color: string;
    kind: string;
    flowId: ID;
    title: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface ContactNetwork extends ContactElement, Local {
    handle: string;
    provider: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface PendingReceivablesAgingHistoryContext {
    historyDays?: number;
    entry?: string;
    contactId?: ID;
    pastDays: number[];
    futureDays: number[];
    today?: Date;
}
export interface CreateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface ClassifiedTaskFlowStructure {
    first?: TaskFlowStructure;
    pendings: TaskFlowStructure[];
    fulfilled?: TaskFlowStructure;
    rejected?: TaskFlowStructure;
}
export interface PendingReceivablesAgingResult {
    context?: PendingReceivablesAgingContext;
    extra?: PendingReceivablesAgingExtra;
    datum?: PendingReceivableTuple[];
    meta?: AnalysisMeta;
}
export interface MoonAnalysisResult {
    delay: QuintileValue;
    sales: QuintileValue;
}
export interface Product extends Local {
    comment: string;
    name: string;
    currency: string;
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
    price: number;
    unit: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface DefaultTask {
    zone?: string;
    id: ID;
    description: string;
    due?: Date;
}
export interface UpdateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface TagDetail extends Local {
    referenceId: number;
    kind: string;
    tagId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface UserError {
    name: string;
    value: string;
    code?: string;
}
export interface PriceListDetail extends Local {
    currency: string;
    productId: number;
    priceListId: number;
    kind: string;
    price: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Currency extends Local {
    name: string;
    code: string;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface UpdateBoxApplicationBusinessPermissionResult {
    permission?: BoxApplicationBusinessPermission;
    errors?: UserError[];
}
export interface PendingReceivablesAgingHistoryResult {
    context?: PendingReceivablesAgingHistoryContext;
    datum?: PendingReceivableHistoryTuple[];
    meta?: AnalysisMeta;
}
export interface Application extends Local {
    name: string;
    installed: Boolean;
    configuration: string;
    kind: string;
    enabled: Boolean;
    meta: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Stock extends Local {
    productId: number;
    available: number;
    reserved: number;
    incoming: number;
    warehouseId: number;
    kind: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Country extends Local {
    name: string;
    code: string;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface DeleteTaskStateResult {
    id?: ID;
    errors?: UserError[];
}
export interface SaleDocument extends Local {
    comment?: string;
    entry: string;
    displayOn?: Date;
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
    kind: string;
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
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    receivable?: ReceivableDocument;
}
export interface PackageBundle {
    version?: string;
    name?: string;
    file?: string;
    installed?: Date;
    provides?: string;
    vendor?: string;
    built?: Date;
}
export interface UserReference extends Local {
    handle: string;
    referenceId: number;
    userId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Note extends Local {
    zone: string;
    description: string;
    displayOn?: Date;
    latitude?: number;
    longitude?: number;
    referenceId: number;
    start: Date;
    locked: Boolean;
    pinned: Boolean;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    hashtags?: Hashtag[];
}
export interface DeleteConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface UpdateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface Customer extends Local {
    comment: string;
    name: string;
    contactId: ID;
    representativeId: ID;
    creditLimit: number;
    creditDays: number;
    kind: string;
    meta: string;
    taxId: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    tags: Tag[];
    invoices?: SaleDocument[];
    receivables?: ReceivableDocument[];
    sales?: SaleDocument[];
    moons?: MoonAnalysisResult;
    business: Business;
}
export interface DownloadablePackageVersion {
    version?: string;
}
export interface Zone {
    name: string;
    offset: number;
    description: string;
    code: string;
}
export interface PendingReceivableHistoryTuple {
    count: number;
    entry: string;
    contactId: ID;
    dueDaysBin: number;
    customerId: ID;
    originalCurrency: string;
    originalPending: number;
    date: Date;
    dueDays: number;
    pending: number;
}
export interface Representative extends Local {
    comment: string;
    name: string;
    contactId: number;
    kind: string;
    meta: string;
    taxId: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface User extends Local {
    zone: string;
    handle?: string;
    lastName?: string;
    firstName: string;
    avatarInitials: string;
    avatarColor: string;
    avatarBackgroundColor: string;
    avatarSize?: number;
    emailAddress?: string;
    emailAddressVerified?: Date;
    phoneNumber?: string;
    phoneNumberVerified?: Date;
    locale: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    kind: string;
    enabled?: Boolean;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    preferences?: JSON;
    avatarOriginal?: string;
    applications: Application[];
    businesses: Business[];
    tasks?: Task[];
    role: string;
    avatar?: string;
    authorized: Boolean;
    applicationPermissions: BoxUserApplicationPermission[];
    applicationBusinessPermissions: BoxUserApplicationBusinessPermission[];
}
export interface ReceivablePaymentHistoryResult {
    issued?: Date;
    total?: number;
}
export interface UpdateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ReceivableDocument extends Local {
    comment?: string;
    entry: string;
    displayOn?: Date;
    originalCurrency: string;
    originalRate: number;
    originalTotal: number;
    originalPending: number;
    kind: string;
    meta?: string;
    meaning: string;
    issued: Date;
    due: Date;
    total: number;
    pending: number;
    taxId?: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    updatedOn: Date;
    reconciliationDetails?: ReceivableReconciliationDetail[];
    customer?: Customer;
    paid?: Date;
}
export interface UpdateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ContactAnniversary extends ContactElement, Local {
    month: number;
    year?: number;
    kind: string;
    day: number;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface DownloadApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
}
export interface UpdateTagDetailResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface ContactLocation extends ContactElement, Local {
    latitude: number;
    longitude: number;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface SaleDocumentDetail extends Local {
    comment: string;
    item: string;
    entry: string;
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
    kind: string;
    meta: string;
    price: number;
    unit: string;
    meaning: string;
    total: number;
    tax: number;
    profit: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface CreateTaskStateResult {
    state?: TaskState;
    errors?: UserError[];
}
export interface ContactUrl extends ContactElement, Local {
    specification: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface PriceListUnitDetail extends Local {
    currency: string;
    productId: number;
    priceListId: number;
    kind: string;
    price: number;
    unit: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface DownloadablePackage {
    name?: string;
    id?: string;
    versions?: DownloadablePackageVersion[];
    latestVersion?: DownloadablePackageVersion;
}
export interface BoxBusinessPermission extends Local {
    businessId: number;
    boxId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Task extends Local {
    zone: string;
    description?: string;
    backgroundColor: string;
    stateSequence?: number;
    color: string;
    start: Date;
    kind: string;
    meaning?: string;
    due: Date;
    status: string;
    title: string;
    latest: Date;
    finish?: Date;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    reference?: Local;
    parent?: Task;
    children?: Task[];
    ascendants?: Task[];
    descendants?: Task[];
    responsible?: User;
}
export interface UpdateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface UnitListDetail extends Local {
    unitListId: number;
    alternativeUnit: string;
    alternativeFactor: number;
    kind: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Warehouse extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    displayId?: string;
    displayMeaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface SynchronizationStatus {
    nextStart?: Date;
    start?: Date;
    running?: Boolean;
}
export interface PendingReceivablesAgingContext {
    entry?: string;
    contactId?: ID;
    pastDays: number[];
    futureDays: number[];
    today?: Date;
}
export interface CreateTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface BoxUserPermission extends Local {
    configuration?: string;
    role: string;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    box: Box;
    user: User;
}
export interface Box extends Local {
    zone: string;
    name: string;
    country: string;
    currency: string;
    configuration: string;
    token: string;
    locale: string;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    tags: Tag[];
    application: Application;
    applications: Application[];
    users: User[];
    businesses: Business[];
    applicationPermissions: BoxApplicationPermission[];
    applicationBusinessPermissions: BoxApplicationBusinessPermission[];
}
export interface CreateBusinessResult {
    business?: Business;
    errors?: UserError[];
}
export interface BusinessCurrency extends Local {
    currency: string;
    businessId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface ReceivableReconciliationDetail extends Local {
    comment: string;
    entry: string;
    originalCurrency: string;
    originalRate: number;
    displayLine: number;
    receivableDocumentId: number;
    reconciled: number;
    originalReconciled: number;
    kind: string;
    meta: string;
    receivableReconciliationId: number;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    reconciliation?: ReceivableReconciliation;
    receivable?: ReceivableDocument;
}
export interface CreateAddTagResult {
    tag?: Tag;
    errors?: UserError[];
}
export interface Business extends Local {
    zone: string;
    name: string;
    provider: string;
    country: string;
    completeSchedule?: string;
    incrementalSchedule?: string;
    scheduled: Boolean;
    currency: string;
    description: string;
    configuration?: string;
    locale: string;
    boxId: number;
    kind: string;
    enabled: Boolean;
    taxId?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    currencies?: BusinessCurrency[];
    synchronization?: SynchronizationStatus;
}
export interface CreateNoteResult {
    note?: Note;
    errors?: UserError[];
}
export interface BoxApplicationBusinessPermission extends Local {
    businessId: number;
    applicationId: number;
    boxId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    box: Box;
    application: Application;
    business: Business;
}
export interface PendingReceivablesAgingExtra {
    customers: Customer[];
    contacts: Contact[];
}
export interface UnitList extends Local {
    name: string;
    baseUnit: string;
    kind: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface AnalysisMeta {
    execution?: number;
    start?: Date;
    finish?: Date;
}
export interface BoxApplicationPermission extends Local {
    applicationId: number;
    boxId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    box: Box;
    application: Application;
}
export interface UpdateBoxUserApplicationPermissionResult {
    permission?: BoxUserApplicationPermission;
    errors?: UserError[];
}
export interface TaskFlowStructure extends Local {
    first: Boolean;
    stateSequence: number;
    kind: string;
    status: string;
    flowId: number;
    stateId: number;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    state: TaskState;
}
export interface DownloadConnectorResult {
    connector?: PackageBundle;
    errors?: UserError[];
}
export interface TaskFlow extends Local {
    description?: string;
    backgroundColor: string;
    color: string;
    kind: string;
    title: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    structure?: ClassifiedTaskFlowStructure;
    states?: TaskState[];
}
export interface PendingReceivableResultData {
    contactId?: ID;
    customerId?: ID;
    contactDisplayName?: string;
    customerName?: string;
    dueDaysClass?: number;
    debits?: number;
    credits?: number;
    dueDays?: number;
    customerRepresentativeId?: ID;
}
export interface HashtagReference extends Local {
    handle: string;
    referenceId: number;
    hashtagId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface UpdateBoxUserApplicationBusinessPermissionResult {
    permission?: BoxUserApplicationBusinessPermission;
    errors?: UserError[];
}
export interface ContactPhone extends ContactElement, Local {
    number: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface PendingReceivableTuple {
    count: number;
    entry: string;
    contactId: ID;
    dueDaysBin: number;
    customerId: ID;
    originalCurrency: string;
    originalPending: number;
    date: Date;
    dueDays: number;
    pending: number;
}
export interface ContactEmail extends ContactElement, Local {
    address: string;
    kind: string;
    contactId: number;
    sequence: number;
    locus?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface QuintileValue {
    value: number;
    count: number;
    quintile: number;
}
export interface TaskFlowStructureResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface Organization extends Contact, Local {
    comment: string;
    position: string;
    displayName: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    code: string;
    kind: string;
    meta: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Tag extends Local {
    name: string;
    description?: string;
    backgroundColor: string;
    color: string;
    kind: string;
    meaning?: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface UpdateTaskResult {
    task?: Task;
    errors?: UserError[];
}
export interface Hashtag extends Local {
    handle: string;
    description: string;
    backgroundColor: string;
    color: string;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface BoxUserApplicationPermission extends Local {
    applicationId: number;
    boxId: number;
    userId: number;
    part?: string;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    box: Box;
    user: User;
    application: Application;
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
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface PendingReceivableResult {
    representatives?: Representative[];
    data?: PendingReceivableResultData[];
}
export interface businesses {
    ids?: ID[];
    pendingReceivablesAging: PendingReceivablesAgingResult;
    receivables: ReceivableDocument[];
    pendingReceivablesAgingHistory: PendingReceivablesAgingHistoryResult;
    pendingReceivables: ReceivableDocument[];
}
export interface PriceList extends Local {
    comment: string;
    name: string;
    kind: string;
    meta: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface Person extends Contact, Local {
    comment: string;
    position: string;
    displayName: string;
    contactId: number;
    lastName: string;
    organizationName: string;
    firstName: string;
    code: string;
    kind: string;
    meta: string;
    remoteId?: string;
    remoteSource?: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface CreateContactResult {
    contact?: Contact;
    errors?: UserError[];
}
export interface BoxUserApplicationBusinessPermission extends Local {
    businessId: number;
    applicationId: number;
    kind: string;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
    box: Box;
    user: User;
    application: Application;
    business: Business;
}
export interface TaskHistory extends Local {
    responsibleId?: number;
    start: Date;
    kind: string;
    due: Date;
    status: string;
    flowId?: number;
    stateId?: number;
    finish: Date;
    taskId: number;
    version: number;
    id: ID;
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface CreateUserResult {
    user?: User;
    errors?: UserError[];
}
export interface CreateTaskFlowResult {
    flow?: TaskFlow;
    errors?: UserError[];
}
export interface DeleteApplicationResult {
    application?: PackageBundle;
    errors?: UserError[];
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
    deletedOn?: Date;
    createdOn: Date;
    displayOn?: Date;
    updatedOn: Date;
}
export interface CreateTaskFlowInput {
    description?: string;
    backgroundColor?: string;
    color?: string;
    title?: string;
}
export interface CreateTaskStateInput {
    flowId?: ID;
    description?: string;
    backgroundColor?: string;
    parentId?: ID;
    parentSequence?: number;
    color?: string;
    title?: string;
}
export interface ContactLocationInput {
    latitude?: number;
    longitude?: number;
    sequence?: number;
    locus?: string;
}
export interface ReceivablePaymentHistoryInputFilter {
    businessId?: ID[];
    customerContactId?: ID;
    representativeContactId?: ID;
    months?: number;
}
export interface ContactUrlInput {
    specification?: string;
    sequence?: number;
    locus?: string;
}
export interface TagInput {
    name?: string;
    type?: string;
    description?: string;
    backgroundColor?: string;
    color?: string;
}
export interface ContactLocationIdInput {
    location: ContactLocationInput;
    id: ID;
}
export interface PendingReceivablesHistoryContextInput {
    historyDays?: number;
    entry?: string;
    pastDays?: number[];
    futureDays?: number[];
}
export interface BusinessFilterInput {
    enabled?: Boolean;
}
export interface ReceivableDocumentFilterInput {
    entry?: string;
    remoteSource?: string;
    pending?: Boolean;
}
export interface ContactEventsFilterInput {
    days?: number;
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
export interface TaskFlowStructureInput {
    first?: Boolean;
    stateSequence?: number;
    status?: string;
}
export interface UpdateBusinessInput {
    zone?: string;
    name?: string;
    provider?: string;
    country?: string;
    completeSchedule?: string;
    incrementalSchedule?: string;
    scheduled?: Boolean;
    currency?: string;
    description?: string;
    configuration?: string;
    currencies?: string[];
    locale?: string;
    enabled?: Boolean;
    taxId?: string;
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
export interface ContactAddressIdInput {
    address: ContactAddressInput;
    id: ID;
}
export interface UserFilterInput {
    q?: string;
}
export interface ContactAnniversaryActionsInput {
    create: ContactAnniversaryIdInput[];
    update: ContactAnniversaryIdInput[];
    delete: ID[];
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
export interface ContactLocationActionsInput {
    create: ContactLocationIdInput[];
    update: ContactLocationIdInput[];
    delete: ID[];
}
export interface ContactPhoneIdInput {
    phone: ContactPhoneInput;
    id: ID;
}
export interface ContactAddressActionsInput {
    create: ContactAddressIdInput[];
    update: ContactAddressIdInput[];
    delete: ID[];
}
export interface ContactEmailInput {
    address?: string;
    sequence?: number;
    locus?: string;
}
export interface ContactEmailIdInput {
    email: ContactEmailInput;
    id: ID;
}
export interface CreateTaskInput {
    referenceId?: ID;
    parentId?: ID;
    supervise?: Boolean;
    zone?: string;
    description?: string;
    backgroundColor?: string;
    responsibleId?: ID;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ContactAnniversaryInput {
    month?: number;
    year?: number;
    day?: number;
    sequence?: number;
    locus?: string;
}
export interface PendingReceivablesContextInput {
    entry?: string;
    pastDays?: number[];
    futureDays?: number[];
}
export interface ContactUrlIdInput {
    url: ContactUrlInput;
    id: ID;
}
export interface ContactEmailActionsInput {
    create: ContactEmailIdInput[];
    update: ContactEmailIdInput[];
    delete: ID[];
}
export interface UpdateTaskFlowInput {
    description?: string;
    backgroundColor?: string;
    color?: string;
    title?: string;
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
export interface UserInput {
    zone?: string;
    handle?: string;
    lastName?: string;
    firstName?: string;
    avatarOriginal?: Upload;
    password?: string;
    avatarInitials?: string;
    avatarColor?: string;
    avatarBackgroundColor?: string;
    avatarSize?: number;
    emailAddress?: string;
    phoneNumber?: string;
    locale?: string;
    uid?: string;
    avatarX?: number;
    avatarY?: number;
    role?: string;
    enabled?: Boolean;
}
export interface ContactInput {
    comment?: string;
    organizationName?: string;
}
export interface ContactNetworkInput {
    handle?: string;
    provider?: string;
    sequence?: number;
    locus?: string;
}
export interface BusinessCurrencyContextInput {
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
    nominal?: Boolean;
}
export interface ContactFilterInput {
    q?: string;
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
export interface UpdateTaskStateInput {
    description?: string;
    backgroundColor?: string;
    parentId?: ID;
    parentSequence?: number;
    color?: string;
    title?: string;
}
export interface UpdateTaskInput {
    zone?: string;
    description?: string;
    backgroundColor?: string;
    responsibleId?: ID;
    color?: string;
    due?: Date;
    title?: string;
}
export interface ReceivablesContextInput {
    issuedFrom?: Date;
    meaning?: string[];
}
export interface PendingReceivableByDocumentContextInput {
    meaning?: string[];
    businesses?: ID[];
    currencies?: string[];
    currency?: string;
    nominal?: Boolean;
}
export interface ContactEventFilterInput {
    days?: number;
}
export interface ContactPhoneInput {
    number?: string;
    sequence?: number;
    locus?: string;
}
export interface CreateBusinessInput {
    zone?: string;
    name?: string;
    provider?: string;
    country?: string;
    completeSchedule?: string;
    incrementalSchedule?: string;
    scheduled?: Boolean;
    currency?: string;
    description?: string;
    configuration?: string;
    currencies?: string[];
    locale?: string;
    enabled?: Boolean;
    taxId?: string;
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
